
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, CheckCircle, AlertCircle, Zap, Heart, Coffee } from 'lucide-react';
import { submitContactForm, type ContactFormData } from '@/lib/supabase';

const Contact = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const { data, error } = await submitContactForm(formData);
      
      if (error) {
        setSubmitStatus('error');
        setErrorMessage('Failed to send message. Please try again.');
        console.error('Submission error:', error);
      } else {
        setSubmitStatus('success');
        setFormData({
          first_name: '',
          last_name: '',
          email: '',
          subject: '',
          message: ''
        });
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('An unexpected error occurred. Please try again.');
      console.error('Unexpected error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navigation />
      <div className="flex-1 pt-40 md:pt-36 pb-16 px-6">
        <div className="max-w-6xl mx-auto">          <div className="text-center mb-16">
            {/* Mascot */}
            <div className="mb-8">
              <img 
                src="/lovable-uploads/melons-mascot.png" 
                alt="Melons Media Mascot" 
                className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 hover:animate-bounce transition-all duration-300"
              />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6">
              Let's create something <span className="bg-gradient-to-r from-purple-500 to-orange-400 bg-clip-text text-transparent relative">
                epic
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-orange-400"></div>
              </span> together
            </h1><p className="text-2xl text-white/60 font-light mb-4">
              Ready to make your competitors cry?
            </p>
            <p className="text-lg text-white/50 max-w-3xl mx-auto">
              Drop us a line and let's turn your wildest digital dreams into reality. We promise to reply faster than your competition can say "responsive design."
            </p>
          </div>          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="glassmorphic-card p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-400/10 rounded-full blur-2xl" />
              <div className="relative z-10">                <h2 className="text-3xl font-light tracking-tight mb-2">
                  <span className="text-white">Quick message?</span>
                </h2>
                <p className="text-white/60 mb-8">We're basically ninjas at responding (but friendlier)</p>
                
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <p className="text-green-300">Message sent! We'll get back to you faster than you can say "conversion rate"</p>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center">
                    <AlertCircle className="w-5 h-5 text-red-400 mr-3" />
                    <p className="text-red-300">{errorMessage}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">                    <Input 
                      name="first_name"
                      value={formData.first_name}
                      onChange={handleInputChange}
                      placeholder="First Name" 
                      required
                      className="bg-white/5 border-orange-400/20 text-white placeholder:text-white/50 focus:border-orange-400/50"
                    />
                    <Input 
                      name="last_name"
                      value={formData.last_name}
                      onChange={handleInputChange}
                      placeholder="Last Name" 
                      required
                      className="bg-white/5 border-orange-400/20 text-white placeholder:text-white/50 focus:border-orange-400/50"
                    />
                  </div>                  <Input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address" 
                    required
                    className="bg-white/5 border-orange-400/20 text-white placeholder:text-white/50 focus:border-orange-400/50"
                  />
                  <Input 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's cooking? (Project type/idea)" 
                    required
                    className="bg-white/5 border-orange-400/20 text-white placeholder:text-white/50 focus:border-orange-400/50"
                  />
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Spill the tea! Tell us about your project, goals, or just say hi"
                    rows={6}
                    required
                    className="w-full px-3 py-2 rounded-md bg-white/5 border border-orange-400/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:border-orange-400/50"
                  />
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold rounded-lg hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/30 transition-all duration-300"                  >
                    {isSubmitting ? 'Sending Magic' : 'Send Message'}
                  </Button>
                </form>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="glassmorphic-card p-8 rounded-2xl relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-orange-400/10 rounded-full blur-3xl" />
                <div className="relative z-10">                  <h3 className="text-2xl font-light tracking-tight mb-6">
                    <span className="text-white">Hit us up directly</span>
                  </h3>                  <div className="space-y-6">
                    <div className="flex items-center group hover:scale-105 transition-transform duration-300">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                        <Mail className="w-6 h-6 text-white hover:animate-bounce transition-all duration-300" strokeWidth={1} />
                      </div>
                      <div>
                        <p className="text-white/90 font-light">Drop us a line</p>                        <a 
                          href="mailto:water@melonsmedia.social"
                          className="text-orange-400 hover:text-orange-300 transition-colors font-medium"
                        >
                          water@melonsmedia.social
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center group hover:scale-105 transition-transform duration-300">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                        <Phone className="w-6 h-6 text-white hover:rotate-12 hover:scale-110 transition-all duration-300" strokeWidth={1} />
                      </div>
                      <div>
                        <p className="text-white/90 font-light">Call us (we actually answer!)</p>                        <a 
                          href="tel:+917987919263"
                          className="text-orange-400 hover:text-orange-300 transition-colors font-medium"
                        >
                          (+91) 7987919263
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center group hover:scale-105 transition-transform duration-300">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                        <MapPin className="w-6 h-6 text-white hover:animate-pulse hover:scale-110 transition-all duration-300" strokeWidth={1} />
                      </div>
                      <div>
                        <p className="text-white/90 font-light">Come say hi</p>
                        <p className="text-white/70">Pune, Maharashtra</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                <div className="glassmorphic-card p-8 rounded-2xl">
                <h3 className="text-2xl font-light tracking-tight mb-4">
                  <span className="text-white">When we're awake</span>
                </h3>
                <p className="text-white/60 mb-4 text-sm">
                  (Spoiler: We're basically always working because we love what we do)
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-white/70">Monday - Friday</span>
                    <span className="text-white">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Saturday</span>
                    <span className="text-white">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Sunday</span>
                    <span className="text-white/50">Recovering from too much coding</span>
                  </div>
                </div>
              </div>
            </div>
          </div>          <div className="mt-16 glassmorphic-card p-8 rounded-2xl">            <h2 className="text-3xl font-light tracking-tight mb-8 text-center">
              <span className="bg-gradient-to-r from-purple-500 to-orange-400 bg-clip-text text-transparent">Got questions?</span> We've got answers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-light mb-2 text-white">How fast can you work?</h3>
                <p className="text-white/70 font-light mb-4">Fast enough to make your head spin, but not so fast that we compromise quality. Think "Usain Bolt meets perfectionist."</p>
                
                <h3 className="text-lg font-light mb-2 text-white">Do you work with startups?</h3>
                <p className="text-white/70 font-light mb-4">Are you kidding? Startups are our jam! We love working with ambitious rebels who want to change the world.</p>
                
                <h3 className="text-lg font-light mb-2 text-white">What if I have a crazy idea?</h3>
                <p className="text-white/70 font-light">The crazier, the better! We thrive on "impossible" projects. If it makes you nervous, it probably makes us excited.</p>
              </div>
              <div>
                <h3 className="text-lg font-light mb-2 text-white">How much does it cost?</h3>
                <p className="text-white/70 font-light mb-4">Less than you think for what you get. We're not the cheapest, but we're definitely the best value for money.</p>
                
                <h3 className="text-lg font-light mb-2 text-white">Do you do maintenance?</h3>
                <p className="text-white/70 font-light mb-4">Of course! We're not the type to build something amazing and then disappear. We're in it for the long haul.</p>
                
                <h3 className="text-lg font-light mb-2 text-white">Can you beat our current agency?</h3>
                <p className="text-white/70 font-light">Watch us. (But seriously, let's chat about what's not working and how we can fix it.)</p>
              </div>
            </div>
          </div>          <div className="mt-16 glassmorphic-card p-8 rounded-2xl">            <h2 className="text-3xl font-light tracking-tight mb-8 text-center">                What happens when you <span className="bg-gradient-to-r from-purple-500 to-orange-400 bg-clip-text text-transparent">contact us</span>?
            </h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center bg-white/5 p-6 rounded-xl border border-white/20 hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <Zap className="w-8 h-8 text-white animate-pulse hover:animate-bounce transition-all duration-300" />
                </div>
                <h3 className="text-lg font-light mb-3 text-white">Lightning Response</h3>
                <p className="text-white/70 text-sm">We'll get back to you faster than your competition can load their website. Usually within 2-4 hours!</p>
              </div>
              <div className="text-center bg-white/5 p-6 rounded-xl border border-white/20 hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <Heart className="w-8 h-8 text-white hover:scale-125 hover:text-red-400 transition-all duration-300" />
                </div>
                <h3 className="text-lg font-light mb-3 text-white">Personal Touch</h3>
                <p className="text-white/70 text-sm">No generic templates here. We'll actually read your message and give you a thoughtful, human response.</p>
              </div>
              <div className="text-center bg-white/5 p-6 rounded-xl border border-white/20 hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <Coffee className="w-8 h-8 text-white hover:rotate-12 hover:scale-110 transition-all duration-300" />
                </div>
                <h3 className="text-lg font-light mb-3 text-white">Free Strategy Session</h3>
                <p className="text-white/70 text-sm">We'll hop on a call (or meet for coffee) and share some killer insights—no strings attached.</p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center glassmorphic-card p-12 rounded-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-orange-400/5 to-yellow-400/5" />
            <div className="relative z-10">
              <h2 className="text-4xl font-light tracking-tight mb-4">
                Still thinking about it?
              </h2>
              <p className="text-white/70 font-light mb-8 max-w-2xl mx-auto text-lg">
                While you're thinking, your competitors are probably stealing your customers. Just saying.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => window.location.href = '/booking'}
                  className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-8 py-4 rounded-lg hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/30 transition-all duration-300"
                >
                  Book a Call Instead
                </button>                <button 
                  onClick={() => window.location.href = '/services'}
                  className="glassmorphic-button px-8 py-4 text-lg border-white/20 text-white hover:bg-white/10 hover:border-orange-400/40 transition-all duration-300"
                >
                  Check Our Work First
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
