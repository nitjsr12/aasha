"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Image from "next/image";

const galleryImages = [
  { src: "/images/2.jpeg", alt: "School Library Project", title: "School Library Project" },
  { src: "/images/3.jpeg", alt: "Food Distribution Drive", title: "Food Distribution Drive" },
  { src: "/images/4.jpeg", alt: "Digital Learning Initiative", title: "Digital Learning Initiative" },
  { src: "/images/5.jpeg", alt: "Community Workshop", title: "Community Workshop" },
  { src: "/images/6.jpeg", alt: "Youth Empowerment", title: "Youth Empowerment" },
  { src: "/images/7.jpeg", alt: "Health Camp", title: "Health Camp" },
  { src: "/images/8.jpeg", alt: "Food Distribution", title: "Food Distribution" },
  { src: "/images/9.jpeg", alt: "Rural Education", title: "Rural Education" },
  { src: "/images/10.jpeg", alt: "Rural Education", title: "Rural Education" },
  { src: "/images/11.jpeg", alt: "Rural Education", title: "Rural Education" },
  { src: "/images/12.jpeg", alt: "Rural Education", title: "Rural Education" },
  { src: "/images/13.jpeg", alt: "Rural Education", title: "Rural Education" },
  { src: "/images/15.jpeg", alt: "Rural Education", title: "Rural Education" },
  { src: "/images/16.jpeg", alt: "Rural Education", title: "Rural Education" },
  { src: "/images/18.jpeg", alt: "Rural Education", title: "Rural Education" },
  { src: "/images/19.jpeg", alt: "Rural Education", title: "Rural Education" },
  { src: "/images/20.jpeg", alt: "Rural Education", title: "Rural Education" },
  { src: "/images/21.jpeg", alt: "Rural Education", title: "Rural Education" },
  { src: "/images/22.jpeg", alt: "Rural Education", title: "Rural Education" },
  { src: "/images/23.jpeg", alt: "Rural Education", title: "Rural Education" },
  { src: "/images/24.jpeg", alt: "Rural Education", title: "Rural Education" },
  { src: "/images/26.jpeg", alt: "Rural Education", title: "Rural Education" },
 
];

export default function GalleryPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

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

      {/* Gallery Grid */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
        >
          <AnimatePresence>
            {galleryImages.map((image, index) => (
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
                 
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={lightboxIndex}
          slides={galleryImages.map(img => ({ src: img.src, alt: img.alt }))}
        />
      </section>
    </main>
  );
}