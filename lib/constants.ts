export const GROOMSMAN_DATA = {
  groom: "Rohan",
  partner: "Priya",
  wedding: {
    dateFull: "May 9, 2026",
    dateIso: "2026-05-09",
    location: "New York City, New York",
  },
  ask: {
    heading: "Will You Be My Groomsman?",
    subheading: "I'm getting married — and I need my guys next to me when it happens.",
  },
  message: {
    title: "A Few Words",
    paragraphs: [
      "We've been through a lot together, and I can't picture the day I marry Priya without you standing up there with me.",
      "So here it is, official and in writing: will you be one of my groomsmen?",
    ],
  },
  details: [
    {
      label: "The Wedding",
      value: "May 9, 2026",
      note: "New York City — save the date, more info soon.",
    },
    {
      label: "Attire",
      value: "Navy Suit",
      note: "Fitting and rental details coming your way.",
    },
    {
      label: "Bachelor Party",
      value: "TBD",
      note: "Planning in progress — stay tuned.",
    },
  ],
  gallery: {
    title: "Good Times",
    subtitle: "A few of the memories that got us here",
    images: [
      { id: 1, src: "/15d51096-8807-4ce6-a054-6ebd44badefd.JPG", alt: "The crew" },
      { id: 2, src: "/2d261c38-a989-4f44-846f-b2e1f8648101.JPG", alt: "The crew" },
      { id: 3, src: "/45bba2d6-8b2e-487a-8811-642520d34629.JPG", alt: "The crew" },
      { id: 4, src: "/46b092e1-50ea-432a-a0f9-487130d6d304.JPG", alt: "The crew" },
      { id: 5, src: "/839d325c-3c0a-4cde-babc-1a3a8c194276.JPG", alt: "The crew" },
      { id: 6, src: "/a4c52662-50de-44fd-a96d-c50ec384ca6e.JPG", alt: "The crew" },
      { id: 7, src: "/IMG_5868.jpg", alt: "The crew" },
      { id: 8, src: "/IMG_8841.jpg", alt: "The crew" },
      { id: 9, src: "/IMG_7828.jpg", alt: "The crew" },
      { id: 10, src: "/IMG_8463.jpg", alt: "The crew" },
    ],
  },
  contact: {
    email: "rohan@example.com",
    hashtag: "#GroomsmenForRohan",
  },
} as const;
