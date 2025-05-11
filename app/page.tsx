"use client";

import { ArrowRight, BookOpen, Heart, School, Users, Calendar, PhoneCall } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from "next/image";
import { PreviousWorkSection } from "@/components/PreviousWorkSection";
import { ImpactStats } from "@/components/impactstats";
import { AboutSection } from "@/components/about-section";
import { HeroSlider } from "@/components/heroslider";
import {KeyInitiatives} from "@/components/keyInitiatives"
import { JoinMission } from "@/components/joinmission";
import { UpcomingEventsSection} from "@/components/upcomingevents"
import { ImageGallery } from "@/components/ImageGallery";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function Home() {
  return (
    <main>
      {/* Hero Section with Slider */}
         <HeroSlider/>
      {/* Impact Numbers */}
         <ImpactStats/>
         <AboutSection/>

      {/* Our Causes */}
       <KeyInitiatives/>
       {/* <UpcomingEventsSection/> */}
       <ImageGallery/>
      {/* Previous Work Showcase */}
      <PreviousWorkSection/>
      {/* Join Us Section */}
      <JoinMission/>
    </main>
  );
}