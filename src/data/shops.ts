export type StaffMember = {
  name: string;
  role: string;
  career: string;
  specialty: string;
  message: string;
};

export type CustomerVoice = {
  age: string;
  work: string;
  concern: string;
  change: string;
};

export type Shop = {
  slug: "shibuya" | "kichijoji" | "yokohama";
  name: string;
  subcopy: string;
  hours: string;
  closedDay: string;
  stationAccess: string;
  accessDescription: string;
  address: string;
  staff: readonly [StaffMember, StaffMember];
  voices: readonly [CustomerVoice, CustomerVoice, CustomerVoice];
  mapLabel: string;
  title: string;
  description: string;
  reservationHref: string;
};

export const shops: Shop[] = [
  {
    slug: "shibuya",
    name: "渋谷店",
    subcopy: "渋谷駅から徒歩3分。仕事帰りの21時まで。",
    hours: "11:00〜21:00",
    closedDay: "火曜日",
    stationAccess: "渋谷駅東口から宮益坂方面へ徒歩3分",
    accessDescription: "お仕事帰りにも立ち寄りやすい、渋谷駅から徒歩3分。",
    address: "東京都渋谷区渋谷1丁目（デモ用の架空住所）",
    staff: [
      {
        name: "佐倉 美月",
        role: "店長",
        career: "美容師歴 12年",
        specialty: "髪質に合わせたケアと、やわらかな質感づくり",
        message: "日々のお手入れが少し楽になるように、髪の状態やライフスタイルに合わせてご提案します。",
      },
      {
        name: "高瀬 里奈",
        role: "スタイリスト",
        career: "美容師歴 7年",
        specialty: "カラーを楽しみながら続けるヘアケア",
        message: "小さなことも気軽に相談できる時間を大切にしています。なりたい髪を一緒に探していきましょう。",
      },
    ],
    voices: [
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
    ],
    mapLabel: "渋谷店周辺の地図（仮）",
    title: "Lueur 渋谷店 | 毎日の髪に、ほのかな光を。",
    description: "渋谷駅から徒歩3分。仕事帰りの21時まで営業する美容室 Lueur 渋谷店。",
    reservationHref: "mailto:reserve@lueur.example?subject=Lueur%20%E6%B8%8B%E8%B0%B7%E5%BA%97%E3%81%AE%E4%BA%88%E7%B4%84",
  },
  {
    slug: "kichijoji",
    name: "吉祥寺店",
    subcopy: "吉祥寺駅から徒歩5分。休日にゆったり過ごせるサロン。",
    hours: "10:00〜19:00",
    closedDay: "月曜日",
    stationAccess: "吉祥寺駅から井の頭公園方面へ徒歩5分",
    accessDescription: "吉祥寺駅から徒歩5分。休日にゆったり過ごせるサロンです。",
    address: "東京都武蔵野市吉祥寺本町2丁目（デモ用の架空住所）",
    staff: [
      {
        name: "藤森 奈緒",
        role: "店長",
        career: "美容師歴 14年",
        specialty: "ゆっくり相談しながらつくる、自然なまとまり",
        message: "休日のひとときを心地よく過ごしていただけるよう、髪のお悩みを丁寧に伺います。",
      },
      {
        name: "小野寺 真帆",
        role: "スタイリスト",
        career: "美容師歴 8年",
        specialty: "手ぐしでまとまりやすいスタイルとケア",
        message: "毎日の過ごし方に合うスタイリングやお手入れを、一緒に見つけていきましょう。",
      },
    ],
    voices: [
      {
        age: "30代",
        work: "編集職",
        concern: "休日も髪が広がり、手入れに時間がかかっていました。",
        change: "落ち着いた雰囲気で相談できました。乾かした後のまとまりがよく、朝の準備がしやすく感じます。",
      },
      {
        age: "20代",
        work: "会社員",
        concern: "カラーを続けていて、毛先の乾燥が気になっていました。",
        change: "髪の状態に合わせたケアを提案してもらえました。休日にゆっくり過ごせたのもよかったです。",
      },
      {
        age: "40代",
        work: "講師",
        concern: "髪のツヤが気になり、どんなケアが合うか迷っていました。",
        change: "家でのケア方法まで聞けて参考になりました。手触りがなめらかに感じられます。",
      },
    ],
    mapLabel: "吉祥寺店周辺の地図（仮）",
    title: "Lueur 吉祥寺店 | 休日にゆったり過ごせる髪質改善サロン",
    description: "吉祥寺駅から徒歩5分。休日にゆったり相談できる美容室 Lueur 吉祥寺店。",
    reservationHref: "mailto:reserve@lueur.example?subject=Lueur%20%E5%90%89%E7%A5%A5%E5%AF%BA%E5%BA%97%E3%81%AE%E4%BA%88%E7%B4%84",
  },
  {
    slug: "yokohama",
    name: "横浜店",
    subcopy: "横浜駅から徒歩4分。通いやすい駅近サロン。",
    hours: "10:00〜20:00",
    closedDay: "水曜日",
    stationAccess: "横浜駅西口から徒歩4分",
    accessDescription: "横浜駅から徒歩4分。お出かけの前後にも通いやすい立地です。",
    address: "神奈川県横浜市西区南幸2丁目（デモ用の架空住所）",
    staff: [
      {
        name: "三浦 千尋",
        role: "店長",
        career: "美容師歴 13年",
        specialty: "忙しい毎日に合わせた、扱いやすい髪質ケア",
        message: "通う時間も大切にできるよう、髪のお悩みと日々の予定に合わせてご提案します。",
      },
      {
        name: "石井 由佳",
        role: "スタイリスト",
        career: "美容師歴 6年",
        specialty: "ツヤ感を楽しむカラーとホームケア",
        message: "ご自宅でも無理なく続けられる方法を、わかりやすくお伝えします。気軽にご相談ください。",
      },
    ],
    voices: [
      {
        age: "20代",
        work: "営業職",
        concern: "仕事帰りに寄れる場所で、髪の広がりを相談したかったです。",
        change: "駅から近くて通いやすく、髪の乾かし方も教えてもらえました。朝のセットが楽に感じます。",
      },
      {
        age: "30代",
        work: "会社員",
        concern: "カラー後のパサつきと、まとまりにくさが悩みでした。",
        change: "髪の状態を見ながら進めてもらえて安心でした。手触りがやわらかく感じられます。",
      },
      {
        age: "30代",
        work: "販売職",
        concern: "忙しくて美容室に通う時間を作りにくく感じていました。",
        change: "駅から近くて予定に組み込みやすかったです。お手入れのコツも日常に取り入れやすそうです。",
      },
    ],
    mapLabel: "横浜店周辺の地図（仮）",
    title: "Lueur 横浜店 | 駅近で通いやすい髪質改善サロン",
    description: "横浜駅から徒歩4分。通いやすい駅近の美容室 Lueur 横浜店。",
    reservationHref: "mailto:reserve@lueur.example?subject=Lueur%20%E6%A8%AA%E6%B5%9C%E5%BA%97%E3%81%AE%E4%BA%88%E7%B4%84",
  },
];

export function getShopBySlug(slug: string): Shop | undefined {
  return shops.find((shop) => shop.slug === slug);
}