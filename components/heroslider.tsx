"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const slides = [
  {
    id: 1,
    title: "Empowering Lives Through Education",
    description: "We believe in creating opportunities for every child through education, nutrition, and support.",
    cta: "Our Causes",
    href: "/causes",
    image: "/images/banner-2.jpg",
    overlay: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5))"
  },
  {
    id: 2,
    title: "Supporting Communities",
    description: "Building stronger communities through education and support programs.",
    cta: "Get Involved",
    href: "/causes",
    image: "/images/banner-1.jpg",
    overlay: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6))"
  },
  {
    id: 3,
    title: "Making Dreams Come True",
    description: "Helping students achieve their educational goals and build a better future.",
    cta: "Contact Us",
    href: "/contact",
    image: "/images/banner-3.jpg",
    overlay: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7))"
  }
];

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export function HeroSlider() {
  return (
    <section className="relative h-screen max-h-[700px] w-full">
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/10 to-transparent opacity-30" />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-background to-transparent z-10" />
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1000}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{ 
          clickable: true,
          el: '.swiper-pagination',
          type: 'bullets',
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active'
        }}
        autoplay={{ 
          delay: 7000,
          disableOnInteraction: false
        }}
        loop={true}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full">
              {/* Background image with optimized loading */}
              <div className="absolute inset-0">
                <Image
                  src={slide.image}
                  alt=""
                  fill
                  priority
                  quality={80}
                  className="object-cover"
                  style={{
                    backgroundImage: slide.overlay,
                    backgroundBlendMode: 'multiply'
                  }}
                />
              </div>

              {/* Content */}
              <div className="relative h-full flex items-center justify-center px-4 z-10">
                <motion.div 
                  className="text-center max-w-4xl px-4"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: {
                      transition: { staggerChildren: 0.2 }
                    }
                  }}
                >
                  <motion.h1 
                    className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
                    variants={textVariants}
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p 
                    className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto"
                    variants={textVariants}
                  >
                    {slide.description}
                  </motion.p>
                  <motion.div variants={textVariants}>
                    <Link href={slide.href}>
                      <Button 
                        size="lg" 
                        className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-primary/30 transition-all group"
                      >
                        {slide.cta}
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation */}
        <div className="swiper-button-next after:hidden !text-white hover:!text-primary transition-colors">
          <div className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 hover:border-primary/50">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
        <div className="swiper-button-prev after:hidden !text-white hover:!text-primary transition-colors">
          <div className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 hover:border-primary/50">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
        </div>

        {/* Custom Pagination */}
        <div className="swiper-pagination !bottom-8" />
      </Swiper>

      {/* Scrolling indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:block">
        <div className="animate-bounce w-8 h-14 rounded-full border-2 border-white/50 flex justify-center p-1">
          <div className="w-2 h-2 rounded-full bg-white mt-2" />
        </div>
      </div>
    </section>
  );
}