import { notFound } from "next/navigation";
import Journey from "@/components/Journey";
import { gifts, getGift } from "@/lib/giftData";
export function generateStaticParams() { return Object.keys(gifts).map((slug) => ({ slug })); }
export default function GiftPage({ params }: { params: { slug: string } }) {
  const g = getGift(params.slug);
  if (!g) notFound();
  return <Journey data={g} />;
}
