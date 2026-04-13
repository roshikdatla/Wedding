"use client";

import { FadeInWhenVisible } from "@/components/animations/FadeInWhenVisible";
import { Camera } from "lucide-react";
import { motion } from "framer-motion";

export function GallerySection() {
  // Placeholder gallery items - replace with real images
  const placeholderImages = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    alt: `Gallery image ${i + 1}`,
  }));

  return (
    <section id="gallery" className="py-20 md:py-32 bg-gradient-to-b from-white to-accent/20">
      <div className="container mx-auto px-4 max-w-7xl">
        <FadeInWhenVisible>
          <div className="text-center mb-16">
            <Camera className="w-12 h-12 text-secondary mx-auto mb-4" />
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4">
              Our Memories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A glimpse into our journey together
            </p>
          </div>
        </FadeInWhenVisible>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {placeholderImages.map((image, index) => (
            <FadeInWhenVisible key={image.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="aspect-square rounded-2xl overflow-hidden shadow-lg cursor-pointer bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center"
              >
                <div className="text-center p-8">
                  <Camera className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500 text-sm">
                    Photo {image.id}
                  </p>
                  <p className="text-xs text-gray-400 mt-2">
                    Add your photos here
                  </p>
                </div>
              </motion.div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
}
