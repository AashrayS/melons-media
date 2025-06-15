
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

const TestimonialsSection = () => {
  const testimonials = [    {
      name: 'Rohan Chaturbhuj',
      company: 'TechStart Inc.',
      quote: 'Melons Media transformed our digital presence completely. Their attention to detail is unmatched.',
      result: '30% increase in user engagement',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face'
    },    {
      name: 'Raghav Sharma',
      company: 'Growth Labs',
      quote: 'The team delivered beyond our expectations. Our new website is both beautiful and functional.',
      result: '25% boost in conversion rates',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&h=120&fit=crop&crop=face'
    },
    {
      name: 'Rohit Verma',
      company: 'Creative Studio',
      quote: 'Professional, creative, and results-driven. Melons Media is our go-to digital partner.',
      result: '40% growth in online presence',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=face'
    },    {
      name: 'Sahil Gaikwad',
      company: 'Innovate Co.',
      quote: 'Their strategic approach and technical expertise helped us achieve our ambitious goals.',
      result: 'improvement in site acceessibility',
      avatar: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=120&h=120&fit=crop&crop=face'
    },
    {
      name: 'Jessica Williams',
      company: 'Future Brands',
      quote: 'Working with Melons Media was a game-changer. They understood our vision perfectly.',
      result: '100% ROI improvement',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=120&h=120&fit=crop&crop=face'
    }
  ];

  return (
    <section id="testimonials" className="py-32 px-8 lg:px-16 xl:px-24 bg-black text-white">
      <div className="max-w-8xl mx-auto">
        <div className="text-center mb-20 animate-on-scroll">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-8">What Our Clients Say</h2>
          <p className="text-xl text-white/70 font-light max-w-3xl mx-auto">
            Real results from real people who trusted us with their vision
          </p>
        </div>

        <div className="relative animate-on-scroll">
          <Carousel className="w-full max-w-6xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="glassmorphic-card border-white/10 h-full">
                    <CardContent className="p-8 lg:p-10 flex flex-col h-full">
                      <div className="flex items-center mb-8">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-orange-400/30"
                        />                        <div>
                          <h4 className="font-light tracking-tight text-lg text-white">{testimonial.name}</h4>
                          <p className="text-white/70 text-sm">{testimonial.company}</p>
                        </div>
                      </div>
                      <p className="text-white/80 font-light mb-8 leading-relaxed flex-grow text-lg">"{testimonial.quote}"</p>
                      <div className="bg-gradient-to-r from-orange-400/20 to-purple-500/20 rounded-xl p-4 border border-orange-400/20">
                        <p className="text-orange-400 font-light text-sm">Result: {testimonial.result}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="glassmorphic-card border-white/20 text-white hover:bg-white/10" />
            <CarouselNext className="glassmorphic-card border-white/20 text-white hover:bg-white/10" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
