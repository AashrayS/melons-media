import React from 'react';
import Navigation from '@/components/Navigation';
import LeadMagnetSection from '@/components/LeadMagnetSection';
import Footer from '@/components/Footer';

const LeadMagnetPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-black to-green-800 text-white flex flex-col">
      <Navigation />
      <div className="flex-1 pt-20">
        <LeadMagnetSection />
      </div>
      <Footer />
    </div>
  );
};

export default LeadMagnetPage;
