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
      const sectionHeight = rect.height;
      
      // Calculate scroll progress within the section
      if (rect.top <= 0 && rect.bottom >= viewportHeight) {
        // Section is filling the viewport
        const scrolledIntoSection = Math.abs(rect.top);
        const totalScrollableHeight = sectionHeight - viewportHeight;
        const scrollProgress = Math.min(1, scrolledIntoSection / totalScrollableHeight);
        
        // Show one project at a time based on scroll progress
        // Each project gets an equal portion of the scroll
        const projectProgress = scrollProgress * allProjects.length;
        const newIndex = Math.floor(projectProgress);
        const clampedIndex = Math.max(0, Math.min(allProjects.length - 1, newIndex));
        
        setCurrentProjectIndex(clampedIndex);
        setScrollPosition(scrollProgress);
      } else if (rect.top > 0) {
        // Before the section
        setCurrentProjectIndex(-1);
        setScrollPosition(0);
      } else if (rect.bottom < viewportHeight) {
        // After the section - show all projects
        setCurrentProjectIndex(allProjects.length - 1);
        setScrollPosition(1);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [allProjects.length]);

  return (
    <section id="projects" className="py-16 md:py-32 px-4 md:px-8 lg:px-16 xl:px-24 bg-gradient-to-br from-[#378c35] via-[#010100] to-[#2c8433] text-white relative overflow-hidden min-h-[300vh]">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fd8d1b]/8 via-transparent to-[#fd8e1b]/6" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 sticky top-20 z-50 bg-gradient-to-b from-[#378c35]/90 to-transparent backdrop-blur-sm py-8">
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
          className="relative min-h-[200vh] flex items-center justify-center px-4 sticky top-40"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Folder Base */}
          <div className="relative">
            {/* Folder Back Shadow */}
            <div className="w-96 md:w-[480px] h-96 md:h-[520px] bg-gradient-to-br from-[#fd8d1b]/15 to-[#fd8e1b]/8 rounded-2xl border-2 border-[#fd8d1b]/20 transform rotate-1 absolute -z-20 translate-x-2 translate-y-2" />
            
            {/* Folder Middle Shadow */}
            <div className="w-94 md:w-[470px] h-94 md:h-[510px] bg-gradient-to-br from-[#fd8d1b]/20 to-[#fd8e1b]/10 rounded-2xl border-2 border-[#fd8d1b]/25 transform rotate-0.5 absolute -z-10 translate-x-1 translate-y-1" />
            
            {/* Main Folder */}
            <div className="w-92 md:w-[460px] h-92 md:h-[500px] bg-gradient-to-br from-[#010100]/95 via-[#000000]/90 to-[#010000]/95 rounded-2xl border-3 border-[#fd8d1b]/60 relative overflow-hidden backdrop-blur-lg shadow-2xl">
              {/* Folder Tab */}
              <div className="absolute -top-6 left-8 md:left-12 w-28 md:w-36 h-8 md:h-10 bg-gradient-to-br from-[#fd8d1b] to-[#fd8e1b] rounded-t-2xl border-3 border-[#fd8d1b] border-b-0 flex items-center justify-center shadow-lg">
                <Folder className="w-4 md:w-5 h-4 md:h-5 text-[#010100] mr-2" />
                <span className="text-xs md:text-sm font-bold text-[#010100]">Portfolio</span>
              </div>
              
              {/* Folder Label */}
              <div className="absolute top-6 left-6 right-6">
                <h3 className="text-lg md:text-2xl font-bold text-[#fd8d1b] text-center">
                  📁 Success Stories Collection
                </h3>
                <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#fd8d1b]/70 to-transparent mt-3" />
              </div>

              {/* Folder Interior Design */}
              <div className="absolute top-20 left-6 right-6 bottom-20 border border-[#fd8d1b]/30 rounded-xl bg-gradient-to-b from-[#010100]/50 to-[#000000]/30">
                {/* File Icons in Folder */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                  {allProjects.slice(0, 3).map((_, index) => (
                    <div key={index} className={`w-8 h-10 bg-gradient-to-b from-[#fd8d1b]/40 to-[#fd8e1b]/30 rounded-sm border border-[#fd8d1b]/50 ${index <= currentProjectIndex ? 'opacity-30' : 'opacity-70'} transition-opacity duration-500`}>
                      <div className="w-full h-2 bg-[#fd8d1b]/60 rounded-t-sm"></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* File Stack Indicator */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-center">
                  <span className="text-sm md:text-base text-[#fd8d1b]/90 font-bold">
                    Project {Math.max(1, currentProjectIndex + 1)} of {allProjects.length}
                  </span>
                  <div className="flex justify-center space-x-2 mt-3">
                    {allProjects.map((_, index) => (
                      <div
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all duration-500 ${
                          index <= currentProjectIndex ? 'bg-[#fd8d1b] scale-125 shadow-lg' : 'bg-[#fd8d1b]/30'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Folder Opening Animation */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#010100]/40 to-transparent pointer-events-none rounded-2xl" />
            </div>

            {/* Project Cards Coming Out Upward */}
            {allProjects.map((project, index) => {
              const isCurrentCard = index === currentProjectIndex;
              const hasBeenShown = index <= currentProjectIndex;
              const verticalOffset = isCurrentCard ? -180 : hasBeenShown ? -100 : 0; // Current card goes much higher
              const horizontalOffset = isCurrentCard ? 0 : hasBeenShown ? (index % 2 === 0 ? -15 : 15) : 0;
              const rotation = isCurrentCard ? 0 : hasBeenShown ? (index % 2 === 0 ? -3 : 3) : 0;
              const scale = isCurrentCard ? 1.05 : hasBeenShown ? 0.9 : 0.8;
              const opacity = isCurrentCard ? 1 : hasBeenShown ? 0.4 : 0;
              
              return (
                <div
                  key={project.id}
                  className={`absolute top-0 left-1/2 transform -translate-x-1/2 transition-all duration-1200 ease-out z-40`}
                  style={{
                    transform: `translate(-50%, ${verticalOffset}px) translateX(${horizontalOffset}px) rotate(${rotation}deg) scale(${scale})`,
                    opacity: opacity,
                    zIndex: isCurrentCard ? 50 : 40 + index,
                    transitionDelay: isCurrentCard ? '0ms' : `${index * 150}ms`
                  }}
                >
                  {/* Project Card */}
                  <div className="w-80 md:w-96 glassmorphic-card rounded-2xl overflow-hidden border-3 border-[#fd8d1b]/40 bg-gradient-to-br from-[#010100]/98 via-[#000000]/95 to-[#010000]/98 backdrop-blur-xl hover:scale-105 transition-transform duration-300 shadow-2xl">
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
                      <div className="absolute inset-0 bg-gradient-to-t from-[#010100]/80 to-transparent" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 bg-[#fd8d1b] text-[#010100] rounded-full text-xs font-bold shadow-lg">
                          {project.category}
                        </span>
                      </div>

                      {/* Project Number */}
                      <div className="absolute top-3 right-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#378c35] to-[#2c8433] text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg border-2 border-white/20">
                          {project.id}
                        </div>
                      </div>
                    </div>

                    {/* ...existing project content... */}
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

          {/* Scroll Progress Indicator */}
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center z-50">
            <div className="bg-[#010100]/80 backdrop-blur-md rounded-2xl px-6 py-4 border border-[#fd8d1b]/30">
              <div className="mb-2">
                <div className="w-32 h-2 bg-[#fd8d1b]/20 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-[#fd8d1b] to-[#fd8e1b] rounded-full transition-all duration-300"
                    style={{ width: `${((currentProjectIndex + 1) / allProjects.length) * 100}%` }}
                  />
                </div>
              </div>
              <p className="text-xs text-[#fd8d1b]/90 font-medium">
                {currentProjectIndex >= 0 ? `${currentProjectIndex + 1}/${allProjects.length} Projects Revealed` : 'Scroll to reveal projects'}
              </p>
            </div>
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
