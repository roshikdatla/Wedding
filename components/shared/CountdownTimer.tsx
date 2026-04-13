"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { calculateTimeUntil } from "@/lib/utils";

interface CountdownTimerProps {
  targetDate: string;
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeUntil(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeUntil(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  if (timeLeft.distance < 0) {
    return (
      <div className="text-center">
        <p className="text-2xl font-serif text-white">
          The big day has arrived!
        </p>
      </div>
    );
  }

  return (
    <div className="flex gap-4 md:gap-8 justify-center">
      {timeUnits.map((unit, index) => (
        <div key={unit.label} className="flex flex-col items-center">
          <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={unit.value}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-3xl md:text-4xl font-bold text-white font-serif"
              >
                {String(unit.value).padStart(2, "0")}
              </motion.span>
            </AnimatePresence>
          </div>
          <span className="text-xs md:text-sm text-white/80 mt-2 uppercase tracking-wider">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}
