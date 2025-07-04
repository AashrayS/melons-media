
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {  return (    <footer 
      id="contact" 
      className="w-full py-16 px-6 bg-gradient-to-br from-green-900 via-green-800 to-green-900 text-white border-t border-orange-400/30 relative z-10"
      style={{ 
        minHeight: 'auto', 
        display: 'block',
        backgroundColor: '#2D4A22',
        borderTop: '1px solid rgba(255, 165, 76, 0.3)'
      }}
    >      <div className="max-w-7xl mx-auto" style={{ position: 'relative', zIndex: 1 }}>        <div className="grid grid-cols-1 md:grid-cols-3 gap-12" style={{ opacity: 1, visibility: 'visible' }}>
          <div style={{ opacity: 1, visibility: 'visible' }}>
            <h3 className="text-2xl font-light tracking-tight mb-6" style={{ color: 'white' }}>Melons Media</h3>
            <p className="text-white/70 font-light leading-relaxed mb-6" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              Crafting exceptional digital experiences that drive results and build lasting brand connections.
            </p>
          </div>
          
          <div style={{ opacity: 1, visibility: 'visible' }}>
            <h4 className="text-lg font-light tracking-tight mb-6" style={{ color: 'white' }}>Contact Info</h4>            <div className="space-y-4" style={{ opacity: 1, visibility: 'visible' }}>              <div className="flex items-center">
                <Mail className="w-5 h-5 text-orange-400 mr-3" strokeWidth={1} />
                <a 
                  href="mailto:water@melonsmedia.social" 
                  className="text-white/70 font-light hover:text-orange-400 transition-colors duration-200 cursor-pointer"
                  style={{ color: 'rgba(255, 255, 255, 0.7)' }}
                >
                  water@melonsmedia.social
                </a>
              </div>              <div className="flex items-center">
                <Phone className="w-5 h-5 text-orange-400 mr-3" strokeWidth={1} />
                <a 
                  href="tel:+917987919263" 
                  className="text-white/70 font-light hover:text-orange-400 transition-colors duration-200 cursor-pointer"
                  style={{ color: 'rgba(255, 255, 255, 0.7)' }}
                >
                  (+91) 7987919263
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-orange-400 mr-3" strokeWidth={1} />
                <span className="text-white/70 font-light" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Pune, Maharashtra</span>
              </div>
            </div>
          </div>          
          <div style={{ opacity: 1, visibility: 'visible' }}>
            <h4 className="text-lg font-light tracking-tight mb-6" style={{ color: 'white' }}>Services</h4>
            <div className="space-y-2">
              <p className="text-white/70 font-light" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Web Development</p>
              <p className="text-white/70 font-light" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>App Development</p>
              <p className="text-white/70 font-light" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>UX/UI Design</p>
              <p className="text-white/70 font-light" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Marketing Campaigns</p>
            </div>
          </div>
        </div>        
        <div className="border-t border-white/10 mt-12 pt-8 text-center" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <p className="text-white/60 font-light" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
            © 2024 Melons Media. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
