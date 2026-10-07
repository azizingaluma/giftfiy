"use client";
import { useState } from "react";
import { useReducedMotion } from "framer-motion";
import Scene from "./Scene";
import Reveal from "./Reveal";
import type { SceneProps } from "@/lib/giftData";
export default function BirthdayWish({ onNext }: SceneProps) {
  const [out, setOut] = useState(false);
  const [done, setDone] = useState(false);
  const rm = useReducedMotion();
  const blow = () => { if (out) return; setOut(true); setTimeout(() => setDone(true), rm ? 200 : 1300); };
  return (
    <Scene className={`night ${out ? "out" : ""}`} bg={["lav", "lime"]}>
      <div className="wrap">
        {!done ? (
          <><Reveal><h2 className="h">Make a birthday wish.</h2></Reveal><Reveal i={2}><p className="l it" style={{ marginTop: 18 }}>Take a moment.<br />Make it count.</p></Reveal></>
        ) : (
          <><Reveal><h2 className="h">We hope that one comes true.</h2></Reveal><Reveal i={3}><p className="l it" style={{ marginTop: 18 }}>And maybe a few you haven&apos;t even thought of yet.</p></Reveal></>
        )}
        <Reveal i={4}>
          <div className="candle"><div className="wick" />
            <button className="fb" onClick={blow} aria-label="Tap the flame to blow out the candle"><div className="flame" /></button>
          </div>
        </Reveal>
        {!done ? (
          <Reveal i={6}><p className="eyebrow" style={{ marginTop: 36 }}>Tap the flame when you&apos;re ready.</p></Reveal>
        ) : (
          <Reveal i={6} style={{ marginTop: 36 }}><button className="btn" onClick={onNext}>Continue →</button></Reveal>
        )}
      </div>
    </Scene>
  );
}
