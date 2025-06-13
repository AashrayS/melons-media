
import React from 'react';
import { Code, Smartphone, Palette, TrendingUp } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Full-stack web development with cutting-edge technologies for frontend and backend solutions.'
    },
    {
      icon: Smartphone,
      title: 'App Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.'
    },
    {
      icon: Palette,
      title: 'UX/UI Design',
      description: 'User-centered design that combines aesthetics with functionality for optimal user engagement.'
    },
    {
      icon: TrendingUp,
      title: 'Marketing Campaigns',
      description: 'Strategic digital marketing campaigns that drive growth and build brand awareness.'
    }
  ];

  return (
    <section id="services" className="py-20 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">Our Services</h2>
          <p className="text-xl text-white/70 font-light max-w-3xl mx-auto">
            We provide comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="glassmorphic-card p-8 rounded-2xl text-center hover:scale-105 transition-transform duration-300 animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <service.icon className="w-12 h-12 text-orange-400 mx-auto mb-6" strokeWidth={1} />
              <h3 className="text-xl font-light tracking-tight mb-4">{service.title}</h3>
              <p className="text-white/70 font-light leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
