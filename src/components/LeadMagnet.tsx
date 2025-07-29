import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Download, Mail, CheckCircle, X } from 'lucide-react';
import { submitLeadMagnetEmail, downloadPDF } from '@/lib/leadMagnet';

const LeadMagnet = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
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
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm">
      <div className="glassmorphic-card p-6 rounded-2xl border border-orange-400/30 shadow-2xl relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 via-transparent to-melon-400/10" />
        
        {/* Close button */}
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-3 right-3 text-white/60 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="relative z-10">
          {!isSubmitted ? (
            <>
              {/* Lead Magnet Content */}
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-melon-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Download className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 font-poppins">
                  Free Social Media Guide
                </h3>
                <p className="text-white/80 text-sm font-poppins">
                  Get our "5 Ways to Boost Your Social Media Engagement" PDF and start growing your audience today!
                </p>
              </div>

              {/* Email Form */}
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/60" />
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-orange-400 font-poppins"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-400 to-melon-500 hover:from-orange-500 hover:to-melon-600 text-white font-semibold py-2 rounded-lg transition-all duration-300 hover:scale-105 font-poppins"
                >
                  Download Free Guide
                </Button>
              </form>

              <p className="text-xs text-white/60 mt-2 text-center font-poppins">
                No spam. Unsubscribe anytime.
              </p>
            </>
          ) : (
            <>
              {/* Success State */}
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 font-poppins">
                  Success!
                </h3>
                <p className="text-white/80 text-sm mb-4 font-poppins">
                  Your download should start automatically. Check your email for more growth tips!
                </p>
                <Button
                  onClick={() => setIsVisible(false)}
                  className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-poppins"
                >
                  Close
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeadMagnet;
