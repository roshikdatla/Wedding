"use client";

import { WEDDING_DATA } from "@/lib/constants";
import { MapPin } from "lucide-react";
import Image from "next/image";

export function EventMap() {
  return (
    <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
      {/* Map Image */}
      <div className="relative w-full h-full">
        <Image
          src="/usanordest34.gif"
          alt="Northeastern USA Map"
          fill
          className="object-contain"
          priority
          unoptimized
        />

        {/* NYC Marker - positioned over New York area */}
        <div className="absolute top-[72%] left-[64%] transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <div className="absolute w-8 h-8 bg-red-500 rounded-full animate-pulse opacity-60"></div>
            <div className="relative w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xl font-bold">★</span>
            </div>
          </div>
        </div>
      </div>

      {/* Arrows from marker to info card */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-[5]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 10 3, 0 6" fill="#EF4444" />
          </marker>
        </defs>
        {/* First arrow */}
        <line
          x1="64%"
          y1="72%"
          x2="calc(100% - 280px)"
          y2="100"
          stroke="#EF4444"
          strokeWidth="2"
          strokeDasharray="5,5"
          markerEnd="url(#arrowhead)"
          opacity="0.7"
        />
        {/* Second arrow */}
        <line
          x1="64%"
          y1="72%"
          x2="calc(100% - 280px)"
          y2="140"
          stroke="#EF4444"
          strokeWidth="2"
          strokeDasharray="5,5"
          markerEnd="url(#arrowhead)"
          opacity="0.7"
        />
      </svg>

      {/* Event Info Card */}
      <div className="absolute top-8 right-8 bg-white p-4 rounded-2xl shadow-2xl border-2 border-rose-200 max-w-xs z-10">
        <div className="flex items-start gap-2 mb-3">
          <MapPin className="w-5 h-5 text-rose-500 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-serif text-xl font-bold text-rose-600">
              {WEDDING_DATA.couple.bride} & {WEDDING_DATA.couple.groom}'s Proposal
            </h3>
          </div>
        </div>

        <div className="space-y-3 text-sm">
          <div>
            <p className="font-semibold text-gray-800 mb-1">
              {WEDDING_DATA.venue.name}
            </p>
            <p className="text-gray-600 text-xs">
              Join us for an unforgettable celebration as we begin our journey together
            </p>
          </div>

          <div className="pt-2 border-t border-gray-200">
            <p className="text-gray-800 font-semibold text-xs mb-1">Date</p>
            <p className="text-gray-600 text-xs">{WEDDING_DATA.date.full}</p>
          </div>

          <div className="pt-2 border-t border-gray-200">
            <p className="text-gray-800 font-semibold text-xs mb-1">Schedule</p>
            {WEDDING_DATA.events.map((event) => (
              <div key={event.name} className="mb-1">
                <p className="font-semibold text-rose-600 text-xs">{event.name}</p>
                <p className="text-gray-600 text-xs">{event.time}</p>
              </div>
            ))}
          </div>

          <div className="pt-2 border-t border-gray-200">
            <p className="text-gray-500 text-xs italic">
              More details will be shared closer to the date
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
