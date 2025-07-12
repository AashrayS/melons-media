import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectsSection = () => {

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
        '85% increase in organic traffic',
        '35% conversion rate improvement',
        'Page 1 Google rankings for 12 keywords'
      ],
      services: ['Website Optimization', 'SEO Optimization', 'Conversion Funnels']
    },
    {
      id: 2,
      title: "Rejul's Fashion - Rental Business",
      category: 'Retail Marketing + Content Creation',
      description: 'Complete digital transformation for clothing rental business in Bhopal with content creation and Instagram growth.',
      image: '/lovable-uploads/image (6).png',
      technologies: ['Instagram Marketing', 'Content Creation', 'Local SEO', 'Google Ads'],
      marketingResults: [
        '300% increase in rental bookings',
        'Built Instagram presence from 0 to 8K followers',
        '85% of new customers from digital channels'
      ],
      services: ['Content Creation', 'Instagram Marketing', 'Local SEO']
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
        '200% increase in engagement rate',
        'Secured 15+ brand partnerships'
      ],
      services: ['Instagram Growth Strategy', 'Content Creation', 'Brand Omnipresence']
    },
    {
      id: 4,
      title: 'TravelWise - Travel Platform',
      category: 'Travel Platform + Digital Marketing',
      description: 'Multi-platform travel app with geo-targeted marketing and booking optimization.',
      image: '/lovable-uploads/travel-project.jpg.png',
      technologies: ['React Native', 'React.js', 'Google Ads', 'Facebook Ads'],
      marketingResults: [
        '45% increase in app traffic',
        '22% optimization for higher booking conversion',
        'Reduced customer acquisition cost by 28%'
      ],
      services: ['App Development', 'Google Ads Management', 'App Store Optimization']
    },
    {
      id: 5,
      title: 'FitMe - Wellness App',
      category: 'Mobile App + User Acquisition',
      description: 'Comprehensive fitness app with integrated marketing for user acquisition and retention.',
      image: '/lovable-uploads/fitme-project.jpg.jpg',
      technologies: ['React Native', 'Firebase', 'App Store Optimization', 'In-App Marketing'],
      marketingResults: [
        'MVP Development for A/B testing',
        'Goal: increase user retention rate',
        'Featured to 5000+ users to test'
      ],
      services: ['App Development', 'User Acquisition', 'Paid Advertising']
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-32 px-4 md:px-8 lg:px-16 xl:px-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden font-poppins">
      {/* Professional background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-forest-500/8 via-transparent to-melon-500/8" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 font-poppins">
            <span className="text-melon-500">Our</span> Portfolio
          </h2>
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            <span className="px-4 py-2 bg-forest-500/20 border border-forest-500/30 rounded-full text-sm font-medium text-forest-400 font-poppins">
              Strategic Growth
            </span>
            <span className="px-4 py-2 bg-melon-500/20 border border-melon-500/30 rounded-full text-sm font-medium text-melon-400 font-poppins">
              Digital Excellence
            </span>
          </div>
        </div>

        {/* Projects Grid - Two Column Layout */}
        <div className="space-y-24 md:space-y-32">
          {allProjects.slice(0, 3).map((project, index) => (
            <div 
              key={project.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Info Column */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                {/* Project Title with Category */}
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-melon-500 text-slate-900 rounded-full text-sm font-bold font-poppins">
                      {project.category.split(' + ')[0]}
                    </span>
                    {project.category.includes(' + ') && (
                      <span className="px-3 py-1 bg-forest-500 text-white rounded-full text-sm font-bold font-poppins">
                        {project.category.split(' + ')[1]}
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight font-poppins">
                    {project.title}
                  </h3>
                  
                  <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl font-poppins">
                    {project.description}
                  </p>
                </div>

                {/* Key Results */}
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-melon-400 flex items-center font-poppins">
                    <Award className="w-6 h-6 mr-2" />
                    Key Results
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.marketingResults.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-start space-x-3 p-4 bg-gradient-to-br from-melon-500/12 to-forest-500/12 rounded-xl border border-slate-700/50 hover:border-melon-500/30 transition-all duration-300">
                        <div className="w-2 h-2 bg-melon-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-slate-200 font-medium font-poppins">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-white font-poppins">Technologies & Services</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-2 bg-slate-800/60 hover:bg-slate-700/80 border border-slate-600/50 hover:border-forest-500/50 rounded-lg text-slate-300 hover:text-forest-400 text-sm font-medium transition-all duration-300 hover:scale-105 font-poppins"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <Button 
                    className="bg-transparent border-2 border-melon-500 text-melon-400 hover:bg-melon-500 hover:text-slate-900 font-bold text-lg px-8 py-4 group transition-all duration-300 hover:scale-105 font-poppins"
                  >
                    View Case Study
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>

              {/* Visual Content Column */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                {/* Main Project Image */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-forest-600 to-forest-700 shadow-2xl">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.className = `relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-melon-500 to-forest-500 shadow-2xl flex items-center justify-center`;
                        parent.innerHTML = `
                          <div class="text-center">
                            <div class="w-24 h-24 bg-white/20 backdrop-blur-md rounded-3xl mx-auto mb-4 flex items-center justify-center">
                              <span class="text-3xl font-bold text-white font-poppins">${project.title.charAt(0)}</span>
                            </div>
                            <h3 class="text-2xl font-bold text-white font-poppins">${project.title.split(' ')[0]}</h3>
                          </div>
                        `;
                      }
                    }}
                  />
                  
                  {/* Project Number Badge */}
                  <div className="absolute top-6 right-6">
                    <div className="w-16 h-16 bg-melon-500 text-slate-900 rounded-full flex items-center justify-center font-bold text-xl shadow-xl font-poppins">
                      0{project.id}
                    </div>
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                </div>

                {/* Client/Results Card */}
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-slate-900/96 via-slate-800/96 to-slate-900/96 backdrop-blur-xl border border-melon-500/30 rounded-2xl p-6 shadow-2xl max-w-xs">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-3 h-3 bg-forest-500 rounded-full animate-pulse"></div>
                    <span className="text-slate-300 text-sm font-medium font-poppins">Live Results</span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-melon-400 font-poppins">
                      {project.marketingResults[0].match(/\d+/)?.[0] || '100'}%
                    </div>
                    <div className="text-slate-400 text-sm font-poppins">
                      {project.marketingResults[0].includes('increase') ? 'Growth Rate' : 'Success Rate'}
                    </div>
                  </div>
                </div>

                {/* Decorative Dots */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-melon-500/25 rounded-full"></div>
                <div className="absolute top-8 -left-8 w-4 h-4 bg-forest-500/35 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center mt-24">
          <Link to="/projects">
            <Button 
              className="bg-gradient-to-r from-melon-500 to-melon-600 text-slate-900 hover:from-melon-400 hover:to-melon-500 font-bold text-xl px-12 py-6 group shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 rounded-xl font-poppins"
            >
              View All Case Studies
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform text-slate-900" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
