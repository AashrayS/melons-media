import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {  const projects = [
    {
      id: 1,
      title: 'Furni - Modern Interior Design Studio',
      category: 'E-commerce Website',
      description: 'A sophisticated D2C furniture website featuring modern interior design solutions. Built with React and modern web technologies, showcasing elegant furniture collections with seamless user experience.',
      image: '/lovable-uploads/furni-project.jpg',
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
      image: '/lovable-uploads/travel-project.jpg',
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
      image: '/lovable-uploads/fitme-project.jpg',
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
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navigation />
      <div className="flex-1 pt-40 md:pt-36 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6">
              Our <span className="bg-gradient-to-r from-orange-400 to-purple-500 bg-clip-text text-transparent relative">
                Projects
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-400 to-purple-500"></div>
              </span>
            </h1>
            <p className="text-xl text-white/70 font-light max-w-3xl mx-auto">
              Discover our latest digital creations that drive results and exceed expectations
            </p>
          </div>          {/* Projects Grid */}
          <div className="space-y-20">
            {projects.map((project, index) => (
              <div key={project.id} className="glassmorphic-card rounded-3xl overflow-hidden">                {/* Project Image */}
                <div className={`relative h-96 md:h-[500px] flex items-center justify-center ${
                  index === 0 
                    ? 'bg-gradient-to-br from-green-900/50 to-green-700/30' 
                    : index === 1
                    ? 'bg-gradient-to-br from-blue-900/50 to-purple-700/30'
                    : 'bg-gradient-to-br from-pink-900/50 to-orange-700/30'
                }`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Project Visual */}
                  <div className="relative z-10 text-center">
                    <div className={`w-24 h-24 rounded-2xl mx-auto mb-4 flex items-center justify-center ${
                      index === 0 ? 'bg-green-600' : index === 1 ? 'bg-blue-600' : 'bg-pink-600'
                    }`}>
                      <span className="text-2xl font-bold text-white">{project.title.charAt(0)}</span>
                    </div>
                    <h3 className="text-3xl font-light text-white mb-2">
                      {project.title.split(' - ')[0]}
                    </h3>
                    <p className={`${index === 0 ? 'text-green-200' : index === 1 ? 'text-blue-200' : 'text-pink-200'}`}>
                      {project.title.includes(' - ') ? project.title.split(' - ')[1] : project.category}
                    </p>
                  </div>
                  
                  {/* Project Tags */}
                  <div className="absolute top-6 left-6 flex gap-2">
                    <span className={`px-3 py-1 backdrop-blur-md rounded-full text-sm ${
                      index === 0 
                        ? 'bg-green-500/20 text-green-300' 
                        : index === 1
                        ? 'bg-blue-500/20 text-blue-300'
                        : 'bg-pink-500/20 text-pink-300'
                    }`}>
                      {project.category.includes('E-commerce') ? 'E-commerce' : 
                       project.category.includes('Travel') ? 'Travel App' : 'Fitness App'}
                    </span>
                    <span className={`px-3 py-1 backdrop-blur-md rounded-full text-sm ${
                      index === 0 
                        ? 'bg-orange-500/20 text-orange-300' 
                        : index === 1
                        ? 'bg-purple-500/20 text-purple-300'
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
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button 
                          className="bg-orange-500 hover:bg-orange-600 text-white flex items-center gap-2"
                          onClick={() => window.open(project.liveUrl, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4" />
                          View Live Site
                        </Button>
                        <Button 
                          variant="outline" 
                          className="border-white/30 text-white hover:bg-white/10 flex items-center gap-2"
                          onClick={() => window.open(project.githubUrl, '_blank')}
                        >
                          <Github className="w-4 h-4" />
                          View Code
                        </Button>
                      </div>
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
                            <span className="text-blue-400">100%</span>
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
                Ready to Start Your Project?
              </h3>
              <p className="text-xl text-white/70 font-light mb-8 max-w-2xl mx-auto">
                Let's create something amazing together. Get in touch and let's discuss your next digital project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold text-lg px-10 py-4"
                  onClick={() => window.location.href = '/booking'}
                >
                  Start Your Project
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/10 text-lg px-10 py-4"
                  onClick={() => window.location.href = '/contact'}
                >
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
