import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ShopLanding from "@/components/ShopLanding";
import { getShopBySlug, shops } from "@/data/shops";

type ShopPageProps = {
  params: Promise<{ shop: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return shops.map(({ slug }) => ({ shop: slug }));
}

export async function generateMetadata({ params }: ShopPageProps): Promise<Metadata> {
  const { shop: slug } = await params;
  const shop = getShopBySlug(slug);

  if (!shop) {
    return { title: "ページが見つかりません | Lueur" };
  }

  return {
    title: shop.title,
    description: shop.description,
  };
}

export default async function ShopPage({ params }: ShopPageProps) {
  const { shop: slug } = await params;
  const shop = getShopBySlug(slug);

  if (!shop) {
    notFound();
  }

  return <ShopLanding shop={shop} />;
}