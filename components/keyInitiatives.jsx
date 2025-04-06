"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { School, HeartHandshake, Utensils, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const cardHover = {
  hover: { 
    y: -10,
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

const iconHover = {
  hover: {
    scale: 1.1,
    transition: { duration: 0.3 }
  }
};

const initiatives = [
  {
    id: 1,
    icon: <School className="w-8 h-8" />,
    title: "Education Support",
    description: "Providing educational resources and mentorship to underprivileged students through our comprehensive programs.",
    stats: "500+ Students",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    link: "/education"
  },
  {
    id: 2,
    icon: <HeartHandshake className="w-8 h-8" />,
    title: "Care Center Visits",
    description: "Regular visits to old age homes and orphanages to spread joy, companionship, and essential support.",
    stats: "24+ Monthly Visits",
    color: "text-rose-500",
    bgColor: "bg-rose-500/10",
    link: "/care-centers"
  },
  {
    id: 3,
    icon: <Utensils className="w-8 h-8" />,
    title: "Food Distribution",
    description: "Monthly food donation drives and community kitchens ensuring no one in our community goes hungry.",
    stats: "3000+ Meals Served",
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
    link: "/food-drives"
  }
];

export function KeyInitiatives() {
  return (
    <motion.section 
      className="py-20 bg-gradient-to-b from-white to-primary/5 dark:from-gray-900 dark:to-primary/10"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        initial: { opacity: 0 },
        animate: { 
          opacity: 1, 
          transition: { 
            staggerChildren: 0.2,
            delayChildren: 0.3
          } 
        }
      }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-30 -z-10" />
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          variants={fadeInUp}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Our Key Initiatives
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transforming lives through focused programs that create lasting impact in our communities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {initiatives.map((initiative) => (
            <motion.div 
              key={initiative.id}
              variants={fadeInUp}
              whileHover="hover"
              className="h-full"
            >
              <Card className="h-full p-0 overflow-hidden group border border-gray-200 dark:border-gray-800 hover:border-primary/50 transition-all duration-300">
                <motion.div
                  variants={cardHover}
                  className={`h-2 ${initiative.bgColor}`}
                />
                
                <div className="p-8">
                  <motion.div
                    variants={iconHover}
                    className={`w-16 h-16 ${initiative.bgColor} rounded-xl flex items-center justify-center ${initiative.color} mb-6`}
                  >
                    {initiative.icon}
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold mb-4">{initiative.title}</h3>
                  <p className="text-muted-foreground mb-6">{initiative.description}</p>
                  
                  <div className="flex items-center justify-between mt-8">
                    <span className="text-sm font-medium px-3 py-1 rounded-full bg-secondary/10 text-secondary">
                      {initiative.stats}
                    </span>
                    <Link href={initiative.link}>
                      <Button 
                        variant="ghost" 
                        className={`${initiative.color} hover:${initiative.bgColor}`}
                      >
                        Learn more <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-16"
          variants={fadeInUp}
        >
          <Link href="/initiatives">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-primary/30 transition-all"
            >
              View All Initiatives <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}