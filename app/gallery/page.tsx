"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.1",
    alt: "School Library Project",
    title: "School Library Project",
    category: "Education"
  },
  {
    src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.1",
    alt: "Food Distribution Drive",
    title: "Food Distribution Drive",
    category: "Community"
  },
  {
    src: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.1",
    alt: "Digital Learning Initiative",
    title: "Digital Learning Initiative",
    category: "Education"
  },
  {
    src: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.1",
    alt: "Community Workshop",
    title: "Community Workshop",
    category: "Community"
  },
  {
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.1",
    alt: "Youth Empowerment",
    title: "Youth Empowerment",
    category: "Education"
  },
  {
    src: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-4.0.1",
    alt: "Health Camp",
    title: "Health Camp",
    category: "Healthcare"
  },
  {
    src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.1",
    alt: "Food Distribution",
    title: "Food Distribution",
    category: "Community"
  },
  {
    src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.1",
    alt: "Rural Education",
    title: "Rural Education",
    category: "Education"
  }
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
    <main>
      {/* Hero Banner */}
      <div 
        className="relative h-[80vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.1")'
        }}
      >
        <motion.div 
          className="text-center text-white px-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl font-bold mb-6">Our Gallery</h1>
          <p className="text-2xl mb-8">
            Capturing moments of impact, hope, and transformation in our community
          </p>
          <div className="flex justify-center space-x-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-lg">Photos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-lg">Events</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">3</div>
              <div className="text-lg">Categories</div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Category Filter */}
        <motion.div 
          className="flex justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-primary text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          layout
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.src}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="group relative cursor-pointer overflow-hidden rounded-lg"
              onClick={() => openLightbox(index)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                  <p className="text-sm">{image.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox */}
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={lightboxIndex}
          slides={galleryImages}
        />
      </div>
    </main>
  );
}