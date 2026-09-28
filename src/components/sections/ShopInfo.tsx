import { ReservationLink, SectionHeading } from "./SectionParts";

const details = [
  { label: "住所", value: "東京都渋谷区渋谷1丁目（デモ用の架空住所）" },
  { label: "アクセス", value: "渋谷駅東口から宮益坂方面へ徒歩3分" },
  { label: "営業時間", value: "11:00〜21:00" },
  { label: "定休日", value: "火曜日" },
];

export default function ShopInfo() {
  return (
    <section aria-labelledby="shop-title" className="bg-[#f1eee5] px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="09 店舗情報・アクセス"
          title="Lueur 渋谷店"
          description="お仕事帰りにも立ち寄りやすい、渋谷駅から徒歩3分。"
          titleId="shop-title"
        />
        <div className="grid gap-9 md:grid-cols-[0.9fr_1.1fr] md:gap-12">
          <dl className="divide-y divide-[#d8d2c4] border-t border-[#d8d2c4]">
            {details.map((item) => (
              <div key={item.label} className="grid grid-cols-[5.5rem_1fr] gap-3 py-4 sm:grid-cols-[6rem_1fr]">
                <dt className="text-[13px] text-[#77786b]">{item.label}</dt>
                <dd className="text-[13px] leading-6 text-[#4d5148]">{item.value}</dd>
              </div>
            ))}
          </dl>
          <div
            role="img"
            aria-label="地図の仮スペース。実際の地図ではありません"
            className="relative flex min-h-56 items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_70%_24%,rgba(255,255,255,0.94)_0%,rgba(255,255,255,0)_31%),radial-gradient(ellipse_at_27%_70%,rgba(194,173,141,0.42)_0%,rgba(194,173,141,0)_42%),linear-gradient(135deg,#e9e3d7_0%,#d9d0c1_42%,#c9c5b5_100%)]"
          >
            <span className="border border-white/70 bg-white/30 px-5 py-3 text-[13px] tracking-[0.06em] text-[#5c6154]">地図の仮スペース</span>
          </div>
        </div>
        <ReservationLink />
      </div>
    </section>
  );
}