export interface AnimationProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export interface MailingAddress {
  line1: string;
  line2?: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

export interface ResponseSubmission {
  firstName: string;
  response: "yes" | "no";
  address?: MailingAddress;
}
