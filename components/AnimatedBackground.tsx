"use client";
import { useEffect, useState } from "react";
const C: Record<string, string> = { sage: "#DDE4B5", lav: "#765684", lime: "#C9D77A", wine: "#7a2a30" };
type Pt = { l: number; s: number; d: number; dl: number };
export default function AnimatedBackground({ colors = [], particles = false }: { colors?: string[]; particles?: boolean }) {
  const [pts, setPts] = useState<Pt[]>([]);
  useEffect(() => {
    if (!particles || window.matchMedia("(prefers-reduced-motion:reduce)").matches) return;
    setPts(Array.from({ length: 16 }, () => ({ l: Math.random() * 100, s: 2 + Math.random() * 3, d: 14 + Math.random() * 14, dl: -Math.random() * 20 })));
  }, [particles]);
  return (
    <div className="bg">
      {colors.map((c, k) => (
        <div key={k} className="blob" style={{ background: C[c], left: k ? "auto" : "-20%", right: k ? "-25%" : "auto", top: k ? "auto" : "-15%", bottom: k ? "-20%" : "auto", animationDelay: `${-k * 9}s` }} />
      ))}
      {pts.map((p, i) => (<i key={i} className="pt" style={{ left: `${p.l}%`, width: p.s, height: p.s, animationDuration: `${p.d}s`, animationDelay: `${p.dl}s` }} />))}
    </div>
  );
}
