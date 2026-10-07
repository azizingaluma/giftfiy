"use client";
import { motion, useReducedMotion } from "framer-motion";
export default function Reveal({ i = 0, className, style, children }: { i?: number; className?: string; style?: React.CSSProperties; children: React.ReactNode }) {
  const rm = useReducedMotion();
  return (
    <motion.div className={className} style={style} initial={{ opacity: 0, y: 16, filter: "blur(9px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: rm ? 0.01 : 1.4, delay: rm ? 0 : i * 0.5 + 0.3, ease: [0.2, 0.7, 0.2, 1] }}>
      {children}
    </motion.div>
  );
}
