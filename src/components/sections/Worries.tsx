import { ReservationLink, SectionHeading } from "./SectionParts";

const worries = [
  "朝は時間がなくて、髪の手入れまで手が回らない",
  "カラーを繰り返して、毛先のパサつきが気になる",
  "雨の日は広がって、まとまらない",
  "サロン帰りはきれいなのに、数日で元に戻ってしまう",
];

export default function Worries() {
  return (
    <section aria-labelledby="worries-title" className="bg-[#f1eee5] px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="02 お悩み"
          title="こんな髪のお悩み、ありませんか？"
          description="忙しい毎日の中で、髪のことを後回しにしてしまうあなたへ。"
          titleId="worries-title"
        />
        <ul className="grid gap-x-10 sm:grid-cols-2">
          {worries.map((worry, index) => (
            <li key={worry} className="flex gap-4 border-t border-[#d8d2c4] py-5 text-[15px] leading-7 text-[#4d5148] sm:py-6">
              <span className="pt-0.5 font-serif text-sm text-[#a58b65]">0{index + 1}</span>
              <span>{worry}</span>
            </li>
          ))}
        </ul>
        <ReservationLink />
      </div>
    </section>
  );
}