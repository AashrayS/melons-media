import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Calendar, Tag, X, ZoomIn } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Furni - Modern Interior Design Studio',
      category: 'E-commerce Website',
      description: 'A sophisticated D2C furniture website featuring modern interior design solutions. Built with React and modern web technologies, showcasing elegant furniture collections with seamless user experience.',
      image: '/lovable-uploads/furni-project.jpg.png',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB'],
      features: [
        'Modern responsive design',
        'Product catalog & filtering',
        'Shopping cart functionality',
        'User authentication',
        'Admin dashboard',
        'Payment integration'
      ],
      liveUrl: 'https://furni-demo.vercel.app',
      githubUrl: 'https://github.com/melonsmedia/furni',
      completedDate: 'December 2024',
      client: 'Furni Studio',
      duration: '6 weeks'
    },
    {
      id: 2,
      title: 'TravelWise - Multi-Platform Travel App',
      category: 'Travel & Tourism Platform',
      description: 'A comprehensive travel platform designed & developed for web & designed for iOS, and Android. Features seamless booking experience, destination discovery, and personalized travel recommendations with cross-platform synchronization.',
      image: '/lovable-uploads/travel-project.jpg.png',
      technologies: ['React Native', 'React.js', 'Node.js', 'MongoDB', 'Firebase', 'TypeScript'],
      features: [
        'Cross-platform mobile apps (iOS & Android)',
        'Responsive web application',
        'Real-time booking system',
        'Interactive destination maps',
        'Personalized recommendations',
        'Multi-language support',
        'Offline functionality',
        'Social sharing features'
      ],
      liveUrl: 'https://travelwise-demo.vercel.app',
      githubUrl: 'https://github.com/melonsmedia/travelwise',      completedDate: 'November 2024',
      client: 'TravelWise Inc.',
      duration: '10 weeks'
    },
    {
      id: 3,
      title: 'FitMe - Personal Fitness & Wellness App',
      category: 'Health & Fitness Mobile App',
      description: 'A comprehensive fitness and wellness mobile application featuring personalized workout plans, activity tracking, nutrition guidance, and health analytics. Designed with modern UI/UX principles for optimal user engagement.',
      image: '/lovable-uploads/fitme-project.jpg.jpg',
      technologies: ['React Native', 'Expo', 'Firebase', 'Node.js', 'Redux', 'TypeScript'],
      features: [
        'Personalized workout plans',
        'Real-time activity tracking',
        'Heart rate & health monitoring',
        'Custom fitness goals',
        'Progress analytics & statistics',
        'Nutrition & hydration tracking',
        'Social features & achievements',
        'Offline workout capability'
      ],
      liveUrl: 'https://fitme-app.vercel.app',
      githubUrl: 'https://github.com/melonsmedia/fitme',
      completedDate: 'January 2025',
      client: 'FitMe Health Solutions',
      duration: '8 weeks'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-800 via-black to-green-900 text-white flex flex-col relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-400/15 via-transparent to-yellow-300/10" />
      <div className="absolute top-1/4 left-10 w-40 h-40 bg-gradient-to-br from-orange-400/25 to-yellow-300/20 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-1/3 right-10 w-56 h-56 bg-gradient-to-br from-yellow-300/20 to-orange-500/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
      <Navigation />
      <div className="flex-1 pt-40 md:pt-36 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            {/* Mascot */}
            <div className="mb-8">
              <img 
                src="/lovable-uploads/meons-mascot.jpeg" 
                alt="Melons Media Mascot" 
                className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 hover:scale-110 hover:-rotate-12 transition-all duration-300"
              />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6">
              Stuff we've <span className="bg-gradient-to-r from-orange-400 to-purple-500 bg-clip-text text-transparent relative">
                built
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-400 to-purple-500"></div>
              </span>
            </h1>
            <p className="text-2xl text-white/60 font-light mb-4">
              Projects that actually work (and look good doing it)
            </p>
            <p className="text-lg text-white/50 max-w-3xl mx-auto">
              Here's proof we don't just talk a big game. These are real projects for real clients who got real results.
            </p>
          </div>          {/* Projects Grid */}
          <div className="space-y-20">
            {projects.map((project, index) => (
              <div key={project.id} className="glassmorphic-card rounded-3xl overflow-hidden">                {/* Project Image */}
                <div className="relative h-96 md:h-[500px] overflow-hidden group cursor-pointer" onClick={() => setSelectedImage(project.image)}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      // Fallback to gradient background if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.className = `relative h-96 md:h-[500px] flex items-center justify-center ${
                          index === 0 
                            ? 'bg-gradient-to-br from-green-900/50 to-green-700/30' 
                            : index === 1
                            ? 'bg-gradient-to-br from-blue-900/50 to-purple-700/30'
                            : 'bg-gradient-to-br from-pink-900/50 to-orange-700/30'
                        }`;
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-md rounded-full p-4">
                      <ZoomIn className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Project Tags */}
                  <div className="absolute top-6 left-6 flex gap-2">
                    <span className={`px-3 py-1 backdrop-blur-md rounded-full text-sm ${
                      index === 0 
                        ? 'bg-green-500/20 text-green-300' 
                        : index === 1
                        ? 'bg-green-600/20 text-green-300'
                        : 'bg-green-700/20 text-green-300'
                    }`}>
                      {project.category.includes('E-commerce') ? 'E-commerce' : 
                       project.category.includes('Travel') ? 'Travel App' : 'Fitness App'}
                    </span>
                    <span className={`px-3 py-1 backdrop-blur-md rounded-full text-sm ${
                      index === 0 
                        ? 'bg-orange-500/20 text-orange-300' 
                        : index === 1
                        ? 'bg-orange-600/20 text-orange-300'
                        : 'bg-orange-500/20 text-orange-300'
                    }`}>
                      {project.technologies[0]}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8 md:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Column - Project Info */}
                    <div>
                      <div className="mb-6">
                        <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">{project.title}</h2>
                        <p className="text-orange-400 font-medium mb-4">{project.category}</p>
                        <p className="text-white/80 font-light leading-relaxed text-lg">{project.description}</p>
                      </div>

                      {/* Project Details */}
                      <div className="space-y-4 mb-8">
                        <div className="flex items-center gap-3">
                          <Calendar className="w-5 h-5 text-orange-400" />
                          <span className="text-white/70">Completed: {project.completedDate}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Tag className="w-5 h-5 text-orange-400" />
                          <span className="text-white/70">Duration: {project.duration}</span>
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="mb-8">
                        <h4 className="text-lg font-medium mb-4 text-white">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-white/10 rounded-full text-white/80 text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>                      </div>
                    </div>

                    {/* Right Column - Features */}
                    <div>
                      <h4 className="text-lg font-medium mb-6 text-white">Key Features</h4>
                      <div className="space-y-4">
                        {project.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-white/80 font-light">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Project Stats */}
                      <div className="mt-8 p-6 bg-gradient-to-r from-orange-500/10 to-purple-500/10 rounded-xl border border-orange-400/20">
                        <h4 className="text-lg font-medium mb-4 text-white">Project Impact</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-white/70">User Experience</span>
                            <span className="text-orange-400">Excellent</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-white/70">Performance</span>
                            <span className="text-green-400">95% Score</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-white/70">Mobile Responsive</span>
                            <span className="text-orange-400">100%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-20">
            <div className="glassmorphic-card p-12 rounded-3xl">
              <h3 className="text-3xl md:text-4xl font-light tracking-tight mb-6">
                Want something this good?
              </h3>
              <p className="text-xl text-white/70 font-light mb-8 max-w-2xl mx-auto">
                Stop drooling over our work and let's build something amazing for you. Your competitors won't know what hit them.
              </p>              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold text-lg px-10 py-4 transition-all duration-300 hover:scale-105"
                  onClick={() => window.location.href = '/booking'}
                >
                  Let's Build Something Epic
                </Button>                <Button 
                  variant="outline"
                  className="glassmorphic-button border-white/30 text-white hover:bg-white/20 hover:text-white font-bold text-lg px-10 py-4 transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-md"
                  style={{ 
                    textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)',
                    color: 'white',
                    fontWeight: '700'
                  }}
                  onClick={() => window.location.href = '/contact'}
                >
                  Just Ask Us Stuff
                </Button>
              </div>
            </div>
          </div>
        </div>      </div>
      <Footer />

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <img 
              src={selectedImage} 
              alt="Project Preview" 
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
