"use client";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import type { GiftData, SceneProps } from "@/lib/giftData";
import ProgressIndicator from "./ProgressIndicator";
import EnvelopeIntro from "./EnvelopeIntro";
import WelcomeSection from "./WelcomeSection";
import BirthdayReveal from "./BirthdayReveal";
import BirthdayLetter from "./BirthdayLetter";
import FunnyMoment from "./FunnyMoment";
import BirthdayWish from "./BirthdayWish";
import MusicSection from "./MusicSection";
import ProductReveal, { Twist } from "./ProductReveal";
import PartnershipSection from "./PartnershipSection";
import FinalCTA from "./FinalCTA";
const SCENES: React.ComponentType<SceneProps>[] = [EnvelopeIntro, WelcomeSection, BirthdayReveal, BirthdayLetter, FunnyMoment, BirthdayWish, MusicSection, Twist, ProductReveal, PartnershipSection, FinalCTA];
const GROUP = [-1, 0, 0, 0, 1, 1, 2, 3, 3, 4, 4];
const DARK = [2, 5, 7, 9, 10];
export default function Journey({ data }: { data: GiftData }) {
  const [cur, setCur] = useState(0);
  const [run, setRun] = useState(0);
  const next = () => setCur((c) => Math.min(c + 1, SCENES.length - 1));
  const replay = () => { setRun((r) => r + 1); setCur(0); };
  const Current = SCENES[cur];
  return (
    <>
      <ProgressIndicator group={GROUP[cur]} dark={DARK.includes(cur)} />
      <AnimatePresence mode="wait">
        <div key={`${run}-${cur}`} style={{ display: "contents" }}>
          <Current data={data} onNext={next} onReplay={replay} />
        </div>
      </AnimatePresence>
    </>
  );
}
