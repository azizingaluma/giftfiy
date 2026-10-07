"use client";
import Scene from "./Scene";
import Reveal from "./Reveal";
import AudioPlayer from "./AudioPlayer";
import type { SceneProps } from "@/lib/giftData";
export default function MusicSection({ data, onNext }: SceneProps) {
  return (
    <Scene className="cream" bg={["sage", "lav"]}>
      <div className="wrap">
        <Reveal><h2 className="h">A little soundtrack for your moment.</h2></Reveal>
        <Reveal i={1}><p className="eyebrow" style={{ margin: "18px 0 26px" }}>Press play.</p></Reveal>
        <Reveal i={2}><AudioPlayer {...data.music} /></Reveal>
        <Reveal i={5} style={{ marginTop: 34 }}><button className="btn deepb" onClick={onNext}>Continue →</button></Reveal>
      </div>
    </Scene>
  );
}
