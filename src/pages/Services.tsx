
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Code, Smartphone, Palette, TrendingUp, Globe, Database, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Modern, responsive web applications built with React, Vue, Angular and the latest web technologies.',
      features: ['React & Next.js', 'Vue.js & Nuxt.js', 'Angular', 'TypeScript', 'Responsive Design']
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Scalable server-side solutions with robust APIs, databases, and cloud infrastructure.',
      features: ['Node.js & Express', 'Python & Django', 'Database Design', 'API Development', 'Cloud Deployment']
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
      features: ['React Native', 'Flutter', 'iOS Development', 'Android Development', 'App Store Optimization']
    },
    {
      icon: Palette,
      title: 'UX/UI Design',
      description: 'User-centered design that combines aesthetics with functionality for optimal user experiences.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design', 'Design Systems']
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Strategic marketing campaigns that drive growth and build strong brand presence.',
      features: ['SEO Optimization', 'Social Media Marketing', 'Content Strategy', 'PPC Campaigns', 'Analytics']
    },
    {
      icon: Globe,
      title: 'Web Consulting',
      description: 'Expert guidance on digital strategy, technology stack, and best practices for your business.',
      features: ['Technology Consulting', 'Performance Optimization', 'Security Audits', 'Strategic Planning', 'Training']
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-8">Our Services</h1>
            <p className="text-xl text-white/70 font-light max-w-3xl mx-auto">
              We offer comprehensive digital solutions designed to elevate your business and create lasting impact in the digital landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className="glassmorphic-card p-8 rounded-2xl hover:scale-105 transition-transform duration-300"
              >
                <service.icon className="w-12 h-12 text-orange-400 mb-6" strokeWidth={1} />
                <h3 className="text-xl font-light tracking-tight mb-4">{service.title}</h3>
                <p className="text-white/70 font-light leading-relaxed mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-white/60 flex items-center">
                      <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="glassmorphic-card p-12 rounded-2xl text-center">
            <h2 className="text-3xl font-light tracking-tight mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-white/70 font-light mb-8 max-w-2xl mx-auto">
              Let's discuss your project and explore how our services can help you achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="neumorphic-button px-8 py-3">
                Schedule Consultation
              </Button>
              <Button variant="outline" className="glassmorphic-button px-8 py-3 border-white/20 text-white hover:bg-white/10">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
