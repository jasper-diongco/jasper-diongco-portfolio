"use client";

import { useEffect } from "react";
import HeroHeader from "./components/HeroHeader";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer"; // Import the new Footer component
import ClientsSection from "./components/ClientsSection";

export default function Home() {
  useEffect(() => {
    const opacityTransitionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-full');
        }
      });
    });

    const opacityTransitionElements = document.querySelectorAll('.opacity-transition');
    opacityTransitionElements.forEach((el) => opacityTransitionObserver.observe(el));

    const fromBottomTransitionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('finish-bottom-top-transition');
        }
      });
    });

    const fromBottomTransitionElements = document.querySelectorAll('.from-bottom-transition');
    fromBottomTransitionElements.forEach((el) => fromBottomTransitionObserver.observe(el));

  }, []);

  return (
    <>
      <HeroHeader />
      <ServicesSection />
      <ProjectsSection />
      <AboutSection />
      <ClientsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
