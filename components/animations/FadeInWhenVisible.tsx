"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { AnimationProps } from "@/types";

export function FadeInWhenVisible({
  children,
  delay = 0,
  duration = 0.6,
  className = "",
}: AnimationProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
