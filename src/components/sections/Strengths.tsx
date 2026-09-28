import { ReservationLink, SectionHeading } from "./SectionParts";

const strengths = [
  {
    number: "01",
    title: "髪の状態に合わせたオーダーメイドのケア",
    description: "毎回、髪の状態を見てから薬剤と工程を決めます。",
  },
  {
    number: "02",
    title: "ツヤが続く、おうちケアの提案",
    description: "忙しい朝でも続けられる、簡単なケア方法をお伝えします。",
  },
  {
    number: "03",
    title: "一人ひとりに向き合う落ち着いた空間",
    description: "担当スタイリストが最初から最後まで対応します。",
  },
];

export default function Strengths() {
  return (
    <section aria-labelledby="strengths-title" className="bg-white px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="03 Lueurの髪質改善"
          title="髪と向き合う、3つのこだわり"
          description="髪質や毎日の過ごし方を伺いながら、あなたに合ったケアをご提案します。"
          titleId="strengths-title"
        />
        <ol className="grid gap-8 md:grid-cols-3 md:gap-9">
          {strengths.map((strength) => (
            <li key={strength.number}>
              <div
                role="img"
                aria-label={`${strength.title}の写真の仮スペース`}
                className="mb-5 aspect-[16/10] w-full bg-[radial-gradient(ellipse_at_70%_24%,rgba(255,255,255,0.94)_0%,rgba(255,255,255,0)_31%),radial-gradient(ellipse_at_27%_70%,rgba(194,173,141,0.42)_0%,rgba(194,173,141,0)_42%),linear-gradient(135deg,#e9e3d7_0%,#d9d0c1_42%,#c9c5b5_100%)]"
              />
              <div className="border-t border-[#cfc6b5] pt-5">
              <span className="font-serif text-sm text-[#8B6F55]">{strength.number}</span>
              <h3 className="mt-4 text-[17px] font-medium leading-7 text-[#394338]">{strength.title}</h3>
              <p className="mt-3 text-[14px] leading-7 text-[#686b60]">{strength.description}</p>
              </div>
            </li>
          ))}
        </ol>
        <ReservationLink />
      </div>
    </section>
  );
}