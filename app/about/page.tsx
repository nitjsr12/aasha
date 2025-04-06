"use client";

import { Card } from "@/components/ui/card";
import { Heart, Users, Target, Trophy, ArrowRight, BookOpen, School, HandHeart, Globe } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";


const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function AboutPage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  const coreValues = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Compassion",
      description: "We lead with empathy in all our interactions and initiatives."
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Education",
      description: "We believe knowledge is the foundation for sustainable change."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community",
      description: "We foster strong connections that uplift everyone involved."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Sustainability",
      description: "We create programs with lasting impact for future generations."
    }
  ];

  return (
    
    <main className="container mx-auto px-4 py-12  w-full" ref={ref}>
      {/* Hero Section */}
      
      <motion.section 
        className="relative w-full h-[500px] overflow-hidden rounded-2xl shadow-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/images/banner-1.jpg"
          alt="Children learning in classroom"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30 flex flex-col justify-end pb-16 px-8 text-white">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our Story
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-2xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Empowering communities through education, compassion, and sustainable change.
          </motion.p>
        </div>
      </motion.section>

      {/* About Section */}
      <section className="grid lg:grid-cols-2 gap-16 items-center mt-24">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Since 2020
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Who We Are
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          At Aasha Ki Ek Kiran, we believe that even the smallest effort can spark a ripple of change in the world. Our mission is to uplift and support the underprivileged, ensuring they receive the care and opportunities they deserve. Through our community-driven approach, we strive to make a meaningful impact in the lives of those in need.  
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          Committed to creating a better future, we work tirelessly to provide essential services such as education, food, medical aid, and emotional support. By bringing people together and fostering a spirit of compassion, we aim to empower individuals and communities, helping them build a brighter and more hopeful tomorrow.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative h-full min-h-[400px]"
        >
          <Image
            src="/images/aboutus.jpg"
            alt="Our team helping community"
            fill
            className="object-cover rounded-2xl shadow-xl"
          />
          <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-gradient-to-r from-primary to-secondary rounded-2xl -z-10" />
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="my-24">
        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 hover:shadow-lg transition-all duration-300 border-primary/20 h-full group">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To break the cycle of poverty through education and community empowerment. We provide:
              </p>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start">
                  <School className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Quality educational resources to underprivileged students</span>
                </li>
                <li className="flex items-start">
                  <HandHeart className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Essential support services to vulnerable communities</span>
                </li>
                <li className="flex items-start">
                  <Users className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Sustainable development programs that create lasting change</span>
                </li>
              </ul>
            </Card>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 hover:shadow-lg transition-all duration-300 border-primary/20 h-full group">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-secondary/20 transition-colors">
                  <Trophy className="w-6 h-6 text-secondary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">Our Vision</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                We envision an India where:
              </p>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-primary/10 rounded-full mr-3 mt-0.5 flex-shrink-0 flex items-center justify-center">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                  </span>
                  <span className="text-muted-foreground">Every child has access to quality education regardless of socioeconomic status</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-primary/10 rounded-full mr-3 mt-0.5 flex-shrink-0 flex items-center justify-center">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                  </span>
                  <span className="text-muted-foreground">Communities are empowered to support their most vulnerable members</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-primary/10 rounded-full mr-3 mt-0.5 flex-shrink-0 flex items-center justify-center">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                  </span>
                  <span className="text-muted-foreground">No one goes hungry or lacks basic necessities</span>
                </li>
              </ul>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="my-24">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Foundation
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Core Values
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            These principles guide every decision we make and action we take.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="p-8 text-center hover:shadow-lg transition-all duration-300 border-primary/20 h-full group">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Impact Section */}
      <motion.section 
        className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-12 my-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Our Impact
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Numbers tell part of the story, but behind each statistic are real lives transformed.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "1000+", label: "Students Supported" },
            { number: "50+", label: "Schools Partnered" },
            { number: "24", label: "Monthly Visits" },
            { number: "100+", label: "Success Stories" }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="text-center"
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-5xl font-bold text-primary mb-3">{item.number}</div>
              <p className="text-lg">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Testimonials */}
      <section className="my-24">
      </section>

      {/* Call to Action */}
      <motion.section 
        className="text-center my-24"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Make a Difference?
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          Join us in creating lasting change. Whether through volunteering, donations, or simply spreading awareness, your support matters.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/contact">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-primary/30 transition-all group"
            >
              Volunteer With Us <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          
        </div>
      </motion.section>
    </main>
  );
}