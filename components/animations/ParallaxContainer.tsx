"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ParallaxProps } from "@/types";

export function ParallaxContainer({
  children,
  speed = 0.5,
  direction = "down",
  className = "",
}: ParallaxProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const multiplier = direction === "up" ? -speed : speed;
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `${multiplier * 100}%`]
  );

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}
