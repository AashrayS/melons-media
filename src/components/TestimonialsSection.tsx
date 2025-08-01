import React, { useRef, useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: 'Rohan Raghuvanshi',
      company: 'TechStart Inc.',
      quote: 'Melons Media transformed our digital presence completely. Their attention to detail is unmatched.',
      result: '300% increase in user engagement'
    },
    {
      name: 'Mayank Patil',
      company: 'Growth Labs',
      quote: 'The team delivered beyond our expectations. Our new website is both beautiful and functional.',
      result: '25% boost in conversion rates'
    },
    {
      name: 'Rahul Sharma',
      company: 'Creative Studio',
      quote: 'Professional, creative, and results-driven. Melons Media is our go-to digital partner.',
      result: '40% growth in online presence'
    },
    {
      name: 'Priyansh Aggarwal',
      company: 'Innovate Co.',
      quote: 'Their strategic approach and technical expertise helped us achieve our ambitious goals.',
      result: '100% increase in lead generation'
    },
    {
      name: 'Anugya Sharma',
      company: 'Future Brands',
      quote: 'Working with Melons Media was a game-changer. They understood our vision perfectly.',
      result: 'improved ROI'
    },
    {
      name: 'Arjun Kapoor',
      company: 'Digital Ventures',
      quote: 'No BS, just results. Exactly what we needed to scale our business rapidly.',
      result: 'increase in revenue growth'
    }
  ];

  // Auto-rotate carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
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
    <section id="testimonials" className="py-16 md:py-32 px-4 md:px-8 lg:px-16 xl:px-24 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fd8d1b]/8 via-transparent to-[#fd8e1b]/6" />
      
      <div className="max-w-full md:max-w-8xl mx-auto overflow-hidden relative z-10">
        <div className="text-center mb-12 md:mb-20 animate-on-scroll">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6 md:mb-8">
            What Our Clients Say
          </h2>
          <p className="text-lg md:text-xl text-white/70 font-light max-w-3xl mx-auto px-4">
            Real results from real people who trusted us with their vision
          </p>
        </div>

        <div className="relative animate-on-scroll" ref={carouselRef}>
          <div className="flex gap-3 md:gap-6 justify-center items-center max-w-full px-2 pb-4">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div 
                key={`${testimonial.originalIndex}-${index}`}
                className={`transition-all duration-500 flex-shrink-0 ${
                  index === 1 
                    ? 'transform md:scale-110 z-10'
                    : 'transform md:scale-95 md:opacity-75'
                }`}
                style={{ 
                  width: index === 1 ? 'min(400px, 90vw)' : 'min(340px, 85vw)',
                  scrollSnapAlign: 'center'
                }}
              >
                <Card className="glassmorphic-card border-white/10 h-full">
                  <CardContent className="p-4 md:p-8 lg:p-10 flex flex-col h-full">
                    <div className="mb-4 md:mb-8">
                      <h4 className="font-light tracking-tight text-base md:text-lg text-white">{testimonial.name}</h4>
                      <p className="text-white/70 text-xs md:text-sm">{testimonial.company}</p>
                    </div>
                    <p className="text-white/80 font-light mb-4 md:mb-8 leading-relaxed flex-grow text-sm md:text-lg">"{testimonial.quote}"</p>
                    <div className="bg-gradient-to-r from-orange-400/20 to-yellow-400/20 rounded-xl p-3 md:p-4 border border-orange-400/20">
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
