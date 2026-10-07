"use client";
import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import Scene from "./Scene";
import type { SceneProps } from "@/lib/giftData";
export default function EnvelopeIntro({ data, onNext }: SceneProps) {
  const [open, setOpen] = useState(false);
  const rm = useReducedMotion();
  useEffect(() => {
    if (!open) return;
    const t = setTimeout(onNext, rm ? 500 : 3600);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);
  return (
    <Scene className="cream" bg={["sage", "lav"]}>
      <div className="wrap">
        <div className={`env ${open ? "open" : ""}`}>
          <div className="eb" />
          <div className="card">{data.recipientName}</div>
          <div className="ef" />
          <div className="fl" />
          <div className="seal" aria-hidden="true">DG</div>
          <div className="lab"><b>FOR {data.recipientName.toUpperCase()}</b><i>A little something for you.</i></div>
          <button className="btn openbtn" onClick={() => setOpen(true)} disabled={open}>Open</button>
        </div>
        <p className="small" style={{ marginTop: 68 }}>A {data.occasion} Gift for {data.recipientName}</p>
      </div>
    </Scene>
  );
}
