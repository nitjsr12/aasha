"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Calendar, MapPin, Clock, Users } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

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

const events = [
  {
    id: 1,
    title: "Annual Charity Gala",
    description: "Join us for an evening of fundraising to support our education initiatives. Black tie optional.",
    date: "May 15, 2024",
    time: "7:00 PM",
    location: "Grand Ballroom, City Convention Center",
    image: "/images/gala.webp",
    status: "Upcoming",
    attendees: "120+ Registered",
    action: "Register Now"
  },
  {
    id: 2,
    title: "Community Health Camp",
    description: "Free health checkups and medical consultations for underprivileged communities.",
    date: "June 8, 2024",
    time: "9:00 AM - 4:00 PM",
    location: "Central Park Community Center",
    image: "/images/health-camp.webp",
    status: "Upcoming",
    attendees: "Volunteers Needed",
    action: "Volunteer"
  },
  {
    id: 3,
    title: "Back-to-School Drive",
    description: "Help us distribute school supplies to 1000+ children in need before the new academic year.",
    date: "July 20, 2024",
    time: "10:00 AM - 2:00 PM",
    location: "Downtown Plaza",
    image: "/images/school-drive.webp",
    status: "Upcoming",
    attendees: "50+ Volunteers",
    action: "Donate Supplies"
  }
];

export function UpcomingEventsSection() {
  return (
    <motion.section 
      className="py-20 bg-gradient-to-b from-white to-secondary/5 dark:from-gray-900 dark:to-secondary/10"
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
      <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-r from-secondary/10 to-primary/10 opacity-30 -z-10" />
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          variants={fadeInUp}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            Get Involved
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              Upcoming Events
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join us in our upcoming initiatives and make a difference in your community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {events.map((event) => (
            <motion.div 
              key={event.id}
              variants={fadeInUp}
              whileHover="hover"
              className="h-full"
            >
              <Card className="h-full overflow-hidden group border border-gray-200 dark:border-gray-800 hover:border-secondary/50 transition-all duration-300">
                <motion.div
                  variants={cardHover}
                  className="relative aspect-video"
                >
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-white text-secondary">
                      {event.status}
                    </span>
                  </div>
                </motion.div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">{event.title}</h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-6">{event.description}</p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start space-x-3">
                      <Calendar className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium">{event.date}</p>
                        <p className="text-xs text-muted-foreground">{event.time}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <p className="text-sm font-medium">{event.location}</p>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-secondary" />
                      <p className="text-sm font-medium">{event.attendees}</p>
                    </div>
                  </div>
                  
                  <Button 
                    variant="secondary" 
                    className="w-full group-hover:bg-primary group-hover:text-white transition-colors"
                  >
                    {event.action}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-16"
          variants={fadeInUp}
        >
        </motion.div>
      </div>
    </motion.section>
  );
}