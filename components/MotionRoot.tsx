"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { MeptorMotion } from "@/lib/motion";

/** The .mp root every style is scoped to; boots the motion engine after hydration. */
export default function MotionRoot({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const motion = new MeptorMotion(ref.current);
    motion.start();
    return () => motion.destroy();
  }, []);

  return (
    <div className="mp" ref={ref}>
      {children}
    </div>
  );
}
