"use client";

import { FadeInWhenVisible } from "@/components/animations/FadeInWhenVisible";
import { GROOMSMAN_DATA } from "@/lib/constants";
import { CalendarDays } from "lucide-react";

export function DetailsSection() {
  return (
    <section id="details" className="py-20 md:py-32 bg-gradient-to-b from-accent/30 to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <FadeInWhenVisible>
          <div className="text-center mb-16">
            <CalendarDays className="w-12 h-12 text-secondary mx-auto mb-4" />
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4">
              The Details
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to know so far — more to come
            </p>
          </div>
        </FadeInWhenVisible>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {GROOMSMAN_DATA.details.map((detail, index) => (
            <FadeInWhenVisible key={detail.label} delay={index * 0.15}>
              <div className="bg-white rounded-2xl shadow-lg p-8 text-center h-full">
                <p className="text-sm uppercase tracking-widest text-secondary font-semibold mb-3">
                  {detail.label}
                </p>
                <p className="font-serif text-2xl md:text-3xl text-primary mb-3">
                  {detail.value}
                </p>
                <p className="text-gray-600">{detail.note}</p>
                {detail.link && (
                  <a
                    href={detail.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-sm font-semibold text-secondary hover:text-secondary/80 underline underline-offset-4"
                  >
                    {detail.link.label} →
                  </a>
                )}
              </div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
}
