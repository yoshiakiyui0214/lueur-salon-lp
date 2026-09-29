import { SectionHeading } from "./SectionParts";
import type { Shop } from "@/data/shops";

export default function Staff({ shop }: { shop: Shop }) {
  return (
    <section aria-labelledby="staff-title" className="bg-[#f1eee5] px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="06 スタッフ紹介"
          title={`${shop.name}のスタイリスト`}
          description="カウンセリングから仕上げまで、一人ひとりに向き合います。"
          titleId="staff-title"
        />
        <ul className="grid gap-10 sm:grid-cols-2 sm:gap-8 lg:gap-12">
          {shop.staff.map((person) => (
            <li key={person.name} className="grid grid-cols-[minmax(96px,0.7fr)_1.3fr] items-start gap-5 sm:grid-cols-1 sm:gap-6 md:grid-cols-[0.8fr_1.2fr]">
              <div
                role="img"
                aria-label={`${person.name}の写真の仮スペース`}
                className="aspect-[4/5] w-full bg-[radial-gradient(ellipse_at_70%_24%,rgba(255,255,255,0.94)_0%,rgba(255,255,255,0)_31%),radial-gradient(ellipse_at_27%_70%,rgba(194,173,141,0.42)_0%,rgba(194,173,141,0)_42%),linear-gradient(135deg,#e9e3d7_0%,#d9d0c1_42%,#c9c5b5_100%)]"
              />
              <div>
                <p className="text-[12px] tracking-[0.08em] text-[#8B6F55]">{person.role} · {person.career}</p>
                <h3 className="mt-2 font-serif text-[22px] text-[#394338]">{person.name}</h3>
                <p className="mt-4 text-[13px] leading-6 text-[#4d5148]">得意なこと：{person.specialty}</p>
                <p className="mt-3 text-[13px] leading-7 text-[#686b60]">{person.message}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-[11px] text-[#77786b]">※スタッフはデモ用の架空の設定です</p>
      </div>
    </section>
  );
}