"use client"
import React, { useEffect } from "react";
import "./page.module.css";
import "./globals.css"

import Landing from "@/components/landing/landing";
import Hero from "@/components/hero/hero";
import Skills from "@/components/skills/skills";
import Testimonials from "@/components/testimonials/testimonials";
import Header from "@/components/header/header";
import Nav from "@/components/nav/nav";
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";
// import HScrollbar from "@/components/hScrollbar/hScrollbar";
import Loader from "@/components/loader/loader";
// import SwiperC from "@/components/swiper/swiper";


export default function Home() {
  return (
    <main>
        {/* <div className="cursor" />
        <div className="cursor2" /> */}
        {/*  */}
        
        <Loader />
        {/* <HScrollbar /> */}
        <Header />
        <Nav />
        <Landing />
        <Hero />
        <Skills />
        {/* <SwiperC /> */}
        <Testimonials />
        <Contact />
        <Footer />
    </main>
  );
}
