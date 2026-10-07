import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
export function useSteps(autos: (number | undefined)[]) {
  const [i, setI] = useState(0);
  const rm = useReducedMotion();
  useEffect(() => {
    const a = autos[i];
    if (!a) return;
    const t = setTimeout(() => setI((x) => x + 1), rm ? 600 : a);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i, rm]);
  return [i, setI] as const;
}
