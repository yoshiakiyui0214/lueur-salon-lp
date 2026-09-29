import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-svh items-center justify-center bg-[#f8f6f0] px-6 py-16 font-sans text-[#30372f]">
      <div className="w-full max-w-2xl">
        <Link href="/" className="inline-flex items-center gap-3" aria-label="Lueur 店舗一覧へ">
          <span className="font-serif text-[29px] leading-none tracking-[0.04em] text-[#394338]">Lueur</span>
          <span className="mt-1 border-l border-[#c9c7b8] pl-3 text-[10px] tracking-[0.18em] text-[#77786b]">リュウール</span>
        </Link>
        <div className="mt-16 border-t border-[#cfc6b5] pt-8">
          <p className="mb-4 text-[12px] font-medium tracking-[0.12em] text-[#8B6F55]">404 NOT FOUND</p>
          <h1 className="font-serif text-[26px] font-normal leading-[1.55] text-[#394338] sm:text-[32px]">
            お探しのページが見つかりませんでした
          </h1>
          <Link
            href="/"
            className="mt-8 inline-flex min-h-12 min-w-48 items-center justify-center gap-5 bg-[#8B6F55] px-6 text-[13px] tracking-[0.06em] text-white transition-colors hover:bg-[#725941] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8B6F55]"
          >
            店舗一覧へ戻る
            <span aria-hidden="true" className="text-base">↗</span>
          </Link>
        </div>
      </div>
    </main>
  );
}