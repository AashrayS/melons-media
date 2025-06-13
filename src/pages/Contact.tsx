
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-8 text-center">Get In Touch</h1>
          <p className="text-xl text-white/70 font-light text-center mb-16 max-w-3xl mx-auto">
            Ready to transform your digital presence? Let's discuss your project and explore how we can help you achieve your goals.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="glassmorphic-card p-8 rounded-2xl">
              <h2 className="text-2xl font-light tracking-tight mb-8">Send us a message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input 
                    placeholder="First Name" 
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/50"
                  />
                  <Input 
                    placeholder="Last Name" 
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/50"
                  />
                </div>
                <Input 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/50"
                />
                <Input 
                  placeholder="Subject" 
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/50"
                />
                <textarea 
                  placeholder="Your Message"
                  rows={6}
                  className="w-full px-3 py-2 rounded-md bg-white/5 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-orange-400/50"
                />
                <Button className="neumorphic-button w-full py-3">
                  Send Message
                </Button>
              </form>
            </div>
            
            <div className="space-y-8">
              <div className="glassmorphic-card p-8 rounded-2xl">
                <h3 className="text-xl font-light tracking-tight mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-orange-400 mr-4" strokeWidth={1} />
                    <div>
                      <p className="text-white/90 font-light">Email</p>
                      <p className="text-white/70">hello@melonsmedia.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-orange-400 mr-4" strokeWidth={1} />
                    <div>
                      <p className="text-white/90 font-light">Phone</p>
                      <p className="text-white/70">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 text-orange-400 mr-4" strokeWidth={1} />
                    <div>
                      <p className="text-white/90 font-light">Location</p>
                      <p className="text-white/70">New York, NY</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="glassmorphic-card p-8 rounded-2xl">
                <h3 className="text-xl font-light tracking-tight mb-4">Business Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-white/70">Monday - Friday</span>
                    <span className="text-white/90">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Saturday</span>
                    <span className="text-white/90">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Sunday</span>
                    <span className="text-white/90">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
