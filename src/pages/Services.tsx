
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

  return (    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navigation />
      <div className="flex-1 pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-8">Our Services</h1>
            <p className="text-xl text-white/70 font-light max-w-3xl mx-auto">
              We offer comprehensive digital solutions designed to elevate your business and create lasting impact in the digital landscape.
            </p>
          </div>          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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

          {/* Process Section */}
          <div className="glassmorphic-card p-12 rounded-2xl mb-16">
            <h2 className="text-3xl font-light tracking-tight mb-12 text-center">Our Development Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-orange-400/20 to-orange-600/20 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-orange-400" strokeWidth={1} />
                </div>
                <h3 className="text-lg font-light mb-3 text-orange-400">Consultation</h3>
                <p className="text-white/70 text-sm leading-relaxed">We start with understanding your vision, goals, and requirements through detailed discussions.</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-orange-400/20 to-orange-600/20 rounded-full flex items-center justify-center">
                  <Palette className="w-8 h-8 text-orange-400" strokeWidth={1} />
                </div>
                <h3 className="text-lg font-light mb-3 text-orange-400">Design</h3>
                <p className="text-white/70 text-sm leading-relaxed">Our designers create beautiful, user-centered designs that align with your brand identity.</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-orange-400/20 to-orange-600/20 rounded-full flex items-center justify-center">
                  <Code className="w-8 h-8 text-orange-400" strokeWidth={1} />
                </div>
                <h3 className="text-lg font-light mb-3 text-orange-400">Development</h3>
                <p className="text-white/70 text-sm leading-relaxed">We build your solution using cutting-edge technologies and best practices.</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-orange-400/20 to-orange-600/20 rounded-full flex items-center justify-center">
                  <Zap className="w-8 h-8 text-orange-400" strokeWidth={1} />
                </div>
                <h3 className="text-lg font-light mb-3 text-orange-400">Launch</h3>
                <p className="text-white/70 text-sm leading-relaxed">We deploy your project and provide ongoing support to ensure optimal performance.</p>
              </div>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="glassmorphic-card p-12 rounded-2xl mb-16">
            <h2 className="text-3xl font-light tracking-tight mb-12 text-center">Why Businesses Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-light mb-6 text-orange-400">Technical Excellence</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-4 mt-2" />
                    <div>
                      <h4 className="text-white/90 font-light mb-1">Latest Technologies</h4>
                      <p className="text-white/60 text-sm">We use cutting-edge tools and frameworks to build future-proof solutions.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-4 mt-2" />
                    <div>
                      <h4 className="text-white/90 font-light mb-1">Clean Code</h4>
                      <p className="text-white/60 text-sm">Maintainable, scalable code that grows with your business needs.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-4 mt-2" />
                    <div>
                      <h4 className="text-white/90 font-light mb-1">Performance Optimized</h4>
                      <p className="text-white/60 text-sm">Fast, responsive applications that provide exceptional user experiences.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-light mb-6 text-orange-400">Client-Focused Approach</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-4 mt-2" />
                    <div>
                      <h4 className="text-white/90 font-light mb-1">Clear Communication</h4>
                      <p className="text-white/60 text-sm">Regular updates and transparent communication throughout the project.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-4 mt-2" />
                    <div>
                      <h4 className="text-white/90 font-light mb-1">On-Time Delivery</h4>
                      <p className="text-white/60 text-sm">We respect deadlines and deliver projects on schedule and within budget.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-4 mt-2" />
                    <div>
                      <h4 className="text-white/90 font-light mb-1">Ongoing Support</h4>
                      <p className="text-white/60 text-sm">Comprehensive support and maintenance to keep your solutions running smoothly.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="glassmorphic-card p-12 rounded-2xl text-center">
            <h2 className="text-3xl font-light tracking-tight mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-white/70 font-light mb-8 max-w-2xl mx-auto">
              Let's discuss your project and explore how our services can help you achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">              <Button 
                onClick={() => window.location.href = '/booking'}
                className="neumorphic-button px-8 py-3"
              >
                Schedule Consultation
              </Button>
              <Button 
                onClick={() => window.location.href = '/contact'}
                variant="outline" 
                className="glassmorphic-button px-8 py-3 border-white/20 text-white hover:bg-white/10"
              >
                Get in Touch
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
