import { SectionHeading } from "./SectionParts";

export default function Reservation() {
  return (
    <section id="reservation" aria-labelledby="reservation-title" className="bg-[#e9e3d7] px-6 py-16 text-center sm:px-10 sm:py-20 lg:px-16">
      <div className="mx-auto max-w-3xl">
        <div className="mx-auto flex flex-col items-center">
          <SectionHeading
            eyebrow="10 ご予約"
            title="髪のお悩みを、まずはご相談ください"
            description="ご希望の日時やメニューをお聞かせください。"
            titleId="reservation-title"
          />
          <a
            href="mailto:reserve@lueur.example?subject=Lueur%20%E6%B8%8B%E8%B0%B7%E5%BA%97%E3%81%AE%E4%BA%88%E7%B4%84"
            className="inline-flex min-h-14 w-full max-w-[340px] items-center justify-between bg-[#8B6F55] px-6 text-left text-[14px] tracking-[0.06em] text-white transition-colors hover:bg-[#725941] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8B6F55]"
          >
            <span>予約について問い合わせる</span>
            <span aria-hidden="true" className="text-lg">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}