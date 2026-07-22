"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeInWhenVisible } from "@/components/animations/FadeInWhenVisible";
import { GROOMSMAN_DATA } from "@/lib/constants";
import { PartyPopper } from "lucide-react";

export function ResponseSection() {
  const [response, setResponse] = useState<"yes" | "no" | null>(null);

  return (
    <section id="respond" className="py-20 md:py-32 bg-primary">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <FadeInWhenVisible>
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-4">
            So, What Do You Say?
          </h2>
          <p className="text-white/70 mb-10">
            Let {GROOMSMAN_DATA.groom} know — or just text him.
          </p>
        </FadeInWhenVisible>

        <AnimatePresence mode="wait">
          {response === null && (
            <motion.div
              key="prompt"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button
                onClick={() => setResponse("yes")}
                className="px-8 py-4 bg-secondary text-primary font-semibold rounded-full hover:bg-secondary/90 transition-colors"
              >
                I&apos;m In!
              </button>
              <button
                onClick={() => setResponse("no")}
                className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full border border-white/30 hover:bg-white/20 transition-colors"
              >
                Can&apos;t Make It
              </button>
            </motion.div>
          )}

          {response === "yes" && (
            <motion.div
              key="yes"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-3"
            >
              <PartyPopper className="w-10 h-10 text-secondary" />
              <p className="text-xl text-white font-serif">
                Let&apos;s go! Reach out to {GROOMSMAN_DATA.groom} directly so he knows to hold your spot.
              </p>
            </motion.div>
          )}

          {response === "no" && (
            <motion.div
              key="no"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-3"
            >
              <p className="text-xl text-white font-serif">
                No worries at all — reach out to {GROOMSMAN_DATA.groom} whenever you can talk it through.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
