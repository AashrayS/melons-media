
import React from 'react';
import { Wallet, Bot, Zap } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Wallet,
      title: 'Connect Your Vision',
      description: 'Share your ideas and goals with our expert team to establish a clear project roadmap.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop&crop=center'
    },
    {
      icon: Bot,
      title: 'Set Up Your Strategy',
      description: 'We develop a customized approach using cutting-edge tools and methodologies.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&crop=center'
    },
    {
      icon: Zap,
      title: 'Automate Your Success',
      description: 'Launch your project with ongoing support and optimization for maximum impact.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop&crop=center'
    }
  ];

  return (
    <section id="how-it-works" className="py-32 px-8 lg:px-16 xl:px-24 bg-black text-white">
      <div className="max-w-8xl mx-auto">
        <div className="text-center mb-20 animate-on-scroll">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-8">How It Works</h2>
          <p className="text-xl text-white/70 font-light max-w-3xl mx-auto">
            Our streamlined process ensures exceptional results every time
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div 
              key={step.title}
              className="glassmorphic-card p-8 lg:p-10 rounded-3xl animate-on-scroll group hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-8">
                <img 
                  src={step.image} 
                  alt={step.title}
                  className="w-full h-48 object-cover rounded-2xl mb-8 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="w-16 h-16 bg-orange-400/20 rounded-2xl flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-orange-400" strokeWidth={1} />
                </div>
              </div>
              <h3 className="text-2xl font-light tracking-tight mb-6">{step.title}</h3>
              <p className="text-white/70 font-light leading-relaxed text-lg">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
