"use client";

import { FadeInWhenVisible } from "@/components/animations/FadeInWhenVisible";
import { GROOMSMAN_DATA } from "@/lib/constants";
import { Heart } from "lucide-react";

export function AskSection() {
  return (
    <section id="ask" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <FadeInWhenVisible>
          <Heart className="w-10 h-10 text-secondary mx-auto mb-6 fill-secondary" />
          <h2 className="font-serif text-3xl md:text-5xl text-gray-900 mb-8">
            {GROOMSMAN_DATA.message.title}
          </h2>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.2}>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
            {GROOMSMAN_DATA.message.askLine}
          </p>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.5}>
          <p className="font-serif text-2xl md:text-3xl text-primary mt-8">
            — {GROOMSMAN_DATA.groom}
          </p>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
