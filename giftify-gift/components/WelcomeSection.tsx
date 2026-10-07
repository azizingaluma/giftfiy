"use client";
import Scene from "./Scene";
import Reveal from "./Reveal";
import type { SceneProps } from "@/lib/giftData";
export default function WelcomeSection({ data, onNext }: SceneProps) {
  return (
    <Scene className="cream" bg={["sage", "lime"]}>
      <div className="wrap">
        <Reveal><h1 className="big" style={{ marginBottom: 34 }}>Hello, {data.recipientName}.</h1></Reveal>
        <Reveal i={1}><p className="l">We know you&apos;re usually the one helping people make someone else&apos;s day special.</p></Reveal>
        <Reveal i={2}><p className="l it">Today, we thought we&apos;d return the favour.</p></Reveal>
        <Reveal i={5}><p className="eyebrow" style={{ marginTop: 34 }}>This little experience was made especially for you.</p></Reveal>
        <Reveal i={6}><button className="btn deepb" onClick={onNext}>Continue →</button></Reveal>
      </div>
    </Scene>
  );
}
