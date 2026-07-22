"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GROOMSMAN_DATA } from "@/lib/constants";
import { Heart, ArrowRight } from "lucide-react";

type Stage = "closed" | "name" | "letter";

interface EnvelopeIntroProps {
  onOpened: (name: string) => void;
}

export function EnvelopeIntro({ onOpened }: EnvelopeIntroProps) {
  const [stage, setStage] = useState<Stage>("closed");
  const [name, setName] = useState("");
  const isOpen = stage !== "closed";

  const handleTap = () => {
    if (stage === "closed") setStage("name");
  };

  const handleSubmitName = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    setStage("letter");
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-rose-200 via-pink-300 to-rose-400 px-4 py-16">
      <div className="relative" style={{ perspective: 1200 }}>
        <button
          type="button"
          onClick={handleTap}
          disabled={stage !== "closed"}
          aria-label="Tap to open the envelope"
          className="relative block w-64 h-44 md:w-80 md:h-52 focus:outline-none"
        >
          <div className="absolute inset-0 rounded-lg bg-rose-100 shadow-2xl" />
          <div
            className="absolute inset-0 rounded-lg bg-rose-300/70"
            style={{ clipPath: "polygon(0 100%, 50% 42%, 100% 100%)" }}
          />
          <motion.div
            className="absolute top-0 left-0 w-full h-1/2 rounded-t-lg bg-rose-400 origin-top"
            style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
            animate={{ rotateX: isOpen ? -150 : 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          />
          <motion.div
            animate={{ opacity: isOpen ? 0 : 1, scale: isOpen ? 0.6 : 1 }}
            transition={{ duration: 0.4 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-secondary shadow-md flex items-center justify-center z-10"
          >
            <Heart className="w-6 h-6 text-primary fill-primary" />
          </motion.div>
        </button>

        <AnimatePresence>
          {stage === "closed" && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mt-6 text-center text-primary/80 font-medium tracking-wide"
            >
              Tap to open
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence mode="wait">
        {stage === "name" && (
          <motion.form
            key="name"
            onSubmit={handleSubmitName}
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-8 bg-white rounded-2xl shadow-2xl p-8 w-full max-w-sm text-center"
          >
            <p className="font-serif text-2xl text-primary mb-4">
              What&apos;s your first name?
            </p>
            <input
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="First name"
              maxLength={30}
              className="w-full px-4 py-3 rounded-full border border-gray-300 text-center focus:outline-none focus:ring-2 focus:ring-secondary mb-4"
            />
            <button
              type="submit"
              disabled={!name.trim()}
              className="px-6 py-3 bg-secondary text-primary font-semibold rounded-full hover:bg-secondary/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Open My Letter
            </button>
          </motion.form>
        )}

        {stage === "letter" && (
          <motion.div
            key="letter"
            initial={{ opacity: 0, y: 60, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mt-8 bg-white rounded-2xl shadow-2xl p-8 md:p-12 w-full max-w-lg text-center"
          >
            <p className="font-serif text-xl md:text-2xl text-gray-800 mb-4">
              Dear {name.trim()},
            </p>
            {GROOMSMAN_DATA.message.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-gray-600 leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
            <p className="font-serif text-2xl text-primary mb-8">
              — {GROOMSMAN_DATA.groom}
            </p>
            <button
              onClick={() => onOpened(name.trim())}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-colors"
            >
              Continue <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
