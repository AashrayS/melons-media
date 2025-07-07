
import React from 'react';
import { Code, Smartphone, Palette, TrendingUp } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Full-stack web development with cutting-edge technologies for frontend and backend solutions that scale with your business needs.'
    },
    {
      icon: Smartphone,
      title: 'App Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.'
    },
    {
      icon: Palette,
      title: 'UX/UI Design',
      description: 'User-centered design that combines aesthetics with functionality for optimal user engagement and conversion.'
    },
    {
      icon: TrendingUp,
      title: 'Marketing Campaigns',
      description: 'Strategic digital marketing campaigns that drive growth and build brand awareness in the digital landscape.'
    }
  ];

  return (
    <section id="services" className="py-32 px-8 lg:px-16 xl:px-24 bg-gradient-to-br from-[#378c35] via-[#010100] to-[#2c8433] text-white relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fd8d1b]/8 via-transparent to-[#fd8e1b]/6" />
      
      <div className="max-w-8xl mx-auto relative z-10">
        <div className="flex items-start justify-between mb-20 animate-on-scroll">
          <div className="max-w-md">
            <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6">Our Services</h2>
          </div>
          <div className="hidden md:block">
            <div className="w-16 h-16 border border-orange-400/40 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-orange-400 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="glassmorphic-card p-8 lg:p-12 rounded-3xl hover:scale-105 transition-all duration-300 animate-on-scroll group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-orange-400/20 rounded-2xl flex items-center justify-center mb-8">
                <service.icon className="w-8 h-8 text-orange-400" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-light tracking-tight mb-6">{service.title}</h3>
              <p className="text-white/70 font-light leading-relaxed text-lg">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
