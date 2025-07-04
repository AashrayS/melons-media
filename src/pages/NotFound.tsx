import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-900 via-black to-green-800 text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-orange-400">404</h1>
        <p className="text-xl text-white/70 mb-4">Oops! Page not found</p>
        <a href="/" className="text-orange-400 hover:text-orange-300 underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
