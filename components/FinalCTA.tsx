"use client";
import Scene from "./Scene";
import Reveal from "./Reveal";
import type { SceneProps } from "@/lib/giftData";
export default function FinalCTA({ data, onReplay }: SceneProps) {
  const mail = `mailto:${data.contactEmail}?subject=${encodeURIComponent(`${data.recipientName} × DigitalGiftTZ`)}`;
  return (
    <Scene className="wine" bg={["lav", "wine"]} particles>
      <div className="wrap">
        <Reveal><h1 className="h" style={{ letterSpacing: ".04em" }}>{data.recipientName.toUpperCase()} × DIGITALGIFTTZ</h1></Reveal>
        <Reveal i={2}><p className="l it" style={{ marginTop: 20 }}>Maybe we should make something beautiful together.</p></Reveal>
        <Reveal i={4}><div className="row"><a className="btn solid" href={mail}>Let&apos;s talk</a><button className="btn ghost" onClick={onReplay}>Replay the experience</button></div></Reveal>
        <Reveal i={6}><p className="small it" style={{ marginTop: 44, fontFamily: "var(--serif)", fontSize: 16, opacity: 0.6 }}>This isn&apos;t just a website.<br />It&apos;s what happens when a gift becomes an experience.</p></Reveal>
        <Reveal i={7}><p className="foot">Made with intention by {data.senderName}.</p></Reveal>
      </div>
    </Scene>
  );
}
