"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface PasswordGateProps {
  onAuthenticated: () => void;
}

export function PasswordGate({ onAuthenticated }: PasswordGateProps) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "password") {
      onAuthenticated();
    } else {
      setError(true);
      setPassword("");
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-500 via-red-400 to-pink-500">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full mx-4"
      >
        <h1 className="font-serif text-3xl md:text-4xl text-center text-gray-900 mb-2">
          Welcome
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Please enter the password to continue
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 transition-all ${
              error
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-rose-500"
            }`}
            autoFocus
          />

          {error && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-500 text-sm mt-2"
            >
              Incorrect password. Please try again.
            </motion.p>
          )}

          <button
            type="submit"
            className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold rounded-lg hover:from-rose-600 hover:to-pink-600 transition-all shadow-lg hover:shadow-xl"
          >
            Enter
          </button>
        </form>
      </motion.div>
    </div>
  );
}
