
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      quote: 'Melons Media transformed our digital presence completely. Their attention to detail is unmatched.',
      result: '300% increase in user engagement',
      avatar: '/placeholder.svg?height=60&width=60'
    },
    {
      name: 'Michael Chen',
      company: 'Growth Labs',
      quote: 'The team delivered beyond our expectations. Our new website is both beautiful and functional.',
      result: '250% boost in conversion rates',
      avatar: '/placeholder.svg?height=60&width=60'
    },
    {
      name: 'Emily Rodriguez',
      company: 'Creative Studio',
      quote: 'Professional, creative, and results-driven. Melons Media is our go-to digital partner.',
      result: '400% growth in online presence',
      avatar: '/placeholder.svg?height=60&width=60'
    },
    {
      name: 'David Park',
      company: 'Innovate Co.',
      quote: 'Their strategic approach and technical expertise helped us achieve our ambitious goals.',
      result: '200% increase in lead generation',
      avatar: '/placeholder.svg?height=60&width=60'
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">What Our Clients Say</h2>
          <p className="text-xl text-white/70 font-light max-w-3xl mx-auto">
            Discover how we've helped businesses achieve remarkable results
          </p>
        </div>

        <div className="relative animate-on-scroll">
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="glassmorphic-card border-white/10">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-6">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full mr-4"
                        />
                        <div>
                          <h4 className="font-light tracking-tight">{testimonial.name}</h4>
                          <p className="text-white/70 text-sm">{testimonial.company}</p>
                        </div>
                      </div>
                      <p className="text-white/80 font-light mb-6 leading-relaxed">"{testimonial.quote}"</p>
                      <div className="bg-orange-400/20 rounded-lg p-4">
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
