export const WEDDING_DATA = {
  couple: {
    bride: "Priya",
    groom: "Rohan",
  },
  date: {
    full: "May 9, 2026",
    iso: "2026-05-09",
    time: "4:00 PM",
  },
  venue: {
    name: "New York City, New York",
    address: "123 Wedding Lane, City, State 12345",
    coordinates: {
      lat: 40.7128,
      lng: -74.0060,
    },
  },
  events: [
    {
      name: "Proposal",
      date: "May 9, 2026",
      time: "4:00 PM",
      location: "New York City, New York",
      description: "Join us for a special moment",
    },
    {
      name: "Reception",
      date: "May 9, 2026",
      time: "6:00 PM",
      location: "New York City, New York",
      description: "Dinner, dancing, and celebration",
    },
  ],
  dressCode: {
    title: "Formal Attire",
    description: "We kindly request formal attire for our special day",
    colors: [
      { name: "Navy Blue", hex: "#1e3a8a" },
      { name: "Gold", hex: "#f59e0b" },
      { name: "Champagne", hex: "#f5e6d3" },
      { name: "Ivory", hex: "#fffff0" },
    ],
  },
  story: {
    howWeMet: {
      title: "How We Met",
      content: "Our story began in the summer of 2020, when we both attended a mutual friend's rooftop gathering. Priya's infectious laughter caught Rohan's attention from across the room, and he couldn't help but introduce himself. From that moment on, we've been inseparable.",
    },
  },
  registry: [
    {
      name: "Amazon",
      url: "https://amazon.com/wedding/registry",
      icon: "🎁",
    },
    {
      name: "Zola",
      url: "https://zola.com/registry",
      icon: "💝",
    },
  ],
  contact: {
    email: "priyaandrohan@wedding.com",
    hashtag: "#PRoposal",
  },
} as const;

export const COLORS = {
  primary: "#1e3a8a",
  secondary: "#f59e0b",
  accent: "#f5e6d3",
  background: "#fffff0",
  text: "#1f2937",
} as const;
