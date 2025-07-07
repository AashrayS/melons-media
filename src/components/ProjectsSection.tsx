import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Target, Folder } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectsSection = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const folderRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  // All projects from the Projects page
  const allProjects = [
    {
      id: 1,
      title: 'Furni - Interior Design Studio',
      category: 'E-commerce + SEO Marketing',
      description: 'Modern furniture D2C website with conversion-optimized design, SEO foundation, and marketing funnels.',
      image: '/lovable-uploads/furni-project.jpg.png',
      technologies: ['React', 'TypeScript', 'SEO', 'Google Analytics'],
      marketingResults: [
        '180% increase in organic traffic',
        '35% conversion rate improvement',
        'Page 1 Google rankings for 12 keywords'
      ],
      services: ['Website Optimization', 'SEO Optimization', 'Conversion Funnels']
    },
    {
      id: 2,
      title: 'TravelWise - Travel Platform',
      category: 'Travel Platform + Digital Marketing',
      description: 'Multi-platform travel app with geo-targeted marketing and booking optimization.',
      image: '/lovable-uploads/travel-project.jpg.png',
      technologies: ['React Native', 'React.js', 'Google Ads', 'Facebook Ads'],
      marketingResults: [
        '250% increase in app downloads',
        '60% higher booking conversion',
        'Reduced customer acquisition cost by 40%'
      ],
      services: ['App Development', 'Google Ads Management', 'App Store Optimization']
    },
    {
      id: 3,
      title: 'Anugya Sharma (@i.anugya.sharma)',
      category: 'UGC Creator + Instagram Growth',
      description: 'Strategic Instagram growth and brand building for UGC content creator, achieving 21K+ followers.',
      image: '/lovable-uploads/melon.png',
      technologies: ['Instagram Strategy', 'Content Planning', 'Analytics', 'Brand Partnerships'],
      marketingResults: [
        'Grew from 5K to 21K+ followers',
        '400% increase in engagement rate',
        'Secured 15+ brand partnerships'
      ],
      services: ['Instagram Growth Strategy', 'Content Creation', 'Brand Omnipresence']
    },
    {
      id: 4,
      title: "Rejul's Fashion - Rental Business",
      category: 'Retail Marketing + Content Creation',
      description: 'Complete digital transformation for clothing rental business in Bhopal with content creation and Instagram growth.',
      image: '/lovable-uploads/melon.png',
      technologies: ['Instagram Marketing', 'Content Creation', 'Local SEO', 'Google Ads'],
      marketingResults: [
        '300% increase in rental bookings',
        'Built Instagram presence from 0 to 8K followers',
        '85% of new customers from digital channels'
      ],
      services: ['Content Creation', 'Instagram Marketing', 'Local SEO']
    },
    {
      id: 5,
      title: 'FitMe - Wellness App',
      category: 'Mobile App + User Acquisition',
      description: 'Comprehensive fitness app with integrated marketing for user acquisition and retention.',
      image: '/lovable-uploads/fitme-project.jpg.jpg',
      technologies: ['React Native', 'Firebase', 'App Store Optimization', 'In-App Marketing'],
      marketingResults: [
        '150K+ app downloads in 6 months',
        '65% user retention rate',
        'Featured in App Store'
      ],
      services: ['App Development', 'User Acquisition', 'Paid Advertising']
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!folderRef.current) return;
      
      const rect = folderRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Calculate how much of the folder section is visible
      if (rect.top < viewportHeight * 0.8 && rect.bottom > viewportHeight * 0.2) {
        const scrollProgress = Math.max(0, Math.min(1, (viewportHeight * 0.8 - rect.top) / (viewportHeight * 0.6)));
        setScrollPosition(scrollProgress);
        
        // Show one project at a time based on scroll progress
        const newIndex = Math.floor(scrollProgress * allProjects.length);
        const clampedIndex = Math.max(0, Math.min(allProjects.length - 1, newIndex));
        setCurrentProjectIndex(clampedIndex);
      } else if (rect.top >= viewportHeight * 0.8) {
        // Before the section is in view
        setCurrentProjectIndex(-1);
      } else if (rect.bottom <= viewportHeight * 0.2) {
        // After the section has passed
        setCurrentProjectIndex(allProjects.length - 1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [allProjects.length]);

  return (
    <section id="projects" className="py-16 md:py-32 px-4 md:px-8 lg:px-16 xl:px-24 bg-gradient-to-br from-[#378c35] via-[#010100] to-[#2c8433] text-white relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fd8d1b]/8 via-transparent to-[#fd8e1b]/6" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6 md:mb-8">
            Our <span className="text-[#fd8d1b]">Growth</span> Portfolio
          </h2>
          <p className="text-lg md:text-xl text-white/70 font-light max-w-3xl mx-auto px-4 mb-8">
            Real results from our comprehensive tech media strategies that drive growth and brand presence
          </p>
          <p className="text-sm text-[#fd8d1b]/80 font-light">
            Scroll down to explore our projects as they emerge from the folder
          </p>
        </div>

        {/* Folder Container */}
        <div 
          ref={folderRef}
          className="relative min-h-[900px] flex items-center justify-center px-4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Folder Base */}
          <div className="relative">
            {/* Folder Back */}
            <div className="w-72 md:w-80 h-80 md:h-96 bg-gradient-to-br from-[#fd8d1b]/20 to-[#fd8e1b]/10 rounded-lg border-2 border-[#fd8d1b]/30 transform rotate-2 absolute -z-10" />
            
            {/* Main Folder */}
            <div className="w-72 md:w-80 h-80 md:h-96 bg-gradient-to-br from-[#010100]/90 via-[#000000]/80 to-[#010000]/90 rounded-lg border-2 border-[#fd8d1b]/40 relative overflow-hidden backdrop-blur-sm shadow-2xl">
              {/* Folder Tab */}
              <div className="absolute -top-4 left-6 md:left-8 w-20 md:w-24 h-6 md:h-8 bg-gradient-to-br from-[#fd8d1b] to-[#fd8e1b] rounded-t-lg border-2 border-[#fd8d1b] border-b-0 flex items-center justify-center shadow-lg">
                <Folder className="w-3 md:w-4 h-3 md:h-4 text-[#010100]" />
              </div>
              
              {/* Folder Label */}
              <div className="absolute top-4 left-4 right-4">
                <h3 className="text-base md:text-lg font-bold text-[#fd8d1b] text-center">
                  📁 Success Stories
                </h3>
                <div className="w-full h-px bg-[#fd8d1b]/50 mt-2" />
              </div>

              {/* File Stack Indicator */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="text-center">
                  <span className="text-xs text-[#fd8d1b]/90 font-medium">
                    Project {currentProjectIndex + 1} of {allProjects.length}
                  </span>
                  <div className="flex justify-center space-x-1 mt-2">
                    {allProjects.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-500 ${
                          index <= currentProjectIndex ? 'bg-[#fd8d1b] scale-110' : 'bg-[#fd8d1b]/30'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Folder Opening Animation */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#010100]/50 to-transparent pointer-events-none" />
            </div>

            {/* Project Cards Coming Out Upward */}
            {allProjects.map((project, index) => {
              const isCurrentCard = index === currentProjectIndex;
              const hasBeenShown = index <= currentProjectIndex;
              const verticalOffset = isCurrentCard ? -120 : hasBeenShown ? -60 : 0; // Current card goes higher
              const horizontalOffset = isCurrentCard ? 0 : hasBeenShown ? (index % 2 === 0 ? -10 : 10) : 0;
              const rotation = isCurrentCard ? 0 : hasBeenShown ? (index % 2 === 0 ? -2 : 2) : 0;
              const scale = isCurrentCard ? 1 : hasBeenShown ? 0.95 : 0.9;
              const opacity = isCurrentCard ? 1 : hasBeenShown ? 0.3 : 0;
              
              return (
                <div
                  key={project.id}
                  className={`absolute top-0 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ease-out`}
                  style={{
                    transform: `translate(-50%, ${verticalOffset}px) translateX(${horizontalOffset}px) rotate(${rotation}deg) scale(${scale})`,
                    opacity: opacity,
                    zIndex: isCurrentCard ? 30 : 20 + index,
                    transitionDelay: isCurrentCard ? '0ms' : `${index * 100}ms`
                  }}
                >
                  {/* Project Card */}
                  <div className="w-80 md:w-96 glassmorphic-card rounded-2xl overflow-hidden border-2 border-[#fd8d1b]/30 bg-gradient-to-br from-[#010100]/95 via-[#000000]/90 to-[#010000]/95 backdrop-blur-lg hover:scale-105 transition-transform duration-300 shadow-2xl">
                    {/* Project Image */}
                    <div className="relative h-40 md:h-48 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.className = `relative h-40 md:h-48 bg-gradient-to-br from-[#fd8d1b] to-[#378c35] flex items-center justify-center`;
                            parent.innerHTML = `
                              <div class="text-center">
                                <div class="w-12 h-12 md:w-16 md:h-16 bg-white/20 backdrop-blur-md rounded-xl mx-auto mb-3 flex items-center justify-center">
                                  <span class="text-lg md:text-xl font-bold text-white">${project.title.charAt(0)}</span>
                                </div>
                                <h3 class="text-sm md:text-lg font-light text-white">${project.title.split(' ')[0]}</h3>
                              </div>
                            `;
                          }
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#010100]/70 to-transparent" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-3 left-3">
                        <span className="px-2 py-1 bg-[#fd8d1b] text-[#010100] rounded-full text-xs font-medium">
                          {project.category}
                        </span>
                      </div>

                      {/* Project Number */}
                      <div className="absolute top-3 right-3">
                        <div className="w-8 h-8 bg-[#378c35] text-white rounded-full flex items-center justify-center font-bold text-sm">
                          {project.id}
                        </div>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-4 md:p-6">
                      <h4 className="text-lg md:text-xl font-bold text-white mb-2 line-clamp-1">{project.title}</h4>
                      <p className="text-white/80 text-xs md:text-sm mb-4 leading-relaxed line-clamp-2">{project.description}</p>

                      {/* Marketing Results */}
                      <div className="mb-4">
                        <h5 className="text-[#fd8d1b] font-bold mb-2 flex items-center text-sm">
                          <Award className="w-4 h-4 mr-1" />
                          Key Results
                        </h5>
                        <div className="space-y-1">
                          {project.marketingResults.slice(0, 2).map((result, resultIndex) => (
                            <div key={resultIndex} className="text-white/90 flex items-center text-xs">
                              <div className="w-2 h-2 bg-[#fd8d1b] rounded-full mr-2 flex-shrink-0" />
                              <span className="line-clamp-1 font-medium">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Services */}
                      <div className="mb-4">
                        <h5 className="text-[#378c35] font-bold mb-2 flex items-center text-sm">
                          <Target className="w-4 h-4 mr-1" />
                          Our Services
                        </h5>
                        <div className="flex flex-wrap gap-1">
                          {project.services.slice(0, 2).map((service, serviceIndex) => (
                            <span
                              key={serviceIndex}
                              className="px-2 py-1 bg-[#378c35]/30 text-[#378c35] rounded-full text-xs border border-[#378c35]/50 font-medium"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-white/10 rounded-full text-white/80 text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* View More Button */}
                      <Button 
                        size="sm"
                        className="w-full bg-gradient-to-r from-[#fd8d1b] to-[#fd8e1b] text-[#010100] hover:from-[#fd8e1b] hover:to-[#fd8d1a] font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        View Full Case Study →
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Scroll Instruction */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center">
            <div className="animate-bounce">
              <div className="w-6 h-10 border-2 border-[#fd8d1b]/50 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-[#fd8d1b] rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
            <p className="text-xs text-white/60 mt-2">Scroll to reveal projects</p>
          </div>
        </div>

        {/* View All Projects CTA */}
        <div className="text-center mt-16">
          <Link to="/projects">
            <Button 
              className="bg-gradient-to-r from-[#fd8d1b] to-[#fd8e1b] text-[#010100] hover:from-[#fd8e1b] hover:to-[#fd8d1a] font-bold text-lg px-8 py-4 group shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              View Detailed Case Studies
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform text-[#010100]" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
