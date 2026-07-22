"use client";

import { useState, useEffect } from "react";
import { Navigation } from "@/components/shared/Navigation";
import { Footer } from "@/components/shared/Footer";
import { EnvelopeIntro } from "@/components/shared/EnvelopeIntro";
import { HeroSection } from "@/components/sections/HeroSection";
import { AskSection } from "@/components/sections/AskSection";
import { DetailsSection } from "@/components/sections/DetailsSection";
import { RosterSection } from "@/components/sections/RosterSection";
import { ResponseSection } from "@/components/sections/ResponseSection";

export default function Home() {
  const [guestName, setGuestName] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedName = sessionStorage.getItem("guestName");
    if (storedName) {
      setGuestName(storedName);
    }
    setIsLoading(false);
  }, []);

  const handleOpened = (name: string) => {
    sessionStorage.setItem("guestName", name);
    setGuestName(name);
  };

  if (isLoading) {
    return null;
  }

  if (!guestName) {
    return <EnvelopeIntro onOpened={handleOpened} />;
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AskSection />
        <DetailsSection />
        <RosterSection />
        <ResponseSection guestName={guestName} />
      </main>
      <Footer />
    </div>
  );
}
