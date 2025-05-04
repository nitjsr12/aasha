"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { Calendar, Users, BookOpen, Heart, ArrowRight, Play } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

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
    date: "March 2024",
    status: "Completed",
    videoUrl: "https://youtu.be/2ThONcTu0-w", // (keep your video or update if needed)
    thumbnail: "/images/mq4.webp", // (keep or update thumbnail if needed)
    stats: "50+ Girls • 1 Orphan Homes"
  },
  {
      id: 2,
      title: "Birthday Celebration at Orphanage",
      description: "Celebrated my birthday by donating study materials and sweets to the children at the orphanage, spreading smiles and hope.",
      date: "April 2024",
      status: "Completed",
      videoUrl: "https://youtu.be/AHeuz4cT0Xo", // keep or update the video link if needed
      thumbnail: "/images/mq2.webp", // keep or update thumbnail
      stats: "40+ Children • 1 Orphanage Home"
    },
    {
      id: 3,
      title: "Republic Day Celebration",
      description: "Honored Republic Day with a vibrant celebration at the orphanage, including a flag hoisting ceremony, patriotic performances by children, and distribution of snacks and educational kits.",
      date: "January 2024",
      status: "Completed",
      videoUrl: "https://youtu.be/nGpTi3dqrpE", // replace with actual video URL if available
      thumbnail: "/images/mq3.webp", // replace with your Republic Day event image
      stats: "60+ Children • 1 Orphanage"
    },
    
    {
      id: 4,
      title: "Diwali Celebration at Orphanage",
      description: "Celebrated the festival of lights by donating sweets and study materials to children at the orphanage, spreading joy and supporting their education.",
      date: "November 2021",
      status: "Completed",
      videoUrl: "https://youtu.be/M5k34dr6v0c?si=M4Xi3KtL1_dDfgmk", 
      thumbnail: "/images/mq5.webp", 
      stats: "55+ Children • 1 Orphanage"
    },
    
    {
      id: 5,
      title: "Saraswati Puja Celebration",
      description: "Observed Saraswati Puja with children at the orphanage, offering prayers for wisdom and learning, and donating study materials to support their education.",
      date: "February 2025",
      status: "Completed",
      videoUrl: "https://youtu.be/Y_Ck73Zpljc?si=xmxa8kv0Gyw4JEPF", // replace with actual video URL
      thumbnail: "/images/mq6.webp", // replace with your Saraswati Puja image
      stats: "50+ Children • 1 Orphanage"
    },   
  
      {
        id: 6,
        title: "Tribute to Pulwama Bravehearts & Support to Specially-Abled School",
        description: "Paid heartfelt tribute to the Pulwama martyrs and extended support to a school for physically challenged children by donating food and study materials.",
        date: "February 2025",
        status: "Completed",
        videoUrl: "https://youtu.be/z2DWftO0iUw?si=kwhKYFU3aWhzreGO", 
        thumbnail: "/images/mq7.webp", 
        stats: "40+ Children • 1 Special School"
      },
      
      {
        id: 7,
        title: "Birthday Celebration with Orphanage Children",
        description: "Celebrated a special birthday with the children at the orphanage, organizing games, cake-cutting, and distributing gifts and snacks to spread smiles and joy.",
        date: "March 2025",
        status: "Completed",
        videoUrl: "https://youtu.be/w5sBUb3J-q4?si=NDfCJuh4z2bGhQHp", // replace with actual video URL
        thumbnail: "/images/mq14.png", // replace with your birthday celebration image
        stats: "50+ Children • 1 Orphanage"
      },
      
    
    {
      id: 8,
      title: "Azadi Ka Amrit Mahotsav - Sweets Distribution",
      description: "On the auspicious occasion of Azadi Ka Amrit Mahotsav, Aasha ki ek kiran Foundation visited an old age home to distribute sweets and share moments of warmth and gratitude with the elderly.",
      date: "August 2024",
      status: "Completed",
      videoUrl: "https://youtu.be/4HuCfR3dbOI?si=rO7QucGiv6V03ODs", // replace with actual video URL
      thumbnail: "/images/mq9.webp", // replace with your event image
      stats: "40+ Elders • 1 Old Age Home"
    },
    {
      id: 10,
      title: "Tribute on Mother's Punyatithi – Food Donation at Old Age Home",
      description: "In loving memory of my mother, food was donated at an old age home as a humble tribute. The initiative aimed to honor her life by spreading care and nourishment to the elderly residents.",
      date: "October 2023",
      status: "Completed",
      videoUrl: "https://www.youtube.com/watch?v=9rMAL8yv6JU", 
      thumbnail: "/images/mq12.png", 
      stats: "50+ Elders • 1 Old Age Home"
    },    
    
    {
      id: 11,
      title: "Tribute on Mother's Punyatithi – Food Donation at Orphanage",
      description: "In sacred remembrance of my mother’s punyatithi, food was lovingly donated to children at the orphanage. A heartfelt initiative to honor her memory through kindness and nourishment.",
      date: "October 2023",
      status: "Completed",
      videoUrl: "https://youtu.be/L1v5xU375DU?si=nlYLVEJNoIeT1mt4", // actual video URL
      thumbnail: "/images/mq13.png", // event image
      stats: "50+ Children • 1 Orphanage"
    },
    
    
];

export default function PreviousCausesPage() {
  const [playingId, setPlayingId] = useState<number | null>(null);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <Image
          src="/images/banner-3.jpg"
          alt="Our previous initiatives making impact"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30 flex flex-col justify-end pb-16 px-8 text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Impact Journey</h1>
            <p className="text-xl md:text-2xl mb-8">
              Celebrating the milestones and lives transformed through our initiatives over the years.
            </p>
            <Link href="#our-work">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-primary/30 transition-all group"
              >
                Explore Our Work <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <motion.section 
        id="our-work"
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
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-6">Want to Be Part of Our Next Success Story?</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Join us in creating more impactful initiatives that transform lives and communities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/volunteer">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-primary/30 transition-all group"
              >
                Volunteer With Us <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/donate">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                Support Our Work
              </Button>
            </Link>
          </div>
        </motion.div>
      </motion.section>
    </main>
  );
}