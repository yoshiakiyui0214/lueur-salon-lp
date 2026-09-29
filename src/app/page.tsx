import Link from "next/link";
import { getShops } from "@/data/shops";

export default function Home() {
  const shops = getShops();

  return (
    <div className="min-h-svh bg-[#f8f6f0] font-sans text-[#30372f]">
      <header className="mx-auto flex h-[76px] max-w-[1440px] items-center px-6 sm:px-10 lg:h-[92px] lg:px-16">
        <span className="font-serif text-[29px] leading-none tracking-[0.04em] text-[#394338]">Lueur</span>
        <span className="mt-1 ml-3 border-l border-[#c9c7b8] pl-3 text-[10px] tracking-[0.18em] text-[#77786b]">リュウール</span>
      </header>
      <main className="mx-auto max-w-6xl px-6 pb-20 pt-10 sm:px-10 lg:px-16 lg:pt-16">
        <p className="mb-4 text-[12px] font-medium tracking-[0.12em] text-[#8B6F55]">髪質改善サロン Lueur</p>
        <h1 className="font-serif text-[30px] font-normal leading-[1.5] text-[#394338] sm:text-[38px]">店舗をお選びください</h1>
        <p className="mt-3 text-[14px] leading-7 text-[#686b60]">毎日の髪に、ほのかな光を。</p>
        <ul className="mt-10 border-t border-[#cfc6b5]">
          {shops.map((shop) => (
            <li key={shop.slug} className="border-b border-[#ded8ca]">
              <Link href={`/${shop.slug}`} className="group flex min-h-24 items-center justify-between gap-5 py-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B6F55]">
                <span>
                  <span className="block font-serif text-[21px] text-[#394338]">{shop.name}</span>
                  <span className="mt-1 block text-[13px] leading-6 text-[#686b60]">{shop.subcopy}</span>
                </span>
                <span aria-hidden="true" className="shrink-0 text-xl text-[#8B6F55] transition-transform group-hover:translate-x-1">↗</span>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <footer className="border-t border-[#e1dccc] px-6 py-6 text-center text-[11px] tracking-[0.04em] text-[#77786b]">
        ※ Lueur はデモ用の架空の美容室です
      </footer>
    </div>
  );
}
