
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="py-16 px-6 bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-light tracking-tight mb-6">Melons Media</h3>
            <p className="text-white/70 font-light leading-relaxed mb-6">
              Crafting exceptional digital experiences that drive results and build lasting brand connections.
            </p>
          </div>
          
          <div className="animate-on-scroll" style={{ animationDelay: '0.1s' }}>
            <h4 className="text-lg font-light tracking-tight mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-orange-400 mr-3" strokeWidth={1} />
                <span className="text-white/70 font-light">hello@melonsmedia.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-orange-400 mr-3" strokeWidth={1} />
                <span className="text-white/70 font-light">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-orange-400 mr-3" strokeWidth={1} />
                <span className="text-white/70 font-light">New York, NY</span>
              </div>
            </div>
          </div>
          
          <div className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-lg font-light tracking-tight mb-6">Services</h4>
            <div className="space-y-2">
              <p className="text-white/70 font-light">Web Development</p>
              <p className="text-white/70 font-light">App Development</p>
              <p className="text-white/70 font-light">UX/UI Design</p>
              <p className="text-white/70 font-light">Marketing Campaigns</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-white/60 font-light">
            © 2024 Melons Media. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
