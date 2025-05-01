"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, HeartHandshake, Users, Lightbulb } from "lucide-react";
import { useInView } from "react-intersection-observer";

export function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section 
      ref={ref}
      className="relative py-20 overflow-hidden bg-gradient-to-br from-white to-primary/5"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary mb-4">
                About Our Foundation
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Who We Are
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                At Aasha Ki Ek Kiran, we believe that every small effort can create a ripple of change in the world. 
                Founded with the mission to support and uplift the underprivileged, we are a community-driven initiative 
                working tirelessly to provide education, food, medical aid, and emotional support to those who need it most.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="grid sm:grid-cols-2 gap-6 mb-10"
            >
              <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <HeartHandshake className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                <p className="text-gray-600">
                  To empower communities through sustainable support and education.
                </p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <Lightbulb className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Our Vision</h3>
                <p className="text-gray-600">
                  A world where every individual has equal opportunities to thrive.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-lg hover:shadow-primary/30 transition-all"
                >
                  Get Involved <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Video Section (Replaced Image) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
           <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <iframe
            className="w-full h-[400px] md:h-[500px] rounded-2xl"
            src="https://www.youtube.com/embed/2ThONcTu0-w?autoplay=1&mute=1&loop=1&playlist=2ThONcTu0-w&controls=0"
            title="YouTube video player"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />

              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />

              {/* Floating stats */}
              
            </div>

            {/* Decorative circle */}
            <div className="absolute -z-10 -top-8 -right-8 w-64 h-64 bg-primary/10 rounded-full blur-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
