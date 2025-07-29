import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Download, Mail, CheckCircle, Zap, TrendingUp, Users } from 'lucide-react';
import { submitLeadMagnetEmail, downloadPDF } from '@/lib/leadMagnet';

const LeadMagnetSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    try {
      const result = await submitLeadMagnetEmail(email);
      if (result.success) {
        setIsSubmitted(true);
        downloadPDF();
      } else {
        alert(result.message);
      }
    } catch (error) {
      alert('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-melon-400/10" />
      <div className="absolute top-10 left-10 w-32 h-32 bg-orange-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-melon-400/10 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        {!isSubmitted ? (
          <div className="glassmorphic-card p-8 md:p-12 rounded-3xl text-center">
            {/* Header */}
            <div className="mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-melon-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Download className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-poppins">
                Free Social Media Guide
              </h2>
              <p className="text-xl text-orange-100/90 font-medium max-w-2xl mx-auto font-poppins">
                Download our proven "5 Ways to Boost Your Social Media Engagement" and start growing your audience today
              </p>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-400/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 font-poppins">Proven Strategies</h3>
                <p className="text-white/70 text-sm font-poppins">Battle-tested methods that actually work</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-melon-400/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-6 h-6 text-melon-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 font-poppins">Quick Wins</h3>
                <p className="text-white/70 text-sm font-poppins">See results in just 7 days</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 font-poppins">Real Growth</h3>
                <p className="text-white/70 text-sm font-poppins">Build genuine audience engagement</p>
              </div>
            </div>

            {/* Email Form */}
            <div className="max-w-md mx-auto">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="pl-12 py-4 text-lg bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-orange-400 rounded-xl font-poppins"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-orange-400 to-melon-500 hover:from-orange-500 hover:to-melon-600 text-white font-bold py-4 text-lg rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/30 disabled:opacity-50 disabled:cursor-not-allowed font-poppins"
                >
                  {isLoading ? 'Preparing Your Guide...' : 'Get Free Guide Now! 🚀'}
                </Button>
              </form>
              
              <p className="text-sm text-white/60 mt-3 font-poppins">
                ✅ No spam, ever. ✅ Unsubscribe anytime. ✅ Used by 500+ founders
              </p>
            </div>
          </div>
        ) : (
          <div className="glassmorphic-card p-8 md:p-12 rounded-3xl text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-4 font-poppins">
              Success! 🎉
            </h2>
            <p className="text-xl text-green-100/90 mb-6 font-poppins">
              Your "5 Ways to Boost Social Media Engagement" guide is ready!
            </p>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto font-poppins">
              Check your email in the next few minutes for the download link and bonus growth tips. 
              In the meantime, why not book a free strategy call to accelerate your growth?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Button
                onClick={() => window.location.href = '/booking'}
                className="bg-melon-500 hover:bg-melon-400 text-slate-900 font-bold py-3 px-6 rounded-xl hover:scale-105 transition-all duration-300 font-poppins"
              >
                Book Free Strategy Call
              </Button>
              <Button
                onClick={() => window.location.reload()}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 py-3 px-6 rounded-xl font-poppins"
              >
                Back to Site
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default LeadMagnetSection;
