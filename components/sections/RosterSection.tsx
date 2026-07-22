"use client";

import { FadeInWhenVisible } from "@/components/animations/FadeInWhenVisible";
import { GROOMSMAN_DATA } from "@/lib/constants";
import { Users } from "lucide-react";

export function RosterSection() {
  return (
    <section id="roster" className="py-20 md:py-32 bg-gradient-to-b from-white to-accent/20">
      <div className="container mx-auto px-4 max-w-5xl">
        <FadeInWhenVisible>
          <div className="text-center mb-16">
            <Users className="w-12 h-12 text-secondary mx-auto mb-4" />
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4">
              The Roster
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The guys standing with {GROOMSMAN_DATA.groom}
            </p>
          </div>
        </FadeInWhenVisible>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {GROOMSMAN_DATA.roster.map((member, index) => (
            <FadeInWhenVisible key={`${member.name}-${index}`} delay={index * 0.05}>
              <div
                className={`rounded-2xl p-6 text-center shadow-lg h-full ${
                  member.role === "Best Man" ? "bg-primary text-white" : "bg-white text-gray-900"
                }`}
              >
                <p className="font-serif text-xl md:text-2xl mb-2">{member.name}</p>
                <p className="text-xs uppercase tracking-widest font-semibold text-secondary">
                  {member.role}
                </p>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
}
