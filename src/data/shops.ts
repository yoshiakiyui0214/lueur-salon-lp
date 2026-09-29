import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { ShopSchema } from "./shop-schema";
import type { Shop } from "./shop-schema";

export type { CustomerVoice, Shop, StaffMember } from "./shop-schema";

const shopsDirectory = path.join(process.cwd(), "src", "data", "shops");

export function getShops(): Shop[] {
  const shops = readdirSync(shopsDirectory)
    .filter((fileName) => fileName.endsWith(".json"))
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

  return shops.sort((left, right) => left.sortOrder - right.sortOrder || left.slug.localeCompare(right.slug));
}

export function getShopBySlug(slug: string): Shop | undefined {
  return getShops().find((shop) => shop.slug === slug);
}