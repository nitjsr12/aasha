"use client";

import { Card } from "@/components/ui/card";
import { Heart, Users, Target, Trophy, ArrowRight, BookOpen, School, HandHeart, Globe } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const coreValues = [
    { icon: <Heart className="w-8 h-8" />, title: "Compassion", description: "Leading with empathy and care." },
    { icon: <BookOpen className="w-8 h-8" />, title: "Education", description: "Empowering through knowledge." },
    { icon: <Users className="w-8 h-8" />, title: "Community", description: "Fostering strong connections." },
    { icon: <Globe className="w-8 h-8" />, title: "Sustainability", description: "Building lasting impacts." },
  ];

  return (
    <main className="w-full" ref={ref}>
      
      {/* Hero Section */}
      <motion.section 
        className="relative w-full h-[500px] overflow-hidden"
        initial="hidden"
        animate="visible"
      >
        <Image
          src="/images/banner-3.jpg"
          alt="Children Learning"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-4">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our Story
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl text-white/90 max-w-3xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Empowering communities through education, compassion, and lasting change.
          </motion.p>
        </div>
      </motion.section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* About Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
            }}
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
              Aasha Ki Ek Kiran believes every small effort creates a ripple of change. Our mission is to uplift the underprivileged through education, food, medical aid, and emotional support.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We build stronger futures by fostering compassion, unity, and empowerment across communities, helping individuals thrive with dignity.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-white">
                Get Involved <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>

          {/* About Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
            }}
            className="relative h-[450px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/aboutus.jpg"
              alt="Helping Community"
              fill
              className="object-cover rounded-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="container mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-lg border border-primary/20 group"
            whileHover={{ scale: 1.03 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                <Target className="text-primary w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">Our Mission</h3>
            </div>
            <p className="text-muted-foreground text-lg">
              Breaking the cycle of poverty through education, community empowerment, and support services.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-lg border border-primary/20 group"
            whileHover={{ scale: 1.03 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mr-4">
                <Trophy className="text-secondary w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">Our Vision</h3>
            </div>
            <p className="text-muted-foreground text-lg">
              An India where every child has access to education, support, and opportunity, regardless of background.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="container mx-auto px-4 py-24">
        <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Core Values
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Guiding every action and decision.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md text-center group hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-primary/5 py-24 rounded-2xl container mx-auto px-4 my-24">
        <motion.div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Our Impact
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Numbers that show real lives changed.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "500+", label: "Students Supported" },
            { number: "10+", label: "Schools Partnered" },
            { number: "24", label: "Monthly Visits" },
            { number: "10+", label: "Success Stories" }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="text-5xl font-bold text-primary mb-2">{item.number}</div>
              <p className="text-lg">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final Call to Action */}
      <motion.section className="text-center py-24">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Make a Difference?
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
          Join us in building brighter futures — your contribution can spark hope and change.
        </p>
        <Link href="/contact">
          <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-white">
            Volunteer With Us <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </motion.section>

    </main>
  );
}
