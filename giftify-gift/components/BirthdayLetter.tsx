"use client";
import Scene from "./Scene";
import Reveal from "./Reveal";
import type { SceneProps } from "@/lib/giftData";
export default function BirthdayLetter({ data, onNext }: SceneProps) {
  return (
    <Scene className="cream" bg={["sage", "lav"]}>
      <div className="wrap">
        <Reveal><h2 className="h">A little birthday note.</h2></Reveal>
        <Reveal i={2}>
          <div className="paper">
            {data.letter.map((p, k) => (<p key={k}>{p}</p>))}
            <p className="sig" style={{ margin: "22px 0 0" }}>With warm wishes,<br />{data.senderName}</p>
          </div>
        </Reveal>
        <Reveal i={4} style={{ marginTop: 28 }}><button className="btn deepb" onClick={onNext}>Continue →</button></Reveal>
      </div>
    </Scene>
  );
}
