export const giftData = {
  slug: "giftify",
  recipientName: "Giftify",
  occasion: "Birthday",
  senderName: "DigitalGiftTZ",
  contactEmail: "hello@digitalgifttz.com", // TODO: replace with your real address
  letter: [
    "Dear Giftify,",
    "Some people simply give gifts.",
    "Others create moments that people remember.",
    "From the little we've seen of what you're building, it is clear that there is thought, care and intention behind what you do — and we believe that deserves to be celebrated.",
    "So today, we hope you take a moment away from creating beautiful surprises for everyone else and allow yourself to be celebrated too.",
    "May this new chapter bring you bigger ideas, meaningful opportunities, loyal customers, beautiful collaborations and the courage to keep building something that carries your own signature.",
    "May the work you do continue finding its way into people's happiest moments.",
    "And above all, may you never lose the joy that made you begin.",
    "Happy Birthday, Giftify.",
    "Here's to more growth, more beautiful moments, and many more reasons to celebrate.",
  ],
  // Set `src` to a licensed/owned file in /public (e.g. "/music/track.mp3"). null = built-in synthesized placeholder.
  music: { title: "Golden Hour", artist: "DigitalGiftTZ Sessions · placeholder track", src: null as string | null },
  branding: { cream: "#F5F0D8", sage: "#DDE4B5", lavender: "#765684", deep: "#594064", lime: "#C9D77A", ink: "#302B35", wine: "#5A1F24" },
};
export type GiftData = typeof giftData;
export type SceneProps = { data: GiftData; onNext: () => void; onReplay: () => void };
export const gifts: Record<string, GiftData> = { [giftData.slug]: giftData };
export const getGift = (slug: string) => gifts[slug];
