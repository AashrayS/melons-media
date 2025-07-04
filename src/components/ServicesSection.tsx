
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
    <section id="services" className="py-32 px-8 lg:px-16 xl:px-24 bg-gradient-to-br from-green-900 via-black to-green-900 text-white relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-1/5 left-1/5 w-28 h-28 bg-gradient-to-br from-orange-400/20 to-yellow-400/15 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/5 w-24 h-24 bg-gradient-to-br from-yellow-300/15 to-orange-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-8xl mx-auto relative z-10">
        <div className="flex items-start justify-between mb-20 animate-on-scroll">
          <div className="max-w-md">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 melon-text">Our Services 🛠️</h2>
          </div>
          <div className="hidden md:block">
            <div className="w-16 h-16 border-2 border-orange-400/60 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="glassmorphic-card p-8 lg:p-12 rounded-3xl hover:scale-105 hover:shadow-2xl hover:shadow-orange-400/20 transition-all duration-300 animate-on-scroll group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400/30 to-yellow-400/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-orange-400" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-6 text-orange-100">{service.title}</h3>
              <p className="text-orange-100/70 font-medium leading-relaxed text-lg">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
