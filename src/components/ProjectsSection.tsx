import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectsSection = () => {  const featuredProjects = [
    {
      id: 1,
      title: 'Furni',
      subtitle: 'Modern Interior Design Studio',
      description: 'A sophisticated D2C furniture website featuring elegant design and seamless user experience.',
      category: 'E-commerce',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      image: '/lovable-uploads/furni-project.jpg.png',
      color: 'from-green-600 to-green-400'
    },
    {
      id: 2,
      title: 'TravelWise',
      subtitle: 'Multi-Platform Travel App',
      description: 'Comprehensive travel platform for web, iOS, and Android with real-time booking and recommendations.',
      category: 'Travel App',
      technologies: ['React Native', 'React.js', 'Node.js'],
      image: '/lovable-uploads/travel-project.jpg.png',
      color: 'from-blue-600 to-purple-500'
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-32 px-4 md:px-8 lg:px-16 xl:px-24 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6 md:mb-8">
            Featured <span className="bg-gradient-to-r from-orange-400 to-purple-500 bg-clip-text text-transparent relative">
              Success Stories
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-400 to-purple-500"></div>
            </span>
          </h2>
          <p className="text-lg md:text-xl text-white/70 font-light max-w-3xl mx-auto px-4">
            Real results from our comprehensive tech media strategies that drive growth and brand omnipresence
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="space-y-12">
          {featuredProjects.map((project, index) => (
            <div key={project.id} className="glassmorphic-card rounded-3xl overflow-hidden group hover:scale-[1.02] transition-all duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">                {/* Project Image/Preview */}
                <div className="relative h-80 lg:h-96 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to gradient background if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.className = `relative h-80 lg:h-96 bg-gradient-to-br ${project.color} flex items-center justify-center`;
                        parent.innerHTML = `
                          <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                          <div class="relative z-10 text-center">
                            <div class="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl mx-auto mb-4 flex items-center justify-center">
                              <span class="text-2xl font-bold text-white">${project.title.charAt(0)}</span>
                            </div>
                            <h3 class="text-2xl font-light text-white mb-2">${project.title}</h3>
                            <p class="text-white/80">${project.subtitle}</p>
                          </div>
                          <div class="absolute top-6 left-6">
                            <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-sm">${project.category}</span>
                          </div>
                        `;
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-6 left-6">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-sm">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-6">
                    <h3 className="text-2xl md:text-3xl font-light tracking-tight mb-4">{project.title}</h3>
                    <p className="text-orange-400 font-medium mb-4">{project.subtitle}</p>
                    <p className="text-white/80 font-light leading-relaxed text-lg mb-6">{project.description}</p>
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-white/10 rounded-full text-white/80 text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}        <div className="text-center mt-16">
          <Link to="/projects">
            <Button 
              className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-lg px-8 py-4 group shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              View All Projects
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform text-black" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
