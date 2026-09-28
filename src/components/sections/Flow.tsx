import { ReservationLink, SectionHeading } from "./SectionParts";

const steps = ["カウンセリング", "髪の状態の診断", "施術", "仕上がりの確認", "おうちケアのご提案"];

export default function Flow() {
  return (
    <section aria-labelledby="flow-title" className="bg-white px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="05 施術の流れ"
          title="はじめての方も、ゆっくりご相談ください"
          description="髪の状態を一緒に確認しながら、ひとつずつ進めていきます。"
          titleId="flow-title"
        />
        <ol className="grid gap-0 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => (
            <li key={step} className="flex gap-4 border-t border-[#d8d2c4] py-5 lg:block lg:border-l lg:border-t-0 lg:px-4 lg:py-0 first:lg:border-l-0 first:lg:pl-0">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-[#c9b99f] font-serif text-[13px] text-[#8B6F55] lg:mb-5">0{index + 1}</span>
              <p className="pt-1 text-[14px] leading-6 text-[#4d5148] lg:pt-0">{step}</p>
            </li>
          ))}
        </ol>
        <ReservationLink />
      </div>
    </section>
  );
}