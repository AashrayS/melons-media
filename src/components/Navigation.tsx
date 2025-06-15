
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
  }, []);

  const navItems = [
    { name: 'Services', href: '/#services' },
    { name: 'Testimonials', href: '/#testimonials' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-1' : 'py-2'}`}>
      <div className="w-full px-2 md:px-6">
        <div 
          className={`flex items-center justify-between px-3 md:px-6 py-2 md:py-4 rounded-lg md:rounded-2xl backdrop-blur-md relative transition-all duration-300 ${
            isScrolled ? 'md:scale-95' : 'md:scale-100'
          }`}
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.1)'
          }}
        >
          {/* Logo - Left */}
          <div className="flex items-center relative z-10">            <a href="/" className="inline-block">              <img 
                src="/lovable-uploads/Generated_Image_June_13__2025_-_7_11PM-removebg-preview (2).png" 
                alt="Melons Media" 
                className="h-10 md:h-16 w-auto hover:scale-105 transition-transform duration-200 cursor-pointer"
                style={{
                  filter: 'drop-shadow(0 1px 3px rgba(0, 0, 0, 0.5)) brightness(1.1) contrast(1.1)'
                }}
              />
            </a>
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex items-center space-x-12 relative z-10">
            {navItems.map((item) => (
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
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center relative z-10">            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-orange-400 transition-colors p-1 rounded-lg hover:bg-white/10"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>        {/* Mobile Navigation */}
        {isOpen && (
          <div 
            className="md:hidden mt-4 py-4 backdrop-blur-md rounded-xl relative z-[100]"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.9)'
            }}
          >
            <div className="flex flex-col space-y-3 px-4 relative z-10">
              {navItems.map((item) => (                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-orange-400 transition-colors duration-200 font-medium tracking-wide py-2 px-3 rounded-lg hover:bg-white/10 block text-center touch-manipulation"
                  style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}              <button
                onClick={() => {
                  window.location.href = '/booking';
                  setIsOpen(false);
                }}
                className="mt-3 px-4 py-3 bg-orange-500 hover:bg-orange-600 border border-orange-500 text-white rounded-full transition-all duration-300 font-medium text-center touch-manipulation"
                style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
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
