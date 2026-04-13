"use client";

import { FadeInWhenVisible } from "@/components/animations/FadeInWhenVisible";
import { WEDDING_DATA } from "@/lib/constants";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function DressCodeSection() {
  return (
    <section id="dress-code" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <FadeInWhenVisible>
          <div className="text-center mb-16">
            <Sparkles className="w-12 h-12 text-secondary mx-auto mb-4" />
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4">
              Dress Code
            </h2>
            <p className="text-2xl md:text-3xl font-serif text-primary mb-4">
              {WEDDING_DATA.dressCode.title}
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {WEDDING_DATA.dressCode.description}
            </p>
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.3}>
          <div className="bg-gradient-to-br from-accent/50 to-white p-8 md:p-12 rounded-2xl shadow-xl">
            <h3 className="font-serif text-2xl text-gray-900 mb-6 text-center">
              Color Palette
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {WEDDING_DATA.dressCode.colors.map((color, index) => (
                <motion.div
                  key={color.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center gap-3"
                >
                  <div
                    className="w-24 h-24 rounded-full shadow-lg border-4 border-white"
                    style={{ backgroundColor: color.hex }}
                  ></div>
                  <span className="text-sm font-medium text-gray-700">
                    {color.name}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 italic">
                These colors complement the wedding theme beautifully
              </p>
            </div>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
