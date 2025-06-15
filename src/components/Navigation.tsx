import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);const navItems = [
    { name: 'Services', href: '/#services' },
    { name: 'Testimonials', href: '/#testimonials' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];  return (
    <nav className={`fixed top-0 left-0 right-0 z-10 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-6'}`}>
      <div className="w-full px-6">        <div 
          className={`flex items-center justify-between px-6 py-4 rounded-2xl backdrop-blur-md relative transition-all duration-300 ${
            isScrolled ? 'scale-95' : 'scale-100'
          }`}          style={{
            backgroundColor: 'rgba(236, 223, 204, 0.15)',
            border: 'rgba(236, 223, 204, 0.2)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
          }}>
          {/* Logo - Left */}
          <div className="flex items-center relative z-10">            <a href="/" className="inline-block">
              <img 
                src="/lovable-uploads/Generated_Image_June_13__2025_-_7_11PM-removebg-preview (2).png" 
                alt="Melons Media" 
                className="h-16 w-auto hover:scale-105 transition-transform duration-200 cursor-pointer"
              />
            </a>
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex items-center space-x-12 relative z-10">            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white/90 hover:text-orange-400 transition-colors duration-200 font-medium text-lg tracking-wide"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Button - Right */}
          <div className="hidden md:flex relative z-10">
            <button
              onClick={() => window.location.href = '/booking'}
              className="px-8 py-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full hover:bg-white/30 hover:border-white/50 transition-all duration-300 font-medium tracking-wide"
            >
              Let's Talk
            </button>
          </div>          {/* Mobile menu button */}
          <div className="md:hidden flex items-center relative z-10">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-orange-400 transition-colors p-2 rounded-lg hover:bg-white/10"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>        {/* Mobile Navigation */}
        {isOpen && (
          <div 
            className="md:hidden mt-6 py-6 backdrop-blur-md rounded-2xl border relative z-50"
            style={{
              backgroundColor: 'rgba(236, 223, 204, 0.95)',
              borderColor: 'rgba(236, 223, 204, 0.3)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
            }}
          >
            <div className="flex flex-col space-y-4 px-6 relative z-10">              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-800 hover:text-orange-500 transition-colors duration-200 font-medium tracking-wide py-2 px-2 rounded-lg hover:bg-white/20"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button
                onClick={() => {
                  window.location.href = '/booking';
                  setIsOpen(false);
                }}
                className="mt-4 px-6 py-3 bg-orange-500 hover:bg-orange-600 border border-orange-500 text-white rounded-full transition-all duration-300 font-medium"
              >
                Let's Talk
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
