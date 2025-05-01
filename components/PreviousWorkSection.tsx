"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Play, ExternalLink ,Calendar } from "lucide-react";
import dynamic from "next/dynamic";
import { useState } from "react";
import Image from "next/image";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { 
  ssr: false,
  loading: () => <div className="aspect-video bg-gray-200 animate-pulse rounded-t-lg" />
});

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

const projects = [
  {
    id: 1,
    title: "Study Material Donation",
    description: "Distributed essential study materials to girls at orphanage homes, empowering their education and dreams.",
    date: "Feb 11, 2022",
    status: "Completed",
    videoUrl: "https://youtu.be/vSrv11UqpWU?si=jR0arl48FzeDga3B", // (keep your video or update if needed)
    thumbnail: "/images/mq4.webp", // (keep or update thumbnail if needed)
    stats: "50+ Girls • 1 Orphanage"
  },
  {
      id: 2,
      title: "Birthday Celebration at Orphanage",
      description: "Celebrated my birthday by donating study materials and sweets to the children at the orphanage, spreading smiles and hope.",
      date: "Jan 15, 2022",
      status: "Completed",
      videoUrl: "https://youtu.be/AHeuz4cT0Xo", // keep or update the video link if needed
      thumbnail: "/images/mq2.webp", // keep or update thumbnail
      stats: "40+ Children • 1 Orphanage "
    },
  {
      id: 3,
      title: "Independence Day Celebration",
      description: "Celebrated Independence Day with children at the orphanage, organizing fun activities, flag hoisting, and distributing sweets.",
      date: "August 15, 2022",
      status: "Completed",
      videoUrl: "https://youtu.be/nGpTi3dqrpE", // update if you have a different video
      thumbnail: "/images/mq3.webp", // update if you have a new image
      stats: "50+ Children • 1 Orphanage"
    }
    
];

export function PreviousWorkSection() {
  const [playingId, setPlayingId] = useState<number | null>(null);

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
            Our Impact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Previous Work Showcase
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how we've made a difference through our completed initiatives and projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              variants={fadeInUp}
              whileHover="hover"
              className="h-full"
            >
              <Card className="h-full overflow-hidden group border border-gray-200 dark:border-gray-800 hover:border-primary/50 transition-all duration-300">
                <motion.div
                  variants={cardHover}
                  className="relative aspect-video"
                >
                  {playingId === project.id ? (
                    <ReactPlayer
                      url={project.videoUrl}
                      width="100%"
                      height="100%"
                      playing={true}
                      controls={true}
                      onEnded={() => setPlayingId(null)}
                    />
                  ) : (
                    <>
                      <Image
                        src={project.thumbnail}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <button
                          onClick={() => setPlayingId(project.id)}
                          className="w-16 h-16 rounded-full bg-white/90 hover:bg-white transition-all flex items-center justify-center group-hover:scale-110"
                        >
                          <Play className="w-6 h-6 text-primary fill-primary ml-1" />
                        </button>
                      </div>
                    </>
                  )}
                </motion.div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-secondary/10 text-secondary">
                      {project.status}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground mb-6">{project.description}</p>
                  
                  <div className="flex items-center justify-between mt-6">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">{project.date}</span>
                    </div>
                    <span className="text-xs font-medium px-2 py-1 rounded bg-primary/10 text-primary">
                      {project.stats}
                    </span>
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
          <Link href="/previous-causes">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-primary/30 transition-all group"
            >
              View All Stories
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}