export default function Home() {
  return (
    <div className="min-h-svh bg-[#f8f6f0] font-sans text-[#30372f]">
      <header className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-6 sm:px-10 lg:h-[92px] lg:px-16">
        <a href="#top" aria-label="Lueur 渋谷店 トップ" className="group flex items-center gap-3">
          <span className="font-serif text-[29px] leading-none tracking-[0.04em] text-[#394338]">Lueur</span>
          <span className="mt-1 border-l border-[#c9c7b8] pl-3 text-[10px] tracking-[0.18em] text-[#77786b]">リュウール</span>
        </a>
        <div className="flex items-center gap-3 text-[10px] tracking-[0.16em] text-[#747669] sm:gap-5">
          <span className="hidden sm:inline">SHIBUYA SALON</span>
          <span className="h-1 w-1 rounded-full bg-[#a58b65]" />
          <span>11:00 — 21:00</span>
        </div>
      </header>

      <main id="top" className="mx-auto grid min-h-[calc(100svh-76px)] max-w-[1440px] grid-cols-1 items-center gap-9 px-6 pb-10 sm:px-10 lg:min-h-[calc(100svh-92px)] lg:grid-cols-[0.88fr_1.12fr] lg:gap-14 lg:px-16 lg:pb-14">
        <section className="relative z-10 flex flex-col items-start pt-7 sm:pt-10 lg:py-16">
          <p className="mb-7 flex items-center gap-3 text-[10px] font-medium tracking-[0.2em] text-[#9a805c] sm:mb-9">
            <span className="h-px w-8 bg-[#b89d76]" />
            HAIR TEXTURE CARE · SHIBUYA
          </p>
          <h1 className="font-serif text-[clamp(2.65rem,8.5vw,5.25rem)] font-normal leading-[1.38] tracking-[0.035em] text-[#394338] sm:leading-[1.3]">
            毎日の髪に、<br />
            <span className="relative inline-block">ほのかな光を<span className="absolute -right-4 top-1 text-[0.3em] text-[#bd9a6a]">＊</span></span>
          </h1>
          <p className="mt-5 text-[13px] leading-[2] tracking-[0.07em] text-[#686b60] sm:mt-7 sm:text-[15px]">
            渋谷駅から徒歩3分。<br className="sm:hidden" />仕事帰りの21時まで。
          </p>
          <a
            href="#reservation"
            className="mt-8 inline-flex min-h-[56px] w-full max-w-[340px] items-center justify-between bg-[#68745f] px-6 text-[13px] tracking-[0.09em] text-white transition-colors hover:bg-[#515e4c] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#68745f] sm:mt-10 sm:w-[300px]"
          >
            <span>この店舗で予約する</span>
            <span aria-hidden="true" className="text-lg leading-none">↗</span>
          </a>
          <p className="mt-4 text-[10px] tracking-[0.08em] text-[#8c8b7e]">髪質改善トリートメント / 渋谷駅 徒歩3分</p>
        </section>

        <div
          role="img"
          aria-label="やわらかな光をイメージした写真の仮スペース"
          className="relative mx-auto aspect-[1.18/1] w-full max-w-[620px] overflow-hidden bg-[radial-gradient(ellipse_at_70%_24%,rgba(255,255,255,0.94)_0%,rgba(255,255,255,0)_31%),radial-gradient(ellipse_at_27%_70%,rgba(194,173,141,0.42)_0%,rgba(194,173,141,0)_42%),linear-gradient(135deg,#e9e3d7_0%,#d9d0c1_42%,#c9c5b5_100%)] sm:aspect-[1.22/1] lg:aspect-square lg:max-w-none"
        >
          <div className="absolute inset-[5%] border border-white/50" />
          <div className="absolute left-[12%] top-[14%] flex items-center gap-2 text-[9px] tracking-[0.22em] text-[#6c6b5e]/75">
            <span className="h-px w-5 bg-[#8c8068]/70" />
            A MOMENT OF GLOW
          </div>
          <div className="absolute bottom-[11%] right-[10%] text-right text-[#5c6154]/65">
            <p className="font-serif text-[clamp(2rem,5vw,3.75rem)] leading-none tracking-[0.06em]">Lueur</p>
            <p className="mt-2 text-[8px] tracking-[0.22em]">SHIBUYA, TOKYO</p>
          </div>
          <span aria-hidden="true" className="absolute bottom-[12%] left-[12%] h-12 w-px bg-white/60" />
        </div>
      </main>
    </div>
  );
}
