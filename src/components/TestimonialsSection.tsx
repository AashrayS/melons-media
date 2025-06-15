
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const testimonials = [    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      quote: 'Melons Media transformed our digital presence completely. Their attention to detail is unmatched.',
      result: '300% increase in user engagement',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&h=120&fit=crop&crop=face'
    },    {
      name: 'Michael Chen',
      company: 'Growth Labs',
      quote: 'The team delivered beyond our expectations. Our new website is both beautiful and functional.',
      result: '250% boost in conversion rates',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=120&h=120&fit=crop&crop=face'
    },    {
      name: 'Emily Rodriguez',
      company: 'Creative Studio',
      quote: 'Professional, creative, and results-driven. Melons Media is our go-to digital partner.',
      result: '400% growth in online presence',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&h=120&fit=crop&crop=face'
    },    {
      name: 'David Park',
      company: 'Innovate Co.',
      quote: 'Their strategic approach and technical expertise helped us achieve our ambitious goals.',
      result: '200% increase in lead generation',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&h=120&fit=crop&crop=face'
    },
    {
      name: 'Jessica Williams',
      company: 'Future Brands',
      quote: 'Working with Melons Media was a game-changer. They understood our vision perfectly.',
      result: '500% ROI improvement',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=120&h=120&fit=crop&crop=face'
    },
    {
      name: 'Alex Thompson',
      company: 'Digital Ventures',
      quote: 'No BS, just results. Exactly what we needed to scale our business rapidly.',
      result: '350% revenue growth',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=face'
    }  ];

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
    <section id="testimonials" className="py-32 px-8 lg:px-16 xl:px-24 bg-black text-white">
      <div className="max-w-8xl mx-auto">
        <div className="text-center mb-20 animate-on-scroll">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-8">What Our Clients Say</h2>
          <p className="text-xl text-white/70 font-light max-w-3xl mx-auto">
            Real results from real people who trusted us with their vision
          </p>
        </div>        <div className="relative animate-on-scroll" ref={carouselRef}>
          <div className="flex justify-center items-center gap-6 max-w-6xl mx-auto">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div 
                key={`${testimonial.originalIndex}-${index}`}
                className={`transition-all duration-500 ${
                  index === 1 
                    ? 'transform scale-110 z-10' // Middle card stands out
                    : 'transform scale-95 opacity-75' // Side cards are smaller and less opaque
                }`}
                style={{ 
                  width: index === 1 ? '380px' : '340px',
                  flex: '0 0 auto'
                }}
              >
                <Card className="glassmorphic-card border-white/10 h-full">
                  <CardContent className="p-8 lg:p-10 flex flex-col h-full">
                    <div className="flex items-center mb-8">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-orange-400/30"
                      />
                      <div>
                        <h4 className="font-light tracking-tight text-lg">{testimonial.name}</h4>
                        <p className="text-white/70 text-sm">{testimonial.company}</p>
                      </div>
                    </div>
                    <p className="text-white/80 font-light mb-8 leading-relaxed flex-grow text-lg">"{testimonial.quote}"</p>
                    <div className="bg-gradient-to-r from-orange-400/20 to-purple-500/20 rounded-xl p-4 border border-orange-400/20">
                      <p className="text-orange-400 font-light text-sm">Result: {testimonial.result}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-orange-400 w-8'
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
