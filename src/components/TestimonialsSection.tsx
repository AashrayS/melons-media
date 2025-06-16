
import React, { useRef, useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const testimonials = [    {
      name: 'Rohan Raghuvanshi',
      company: 'TechStart Inc.',
      quote: 'Melons Media transformed our digital presence completely. Their attention to detail is unmatched.',
      result: '300% increase in user engagement',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&h=120&fit=crop&crop=face'
    },    {
      name: 'Mayank Patil',
      company: 'Growth Labs',
      quote: 'The team delivered beyond our expectations. Our new website is both beautiful and functional.',
      result: '25% boost in conversion rates',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&h=120&fit=crop&crop=face'
    },    {
      name: 'Rahul Sharma',
      company: 'Creative Studio',
      quote: 'Professional, creative, and results-driven. Melons Media is our go-to digital partner.',
      result: '40% growth in online presence',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=120&h=120&fit=crop&crop=face'
    },    {
      name: 'Priyansh Aggarwal',
      company: 'Innovate Co.',
      quote: 'Their strategic approach and technical expertise helped us achieve our ambitious goals.',
      result: '100% increase in lead generation',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&h=120&fit=crop&crop=face'
    },    {
      name: 'Anugya Sharma',
      company: 'Future Brands',
      quote: 'Working with Melons Media was a game-changer. They understood our vision perfectly.',
      result: 'improved ROI',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&h=120&fit=crop&crop=face'
    },    {
      name: 'Arjun Kapoor',
      company: 'Digital Ventures',
      quote: 'No BS, just results. Exactly what we needed to scale our business rapidly.',
      result: 'increase in revenue growth',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face'
    }  ];  // Auto-rotate carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Get 3 visible testimonials (previous, current, next)
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push({ ...testimonials[index], originalIndex: index });
    }
    return visible;
  };

  return (
    <section id="testimonials" className="py-16 md:py-32 px-4 md:px-8 lg:px-16 xl:px-24 bg-black text-white">
      <div className="max-w-full md:max-w-8xl mx-auto overflow-hidden">
        <div className="text-center mb-12 md:mb-20 animate-on-scroll">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6 md:mb-8">What Our Clients Say</h2>
          <p className="text-lg md:text-xl text-white/70 font-light max-w-3xl mx-auto px-4">
            Real results from real people who trusted us with their vision
          </p>
        </div>        <div className="relative animate-on-scroll" ref={carouselRef}>
          <div 
            className="flex gap-3 md:gap-6 justify-center items-center max-w-full px-2 pb-4"
          >
            {getVisibleTestimonials().map((testimonial, index) => (
              <div 
                key={`${testimonial.originalIndex}-${index}`}
                className={`transition-all duration-500 flex-shrink-0 ${
                  index === 1 
                    ? 'transform md:scale-110 z-10' // Middle card is bigger
                    : 'transform md:scale-95 md:opacity-75' // Side cards are smaller
                }`}
                style={{ 
                  width: index === 1 ? 'min(400px, 90vw)' : 'min(340px, 85vw)',
                  scrollSnapAlign: 'center'
                }}
              ><Card className="glassmorphic-card border-white/10 h-full">
                  <CardContent className="p-4 md:p-8 lg:p-10 flex flex-col h-full">
                    <div className="flex items-center mb-4 md:mb-8">                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-12 md:w-16 h-12 md:h-16 rounded-full mr-3 md:mr-4 object-cover border-2 border-orange-400/30"
                      />
                      <div>
                        <h4 className="font-light tracking-tight text-base md:text-lg text-white">{testimonial.name}</h4>
                        <p className="text-white/70 text-xs md:text-sm">{testimonial.company}</p>
                      </div>
                    </div>
                    <p className="text-white/80 font-light mb-4 md:mb-8 leading-relaxed flex-grow text-sm md:text-lg">"{testimonial.quote}"</p>
                    <div className="bg-gradient-to-r from-orange-400/20 to-purple-500/20 rounded-xl p-3 md:p-4 border border-orange-400/20">
                      <p className="text-orange-400 font-light text-xs md:text-sm">Result: {testimonial.result}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}          </div>
            {/* Indicators */}
          <div className="flex justify-center mt-6 md:mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 touch-manipulation ${
                  index === currentIndex
                    ? 'bg-orange-400 w-6 md:w-8'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
