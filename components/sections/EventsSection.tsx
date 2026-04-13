"use client";

import { FadeInWhenVisible } from "@/components/animations/FadeInWhenVisible";
import { EventMap } from "./EventMap";
import { Calendar } from "lucide-react";

export function EventsSection() {
  return (
    <section id="events" className="py-20 md:py-32 bg-gradient-to-b from-accent/30 to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <FadeInWhenVisible>
          <div className="text-center mb-16">
            <Calendar className="w-12 h-12 text-secondary mx-auto mb-4" />
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4">
              Event Details
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join us as we celebrate our special day
            </p>
          </div>
        </FadeInWhenVisible>

        {/* Interactive Map */}
        <FadeInWhenVisible delay={0.2}>
          <EventMap />
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
