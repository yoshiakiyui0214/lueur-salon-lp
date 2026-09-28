export default function Home() {
  return (
    <div className="min-h-svh bg-[#f8f6f0] font-sans text-[#30372f]">
      <header className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-6 sm:px-10 lg:h-[92px] lg:px-16">
        <a href="#top" aria-label="Lueur 渋谷店 トップ" className="group flex items-center gap-3">
          <span className="font-serif text-[29px] leading-none tracking-[0.04em] text-[#394338]">Lueur</span>
          <span className="mt-1 border-l border-[#c9c7b8] pl-3 text-[10px] tracking-[0.18em] text-[#77786b]">リュウール</span>
        </a>
        <div className="flex items-center gap-3 text-[10px] tracking-[0.16em] text-[#5e5f53] sm:gap-5">
          <span>渋谷店</span>
          <span className="h-1 w-1 rounded-full bg-[#a58b65]" />
          <span>11:00〜21:00</span>
        </div>
      </header>

      <main id="top" className="mx-auto grid min-h-[calc(100svh-76px)] max-w-[1440px] grid-cols-1 items-center gap-9 px-6 pb-10 sm:px-10 lg:min-h-[calc(100svh-92px)] lg:grid-cols-[0.88fr_1.12fr] lg:gap-14 lg:px-16 lg:pb-14">
        <section className="relative z-10 flex flex-col items-start pt-7 sm:pt-10 lg:py-16">
          <p className="mb-7 flex items-center gap-3 text-[13px] font-medium tracking-[0.08em] text-[#6f5b45] sm:mb-9">
            <span className="h-px w-8 bg-[#b89d76]" />
            髪質改善トリートメント | 渋谷店
          </p>
          <h1 className="font-serif text-[32px] font-normal leading-[1.38] tracking-[0.035em] text-[#394338] sm:text-[48px] sm:leading-[1.3] xl:text-[64px]">
            <span className="block whitespace-nowrap">毎日の髪に、</span>
            <span className="block whitespace-nowrap">ほのかな光を。</span>
          </h1>
          <p className="mt-5 text-[13px] leading-[2] tracking-[0.07em] text-[#686b60] sm:mt-7 sm:text-[15px]">
            渋谷駅から徒歩3分。<br className="sm:hidden" />仕事帰りの21時まで。
          </p>
          <a
            href="#reservation"
            className="mt-8 inline-flex min-h-[56px] w-full max-w-[340px] items-center justify-between bg-[#8B6F55] px-6 text-[13px] tracking-[0.09em] text-white transition-colors hover:bg-[#725941] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8B6F55] sm:mt-10 sm:w-[300px]"
          >
            <span>この店舗で予約する</span>
            <span aria-hidden="true" className="text-lg leading-none">↗</span>
          </a>
        </section>

        <div
          role="img"
          aria-label="やわらかな光をイメージした写真の仮スペース"
          className="relative mx-auto aspect-[1.18/1] w-full max-w-[620px] overflow-hidden bg-[radial-gradient(ellipse_at_70%_24%,rgba(255,255,255,0.94)_0%,rgba(255,255,255,0)_31%),radial-gradient(ellipse_at_27%_70%,rgba(194,173,141,0.42)_0%,rgba(194,173,141,0)_42%),linear-gradient(135deg,#e9e3d7_0%,#d9d0c1_42%,#c9c5b5_100%)] sm:aspect-[1.22/1] lg:aspect-square lg:max-w-none"
        >
          <div className="absolute inset-[5%] border border-white/50" />
        </div>
      </main>
    </div>
  );
}
