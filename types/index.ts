export interface RSVPFormData {
  name: string;
  email: string;
  attendance: "yes" | "no" | "maybe";
  guestCount: number;
  dietaryRestrictions?: string;
  dietaryRestrictionsOther?: string;
  message?: string;
}

export interface Event {
  name: string;
  date: string;
  time: string;
  location: string;
  description: string;
}

export interface RegistryItem {
  name: string;
  url: string;
  icon: string;
}

export interface AnimationProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export interface ParallaxProps extends AnimationProps {
  speed?: number;
  direction?: "up" | "down";
}

export interface VideoBackgroundProps {
  videoSrc: string;
  posterSrc?: string;
  children?: React.ReactNode;
  overlay?: boolean;
}
