"use client";
import { motion } from "framer-motion";
import AnimatedBackground from "./AnimatedBackground";
export default function Scene({ className = "", bg, particles, children }: { className?: string; bg?: string[]; particles?: boolean; children: React.ReactNode }) {
  return (
    <motion.section className={`scene ${className}`} initial={{ opacity: 0, filter: "blur(14px)" }} animate={{ opacity: 1, filter: "blur(0px)" }} exit={{ opacity: 0, filter: "blur(14px)" }} transition={{ duration: 0.9, ease: "easeInOut" }}>
      <AnimatedBackground colors={bg} particles={particles} />
      {children}
    </motion.section>
  );
}
