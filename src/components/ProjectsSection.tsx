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
      services: ['Website Development', 'SEO Optimization', 'Marketing Funnels']
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
      services: ['App Development', 'Paid Advertising', 'ASO']
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
      services: ['Content Strategy', 'Instagram Growth', 'Brand Partnerships']
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
      services: ['App Development', 'ASO', 'User Acquisition']
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!folderRef.current) return;
      
      const rect = folderRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Calculate how much of the folder section is visible
      if (rect.top < viewportHeight && rect.bottom > 0) {
        const scrollProgress = Math.max(0, Math.min(1, (viewportHeight - rect.top) / (viewportHeight + rect.height)));
        setScrollPosition(scrollProgress);
        
        // Update current project based on scroll progress
        const newIndex = Math.min(
          allProjects.length - 1,
          Math.floor(scrollProgress * allProjects.length * 1.5)
        );
        setCurrentProjectIndex(newIndex);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [allProjects.length]);

  return (
    <section id="projects" className="py-16 md:py-32 px-4 md:px-8 lg:px-16 xl:px-24 bg-gradient-to-br from-green-800 via-black to-green-900 text-white relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/6 via-transparent to-orange-400/5" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6 md:mb-8">
            Our <span className="text-orange-400">Growth</span> Portfolio
          </h2>
          <p className="text-lg md:text-xl text-white/70 font-light max-w-3xl mx-auto px-4 mb-8">
            Real results from our comprehensive tech media strategies that drive growth and brand presence
          </p>
          <p className="text-sm text-orange-300/80 font-light">
            Scroll down to explore our projects as they emerge from the folder
          </p>
        </div>

        {/* Folder Container */}
        <div 
          ref={folderRef}
          className="relative min-h-[800px] flex items-center justify-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Folder Base */}
          <div className="relative">
            {/* Folder Back */}
            <div className="w-80 h-96 bg-gradient-to-br from-orange-300/20 to-orange-500/10 rounded-lg border-2 border-orange-400/30 transform rotate-2 absolute -z-10" />
            
            {/* Main Folder */}
            <div className="w-80 h-96 bg-gradient-to-br from-orange-400/25 to-orange-600/15 rounded-lg border-2 border-orange-400/40 relative overflow-hidden backdrop-blur-sm">
              {/* Folder Tab */}
              <div className="absolute -top-4 left-8 w-24 h-8 bg-gradient-to-br from-orange-400/30 to-orange-500/20 rounded-t-lg border-2 border-orange-400/40 border-b-0 flex items-center justify-center">
                <Folder className="w-4 h-4 text-orange-300" />
              </div>
              
              {/* Folder Label */}
              <div className="absolute top-4 left-4 right-4">
                <h3 className="text-lg font-medium text-orange-200 text-center">
                  Projects Portfolio
                </h3>
                <div className="w-full h-px bg-orange-400/30 mt-2" />
              </div>

              {/* File Stack Indicator */}
              <div className="absolute bottom-4 right-4 flex items-center space-x-1">
                <span className="text-xs text-orange-300/70">
                  {currentProjectIndex + 1} / {allProjects.length}
                </span>
                <div className="flex space-x-1">
                  {allProjects.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                        index <= currentProjectIndex ? 'bg-orange-400' : 'bg-orange-400/20'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Project Cards Coming Out */}
            {allProjects.map((project, index) => {
              const isVisible = index <= currentProjectIndex;
              const offset = index * 8;
              const slideOut = isVisible ? Math.min(400, index * 80 + scrollPosition * 200) : 0;
              
              return (
                <div
                  key={project.id}
                  className={`absolute top-0 left-0 w-96 transition-all duration-700 ease-out ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    transform: `translateX(${slideOut}px) translateY(${offset}px) rotate(${index * 2}deg)`,
                    zIndex: 10 + index,
                    transitionDelay: `${index * 100}ms`
                  }}
                >
                  {/* Project Card */}
                  <div className="glassmorphic-card rounded-2xl overflow-hidden border border-orange-400/20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md hover:scale-105 transition-transform duration-300">
                    {/* Project Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.className = `relative h-48 bg-gradient-to-br from-orange-500 to-green-600 flex items-center justify-center`;
                            parent.innerHTML = `
                              <div class="text-center">
                                <div class="w-16 h-16 bg-white/20 backdrop-blur-md rounded-xl mx-auto mb-3 flex items-center justify-center">
                                  <span class="text-xl font-bold text-white">${project.title.charAt(0)}</span>
                                </div>
                                <h3 class="text-lg font-light text-white">${project.title.split(' ')[0]}</h3>
                              </div>
                            `;
                          }
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-3 left-3">
                        <span className="px-2 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-xs">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      <h4 className="text-xl font-medium text-white mb-2 line-clamp-1">{project.title}</h4>
                      <p className="text-white/70 text-sm mb-4 leading-relaxed line-clamp-2">{project.description}</p>

                      {/* Marketing Results */}
                      <div className="mb-4">
                        <h5 className="text-orange-400 font-medium mb-2 flex items-center text-sm">
                          <Award className="w-4 h-4 mr-1" />
                          Key Results
                        </h5>
                        <div className="space-y-1">
                          {project.marketingResults.slice(0, 2).map((result, resultIndex) => (
                            <div key={resultIndex} className="text-white/80 flex items-center text-xs">
                              <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2 flex-shrink-0" />
                              <span className="line-clamp-1">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Services */}
                      <div className="mb-4">
                        <h5 className="text-green-400 font-medium mb-2 flex items-center text-sm">
                          <Target className="w-4 h-4 mr-1" />
                          Services
                        </h5>
                        <div className="flex flex-wrap gap-1">
                          {project.services.slice(0, 2).map((service, serviceIndex) => (
                            <span
                              key={serviceIndex}
                              className="px-2 py-1 bg-green-400/20 text-green-300 rounded-full text-xs border border-green-400/30"
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
                        className="w-full bg-gradient-to-r from-orange-400 to-yellow-400 text-black hover:from-orange-500 hover:to-yellow-500 font-medium text-sm"
                      >
                        View Case Study
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* View All Projects CTA */}
        <div className="text-center mt-16">
          <Link to="/projects">
            <Button 
              className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-lg px-8 py-4 group shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              View Detailed Case Studies
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform text-black" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
