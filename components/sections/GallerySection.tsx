"use client";

import { FadeInWhenVisible } from "@/components/animations/FadeInWhenVisible";
import { Camera } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function GallerySection() {
  const galleryImages = [
    { id: 1, src: "/15d51096-8807-4ce6-a054-6ebd44badefd.JPG", alt: "Priya and Rohan" },
    { id: 2, src: "/2d261c38-a989-4f44-846f-b2e1f8648101.JPG", alt: "Priya and Rohan" },
    { id: 3, src: "/45bba2d6-8b2e-487a-8811-642520d34629.JPG", alt: "Priya and Rohan" },
    { id: 4, src: "/46b092e1-50ea-432a-a0f9-487130d6d304.JPG", alt: "Priya and Rohan" },
    { id: 5, src: "/839d325c-3c0a-4cde-babc-1a3a8c194276.JPG", alt: "Priya and Rohan" },
    { id: 6, src: "/a4c52662-50de-44fd-a96d-c50ec384ca6e.JPG", alt: "Priya and Rohan" },
  ];

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
          {galleryImages.map((image, index) => (
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
