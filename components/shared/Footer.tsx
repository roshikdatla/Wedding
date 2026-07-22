"use client";

import { GROOMSMAN_DATA } from "@/lib/constants";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-gray-100 py-12 border-t border-gray-200">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <Heart className="w-5 h-5 text-secondary fill-secondary" />
            <p className="font-serif text-2xl text-primary">{GROOMSMAN_DATA.groom}</p>
            <Heart className="w-5 h-5 text-secondary fill-secondary" />
          </div>

          <p className="text-gray-600">
            {GROOMSMAN_DATA.wedding.dateFull} • {GROOMSMAN_DATA.wedding.location}
          </p>

          <p className="text-lg font-medium text-primary">{GROOMSMAN_DATA.contact.hashtag}</p>
        </div>
      </div>
    </footer>
  );
}
