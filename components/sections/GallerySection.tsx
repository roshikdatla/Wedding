"use client";

import { FadeInWhenVisible } from "@/components/animations/FadeInWhenVisible";
import { GROOMSMAN_DATA } from "@/lib/constants";
import { Camera } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function GallerySection() {
  const { title, subtitle, images } = GROOMSMAN_DATA.gallery;

  return (
    <section id="gallery" className="py-20 md:py-32 bg-gradient-to-b from-white to-accent/20">
      <div className="container mx-auto px-4 max-w-7xl">
        <FadeInWhenVisible>
          <div className="text-center mb-16">
            <Camera className="w-12 h-12 text-secondary mx-auto mb-4" />
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4">
              {title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
          </div>
        </FadeInWhenVisible>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <FadeInWhenVisible key={image.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="aspect-square rounded-2xl overflow-hidden shadow-lg cursor-pointer relative"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </motion.div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
}
