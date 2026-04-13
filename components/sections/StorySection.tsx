"use client";

import { FadeInWhenVisible } from "@/components/animations/FadeInWhenVisible";
import { ParallaxContainer } from "@/components/animations/ParallaxContainer";
import { WEDDING_DATA } from "@/lib/constants";
import { Heart } from "lucide-react";

export function StorySection() {
  return (
    <section id="story" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 max-w-6xl">
        <FadeInWhenVisible>
          <div className="text-center mb-16">
            <Heart className="w-12 h-12 text-secondary mx-auto mb-4" />
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4">
              Our Story
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every love story is beautiful, but ours is our favorite
            </p>
          </div>
        </FadeInWhenVisible>

        <div className="max-w-3xl mx-auto">
          <FadeInWhenVisible delay={0.2}>
            <ParallaxContainer speed={0.2} className="h-full">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 md:p-10 rounded-2xl shadow-lg h-full">
                <h3 className="font-serif text-3xl md:text-4xl text-primary mb-6">
                  {WEDDING_DATA.story.howWeMet.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {WEDDING_DATA.story.howWeMet.content}
                </p>
              </div>
            </ParallaxContainer>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
}
