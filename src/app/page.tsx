"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";

import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-neutral-900 text-white">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <Process />
      <Testimonials />
     
      <Contact />
      <Footer />
    </main>
  );
}