
import React from 'react';
import WeddingHeader from '../components/WeddingHeader';
import WeddingInfo from '../components/WeddingInfo';
import LocationMap from '../components/LocationMap';
import RSVPForm from '../components/RSVPForm';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-wedding-blue-light via-white to-wedding-rose-light">
      {/* Decorative background pattern */}
      <div className="fixed inset-0 floral-pattern opacity-30 pointer-events-none"></div>
      
      <div className="relative z-10">
        <WeddingHeader />
        <WeddingInfo />
        <LocationMap />
        <RSVPForm />
        
        {/* Footer */}
        <footer className="py-8 text-center text-gray-600">
          <div className="animate-float text-2xl mb-2">💕</div>
          <p className="text-sm font-inter">
            Con tutto il nostro amore, Salvatore & Carmen
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
