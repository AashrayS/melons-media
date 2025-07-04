
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top when navigating to different pages
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleSectionNavigation = (sectionId: string) => {
    if (location.pathname !== '/') {
      // If not on homepage, navigate to homepage first, then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // If already on homepage, just scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };  const navItems = [
    { name: 'Services', sectionId: 'services', type: 'section' },
    { name: 'Projects', sectionId: 'projects', type: 'section' },
    { name: 'Testimonials', sectionId: 'testimonials', type: 'section' },
    { name: 'About', href: '/about', type: 'page' },
    { name: 'Contact', href: '/contact', type: 'page' }
  ];return (    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3' : 'py-4'}`}>
      <div className="w-full px-3 md:px-6 max-w-full overflow-hidden">        <div 
          className={`flex items-center justify-between px-4 md:px-6 py-5 md:py-4 rounded-lg md:rounded-2xl backdrop-blur-md relative transition-all duration-300 ${
            isScrolled ? 'md:scale-95' : 'md:scale-100'
          } max-w-full`}
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.3)'
          }}
        >
          {/* Logo - Left */}
          <div className="flex items-center relative z-10">            <Link to="/" className="inline-block">              <img 
                src="/lovable-uploads/melon.png" 
                alt="Melons Media" 
                className="h-16 md:h-20 w-auto hover:scale-105 transition-transform duration-200 cursor-pointer"
                style={{
                  filter: 'drop-shadow(0 1px 3px rgba(0, 0, 0, 0.5)) brightness(1.1) contrast(1.1)'
                }}/>
            </Link>
          </div>

          {/* Desktop Navigation - Center */}          <div className="hidden md:flex items-center space-x-12 relative z-10">
            {navItems.map((item) => (
              item.type === 'section' ? (
                <button
                  key={item.name}
                  onClick={() => handleSectionNavigation(item.sectionId!)}
                  className="text-orange-100/90 hover:text-yellow-300 transition-colors duration-200 font-medium text-lg tracking-wide cursor-pointer hover:scale-105"
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.name}
                  to={item.href!}
                  className="text-orange-100/90 hover:text-yellow-300 transition-colors duration-200 font-medium text-lg tracking-wide hover:scale-105"
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>{/* CTA Button - Right */}
          <div className="hidden md:flex relative z-10">
            <Link
              to="/booking"
              className="px-8 py-3 bg-gradient-to-r from-orange-400 to-yellow-400 text-black font-bold rounded-full hover:from-orange-500 hover:to-yellow-500 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Let's Talk! ✨
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center relative z-10">            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-lime-400 transition-colors p-1 rounded-lg hover:bg-green-800/20"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>        {/* Mobile Navigation */}
        {isOpen && (
          <div 
            className="md:hidden mt-4 py-4 backdrop-blur-md rounded-xl relative z-[100]"            style={{
              backgroundColor: 'rgba(45, 113, 48, 0.95)'
            }}
          >            <div className="flex flex-col space-y-3 px-4 relative z-10">
              {navItems.map((item) => (
                item.type === 'section' ? (
                  <button
                    key={item.name}
                    onClick={() => handleSectionNavigation(item.sectionId!)}
                    className="text-green-100 hover:text-lime-400 transition-colors duration-200 font-medium tracking-wide py-2 px-3 rounded-lg hover:bg-green-800/30 block text-center touch-manipulation w-full"
                    style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href!}
                    className="text-green-100 hover:text-lime-400 transition-colors duration-200 font-medium tracking-wide py-2 px-3 rounded-lg hover:bg-green-800/30 block text-center touch-manipulation"
                    style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}<Link
                to="/booking"
                className="mt-3 px-4 py-3 bg-orange-400 hover:bg-orange-500 border border-orange-400 text-black rounded-full transition-all duration-300 font-medium text-center touch-manipulation"
                style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
                onClick={() => setIsOpen(false)}
              >
                Let's Talk
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
