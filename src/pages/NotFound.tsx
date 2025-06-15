import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navigation />
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="text-center glassmorphic-card p-12 rounded-2xl max-w-md">
          <h1 className="text-6xl font-light mb-6 text-orange-400">404</h1>
          <h2 className="text-2xl font-light mb-4">Page Not Found</h2>
          <p className="text-white/70 font-light mb-8">
            Oops! The page you're looking for doesn't exist. Let's get you back on track.
          </p>
          <div className="space-y-4">
            <Button 
              onClick={() => window.location.href = '/'}
              className="neumorphic-button w-full py-3"
            >
              Return to Home
            </Button>
            <Button 
              onClick={() => window.location.href = '/contact'}
              variant="outline"
              className="glassmorphic-button w-full py-3 border-white/20 text-white hover:bg-white/10"
            >
              Contact Support
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
