
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const testimonials = [    {
      name: 'Rohan Raghuvanshi',
      company: 'TechStart Inc.',
      quote: 'Melons Media transformed our digital presence completely. Their attention to detail is unmatched.',
      result: '300% increase in user engagement',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face'
    },    {
      name: 'Mayank Patil',
      company: 'Growth Labs',
      quote: 'The team delivered beyond our expectations. Our new website is both beautiful and functional.',
      result: '25% boost in conversion rates',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face'
    },    {
      name: 'Rahul Sharma',
      company: 'Creative Studio',
      quote: 'Professional, creative, and results-driven. Melons Media is our go-to digital partner.',
      result: '40% growth in online presence',
      avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=120&h=120&fit=crop&crop=face'
    },    {
      name: 'Priyansh Aggarwal',
      company: 'Innovate Co.',
      quote: 'Their strategic approach and technical expertise helped us achieve our ambitious goals.',
      result: '100% increase in lead generation',
      avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=120&h=120&fit=crop&crop=face'
    },    {
      name: 'Anugya Sharma',
      company: 'Future Brands',
      quote: 'Working with Melons Media was a game-changer. They understood our vision perfectly.',
      result: 'improved ROI',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b524?w=120&h=120&fit=crop&crop=face'
    },    {
      name: 'Arjun Kapoor',
      company: 'Digital Ventures',
      quote: 'No BS, just results. Exactly what we needed to scale our business rapidly.',
      result: 'increase in revenue growth',
      avatar: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=120&h=120&fit=crop&crop=face'
    }];

  // Auto-rotate carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Get visible testimonials (3 at a time)
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
        </div>

        <div className="relative animate-on-scroll" ref={carouselRef}>
          <div className="flex justify-center items-center gap-3 md:gap-6 max-w-full md:max-w-6xl mx-auto overflow-hidden px-2">
            {getVisibleTestimonials().map((testimonial, index) => (              <div 
                key={`${testimonial.originalIndex}-${index}`}
                className={`transition-all duration-500 ${
                  index === 1 
                    ? 'transform md:scale-110 z-10' // Middle card stands out on desktop
                    : 'transform md:scale-95 md:opacity-75' // Side cards are smaller on desktop
                }`}
                style={{ 
                  width: index === 1 ? 'min(380px, 90vw)' : 'min(340px, 85vw)',
                  flex: '0 0 auto',
                  maxWidth: '90vw'
                }}
              >                <Card className="glassmorphic-card border-white/10 h-full">
                  <CardContent className="p-4 md:p-8 lg:p-10 flex flex-col h-full">
                    <div className="flex items-center mb-4 md:mb-8">                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-12 md:w-16 h-12 md:h-16 rounded-full mr-3 md:mr-4 object-cover border-2 border-orange-400/30"
                      />
                      <div>
                        <h4 className="font-light tracking-tight text-base md:text-lg">{testimonial.name}</h4>
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
            ))}
          </div>
            {/* Indicators */}
          <div className="flex justify-center mt-6 md:mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 touch-manipulation ${
                  index === currentIndex
                    ? 'bg-orange-400 w-6 md:w-8'
                    : 'bg-white/30 hover:bg-white/50'
                }`}                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
