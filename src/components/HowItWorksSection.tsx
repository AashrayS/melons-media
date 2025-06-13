
import React from 'react';
import { Wallet, Bot, Zap } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Wallet,
      title: 'Connect Your Vision',
      description: 'Share your ideas and goals with our expert team to establish a clear project roadmap.',
      image: '/placeholder.svg?height=200&width=300'
    },
    {
      icon: Bot,
      title: 'Set Up Your Strategy',
      description: 'We develop a customized approach using cutting-edge tools and methodologies.',
      image: '/placeholder.svg?height=200&width=300'
    },
    {
      icon: Zap,
      title: 'Automate Your Success',
      description: 'Launch your project with ongoing support and optimization for maximum impact.',
      image: '/placeholder.svg?height=200&width=300'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">How It Works</h2>
          <p className="text-xl text-white/70 font-light max-w-3xl mx-auto">
            Our streamlined process ensures exceptional results every time
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.title}
              className="glassmorphic-card p-8 rounded-2xl text-center animate-on-scroll"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-6">
                <img 
                  src={step.image} 
                  alt={step.title}
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <step.icon className="w-12 h-12 text-orange-400 mx-auto" strokeWidth={1} />
              </div>
              <h3 className="text-xl font-light tracking-tight mb-4">{step.title}</h3>
              <p className="text-white/70 font-light leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
