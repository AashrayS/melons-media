import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Target, Folder, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectsSection = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

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

  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % allProjects.length);
  };

  const prevProject = () => {
    setCurrentProjectIndex((prev) => (prev - 1 + allProjects.length) % allProjects.length);
  };

  const goToProject = (index: number) => {
    setCurrentProjectIndex(index);
  };

  return (
    <section id="projects" className="py-16 md:py-32 px-4 md:px-8 lg:px-16 xl:px-24 bg-gradient-to-br from-[#378c35] via-[#010100] to-[#2c8433] text-white relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fd8d1b]/8 via-transparent to-[#fd8e1b]/6" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header - Match spacing with Services page */}
        <div className="text-center mb-4 z-50 py-4">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight mb-4 md:mb-6">
            Our <span className="text-[#fd8d1b]">Growth</span> Portfolio
          </h2>
          <p className="text-lg md:text-xl text-white/70 font-light max-w-3xl mx-auto px-4 mb-4">
            Real results from our comprehensive tech media strategies that drive growth and brand presence
          </p>
          <p className="text-sm text-[#fd8d1b]/80 font-light">
            Swipe or click to explore our projects
          </p>
        </div>

        {/* Horizontal Swipe Container */}
        <div className="relative flex items-center justify-center px-4">
          {/* Folder Base - Reduced height */}
          <div className="relative">
            {/* Folder Back Shadow */}
            <div className="w-[32rem] md:w-[44rem] lg:w-[52rem] xl:w-[60rem] h-64 md:h-80 lg:h-96 bg-gradient-to-br from-[#fd8d1b]/15 to-[#fd8e1b]/8 rounded-2xl border-2 border-[#fd8d1b]/20 transform rotate-1 absolute -z-20 translate-x-2 translate-y-2" />
            
            {/* Folder Middle Shadow */}
            <div className="w-[31rem] md:w-[43rem] lg:w-[51rem] xl:w-[59rem] h-62 md:h-78 lg:h-94 bg-gradient-to-br from-[#fd8d1b]/20 to-[#fd8e1b]/10 rounded-2xl border-2 border-[#fd8d1b]/25 transform rotate-0.5 absolute -z-10 translate-x-1 translate-y-1" />
            
            {/* Main Folder - Reduced height */}
            <div className="w-[30rem] md:w-[42rem] lg:w-[50rem] xl:w-[58rem] h-60 md:h-76 lg:h-92 bg-gradient-to-br from-[#010100]/95 via-[#000000]/90 to-[#010000]/95 rounded-2xl border-3 border-[#fd8d1b]/60 relative overflow-hidden backdrop-blur-lg shadow-2xl transition-all duration-500">
              {/* Folder Tab */}
              <div className="absolute -top-6 left-8 md:left-12 w-40 md:w-52 lg:w-56 xl:w-64 h-8 md:h-10 bg-gradient-to-br from-[#fd8d1b] to-[#fd8e1b] rounded-t-2xl border-3 border-[#fd8d1b] border-b-0 flex items-center justify-center shadow-lg">
                <Folder className="w-4 md:w-5 h-4 md:h-5 text-[#010100] mr-2" />
                <span className="text-xs md:text-sm font-bold text-[#010100]">Portfolio</span>
              </div>
              
              {/* Folder Label */}
              <div className="absolute top-4 left-6 right-6">
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-[#fd8d1b] text-center">
                  📁 Success Stories Collection
                </h3>
                <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#fd8d1b]/70 to-transparent mt-2" />
              </div>

              {/* Horizontal Project Cards Container */}
              <div className="absolute top-16 left-4 right-4 bottom-16 overflow-hidden">
                <div 
                  ref={containerRef}
                  className="flex transition-transform duration-500 ease-out h-full"
                  style={{ transform: `translateX(-${currentProjectIndex * 100}%)` }}
                >
                  {allProjects.map((project, index) => (
                    <div
                      key={project.id}
                      className="w-full flex-shrink-0 px-2 h-full flex items-center justify-center"
                    >
                      {/* Project Card - Reduced height */}
                      <div className="w-full max-w-md h-full glassmorphic-card rounded-xl overflow-hidden border-2 border-[#fd8d1b]/40 bg-gradient-to-br from-[#010100]/98 via-[#000000]/95 to-[#010000]/98 backdrop-blur-xl hover:scale-[1.02] transition-transform duration-300 shadow-xl">
                        {/* Project Image - Reduced height */}
                        <div className="relative h-24 md:h-32 lg:h-36 overflow-hidden">
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              const parent = target.parentElement;
                              if (parent) {
                                parent.className = `relative h-24 md:h-32 lg:h-36 bg-gradient-to-br from-[#fd8d1b] to-[#378c35] flex items-center justify-center`;
                                parent.innerHTML = `
                                  <div class="text-center">
                                    <div class="w-8 h-8 md:w-12 md:h-12 bg-white/20 backdrop-blur-md rounded-xl mx-auto mb-2 flex items-center justify-center">
                                      <span class="text-sm md:text-lg font-bold text-white">${project.title.charAt(0)}</span>
                                    </div>
                                    <h3 class="text-xs md:text-sm font-light text-white">${project.title.split(' ')[0]}</h3>
                                  </div>
                                `;
                              }
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#010100]/80 to-transparent" />
                          
                          {/* Category Badge */}
                          <div className="absolute top-2 left-2">
                            <span className="px-2 py-1 bg-[#fd8d1b] text-[#010100] rounded-full text-xs font-bold shadow-lg">
                              {project.category}
                            </span>
                          </div>

                          {/* Project Number */}
                          <div className="absolute top-2 right-2">
                            <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-[#378c35] to-[#2c8433] text-white rounded-full flex items-center justify-center font-bold text-xs shadow-lg border border-white/20">
                              {project.id}
                            </div>
                          </div>
                        </div>

                        {/* Project Content - Compact */}
                        <div className="p-3 md:p-4 lg:p-5 h-full flex flex-col">
                          <h4 className="text-sm md:text-lg lg:text-xl font-bold text-white mb-2 line-clamp-1">{project.title}</h4>
                          <p className="text-white/80 text-xs md:text-sm mb-3 leading-relaxed line-clamp-2">{project.description}</p>

                          {/* Marketing Results - Compact */}
                          <div className="mb-3">
                            <h5 className="text-[#fd8d1b] font-bold mb-1 flex items-center text-xs md:text-sm">
                              <Award className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                              Key Results
                            </h5>
                            <div className="space-y-1">
                              {project.marketingResults.slice(0, 2).map((result, resultIndex) => (
                                <div key={resultIndex} className="text-white/90 flex items-center text-xs">
                                  <div className="w-1.5 h-1.5 bg-[#fd8d1b] rounded-full mr-2 flex-shrink-0" />
                                  <span className="line-clamp-1 font-medium">{result}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Technologies - Compact */}
                          <div className="flex flex-wrap gap-1 mb-3">
                            {project.technologies.slice(0, 3).map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-2 py-1 bg-white/10 rounded-full text-white/80 text-xs"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          {/* View More Button - Compact */}
                          <Button 
                            size="sm"
                            className="w-full bg-gradient-to-r from-[#fd8d1b] to-[#fd8e1b] text-[#010100] hover:from-[#fd8e1b] hover:to-[#fd8d1a] font-bold text-xs md:text-sm shadow-lg hover:shadow-xl transition-all duration-300 mt-auto"
                          >
                            View Case Study →
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Controls */}
              <button
                onClick={prevProject}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-[#fd8d1b]/80 hover:bg-[#fd8d1b] rounded-full flex items-center justify-center transition-all duration-300 shadow-lg z-10"
              >
                <ChevronLeft className="w-4 h-4 text-[#010100]" />
              </button>
              
              <button
                onClick={nextProject}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-[#fd8d1b]/80 hover:bg-[#fd8d1b] rounded-full flex items-center justify-center transition-all duration-300 shadow-lg z-10"
              >
                <ChevronRight className="w-4 h-4 text-[#010100]" />
              </button>

              {/* Progress Dots */}
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {allProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToProject(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentProjectIndex ? 'bg-[#fd8d1b] scale-125' : 'bg-[#fd8d1b]/40 hover:bg-[#fd8d1b]/70'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* View All Projects CTA */}
        <div className="text-center mt-8">
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
