"use client"
import React from "react";
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
import HScrollbar from "@/components/hScrollbar/hScrollbar";

export default function Home() {

  return (
    <main>
        {/* <div className="cursor" />
        <div className="cursor2" /> */}
        {/* <div className="loader">
          <i className="fa-solid fa-less-than" />
          <ul>
            <li />
            <li />
            <li />
          </ul>
          <i className="fa-solid fa-greater-than" />
        </div> */}
        
        <HScrollbar />
        <Header />
        <Nav />
        <Landing />
        <Hero />
        <Skills />
        <Testimonials />
        <Contact />
        <Footer />
    </main>
  );
}
