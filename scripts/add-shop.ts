import Anthropic from "@anthropic-ai/sdk";
import dotenv from "dotenv";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  GeneratedShopContentSchema,
  ShopSchema,
} from "../src/data/shop-schema";
import { getShops } from "../src/data/shops";

type ShopInputs = {
  slug: string;
  name: string;
  station: string;
  walk: number;
  hours: string;
  closed: string;
  angle: string;
};

const bannedTerms = ["必ず", "絶対", "治る", "完治", "100%", "永久"];
const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function parseArguments(args: string[]): ShopInputs {
  const allowedOptions = new Set(["slug", "name", "station", "walk", "hours", "closed", "angle"]);
  const options = new Map<string, string>();

  for (let index = 0; index < args.length; index += 1) {
    const argument = args[index];
    if (!argument.startsWith("--")) {
      throw new Error(`オプションではない引数があります: ${argument}`);
    }

    const key = argument.slice(2);
    if (!allowedOptions.has(key)) {
      throw new Error(`不明なオプションです: ${argument}`);
    }
    if (options.has(key)) {
      throw new Error(`オプションが重複しています: ${argument}`);
    }

    const value = args[index + 1];
    if (!value || value.startsWith("--")) {
      throw new Error(`${argument} の値を指定してください`);
    }
    options.set(key, value);
    index += 1;
  }

  const required = ["slug", "name", "station", "walk", "hours", "closed", "angle"];
  const missing = required.filter((key) => !options.has(key));
  if (missing.length > 0) {
    throw new Error(`必須オプションがありません: ${missing.map((key) => `--${key}`).join(", ")}`);
  }

  const slug = options.get("slug")!;
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
    throw new Error("--slug は小文字英数字とハイフンのみで指定してください");
  }

  const walk = Number(options.get("walk"));
  if (!Number.isInteger(walk) || walk < 1) {
    throw new Error("--walk は1以上の整数で指定してください");
  }

  return {
    slug,
    name: options.get("name")!,
    station: options.get("station")!,
    walk,
    hours: options.get("hours")!,
    closed: options.get("closed")!,
    angle: options.get("angle")!,
  };
}

function findBannedTerms(value: unknown, currentPath = "$", matches: string[] = []): string[] {
  if (typeof value === "string") {
    for (const term of bannedTerms) {
      if (value.includes(term)) {
        matches.push(`${currentPath}: 「${term}」`);
      }
    }
  } else if (Array.isArray(value)) {
    value.forEach((item, index) => findBannedTerms(item, `${currentPath}[${index}]`, matches));
  } else if (value !== null && typeof value === "object") {
    Object.entries(value).forEach(([key, item]) => findBannedTerms(item, `${currentPath}.${key}`, matches));
  }

  return matches;
}

function addDemoAddressNote(address: string): string {
  const cleanAddress = address
    .replace(/[（(][^）)]*デモ用の架空住所[^）)]*[）)]/g, "")
    .trim();

  return `${cleanAddress} (デモ用の架空住所)`;
}

function getExistingShopExamples(): string {
  return JSON.stringify(
    getShops().map(({ slug, name, subcopy, introduction, accessDescription, address, staff, voices, mapLabel, title, description }) => ({
      slug,
      name,
      subcopy,
      introduction,
      accessDescription,
      address,
      staff,
      voices,
      mapLabel,
      title,
      description,
    })),
    null,
    2,
  );
}

async function main(): Promise<void> {
  dotenv.config({ path: path.join(projectRoot, ".env.local") });
  const inputs = parseArguments(process.argv.slice(2));
  const shopsDirectory = path.join(projectRoot, "src", "data", "shops");
  const outputPath = path.join(shopsDirectory, `${inputs.slug}.json`);

  if (getShops().some((shop) => shop.slug === inputs.slug) || existsSync(outputPath)) {
    throw new Error(`slug「${inputs.slug}」の店舗データはすでに存在します。既存データは上書きしません。`);
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    throw new Error(".env.local に ANTHROPIC_API_KEY を設定してください。");
  }

  const brief = readFileSync(path.join(projectRoot, "docs", "brief.md"), "utf8");
  const examples = getExistingShopExamples();
  const client = new Anthropic({ apiKey });
  const response = await client.messages.create({
    model: process.env.ANTHROPIC_MODEL || "claude-sonnet-4-6",
    max_tokens: 3000,
    system: [
      "あなたは美容室の店舗LPを作成する編集者です。指示された店舗固有データだけをJSONで出力してください。",
      "最上位キーは subcopy, introduction, accessDescription, address, staff, voices, mapLabel, title, description のみです。",
      "staffは店長1名とスタイリスト1名の2件、voicesは年代・職業・来店前の悩み・来店後に感じた変化を持つ3件です。すべて架空のデモ設定です。",
      "addressは具体的な架空住所だけを作成し、デモ用注記や括弧書きは付けないでください。",
      "住所は丁目までとし、番地・号は書かないでください。",
      "mapLabelは『店舗名周辺の地図（仮）』の形式にしてください。",
      "美容広告で効果を断定しないでください。必ず、絶対、治る、完治、100%、永久という語句は出力に含めないでください。",
      "出力はJSONオブジェクトのみとし、Markdownコードフェンスや前後の説明は付けないでください。",
    ].join("\n"),
    messages: [
      {
        role: "user",
        content: [
          "次のbriefと既存店舗データの例を参考に、新しい店舗用の項目を作成してください。店舗基本情報とbriefを優先し、例の文章はそのまま流用しないでください。",
          "",
          "## ブランド・ターゲット・表現ルール",
          brief,
          "## 入力された店舗基本情報",
          JSON.stringify(inputs, null, 2),
          `最寄り駅からの徒歩表記は「${inputs.station}から徒歩${inputs.walk}分」です。営業時間は${inputs.hours}、定休日は${inputs.closed}です。店舗の切り口は「${inputs.angle}」です。`,
          "## 既存店舗のデータ例",
          examples,
        ].join("\n"),
      },
    ],
  });

  const responseText = response.content
    .filter((block) => block.type === "text")
    .map((block) => block.text)
    .join("\n")
    .trim();
  if (!responseText) {
    throw new Error("Claude APIからテキスト応答がありませんでした。");
  }

  let generated: unknown;
  try {
    generated = JSON.parse(responseText);
  } catch {
    throw new Error("Claude APIの応答がJSONではありません。応答形式を確認してください。");
  }

  const prohibited = findBannedTerms(generated);
  if (prohibited.length > 0) {
    throw new Error(`禁止表現を検出したため保存しません:\n${prohibited.join("\n")}`);
  }

  const generatedResult = GeneratedShopContentSchema.safeParse(generated);
  if (!generatedResult.success) {
    throw new Error(`Claude APIの出力形式が不正です:\n${generatedResult.error.message}`);
  }

  if (/\d+\s*-\s*\d+/.test(generatedResult.data.address)) {
    throw new Error(`住所に番地が含まれています。丁目までの住所に修正してください: ${generatedResult.data.address}`);
  }

  const shopResult = ShopSchema.safeParse({
    ...generatedResult.data,
    address: addDemoAddressNote(generatedResult.data.address),
    slug: inputs.slug,
    name: inputs.name,
    hours: inputs.hours,
    closedDay: inputs.closed,
    stationAccess: `${inputs.station}から徒歩${inputs.walk}分`,
    reservationHref: `mailto:reserve@lueur.example?${new URLSearchParams({ subject: `Lueur ${inputs.name}の予約` })}`,
  });
  if (!shopResult.success) {
    throw new Error(`店舗データを検証できませんでした:\n${shopResult.error.message}`);
  }

  try {
    writeFileSync(outputPath, `${JSON.stringify(shopResult.data, null, 2)}\n`, { flag: "wx" });
  } catch (error) {
    if (error instanceof Error && "code" in error && error.code === "EEXIST") {
      throw new Error(`slug「${inputs.slug}」の店舗データはすでに存在します。既存データは上書きしません。`);
    }
    throw error;
  }

  console.log(`店舗データを作成しました: ${path.relative(projectRoot, outputPath)}`);
  console.log("内容を確認してからコミットしてください。");
}

main().catch((error: unknown) => {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`店舗データを作成できませんでした: ${message}`);
  process.exitCode = 1;
});