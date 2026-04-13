"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { FadeInWhenVisible } from "@/components/animations/FadeInWhenVisible";
import { RSVPFormData } from "@/types";
import { Mail, CheckCircle, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

export function RSVPSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [showOtherDietary, setShowOtherDietary] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RSVPFormData>();

  const onSubmit = async (data: RSVPFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Combine dietary restrictions
      let dietaryRestrictions = "";
      if (Array.isArray(data.dietaryRestrictions)) {
        dietaryRestrictions = data.dietaryRestrictions.join(", ");
        if (data.dietaryRestrictions.includes("Other") && data.dietaryRestrictionsOther) {
          dietaryRestrictions += ` (${data.dietaryRestrictionsOther})`;
        }
      } else if (data.dietaryRestrictions) {
        dietaryRestrictions = data.dietaryRestrictions;
      }

      const submissionData = {
        ...data,
        dietaryRestrictions,
      };

      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        reset();
        setShowOtherDietary(false);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="rsvp" className="py-20 md:py-32 bg-gradient-to-b from-accent/20 to-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <FadeInWhenVisible>
          <div className="text-center mb-12">
            <Mail className="w-12 h-12 text-secondary mx-auto mb-4" />
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4">
              RSVP
            </h2>
            <p className="text-lg text-gray-600">
              Please let us know if you can join us
            </p>
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.2}>
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name *
                </label>
                <input
                  {...register("name", { required: "Name is required" })}
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address *
                </label>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Will you attend? *
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {["yes", "no", "maybe"].map((option) => (
                    <label
                      key={option}
                      className="relative flex items-center justify-center p-3 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-primary transition-all"
                    >
                      <input
                        {...register("attendance", {
                          required: "Please select an option",
                        })}
                        type="radio"
                        value={option}
                        className="sr-only peer"
                      />
                      <span className="capitalize peer-checked:text-primary peer-checked:font-semibold">
                        {option}
                      </span>
                      <div className="absolute inset-0 border-2 border-primary rounded-lg opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                    </label>
                  ))}
                </div>
                {errors.attendance && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.attendance.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="guestCount"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Number of Guests *
                </label>
                <input
                  {...register("guestCount", {
                    required: "Guest count is required",
                    min: { value: 1, message: "Minimum 1 guest" },
                    max: { value: 10, message: "Maximum 10 guests" },
                  })}
                  type="number"
                  id="guestCount"
                  min="1"
                  max="10"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
                {errors.guestCount && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.guestCount.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Dietary Restrictions (For Saturday Dinner)
                </label>
                <div className="space-y-3">
                  <label className="flex items-center p-3 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-primary transition-all">
                    <input
                      {...register("dietaryRestrictions")}
                      type="checkbox"
                      value="None"
                      className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                    />
                    <span className="ml-3 text-gray-700">None</span>
                  </label>

                  <label className="flex items-center p-3 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-primary transition-all">
                    <input
                      {...register("dietaryRestrictions")}
                      type="checkbox"
                      value="Vegetarian/Vegan"
                      className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                    />
                    <span className="ml-3 text-gray-700">Vegetarian/Vegan</span>
                  </label>

                  <label className="flex items-center p-3 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-primary transition-all">
                    <input
                      {...register("dietaryRestrictions")}
                      type="checkbox"
                      value="Gluten-Free"
                      className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                    />
                    <span className="ml-3 text-gray-700">Gluten-Free</span>
                  </label>

                  <label className="flex items-center p-3 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-primary transition-all">
                    <input
                      {...register("dietaryRestrictions")}
                      type="checkbox"
                      value="Other"
                      onChange={(e) => setShowOtherDietary(e.target.checked)}
                      className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                    />
                    <span className="ml-3 text-gray-700">Other</span>
                  </label>

                  {showOtherDietary && (
                    <input
                      {...register("dietaryRestrictionsOther")}
                      type="text"
                      placeholder="Please specify..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all ml-7"
                    />
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message (Optional)
                </label>
                <textarea
                  {...register("message")}
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Send us a message..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-primary text-white rounded-full font-semibold text-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                {isSubmitting ? "Submitting..." : "Submit RSVP"}
              </motion.button>

              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 bg-green-50 text-green-700 rounded-lg"
                >
                  <CheckCircle className="w-5 h-5" />
                  <span>Thank you! Your RSVP has been received.</span>
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 bg-red-50 text-red-700 rounded-lg"
                >
                  <AlertCircle className="w-5 h-5" />
                  <span>Something went wrong. Please try again.</span>
                </motion.div>
              )}
            </form>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
