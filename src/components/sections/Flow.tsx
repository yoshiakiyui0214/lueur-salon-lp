import { SectionHeading } from "./SectionParts";

const steps = [
  { title: "カウンセリング", description: "髪のお悩みや、なりたいイメージをじっくり伺います" },
  { title: "髪の状態の診断", description: "髪の太さやダメージの状態を見て、施術内容を決めます" },
  { title: "施術", description: "髪の状態に合わせて、トリートメントを丁寧に進めます" },
  { title: "仕上がりの確認", description: "仕上がりを一緒に確認し、気になる点を調整します" },
  { title: "おうちケアのご提案", description: "忙しい朝でも続けやすいケア方法をお伝えします" },
];

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
            <li key={step.title} className="flex gap-4 border-t border-[#d8d2c4] py-5 lg:block lg:border-l lg:border-t-0 lg:px-4 lg:py-0 first:lg:border-l-0 first:lg:pl-0">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-[#c9b99f] font-serif text-[13px] text-[#8B6F55] lg:mb-5">0{index + 1}</span>
              <div className="pt-1 lg:pt-0">
                <p className="text-[14px] leading-6 text-[#4d5148]">{step.title}</p>
                <p className="mt-2 text-[12px] leading-6 text-[#686b60]">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}