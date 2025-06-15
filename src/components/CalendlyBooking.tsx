import React, { useEffect } from 'react';

interface CalendlyBookingProps {
  isOpen: boolean;
  onClose: () => void;
}

const CalendlyBooking: React.FC<CalendlyBookingProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      // Load Calendly script if not already loaded
      if (!document.querySelector('script[src*="calendly.com"]')) {
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.head.appendChild(script);
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/10 hover:bg-black/20 rounded-full p-2 transition-colors"
        >
          <svg 
            className="w-6 h-6 text-gray-700" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Calendly Embed */}
        <div className="h-[600px] w-full">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/water-melonsmedia/project-information"
            style={{
              minWidth: '320px',
              height: '100%',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CalendlyBooking;