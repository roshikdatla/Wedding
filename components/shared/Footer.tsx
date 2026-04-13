"use client";

import { WEDDING_DATA } from "@/lib/constants";
import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-white to-gray-100 py-12 border-t border-gray-200">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <Heart className="w-5 h-5 text-secondary fill-secondary" />
            <p className="font-serif text-2xl text-primary">
              {WEDDING_DATA.couple.bride} & {WEDDING_DATA.couple.groom}
            </p>
            <Heart className="w-5 h-5 text-secondary fill-secondary" />
          </div>

          <p className="text-gray-600">
            {WEDDING_DATA.date.full} • {WEDDING_DATA.venue.name}
          </p>

          <p className="text-lg font-medium text-primary">
            #<span className="text-yellow-400">P</span><span className="text-yellow-400">R</span>oposal
          </p>

          <div className="pt-6 border-t border-gray-300 mt-6">
            <p className="text-sm text-gray-500">
              © {currentYear} {WEDDING_DATA.couple.bride} & {WEDDING_DATA.couple.groom}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
