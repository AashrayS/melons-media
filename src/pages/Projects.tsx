import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Folder, FolderOpen, Globe, Instagram, TrendingUp, Users, Award, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const [openFolder, setOpenFolder] = useState<string | null>(null);

  const projectFolders = [
    {
      id: 'web-development',
      title: 'Web Development',
      icon: Globe,
      description: 'Full-stack web solutions with marketing optimization',
      projects: [
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
            'Page 1 Google rankings for 12 keywords',
            'Reduced bounce rate by 45%'
          ],
          services: ['Website Development', 'SEO Optimization', 'Marketing Funnels', 'Analytics Setup']
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
            'Reduced customer acquisition cost by 40%',
            'Achieved 4.8★ app store rating'
          ],
          services: ['App Development', 'Paid Advertising', 'ASO', 'Conversion Optimization']
        }
      ]
    },
    {
      id: 'content-creators',
      title: 'Content Creator Growth',
      icon: Instagram,
      description: 'Personal brand building and Instagram growth strategies',
      projects: [
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
            'Secured 15+ brand partnerships',
            'Generated ₹2.5L+ monthly revenue'
          ],
          services: ['Content Strategy', 'Instagram Growth', 'Brand Partnerships', 'Revenue Optimization']
        }
      ]
    },
    {
      id: 'retail-business',
      title: 'Retail & E-commerce',
      icon: TrendingUp,
      description: 'End-to-end digital growth for retail businesses',
      projects: [
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
            '85% of new customers from digital channels',
            'Expanded to 3 new locations'
          ],
          services: ['Content Creation', 'Instagram Marketing', 'Local SEO', 'Google Ads', 'Brand Photography']
        }
      ]
    },
    {
      id: 'fitness-health',
      title: 'Fitness & Health',
      icon: Target,
      description: 'Health and wellness app with user acquisition marketing',
      projects: [
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
            'Featured in App Store',
            'Generated ₹50L+ revenue'
          ],
          services: ['App Development', 'ASO', 'User Acquisition', 'Retention Marketing']
        }
      ]
    }
  ];

  const toggleFolder = (folderId: string) => {
    setOpenFolder(openFolder === folderId ? null : folderId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-black to-green-800 text-white flex flex-col relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-400/15 via-transparent to-yellow-300/10" />
      <div className="absolute top-1/4 left-10 w-40 h-40 bg-gradient-to-br from-orange-400/25 to-yellow-300/20 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-1/3 right-10 w-56 h-56 bg-gradient-to-br from-yellow-300/20 to-orange-500/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      <Navigation />
      
      <div className="flex-1 pt-40 md:pt-36 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6">
              Our <span className="melon-text">Growth</span> Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-white/70 font-light mb-8 max-w-4xl mx-auto">
              We're a digital growth studio for solo creators & businesses, helping you get seen on Google, Instagram, and everywhere your brand lives.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-orange-300">
              <span className="px-4 py-2 bg-orange-400/20 rounded-full border border-orange-400/30">Website Optimization</span>
              <span className="px-4 py-2 bg-orange-400/20 rounded-full border border-orange-400/30">SEO & Local SEO</span>
              <span className="px-4 py-2 bg-orange-400/20 rounded-full border border-orange-400/30">Instagram Growth</span>
              <span className="px-4 py-2 bg-orange-400/20 rounded-full border border-orange-400/30">Paid Advertising</span>
              <span className="px-4 py-2 bg-orange-400/20 rounded-full border border-orange-400/30">Content Creation</span>
              <span className="px-4 py-2 bg-orange-400/20 rounded-full border border-orange-400/30">Brand Omnipresence</span>
            </div>
          </div>

          {/* Project Folders */}
          <div className="space-y-6">
            {projectFolders.map((folder) => {
              const IconComponent = folder.icon;
              const isOpen = openFolder === folder.id;
              
              return (
                <div key={folder.id} className="glassmorphic-card rounded-2xl overflow-hidden border border-orange-400/20">
                  {/* Folder Header */}
                  <div 
                    className="flex items-center justify-between p-6 cursor-pointer hover:bg-orange-400/5 transition-colors"
                    onClick={() => toggleFolder(folder.id)}
                  >
                    <div className="flex items-center space-x-4">
                      {isOpen ? (
                        <FolderOpen className="w-8 h-8 text-orange-400" />
                      ) : (
                        <Folder className="w-8 h-8 text-orange-400" />
                      )}
                      <div>
                        <h3 className="text-2xl font-medium text-white">{folder.title}</h3>
                        <p className="text-white/60">{folder.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <IconComponent className="w-6 h-6 text-orange-400" />
                      <span className="text-sm text-white/50">{folder.projects.length} project{folder.projects.length > 1 ? 's' : ''}</span>
                    </div>
                  </div>

                  {/* Folder Content - Scrollable Projects */}
                  {isOpen && (
                    <div className="border-t border-orange-400/20">
                      <div className="overflow-x-auto scrollbar-hide">
                        <div className="flex space-x-6 p-6" style={{ width: 'max-content' }}>
                          {folder.projects.map((project) => (
                            <div 
                              key={project.id} 
                              className="flex-shrink-0 w-96 glassmorphic-card rounded-xl p-6 border border-orange-400/10 hover:scale-105 transition-transform duration-300"
                            >
                              {/* Project Image */}
                              <div className="relative mb-4 rounded-lg overflow-hidden group">
                                <img 
                                  src={project.image} 
                                  alt={project.title}
                                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute top-3 left-3">
                                  <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm border border-green-400/30">
                                    {project.category}
                                  </span>
                                </div>
                              </div>

                              {/* Project Content */}
                              <h4 className="text-xl font-medium text-white mb-2">{project.title}</h4>
                              <p className="text-white/70 text-sm mb-4 leading-relaxed">{project.description}</p>

                              {/* Marketing Results */}
                              <div className="mb-4">
                                <h5 className="text-orange-400 font-medium mb-2 flex items-center">
                                  <Award className="w-4 h-4 mr-1" />
                                  Marketing Results
                                </h5>
                                <div className="space-y-1">
                                  {project.marketingResults.slice(0, 2).map((result, index) => (
                                    <div key={index} className="text-white/80 text-sm flex items-center">
                                      <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2" />
                                      {result}
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* Services */}
                              <div className="mb-4">
                                <h5 className="text-green-400 font-medium mb-2 flex items-center">
                                  <Target className="w-4 h-4 mr-1" />
                                  Services Provided
                                </h5>
                                <div className="flex flex-wrap gap-2">
                                  {project.services.slice(0, 3).map((service, index) => (
                                    <span key={index} className="px-2 py-1 bg-green-400/20 text-green-300 rounded text-xs border border-green-400/30">
                                      {service}
                                    </span>
                                  ))}
                                </div>
                              </div>

                              {/* Technologies */}
                              <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.slice(0, 3).map((tech, index) => (
                                  <span key={index} className="px-2 py-1 bg-orange-400/20 text-orange-300 rounded text-xs border border-orange-400/30">
                                    {tech}
                                  </span>
                                ))}
                              </div>

                              {/* View More Button */}
                              <Button 
                                className="w-full bg-gradient-to-r from-orange-400 to-yellow-400 text-black hover:from-orange-500 hover:to-yellow-500 font-medium"
                                onClick={() => {/* Add modal or detailed view logic */}}
                              >
                                View Full Case Study
                              </Button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 p-8 glassmorphic-card rounded-2xl border border-orange-400/20">
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              Ready to <span className="melon-text">grow your brand</span>?
            </h2>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              From setting foundations and SEO to running ads and creating omnipresence - we handle everything so you can focus on what you do best.
            </p>
            <Button 
              className="bg-gradient-to-r from-orange-400 to-yellow-400 text-black hover:from-orange-500 hover:to-yellow-500 font-bold px-8 py-3 rounded-xl hover:scale-105 transition-all duration-300"
              onClick={() => window.location.href = '/booking'}
            >
              Start Your Growth Journey ✨
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Projects;
