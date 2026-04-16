"use client";

import { FadeInWhenVisible } from "@/components/animations/FadeInWhenVisible";
import { WEDDING_DATA } from "@/lib/constants";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function DressCodeSection() {
  return (
    <section id="dress-code" className="py-20 md:py-32 bg-gradient-to-b from-white to-accent/20">
      <div className="container mx-auto px-4 max-w-6xl">
        <FadeInWhenVisible>
          <div className="text-center mb-16">
            <Sparkles className="w-12 h-12 text-secondary mx-auto mb-4" />
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6">
              {WEDDING_DATA.dressCode.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto italic leading-relaxed">
              {WEDDING_DATA.dressCode.description}
            </p>
          </div>
        </FadeInWhenVisible>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Ladies Section */}
          <FadeInWhenVisible delay={0.2}>
            <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-gray-100">
              <h3 className="font-serif text-3xl text-gray-900 mb-6 uppercase tracking-wide">
                Ladies
              </h3>
              <p className="text-gray-700 leading-relaxed mb-8">
                {WEDDING_DATA.dressCode.ladies.description}
              </p>

              <div className="space-y-4">
                {WEDDING_DATA.dressCode.ladies.colors.map((color, index) => (
                  <motion.div
                    key={color.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-center gap-4"
                  >
                    <div
                      className="w-20 h-20 md:w-24 md:h-24 rounded-lg shadow-lg border-2 border-gray-200 flex-shrink-0"
                      style={{ backgroundColor: color.hex }}
                    ></div>
                    <div>
                      <p className="font-serif text-lg text-gray-900 font-semibold">
                        {color.name}
                      </p>
                      <p className="text-xs text-gray-500 uppercase tracking-wider">
                        Pantone {color.pantone}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeInWhenVisible>

          {/* Gentlemen Section */}
          <FadeInWhenVisible delay={0.4}>
            <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-gray-100">
              <h3 className="font-serif text-3xl text-gray-900 mb-6 uppercase tracking-wide">
                Gentlemen
              </h3>
              <p className="text-gray-700 leading-relaxed mb-8">
                {WEDDING_DATA.dressCode.gentlemen.description}
              </p>

              <div className="space-y-4">
                {WEDDING_DATA.dressCode.gentlemen.colors.map((color, index) => (
                  <motion.div
                    key={color.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-center gap-4"
                  >
                    <div
                      className="w-20 h-20 md:w-24 md:h-24 rounded-lg shadow-lg border-2 border-gray-200 flex-shrink-0"
                      style={{ backgroundColor: color.hex }}
                    ></div>
                    <div>
                      <p className="font-serif text-lg text-gray-900 font-semibold">
                        {color.name}
                      </p>
                      <p className="text-xs text-gray-500 uppercase tracking-wider">
                        Pantone {color.pantone}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
}
