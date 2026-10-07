"use client";
import Scene from "./Scene";
import Reveal from "./Reveal";
import { useSteps } from "@/lib/useSteps";
import type { SceneProps } from "@/lib/giftData";
export function Twist({ onNext }: SceneProps) {
  const [i] = useSteps([2600, 2400, 2600, 4200, 3600]);
  return (
    <Scene className="deep" bg={["lav", "wine"]}>
      <div className="wrap">
        {i === 0 && <Reveal><h2 className="h">One last thing, Giftify.</h2></Reveal>}
        {i === 1 && <Reveal><h2 className="h it">What you just experienced...</h2></Reveal>}
        {i === 2 && <Reveal><h2 className="big">...is what we create.</h2></Reveal>}
        {i === 3 && <Reveal><p className="l">Personalized digital gifts built around a person, a moment and a story.</p></Reveal>}
        {i === 4 && <Reveal><p className="l it">And while creating this one for you, we couldn&apos;t stop thinking...</p></Reveal>}
        {i >= 5 && (<><Reveal><h2 className="h" style={{ marginBottom: 34 }}>What if experiences like this could become part of the gifts you already create for your customers?</h2></Reveal><Reveal i={3}><button className="btn solid" onClick={onNext}>Continue →</button></Reveal></>)}
      </div>
    </Scene>
  );
}
export default function ProductReveal({ onNext }: SceneProps) {
  return (
    <Scene className="cream" bg={["sage", "lime"]}>
      <div className="wrap">
        <Reveal><div className="mark">DIGITALGIFTTZ</div></Reveal>
        <Reveal i={1}><h1 className="h">Your gifts.<br />Their story.<br /><span className="it">One unforgettable experience.</span></h1></Reveal>
        <Reveal i={3}><p style={{ maxWidth: "38ch", margin: "24px auto", lineHeight: 1.6 }}>We create personalized digital experiences that turn ordinary gifts into something people can remember, revisit and share.</p></Reveal>
        <Reveal i={4}><div className="chips"><b>GIFT</b><span>↓</span><b>SCAN</b><span>↓</span><b>EXPERIENCE</b></div></Reveal>
        <Reveal i={5}><p className="l it" style={{ marginBottom: 28 }}>Photos. Messages. Music. Memories. Surprises.</p></Reveal>
        <Reveal i={6}><button className="btn deepb" onClick={onNext}>Continue →</button></Reveal>
      </div>
    </Scene>
  );
}
