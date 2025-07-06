import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Award, Target, Globe, Instagram, TrendingUp, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const allProjects = [
    {
      id: 1,
      title: 'Furni - Interior Design Studio',
      category: 'E-commerce + SEO Marketing',
      description: 'Modern furniture D2C website with conversion-optimized design, SEO foundation, and marketing funnels that transformed their online presence.',
      image: '/lovable-uploads/furni-project.jpg.png',
      technologies: ['React', 'TypeScript', 'SEO', 'Google Analytics', 'Marketing Automation'],
      marketingResults: [
        '180% increase in organic traffic',
        '35% conversion rate improvement',
        'Page 1 Google rankings for 12 keywords',
        'Reduced bounce rate by 45%',
        '₹15L+ monthly revenue increase'
      ],
      services: ['Website Development', 'SEO Optimization', 'Marketing Funnels', 'Analytics Setup', 'Content Strategy'],
      challenge: 'Furni needed a complete digital transformation to compete in the modern furniture market.',
      solution: 'We built a conversion-optimized D2C website with integrated SEO and marketing automation.',
      icon: Globe
    },
    {
      id: 2,
      title: 'TravelWise - Travel Platform',
      category: 'Travel Platform + Digital Marketing',
      description: 'Multi-platform travel app with geo-targeted marketing and booking optimization that revolutionized their customer acquisition.',
      image: '/lovable-uploads/travel-project.jpg.png',
      technologies: ['React Native', 'React.js', 'Google Ads', 'Facebook Ads', 'Analytics'],
      marketingResults: [
        '250% increase in app downloads',
        '60% higher booking conversion',
        'Reduced customer acquisition cost by 40%',
        'Achieved 4.8★ app store rating',
        'Expanded to 15+ cities'
      ],
      services: ['App Development', 'Paid Advertising', 'ASO', 'Conversion Optimization', 'User Acquisition'],
      challenge: 'TravelWise struggled with high customer acquisition costs and low conversion rates.',
      solution: 'We developed a comprehensive multi-platform strategy with optimized ad campaigns and ASO.',
      icon: Globe
    },
    {
      id: 3,
      title: 'Anugya Sharma (@i.anugya.sharma)',
      category: 'UGC Creator + Instagram Growth',
      description: 'Strategic Instagram growth and brand building for UGC content creator, achieving sustainable follower growth and monetization.',
      image: '/lovable-uploads/melon.png',
      technologies: ['Instagram Strategy', 'Content Planning', 'Analytics', 'Brand Partnerships', 'Monetization'],
      marketingResults: [
        'Grew from 5K to 21K+ followers',
        '400% increase in engagement rate',
        'Secured 15+ brand partnerships',
        'Generated ₹2.5L+ monthly revenue',
        'Built sustainable personal brand'
      ],
      services: ['Content Strategy', 'Instagram Growth', 'Brand Partnerships', 'Revenue Optimization', 'Personal Branding'],
      challenge: 'Anugya wanted to build a sustainable income stream through content creation.',
      solution: 'We developed a comprehensive personal branding strategy with focus on authentic engagement.',
      icon: Instagram
    },
    {
      id: 4,
      title: "Rejul's Fashion - Rental Business",
      category: 'Retail Marketing + Content Creation',
      description: 'Complete digital transformation for clothing rental business in Bhopal with content creation and Instagram growth strategy.',
      image: '/lovable-uploads/melon.png',
      technologies: ['Instagram Marketing', 'Content Creation', 'Local SEO', 'Google Ads', 'Photography'],
      marketingResults: [
        '300% increase in rental bookings',
        'Built Instagram presence from 0 to 8K followers',
        '85% of new customers from digital channels',
        'Expanded to 3 new locations',
        '₹8L+ annual revenue growth'
      ],
      services: ['Content Creation', 'Instagram Marketing', 'Local SEO', 'Google Ads', 'Brand Photography'],
      challenge: 'Rejul\'s Fashion needed to establish digital presence in a competitive local market.',
      solution: 'We created a comprehensive digital strategy combining social media, local SEO, and content.',
      icon: TrendingUp
    },
    {
      id: 5,
      title: 'FitMe - Wellness App',
      category: 'Mobile App + User Acquisition',
      description: 'Comprehensive fitness app with integrated marketing for user acquisition and retention, achieving significant market penetration.',
      image: '/lovable-uploads/fitme-project.jpg.jpg',
      technologies: ['React Native', 'Firebase', 'App Store Optimization', 'In-App Marketing', 'Analytics'],
      marketingResults: [
        '150K+ app downloads in 6 months',
        '65% user retention rate',
        'Featured in App Store',
        'Generated ₹50L+ revenue',
        '4.7★ average rating'
      ],
      services: ['App Development', 'ASO', 'User Acquisition', 'Retention Marketing', 'Analytics'],
      challenge: 'FitMe needed to stand out in the crowded fitness app market.',
      solution: 'We built a comprehensive user acquisition strategy with focus on retention and monetization.',
      icon: Target
    }
  ];

  return (
    <div className="min-h-screen text-white flex flex-col">
      <Navigation />
      
      {/* Hero Section - Green */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-green-900 via-black to-green-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-400/15 via-transparent to-yellow-300/10" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6">
            Detailed <span className="melon-text">Case Studies</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 font-light mb-8 max-w-4xl mx-auto">
            Deep dive into our success stories and see exactly how we drive growth for our clients
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      {allProjects.map((project, index) => {
        const IconComponent = project.icon;
        const isEven = index % 2 === 0;
        
        return (
          <section 
            key={project.id} 
            className={`py-16 md:py-24 px-6 relative overflow-hidden ${
              isEven 
                ? 'bg-gradient-to-br from-black via-gray-900 to-black' 
                : 'bg-gradient-to-br from-green-800 via-black to-green-900'
            }`}
          >
            {/* Background accent */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/6 via-transparent to-orange-400/5" />
            
            <div className="max-w-7xl mx-auto relative z-10">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                {/* Project Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden group">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.className = `relative h-80 lg:h-96 bg-gradient-to-br from-orange-500 to-green-600 flex items-center justify-center rounded-2xl`;
                          parent.innerHTML = `
                            <div class="text-center">
                              <div class="w-24 h-24 bg-white/20 backdrop-blur-md rounded-2xl mx-auto mb-4 flex items-center justify-center">
                                <span class="text-3xl font-bold text-white">${project.title.charAt(0)}</span>
                              </div>
                              <h3 class="text-2xl font-light text-white">${project.title.split(' ')[0]}</h3>
                            </div>
                          `;
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-6 left-6">
                      <span className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white font-medium">
                        {project.category}
                      </span>
                    </div>
                    
                    {/* Icon */}
                    <div className="absolute top-6 right-6">
                      <div className="w-12 h-12 bg-orange-400/20 backdrop-blur-md rounded-xl flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-orange-300" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">{project.title}</h2>
                  <p className="text-white/80 font-light leading-relaxed text-lg mb-8">{project.description}</p>

                  {/* Challenge & Solution */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="text-orange-400 font-medium mb-2">Challenge</h4>
                      <p className="text-white/70 text-sm leading-relaxed">{project.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-green-400 font-medium mb-2">Solution</h4>
                      <p className="text-white/70 text-sm leading-relaxed">{project.solution}</p>
                    </div>
                  </div>

                  {/* Marketing Results */}
                  <div className="mb-8">
                    <h4 className="text-orange-400 font-medium mb-4 flex items-center">
                      <Award className="w-5 h-5 mr-2" />
                      Marketing Results
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {project.marketingResults.map((result, resultIndex) => (
                        <div key={resultIndex} className="text-white/80 flex items-center">
                          <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 flex-shrink-0" />
                          <span className="text-sm">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Services & Technologies */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="text-green-400 font-medium mb-3 flex items-center">
                        <Target className="w-5 h-5 mr-2" />
                        Services Provided
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.services.map((service, serviceIndex) => (
                          <span
                            key={serviceIndex}
                            className="px-3 py-1 bg-green-400/20 text-green-300 rounded-full text-sm border border-green-400/30"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-white/60 font-medium mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-white/10 rounded-full text-white/80 text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button 
                    className="bg-gradient-to-r from-orange-400 to-yellow-400 text-black hover:from-orange-500 hover:to-yellow-500 font-bold px-8 py-3 rounded-xl hover:scale-105 transition-all duration-300"
                    onClick={() => window.location.href = '/booking'}
                  >
                    Start Similar Project
                  </Button>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Call to Action Section - Green */}
      <section className="py-24 px-6 bg-gradient-to-br from-green-800 via-black to-green-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-400/15 via-transparent to-yellow-300/10" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Ready to <span className="melon-text">join our success stories</span>?
          </h2>
          <p className="text-xl text-white/70 mb-8 font-light">
            From setting foundations and SEO to running ads and creating omnipresence - we handle everything so you can focus on what you do best.
          </p>
          <Button 
            className="bg-gradient-to-r from-orange-400 to-yellow-400 text-black hover:from-orange-500 hover:to-yellow-500 font-bold px-10 py-4 rounded-xl hover:scale-105 transition-all duration-300 text-lg"
            onClick={() => window.location.href = '/booking'}
          >
            Start Your Growth Journey ✨
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Projects;
