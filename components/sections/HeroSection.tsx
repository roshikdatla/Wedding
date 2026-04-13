"use client";

import { motion } from "framer-motion";
import { WEDDING_DATA } from "@/lib/constants";
import { CountdownTimer } from "@/components/shared/CountdownTimer";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Central Names Header */}
      <div className="relative z-20 flex items-center justify-center py-8 md:py-12 bg-gradient-to-b from-gray-900 to-transparent">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center px-4"
        >
          <h1 className="font-serif text-3xl md:text-6xl lg:text-7xl text-white">
            Priya and Rohan
          </h1>
        </motion.div>
      </div>

      {/* Three Sections - Horizontal on desktop, stacked on mobile */}
      <div className="relative flex flex-col md:flex-row flex-1">
        {/* Proposal Section - Active (Left Third) - Clickable */}
        <a
          href="#proposal-details"
          className="relative w-full md:w-1/3 flex flex-col items-center justify-start pt-12 md:pt-20 min-h-[400px] md:min-h-0 cursor-pointer transition-transform hover:scale-105 group"
        >
          {/* Background with gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-rose-500 via-red-400 to-pink-500">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <h2 className="font-serif text-2xl md:text-5xl lg:text-6xl text-white mb-2">
                <span className="text-yellow-300 font-bold">PR</span>oposal
              </h2>
              <p className="text-base md:text-xl text-white/80 mb-4 md:mb-6">
                #<span className="text-yellow-300">P</span><span className="text-yellow-300">R</span>oposed
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="text-base md:text-xl text-white/90 mb-1 md:mb-2"
            >
              {WEDDING_DATA.date.full}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="text-sm md:text-lg text-white/80 mb-4 md:mb-8"
            >
              {WEDDING_DATA.venue.name}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.4 }}
              className="scale-90 md:scale-100"
            >
              <CountdownTimer targetDate={WEDDING_DATA.date.iso} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.6 }}
              className="mt-4 md:mt-6"
            >
              <span className="inline-block px-4 py-2 md:px-6 md:py-2 text-sm md:text-base bg-white/20 backdrop-blur-sm rounded-full border-2 border-white/40 text-white font-semibold group-hover:bg-white/30 transition-all">
                Click for Details →
              </span>
            </motion.div>
          </div>
        </a>

        {/* Engagement Section - TBD (Middle Third) */}
        <div className="relative w-full md:w-1/3 flex flex-col items-center justify-start pt-12 md:pt-20 min-h-[400px] md:min-h-0 bg-gray-400">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-500 via-gray-600 to-gray-700 opacity-50">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
          </div>

          <div className="relative z-10 text-center px-4">
            <h2 className="font-serif text-2xl md:text-5xl lg:text-6xl text-white/60 mb-2">
              Engagement
            </h2>
            <p className="text-base md:text-xl text-white/60 mb-4 md:mb-6">
              #<span className="text-yellow-300/60">P</span><span className="text-yellow-300/60">R</span>omised
            </p>
            <p className="text-lg md:text-2xl text-white/70 font-semibold mb-2">
              TBD
            </p>
            <p className="text-xs md:text-sm text-white/50 italic">
              Location coming soon
            </p>
          </div>
        </div>

        {/* Wedding Section - TBD (Right Third) */}
        <div className="relative w-full md:w-1/3 flex flex-col items-center justify-start pt-12 md:pt-20 min-h-[400px] md:min-h-0 bg-gray-500">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800 opacity-50">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
          </div>

          <div className="relative z-10 text-center px-4">
            <h2 className="font-serif text-2xl md:text-5xl lg:text-6xl text-white/60 mb-2">
              Wedding
            </h2>
            <p className="text-base md:text-xl text-white/60 mb-4 md:mb-6">
              #<span className="text-yellow-300/60">P</span><span className="text-yellow-300/60">R</span>onounced
            </p>
            <p className="text-lg md:text-2xl text-white/70 font-semibold mb-2">
              TBD
            </p>
            <p className="text-xs md:text-sm text-white/50 italic">
              Location coming soon
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-8 h-8 text-white/70" />
        </motion.div>
      </motion.div>
    </section>
  );
}
