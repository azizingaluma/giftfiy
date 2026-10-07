"use client";
import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
const CH = [[261.63, 329.63, 392, 493.88], [220, 261.63, 329.63, 392], [293.66, 349.23, 440, 523.25], [196, 246.94, 293.66, 349.23]];
const PAT = [0, 1, 2, 3, 2, 1, 2, 1];
const fmt = (s: number) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
type Props = { title: string; artist: string; src: string | null };
export default function AudioPlayer({ title, artist, src }: Props) {
  const [playing, setPlaying] = useState(false);
  const [pos, setPos] = useState(0);
  const [vol, setVol] = useState(60);
  const ac = useRef<AudioContext | null>(null);
  const master = useRef<GainNode | null>(null);
  const el = useRef<HTMLAudioElement | null>(null);
  const nextT = useRef(0);
  const step = useRef(0);
  const dur = src ? el.current?.duration || 0 : 16;

  const note = (f: number, t: number, d: number, v: number, type: OscillatorType) => {
    const a = ac.current!, o = a.createOscillator(), g = a.createGain();
    o.type = type; o.frequency.value = f;
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(v, t + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, t + d);
    o.connect(g); g.connect(master.current!); o.start(t); o.stop(t + d + 0.05);
  };
  const sched = () => {
    const a = ac.current!;
    while (nextT.current < a.currentTime + 1.2) {
      const c = CH[Math.floor(step.current / 8) % 4], k = step.current % 8;
      note(c[PAT[k]], nextT.current, 1.6, 0.16, "triangle");
      if (k === 0) { note(c[0] / 2, nextT.current, 3.4, 0.2, "sine"); note(c[2], nextT.current, 3, 0.05, "sine"); }
      nextT.current += 0.5; step.current = (step.current + 1) % 32;
    }
  };
  const toggle = () => {
    if (playing) { el.current?.pause(); ac.current?.suspend(); setPlaying(false); return; }
    if (src) {
      if (!el.current) { el.current = new Audio(src); el.current.loop = true; }
      el.current.volume = vol / 100; el.current.play();
    } else {
      if (!ac.current) {
        const Ctx = window.AudioContext || (window as any).webkitAudioContext; // eslint-disable-line @typescript-eslint/no-explicit-any
        ac.current = new Ctx(); master.current = ac.current!.createGain(); master.current.connect(ac.current!.destination); nextT.current = ac.current!.currentTime + 0.1;
      }
      ac.current.resume(); sched();
    }
    setPlaying(true);
  };
  useEffect(() => {
    if (!playing) return;
    const iv = setInterval(() => {
      if (src && el.current) setPos((el.current.currentTime / (el.current.duration || 1)) * 100);
      else if (ac.current) { sched(); setPos(((ac.current.currentTime % 16) / 16) * 100); }
    }, 200);
    return () => clearInterval(iv);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playing]);
  useEffect(() => {
    if (master.current) master.current.gain.value = vol / 200;
    if (el.current) el.current.volume = vol / 100;
  }, [vol]);
  useEffect(() => () => { el.current?.pause(); ac.current?.close(); }, []);

  return (
    <div className={playing ? "playing" : ""}>
      <div className="rec">
        <div className="disc" />
        <div className="sleeve">
          <i style={{ width: 150, height: 150, borderRadius: "50%", background: "var(--lav)", left: -30, top: 60 }} />
          <i style={{ width: 70, height: 70, borderRadius: "60% 40% 55% 45%", background: "var(--sage)", right: 18, top: 20 }} />
          <i style={{ width: 26, height: 26, borderRadius: "50%", background: "var(--lime)", right: 60, bottom: 30 }} />
          <i style={{ width: 90, height: 1, background: "var(--cream)", left: 20, top: 28, opacity: 0.6 }} />
        </div>
      </div>
      <div className="pl">
        <div style={{ font: "500 24px var(--serif)" }}>{title}</div>
        <div className="small">{artist}</div>
        <div className="ctrl">
          <button className="pbtn" onClick={toggle} aria-label={playing ? "Pause" : "Play"} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            {playing ? <Pause size={20} /> : <Play size={20} />}
          </button>
          <div style={{ flex: 1 }}>
            <input type="range" min={0} max={100} value={pos} readOnly disabled aria-label="Progress" />
            <div className="small" style={{ display: "flex", justifyContent: "space-between" }}><span>{fmt((pos / 100) * dur)}</span><span>{fmt(dur)}{src ? "" : " loop"}</span></div>
          </div>
        </div>
        <div className="ctrl" style={{ marginTop: 6 }}><span className="small">Vol</span><input type="range" min={0} max={100} value={vol} onChange={(e) => setVol(+e.target.value)} aria-label="Volume" /></div>
      </div>
    </div>
  );
}
