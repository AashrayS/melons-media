
import React from 'react';
import { Globe, Instagram, TrendingUp, Search } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: 'Website Optimization',
      description: 'Complete website development and optimization for conversions, speed, and user experience that drives business growth.',
      features: ['Conversion Optimization', 'Performance Enhancement', 'User Experience Design']
    },
    {
      icon: Search,
      title: 'SEO & Local SEO',
      description: 'Strategic search engine optimization to get you found on Google with local and organic search visibility.',
      features: ['Google Rankings', 'Local Business SEO', 'Content Strategy']
    },
    {
      icon: Instagram,
      title: 'Instagram Growth',
      description: 'Organic Instagram growth strategies, content creation, and personal branding for creators and businesses.',
      features: ['Content Creation', 'Follower Growth', 'Brand Building']
    },
    {
      icon: TrendingUp,
      title: 'Paid Advertising',
      description: 'Complete Google Ads and Facebook Ads management including creating and writing high-converting ads for user acquisition and brand omnipresence.',
      features: ['Creating & Writing Ads', 'Google & Facebook Ads', 'User Acquisition']
    }
  ];

  return (
    <section id="services" className="py-32 px-8 lg:px-16 xl:px-24 bg-gradient-to-br from-[#378c35] via-[#010100] to-[#2c8433] text-white relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fd8d1b]/8 via-transparent to-[#fd8e1b]/6" />
      
      <div className="max-w-8xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-6 font-poppins">
            Our Core Services
          </h2>
          <p className="text-lg md:text-xl text-white/70 font-light max-w-3xl mx-auto font-poppins">
            From website optimization to brand omnipresence - we handle everything so you can focus on what you do best
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="glassmorphic-card p-6 lg:p-8 rounded-2xl hover:scale-105 transition-all duration-300 animate-on-scroll group border border-[#fd8d1b]/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#fd8d1b] to-[#fd8e1b] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <service.icon className="w-7 h-7 text-[#010100]" strokeWidth={2} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-4 text-white font-poppins">{service.title}</h3>
              <p className="text-white/80 font-light leading-relaxed mb-6 font-poppins">{service.description}</p>
              
              {/* Service Features */}
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-[#378c35] rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-[#378c35] font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-white/60 mb-4">Ready to grow your digital presence?</p>
          <div className="inline-flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-[#fd8d1b] to-[#fd8e1b] rounded-full flex items-center justify-center">
              <span className="text-[#010100] font-bold">💬</span>
            </div>
            <span className="text-white/80">Let's discuss your project</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
