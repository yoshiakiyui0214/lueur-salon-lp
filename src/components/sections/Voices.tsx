import { SectionHeading } from "./SectionParts";
import type { Shop } from "@/data/shops";

export default function Voices({ shop }: { shop: Shop }) {
  return (
    <section aria-labelledby="voices-title" className="bg-white px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="07 お客様の声"
          title="ご来店いただいた方のご感想"
          description="髪のお悩みや、サロンで過ごした時間についてお聞きしました。"
          titleId="voices-title"
        />
        <ul className="grid gap-8 md:grid-cols-3 md:gap-7">
          {shop.voices.map((voice) => (
            <li key={voice.concern} className="border-t border-[#cfc6b5] pt-5">
              <p className="text-[12px] tracking-[0.08em] text-[#8B6F55]">{voice.age} / {voice.work}</p>
              <p className="mt-4 text-[14px] leading-7 text-[#4d5148]">「{voice.concern}」</p>
              <blockquote className="mt-3 border-l border-[#c9b99f] pl-4 text-[14px] leading-7 text-[#686b60]">{voice.change}</blockquote>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-[11px] text-[#77786b]">※デモ用の架空の内容です</p>
      </div>
    </section>
  );
}