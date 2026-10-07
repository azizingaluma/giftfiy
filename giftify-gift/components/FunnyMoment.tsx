"use client";
import Scene from "./Scene";
import Reveal from "./Reveal";
import { useSteps } from "@/lib/useSteps";
import type { SceneProps } from "@/lib/giftData";
export default function FunnyMoment({ onNext }: SceneProps) {
  const [i, setI] = useSteps([1900]);
  const closing = (
    <>
      <Reveal i={3}><p className="l" style={{ marginTop: 28 }}>Consider this our tiny contribution to fixing that situation.</p></Reveal>
      <Reveal i={5}><button className="btn deepb" onClick={onNext}>Continue →</button></Reveal>
    </>
  );
  return (
    <Scene className="sage" bg={["lime", "lav"]}>
      <div className="wrap">
        {i === 0 && <Reveal><h2 className="big">Wait...</h2></Reveal>}
        {i === 1 && (<><Reveal><p className="l">We have one very serious question.</p></Reveal><Reveal i={2}><button className="btn deepb" onClick={() => setI(2)}>I&apos;m listening 👀</button></Reveal></>)}
        {i === 2 && (
          <>
            <Reveal><p className="l">You&apos;re always preparing gifts for other people...</p></Reveal>
            <Reveal i={5}><h2 className="h" style={{ margin: "12px 0 30px" }}>But who prepared <span className="it">YOUR</span> gift? 😂</h2></Reveal>
            <Reveal i={7}><div className="row"><button className="btn deepb" onClick={() => setI(3)}>Someone did 😌</button><button className="btn" onClick={() => setI(4)}>Nobody 😭</button></div></Reveal>
          </>
        )}
        {i === 3 && (<><Reveal><h2 className="h">Okay, okay...<br /><span className="it">somebody understood the assignment.</span> 😂</h2></Reveal>{closing}</>)}
        {i === 4 && (<><Reveal><h2 className="h">Exactly.<br /><span className="it">That&apos;s why we showed up.</span> 😂</h2></Reveal>{closing}</>)}
      </div>
    </Scene>
  );
}
