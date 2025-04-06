"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { School, Heart, BookOpen, Users, Coffee, GraduationCap, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { UpcomingEventsSection} from "@/components/upcomingevents"


const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const causes = [
  {
    icon: <School className="w-8 h-8" />,
    title: "Education Support",
    description: "Providing educational materials, mentorship, and resources to underprivileged students.",
    highlights: [
      "School supplies distribution",
      "After-school tutoring",
      "Digital learning resources",
      "Career guidance"
    ],
    color: "text-blue-500",
    bgColor: "bg-blue-500/10"
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Care Center Visits",
    description: "Regular visits to old age homes and orphanages to provide companionship and support.",
    highlights: [
      "Monthly visits",
      "Entertainment programs",
      "Health check-ups",
      "Basic necessities support"
    ],
    color: "text-rose-500",
    bgColor: "bg-rose-500/10"
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "Food Distribution",
    description: "Monthly food donation drives to support families and ensure proper nutrition.",
    highlights: [
      "Monthly food packages",
      "Nutrition education",
      "Community kitchen support",
      "School meal programs"
    ],
    color: "text-amber-500",
    bgColor: "bg-amber-500/10"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Community Engagement",
    description: "Building stronger communities through engagement programs and support initiatives.",
    highlights: [
      "Community workshops",
      "Skill development",
      "Parent counseling",
      "Social awareness programs"
    ],
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10"
  },
  {
    icon: <Coffee className="w-8 h-8" />,
    title: "Volunteer Program",
    description: "Opportunities to contribute time and skills to make a difference in the community.",
    highlights: [
      "Teaching assistance",
      "Event organization",
      "Administrative support",
      "Community outreach"
    ],
    color: "text-purple-500",
    bgColor: "bg-purple-500/10"
  },
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: "Career Development",
    description: "Supporting students in their career journey through guidance and training.",
    highlights: [
      "Career counseling",
      "Skill workshops",
      "Interview preparation",
      "Industry connections"
    ],
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10"
  }
];

export default function CausesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <Image
          src="/images/causes-hero.jpg"
          alt="Children learning and smiling"
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Causes</h1>
            <p className="text-xl md:text-2xl mb-8">
              Transforming lives through focused initiatives that create lasting impact in education and community development.
            </p>
            <Link href="#our-causes">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-primary/30 transition-all group"
              >
                Explore Causes <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Main Causes */}
      <section id="our-causes" className="container mx-auto px-4 py-20">
        <motion.div 
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Making a Difference
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Our Key Initiatives
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Each program is designed to address specific needs and create sustainable change in our communities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {causes.map((cause, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="h-full p-8 hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-800 hover:border-primary/50 group">
                <div className={`w-16 h-16 ${cause.bgColor} rounded-xl flex items-center justify-center ${cause.color} mb-6`}>
                  {cause.icon}
                </div>
                <h2 className="text-2xl font-bold mb-4">{cause.title}</h2>
                <p className="text-muted-foreground mb-6">{cause.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {cause.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start">
                      <span className={`w-5 h-5 ${cause.bgColor} rounded-full mr-3 mt-0.5 flex items-center justify-center`}>
                        <span className={`w-2 h-2 ${cause.color} rounded-full`}></span>
                      </span>
                      <span className="text-muted-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>
                
                <Link href="/contact">
                  <Button 
                    variant="outline" 
                    className={`w-full border-primary text-primary hover:bg-primary hover:text-white ${cause.bgColor}`}
                  >
                    Get Involved <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>
        <UpcomingEventsSection/>
        {/* Call to Action */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-6">Ready to Make an Impact?</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Join us in creating meaningful change through any of our initiatives or suggest a new cause you're passionate about.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-primary/30 transition-all group"
              >
                Volunteer Now <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
          </div>
        </motion.div>
      </section>
    </main>
  );
}