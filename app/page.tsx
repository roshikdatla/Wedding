"use client";

import { useState, useEffect } from "react";
import { Navigation } from "@/components/shared/Navigation";
import { Footer } from "@/components/shared/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { EventsSection } from "@/components/sections/EventsSection";
import { DressCodeSection } from "@/components/sections/DressCodeSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { RSVPSection } from "@/components/sections/RSVPSection";
import { PasswordGate } from "@/components/shared/PasswordGate";
import { ChatBot } from "@/components/shared/ChatBot";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is already authenticated in this session
    const authenticated = sessionStorage.getItem("authenticated");
    if (authenticated === "true") {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleAuthenticated = () => {
    sessionStorage.setItem("authenticated", "true");
    setIsAuthenticated(true);
  };

  if (isLoading) {
    return null; // or a loading spinner
  }

  if (!isAuthenticated) {
    return <PasswordGate onAuthenticated={handleAuthenticated} />;
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />

        {/* Proposal Details Section */}
        <div id="proposal-details">
          <EventsSection />
          <DressCodeSection />
          <GallerySection />
          <RSVPSection />
        </div>
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
}
