import { SectionHeading } from "./SectionParts";

const voices = [
  {
    age: "30代",
    work: "会社員",
    concern: "カラー後の毛先のパサつきが気になっていました。",
    change: "髪の状態を見ながら相談できて安心でした。朝のセットも以前よりまとまりやすく感じています。",
  },
  {
    age: "20代",
    work: "販売職",
    concern: "雨の日に髪が広がりやすいのが悩みでした。",
    change: "家での乾かし方も教えてもらえてよかったです。手入れのポイントがわかり、続けやすそうです。",
  },
  {
    age: "30代",
    work: "事務職",
    concern: "忙しくて、髪に時間をかけられずにいました。",
    change: "落ち着いた空間でゆっくり過ごせました。髪のツヤを感じられて、気分も明るくなりました。",
  },
];

export default function Voices() {
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
          {voices.map((voice) => (
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