type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  titleId: string;
};

export function SectionHeading({ eyebrow, title, description, titleId }: SectionHeadingProps) {
  return (
    <div className="mb-9 max-w-2xl sm:mb-12">
      <p className="mb-3 text-[12px] font-medium tracking-[0.12em] text-[#8B6F55]">{eyebrow}</p>
      <h2 id={titleId} className="font-serif text-[26px] font-normal leading-[1.55] text-[#394338] sm:text-[32px]">
        {title}
      </h2>
      {description ? <p className="mt-3 text-[14px] leading-8 text-[#686b60]">{description}</p> : null}
    </div>
  );
}

export function ReservationLink() {
  return (
    <div className="mt-9 text-center sm:mt-12">
      <a
        href="#reservation"
        className="inline-flex min-h-12 min-w-48 items-center justify-center gap-5 bg-[#8B6F55] px-6 text-[13px] tracking-[0.06em] text-white transition-colors hover:bg-[#725941] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8B6F55]"
      >
        この店舗で予約する
        <span aria-hidden="true" className="text-base">↗</span>
      </a>
    </div>
  );
}