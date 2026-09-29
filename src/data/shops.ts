import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { ShopSchema } from "./shop-schema";
import type { Shop } from "./shop-schema";

export type { CustomerVoice, Shop, StaffMember } from "./shop-schema";

const shopsDirectory = path.join(process.cwd(), "src", "data", "shops");
const originalShopOrder = ["shibuya.json", "kichijoji.json", "yokohama.json"];

export const shops: Shop[] = readdirSync(shopsDirectory)
  .filter((fileName) => fileName.endsWith(".json"))
  .sort((left, right) => {
    const leftOrder = originalShopOrder.indexOf(left);
    const rightOrder = originalShopOrder.indexOf(right);
    const normalizedLeftOrder = leftOrder === -1 ? originalShopOrder.length : leftOrder;
    const normalizedRightOrder = rightOrder === -1 ? originalShopOrder.length : rightOrder;

    return normalizedLeftOrder - normalizedRightOrder || left.localeCompare(right);
  })
  .map((fileName) => {
    const filePath = path.join(shopsDirectory, fileName);
    const source: unknown = JSON.parse(readFileSync(filePath, "utf8"));
    const result = ShopSchema.safeParse(source);

    if (!result.success) {
      throw new Error(`店舗データ ${fileName} が不正です:\n${result.error.message}`);
    }

    if (fileName !== `${result.data.slug}.json`) {
      throw new Error(`店舗データのファイル名とslugが一致しません: ${fileName}`);
    }

    return result.data;
  });

const slugs = new Set<string>();
for (const shop of shops) {
  if (slugs.has(shop.slug)) {
    throw new Error(`店舗slugが重複しています: ${shop.slug}`);
  }
  slugs.add(shop.slug);
}

export function getShopBySlug(slug: string): Shop | undefined {
  return shops.find((shop) => shop.slug === slug);
}