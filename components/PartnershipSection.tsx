"use client";
import Scene from "./Scene";
import Reveal from "./Reveal";
import type { SceneProps } from "@/lib/giftData";
export default function PartnershipSection({ data, onNext, onReplay }: SceneProps) {
  return (
    <Scene className="deep" bg={["lav", "lime"]}>
      <div className="wrap">
        <Reveal><h1 className="h" style={{ letterSpacing: ".04em", marginBottom: 32 }}>{data.recipientName.toUpperCase()} × DIGITALGIFTTZ</h1></Reveal>
        <Reveal i={1}><p className="l">You create beautiful gifts.<br /><span className="it">We create the digital experience behind them.</span></p></Reveal>
        <Reveal i={3}><p className="l">Together, we could give your customers something they don&apos;t expect when they open a gift.</p></Reveal>
        <Reveal i={5}><p className="l it" style={{ marginBottom: 34 }}>More than a card.<br />More than a message.<br />An experience.</p></Reveal>
        <Reveal i={7}><div className="row"><button className="btn solid" onClick={onNext}>Let&apos;s create together →</button><button className="btn ghost" onClick={onReplay}>Replay my gift</button></div></Reveal>
      </div>
    </Scene>
  );
}
