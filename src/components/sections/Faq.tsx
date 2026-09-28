import { SectionHeading } from "./SectionParts";

const questions = [
  {
    question: "施術時間はどのくらいですか？",
    answer: "メニューや髪の長さによって異なります。ご予約時にご希望のメニューをお知らせいただければ、目安をご案内します。",
  },
  {
    question: "効果はどのくらい続きますか？",
    answer: "髪の状態や日々のお手入れによって感じ方には個人差があります。カウンセリングで髪を拝見し、おうちでのケア方法もご案内します。",
  },
  {
    question: "カラーと同じ日にできますか？",
    answer: "髪の状態やご希望の内容を確認したうえで、同日の施術をご提案できる場合があります。ご予約時にご相談ください。",
  },
  {
    question: "当日予約はできますか？",
    answer: "空きがある場合はご案内できます。予約状況によって異なりますので、当日の空き状況をお問い合わせください。",
  },
];

export default function Faq() {
  return (
    <section aria-labelledby="faq-title" className="bg-[#f8f6f0] px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="08 よくある質問"
          title="ご予約前によくいただくご質問"
          titleId="faq-title"
        />
        <div className="border-t border-[#cfc6b5]">
          {questions.map((item) => (
            <details key={item.question} className="group border-b border-[#ded8ca]">
              <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 py-4 text-[14px] font-medium leading-6 text-[#394338] marker:hidden sm:text-[15px] [&::-webkit-details-marker]:hidden">
                <span><span className="mr-3 font-serif text-[#8B6F55]">Q.</span>{item.question}</span>
                <span aria-hidden="true" className="shrink-0 text-xl font-normal text-[#8B6F55] transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="pb-5 pl-8 pr-8 text-[13px] leading-7 text-[#686b60] sm:text-[14px]">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}