"use client";

import { motion } from "framer-motion";
import { AnimationProps } from "@/types";

export function StickySection({ children, className = "" }: AnimationProps) {
  return (
    <motion.div
      className={`sticky top-0 ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
