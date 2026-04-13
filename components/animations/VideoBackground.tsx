"use client";

import { VideoBackgroundProps } from "@/types";

export function VideoBackground({
  videoSrc,
  posterSrc,
  children,
  overlay = true,
}: VideoBackgroundProps) {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={posterSrc}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      )}

      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
