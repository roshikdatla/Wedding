"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeInWhenVisible } from "@/components/animations/FadeInWhenVisible";
import { GROOMSMAN_DATA } from "@/lib/constants";
import { MailingAddress } from "@/types";
import { PartyPopper, Loader2 } from "lucide-react";

type Choice = "yes" | "no" | null;
type Status = "idle" | "submitting" | "submitted" | "error";

const EMPTY_ADDRESS: MailingAddress = {
  line1: "",
  line2: "",
  city: "",
  state: "",
  zip: "",
  country: "United States",
};

interface ResponseSectionProps {
  guestName: string;
}

export function ResponseSection({ guestName }: ResponseSectionProps) {
  const [choice, setChoice] = useState<Choice>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [address, setAddress] = useState<MailingAddress>(EMPTY_ADDRESS);

  const submit = async (response: "yes" | "no", withAddress?: MailingAddress) => {
    setStatus("submitting");
    try {
      const res = await fetch("/api/respond", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: guestName,
          response,
          address: withAddress,
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("submitted");
    } catch {
      setStatus("error");
    }
  };

  const handleNo = () => {
    setChoice("no");
    submit("no");
  };

  const handleAddressSubmit = (e: FormEvent) => {
    e.preventDefault();
    submit("yes", address);
  };

  const updateAddress = (field: keyof MailingAddress, value: string) => {
    setAddress((prev) => ({ ...prev, [field]: value }));
  };

  const addressComplete =
    address.line1.trim() &&
    address.city.trim() &&
    address.state.trim() &&
    address.zip.trim() &&
    address.country.trim();

  return (
    <section id="respond" className="py-20 md:py-32 bg-primary">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <FadeInWhenVisible>
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-4">
            So, {guestName}, What Do You Say?
          </h2>
          <p className="text-white/70 mb-10">
            Let {GROOMSMAN_DATA.groom} know.
          </p>
        </FadeInWhenVisible>

        <AnimatePresence mode="wait">
          {choice === null && (
            <motion.div
              key="prompt"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button
                onClick={() => setChoice("yes")}
                className="px-8 py-4 bg-secondary text-primary font-semibold rounded-full hover:bg-secondary/90 transition-colors"
              >
                I&apos;m In!
              </button>
              <button
                onClick={handleNo}
                className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full border border-white/30 hover:bg-white/20 transition-colors"
              >
                Can&apos;t Make It
              </button>
            </motion.div>
          )}

          {choice === "yes" && status !== "submitted" && (
            <motion.form
              key="address"
              onSubmit={handleAddressSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 text-left"
            >
              <div className="flex items-center gap-2 justify-center mb-2">
                <PartyPopper className="w-6 h-6 text-secondary" />
                <p className="font-serif text-xl md:text-2xl text-primary">
                  Let&apos;s go, {guestName}!
                </p>
              </div>
              <p className="text-gray-600 text-center text-sm mb-6">
                Drop your latest mailing address so {GROOMSMAN_DATA.groom} can send you a groomsman gift.
              </p>

              <div className="space-y-4">
                <input
                  required
                  value={address.line1}
                  onChange={(e) => updateAddress("line1", e.target.value)}
                  placeholder="Street Address"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary"
                />
                <input
                  value={address.line2}
                  onChange={(e) => updateAddress("line2", e.target.value)}
                  placeholder="Apt / Suite / Unit (optional)"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    required
                    value={address.city}
                    onChange={(e) => updateAddress("city", e.target.value)}
                    placeholder="City"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                  <input
                    required
                    value={address.state}
                    onChange={(e) => updateAddress("state", e.target.value)}
                    placeholder="State / Province"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    required
                    value={address.zip}
                    onChange={(e) => updateAddress("zip", e.target.value)}
                    placeholder="ZIP / Postal Code"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                  <input
                    required
                    value={address.country}
                    onChange={(e) => updateAddress("country", e.target.value)}
                    placeholder="Country"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                </div>
              </div>

              {status === "error" && (
                <p className="text-red-600 text-sm mt-4 text-center">
                  Something went wrong — please try submitting again.
                </p>
              )}

              <div className="flex items-center justify-between mt-6">
                <button
                  type="button"
                  onClick={() => {
                    setChoice(null);
                    setStatus("idle");
                  }}
                  className="text-sm text-gray-500 hover:text-gray-700"
                >
                  ← Go back
                </button>
                <button
                  type="submit"
                  disabled={!addressComplete || status === "submitting"}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {status === "submitting" && <Loader2 className="w-4 h-4 animate-spin" />}
                  Submit
                </button>
              </div>
            </motion.form>
          )}

          {choice === "yes" && status === "submitted" && (
            <motion.div
              key="yes-done"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-3"
            >
              <PartyPopper className="w-10 h-10 text-secondary" />
              <p className="text-xl text-white font-serif">
                You&apos;re locked in, {guestName}. {GROOMSMAN_DATA.groom} has your address for the gift — more details coming soon.
              </p>
            </motion.div>
          )}

          {choice === "no" && status === "submitting" && (
            <motion.div
              key="no-loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-center"
            >
              <Loader2 className="w-6 h-6 text-white animate-spin" />
            </motion.div>
          )}

          {choice === "no" && status === "error" && (
            <motion.div
              key="no-error"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center gap-3"
            >
              <p className="text-white/80">Something went wrong sending your response.</p>
              <button
                onClick={handleNo}
                className="px-6 py-3 bg-white/10 text-white font-semibold rounded-full border border-white/30 hover:bg-white/20 transition-colors"
              >
                Try Again
              </button>
            </motion.div>
          )}

          {choice === "no" && status === "submitted" && (
            <motion.div
              key="no-done"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-3"
            >
              <p className="text-xl text-white font-serif">
                No worries at all, {guestName} — reach out to {GROOMSMAN_DATA.groom} whenever you can talk it through.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
