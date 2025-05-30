
import React, { useState, useEffect } from 'react';

const WeddingHeader = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const weddingDate = new Date('2027-05-27T11:00:00');
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate.getTime() - now;
      
      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <header className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute top-10 left-10 text-4xl animate-float opacity-60">✨</div>
      <div className="absolute top-20 right-20 text-3xl animate-float opacity-50" style={{ animationDelay: '1s' }}>🤍</div>
      <div className="absolute bottom-20 left-20 text-3xl animate-float opacity-40" style={{ animationDelay: '2s' }}>🌹</div>
      <div className="absolute bottom-10 right-10 text-4xl animate-float opacity-60" style={{ animationDelay: '0.5s' }}>💍</div>
      
      <div className="text-center max-w-4xl mx-auto animate-fade-in">
        {/* Main announcement */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-playfair text-gray-700 mb-4 tracking-wide">
            Presto diremo
          </h1>
          <div className="text-6xl md:text-8xl font-playfair font-bold text-primary mb-6 heart-animation">
            Sì!
          </div>
        </div>

        {/* Couple names */}
        <div className="mb-8">
          <h2 className="text-4xl md:text-6xl font-playfair font-semibold text-gray-800 mb-2">
            Salvatore
          </h2>
          <div className="text-2xl md:text-3xl text-primary mb-2 animate-gentle-bounce">
            &
          </div>
          <h2 className="text-4xl md:text-6xl font-playfair font-semibold text-gray-800">
            Carmen
          </h2>
        </div>

        {/* Wedding date */}
        <div className="mb-8">
          <div className="text-xl md:text-2xl font-inter text-gray-600 mb-2">
            27 Maggio 2027
          </div>
          <div className="w-32 h-0.5 bg-primary mx-auto"></div>
        </div>

        {/* Countdown */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-lg border border-white/50">
          <h3 className="text-lg md:text-xl font-playfair text-gray-700 mb-4">
            Mancano ancora...
          </h3>
          <div className="grid grid-cols-4 gap-4 text-center">
            <div className="bg-primary/20 rounded-2xl p-3 md:p-4">
              <div className="text-2xl md:text-3xl font-playfair font-bold text-primary">
                {timeLeft.days}
              </div>
              <div className="text-xs md:text-sm text-gray-600">Giorni</div>
            </div>
            <div className="bg-primary/20 rounded-2xl p-3 md:p-4">
              <div className="text-2xl md:text-3xl font-playfair font-bold text-primary">
                {timeLeft.hours}
              </div>
              <div className="text-xs md:text-sm text-gray-600">Ore</div>
            </div>
            <div className="bg-primary/20 rounded-2xl p-3 md:p-4">
              <div className="text-2xl md:text-3xl font-playfair font-bold text-primary">
                {timeLeft.minutes}
              </div>
              <div className="text-xs md:text-sm text-gray-600">Minuti</div>
            </div>
            <div className="bg-primary/20 rounded-2xl p-3 md:p-4">
              <div className="text-2xl md:text-3xl font-playfair font-bold text-primary">
                {timeLeft.seconds}
              </div>
              <div className="text-xs md:text-sm text-gray-600">Secondi</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default WeddingHeader;
