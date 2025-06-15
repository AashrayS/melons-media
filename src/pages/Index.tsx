
import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import MissionSection from '@/components/MissionSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Set up scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe all elements with animate-on-scroll class
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <MissionSection />
      <Footer />
    </div>
  );
};

export default Index;
