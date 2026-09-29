import { SectionHeading } from "./SectionParts";
import type { Shop } from "@/data/shops";

export default function Reservation({ shop }: { shop: Shop }) {
  return (
    <section id="reservation" aria-labelledby="reservation-title" className="bg-[#e9e3d7] px-6 py-16 text-center sm:px-10 sm:py-20 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="10 ご予約"
          title="髪のお悩みを、まずはご相談ください"
          description="ご希望の日時やメニューをお聞かせください。"
          titleId="reservation-title"
          className="text-left"
        />
        <div className="text-center">
          <a
            href={shop.reservationHref}
            className="inline-flex min-h-14 w-full max-w-[340px] items-center justify-between bg-[#8B6F55] px-6 text-left text-[14px] tracking-[0.06em] text-white transition-colors hover:bg-[#725941] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8B6F55]"
          >
            <span>この店舗で予約する</span>
            <span aria-hidden="true" className="text-lg">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}