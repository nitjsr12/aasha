"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Users, Calendar, PhoneCall, ArrowRight } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const cardHover = {
  hover: { 
    y: -5,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
  }
};

const iconHover = {
  hover: {
    scale: 1.1,
    transition: { duration: 0.3 }
  }
};

export function JoinMission() {
  const options = [
    {
      id: 1,
      icon: <Users className="w-8 h-8" />,
      title: "Become a Volunteer",
      description: "Join our team of dedicated volunteers and make a lasting impact in someone's life through your time and skills.",
      action: "Join Now",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      id: 2,
      icon: <Calendar className="w-8 h-8" />,
      title: "Attend Our Events",
      description: "Participate in our community events and fundraising activities to help create positive change.",
      action: "View Calendar",
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10"
    },
    {
      id: 3,
      icon: <PhoneCall className="w-8 h-8" />,
      title: "Get in Touch",
      description: "Have questions or want to collaborate? Our team is ready to help you make a difference.",
      action: "Contact Us",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    }
  ];

  return (
    <motion.section 
      className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5"
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
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          variants={fadeInUp}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Get Involved
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Join Our Mission
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how you can contribute to our cause and make a real difference in people's lives.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {options.map((option) => (
            <motion.div 
              key={option.id}
              variants={fadeInUp}
              whileHover="hover"
              className="h-full"
            >
              <Card className="h-full overflow-hidden group border border-gray-200 dark:border-gray-800 hover:border-primary/50 transition-all duration-300">
                <div className="p-8">
                  <motion.div
                    variants={iconHover}
                    className={`w-16 h-16 ${option.bgColor} rounded-xl flex items-center justify-center ${option.color} mb-6 mx-auto`}
                  >
                    {option.icon}
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-center">{option.title}</h3>
                  <p className="text-muted-foreground mb-6 text-center">{option.description}</p>
                  
                  <Link href="/contact" className="block mt-8">
                    <Button 
                      className={`w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-primary/30 transition-all group ${option.bgColor}`}
                    >
                      {option.action} 
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-16"
          variants={fadeInUp}
        >
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Not sure how you can help? We'll help you find the perfect way to contribute.
          </p>
          <Link href="/contact">
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              Let's Find Your Role <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}