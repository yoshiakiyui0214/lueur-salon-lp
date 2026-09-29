import { z } from "zod";

const text = z.string().trim().min(1);

export const StaffMemberSchema = z.strictObject({
  name: text,
  role: z.enum(["店長", "スタイリスト"]),
  career: text,
  specialty: text,
  message: text,
});

export const CustomerVoiceSchema = z.strictObject({
  age: text,
  work: text,
  concern: text,
  change: text,
});

export const ShopSchema = z.strictObject({
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  name: text,
  subcopy: text,
  introduction: text,
  hours: text,
  closedDay: text,
  stationAccess: text,
  accessDescription: text,
  address: text,
  staff: z.tuple([StaffMemberSchema, StaffMemberSchema]),
  voices: z.tuple([CustomerVoiceSchema, CustomerVoiceSchema, CustomerVoiceSchema]),
  mapLabel: text,
  title: text,
  description: text,
  reservationHref: z.string().url().or(z.string().startsWith("mailto:")),
});

export const GeneratedShopContentSchema = z.strictObject({
  subcopy: text,
  introduction: text,
  accessDescription: text,
  address: z.string().trim().min(1).refine(
    (value) => value.endsWith("(デモ用の架空住所)"),
    "住所は末尾に (デモ用の架空住所) を付けてください",
  ),
  staff: z.tuple([StaffMemberSchema, StaffMemberSchema]),
  voices: z.tuple([CustomerVoiceSchema, CustomerVoiceSchema, CustomerVoiceSchema]),
  mapLabel: text,
  title: text,
  description: text,
});

export type StaffMember = z.infer<typeof StaffMemberSchema>;
export type CustomerVoice = z.infer<typeof CustomerVoiceSchema>;
export type Shop = z.infer<typeof ShopSchema>;
export type GeneratedShopContent = z.infer<typeof GeneratedShopContentSchema>;