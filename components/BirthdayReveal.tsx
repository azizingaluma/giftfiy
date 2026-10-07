"use client";
import Scene from "./Scene";
import Reveal from "./Reveal";
import type { SceneProps } from "@/lib/giftData";
export default function BirthdayReveal({ data, onNext }: SceneProps) {
  return (
    <Scene className="wine" bg={["lav", "wine"]} particles>
      <div className="wrap">
        <Reveal><h1 className="big" style={{ marginBottom: 26 }}>HAPPY<br />BIRTHDAY,<br /><span className="it">{data.recipientName.toUpperCase()}.</span></h1></Reveal>
        <Reveal i={3}><p className="l it">Today, the gift is for you.</p></Reveal>
        <Reveal i={8}><button className="btn" onClick={onNext}>Continue →</button></Reveal>
      </div>
    </Scene>
  );
}
