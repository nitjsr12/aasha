"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, HeartHandshake, Users, Lightbulb } from "lucide-react";
import Image from "next/image";
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
      className="relative py-20 overflow-hidden bg-gradient-to-br from-white to-primary/5 dark:from-gray-900 dark:to-primary/10"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 }
              }
            }}
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary mb-4">
                About Our Foundation
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Who We Are
                </span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                At Aasha Ki Ek Kiran, we believe that every small effort can create a ripple of change in the world. 
                Founded with the mission to support and uplift the underprivileged, we are a community-driven initiative 
                working tirelessly to provide education, food, medical aid, and emotional support to those who need it most.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="grid sm:grid-cols-2 gap-6 mb-10"
            >
              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700">
                <HeartHandshake className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  To empower communities through sustainable support and education.
                </p>
              </div>
              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700">
                <Lightbulb className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Our Vision</h3>
                <p className="text-gray-600 dark:text-gray-300">
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

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/aboutus.jpg"
                alt="Our team helping the community"
                width={600}
                height={800}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
              
              {/* Floating stats */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                  <div className="flex flex-wrap justify-between gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">10+</div>
                      <div className="text-gray-600 dark:text-gray-300">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">500+</div>
                      <div className="text-gray-600 dark:text-gray-300">Volunteers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">50+</div>
                      <div className="text-gray-600 dark:text-gray-300">Communities</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -z-10 -top-8 -right-8 w-64 h-64 bg-primary/10 rounded-full blur-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}