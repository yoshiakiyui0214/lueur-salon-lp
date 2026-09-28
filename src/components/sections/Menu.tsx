import { ReservationLink, SectionHeading } from "./SectionParts";

const menus = [
  { name: "髪質改善トリートメント", price: "11,000円" },
  { name: "カット + 髪質改善トリートメント", price: "16,500円" },
  { name: "カット + カラー + 髪質改善トリートメント", price: "22,000円" },
  { name: "カット", price: "6,600円" },
];

export default function Menu() {
  return (
    <section aria-labelledby="menu-title" className="bg-[#f8f6f0] px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="04 メニュー・料金"
          title="わかりやすい、税込表示"
          description="髪の状態やご希望に合わせて、メニューをお選びいただけます。"
          titleId="menu-title"
        />
        <div className="border-t border-[#cfc6b5]">
          {menus.map((menu) => (
            <div key={menu.name} className="grid grid-cols-[1fr_auto] items-start gap-4 border-b border-[#ded8ca] py-5 sm:py-6">
              <p className="text-[14px] leading-6 text-[#4d5148] sm:text-[15px]">{menu.name}</p>
              <p className="whitespace-nowrap text-[15px] font-medium tabular-nums text-[#394338]">{menu.price}</p>
            </div>
          ))}
          <div className="mt-5 grid grid-cols-[1fr_auto] items-start gap-4 border border-[#d7cbb8] bg-[#eee8dc] px-4 py-5 sm:px-6">
            <div>
              <p className="mb-1 text-[11px] font-medium tracking-[0.08em] text-[#8B6F55]">初回限定</p>
              <p className="text-[14px] leading-6 text-[#4d5148] sm:text-[15px]">カット + 髪質改善トリートメント</p>
            </div>
            <p className="whitespace-nowrap pt-5 text-[15px] font-medium tabular-nums text-[#394338]">13,200円</p>
          </div>
          <p className="mt-4 text-right text-[11px] text-[#77786b]">※表示価格はすべて税込です</p>
        </div>
        <ReservationLink />
      </div>
    </section>
  );
}