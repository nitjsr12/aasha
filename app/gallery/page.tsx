"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Image from "next/image";

const galleryImages = [
  { src: "/images/2.jpeg", alt: "School Library Project", title: "School Library Project", category: "Education" },
  { src: "/images/3.jpeg", alt: "Food Distribution Drive", title: "Food Distribution Drive", category: "Community" },
  { src: "/images/4.jpeg", alt: "Digital Learning Initiative", title: "Digital Learning Initiative", category: "Education" },
  { src: "/images/5.jpeg", alt: "Community Workshop", title: "Community Workshop", category: "Community" },
  { src: "/images/6.jpeg", alt: "Youth Empowerment", title: "Youth Empowerment", category: "Education" },
  { src: "/images/7.jpeg", alt: "Health Camp", title: "Health Camp", category: "Healthcare" },
  { src: "/images/8.jpeg", alt: "Food Distribution", title: "Food Distribution", category: "Community" },
  { src: "/images/9.jpeg", alt: "Rural Education", title: "Rural Education", category: "Education" },
  { src: "/images/10.jpeg", alt: "Rural Education", title: "Rural Education", category: "Education" },
  { src: "/images/11.jpeg", alt: "Rural Education", title: "Rural Education", category: "Education" },
  { src: "/images/12.jpeg", alt: "Rural Education", title: "Rural Education", category: "Education" },
  { src: "/images/13.jpeg", alt: "Rural Education", title: "Rural Education", category: "Education" },
  { src: "/images/14.jpeg", alt: "Rural Education", title: "Rural Education", category: "Education" },
  { src: "/images/15.jpeg", alt: "Rural Education", title: "Rural Education", category: "Education" },
  { src: "/images/16.jpeg", alt: "Rural Education", title: "Rural Education", category: "Education" },
  { src: "/images/18.jpeg", alt: "Rural Education", title: "Rural Education", category: "Education" },
  { src: "/images/19.jpeg", alt: "Rural Education", title: "Rural Education", category: "Education" },
  { src: "/images/20.jpeg", alt: "Rural Education", title: "Rural Education", category: "Education" },
  { src: "/images/21.jpeg", alt: "Rural Education", title: "Rural Education", category: "Education" },
  { src: "/images/22.jpeg", alt: "Rural Education", title: "Rural Education", category: "Education" },
  { src: "/images/23.jpeg", alt: "Rural Education", title: "Rural Education", category: "Education" },
  { src: "/images/24.jpeg", alt: "Rural Education", title: "Rural Education", category: "Education" },
  { src: "/images/26.jpeg", alt: "Rural Education", title: "Rural Education", category: "Education" },
  { src: "/images/27.jpeg", alt: "Rural Education", title: "Rural Education", category: "Education" },
];

const categories = ["All", "Education", "Community", "Healthcare"];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredImages = selectedCategory === "All"
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="relative h-[70vh] w-full">
        <Image
          src="/images/banner-3.jpg"
          alt="Gallery Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end px-6 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white max-w-3xl mx-auto"
          >
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Our Gallery</h1>
            <p className="text-md md:text-xl">Capturing moments of hope, change, and community transformation</p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium text-sm md:text-base transition-colors duration-300 ${
                selectedCategory === category
                  ? "bg-primary text-white shadow-lg"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        {filteredImages.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
          >
            <AnimatePresence>
              {filteredImages.map((image, index) => (
                <motion.div
                  key={`${image.src}-${index}`}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4 }}
                  className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer group"
                  onClick={() => openLightbox(index)}
                >
                  <div className="aspect-square">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={500}
                      height={500}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-lg font-bold text-white">{image.title}</h3>
                    <p className="text-xs text-gray-200">{image.category}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="flex justify-center py-12">
            <p className="text-lg text-gray-500">No images found in this category</p>
          </div>
        )}

        {/* Lightbox */}
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={lightboxIndex}
          slides={filteredImages.map(img => ({ src: img.src, alt: img.alt }))}
        />
      </section>
    </main>
  );
}
