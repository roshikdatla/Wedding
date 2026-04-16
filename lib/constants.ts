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
    title: "The Look",
    description: "A soft, romantic palette of light neutral gowns and deep-toned suits pairs with a floral-forward décor and a cityscape backdrop, creating an elegant, modern celebration where the couple remains the focal point.",
    ladies: {
      description: "Long gowns in soft, solid shades such as lavender, beige, or peach are encouraged to create a light, elegant palette—please try to avoid patterns and dark colors.",
      colors: [
        { name: "Lavender", hex: "#C8B3CE", pantone: "15-3817 TCX" },
        { name: "Beige", hex: "#D4C4A8", pantone: "14-1118 TPG" },
        { name: "Pale Peach", hex: "#F3D5C8", pantone: "12-0915 TCX" },
      ],
    },
    gentlemen: {
      description: "Navy blue suits are preferred; other dark colors are welcome—please avoid black. Pair with a white shirt; bow ties will be provided on site for all men",
      colors: [
        { name: "Navy", hex: "#003057", pantone: "296 CP" },
      ],
    },
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
