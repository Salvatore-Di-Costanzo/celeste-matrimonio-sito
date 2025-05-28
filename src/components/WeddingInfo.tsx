
import React from 'react';

const WeddingInfo = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Intro message */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-gray-800 mb-6">
            Il nostro giorno speciale
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-inter leading-relaxed max-w-2xl mx-auto">
            Saremo felici di condividere con voi questo giorno speciale. 
            La vostra presenza renderà ancora più magico il nostro matrimonio.
          </p>
        </div>

        {/* Event timeline */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Ceremony */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/50 transform hover:scale-105 transition-transform duration-300">
            <div className="text-center">
              <div className="text-4xl mb-4 animate-float">⛪</div>
              <h3 className="text-2xl md:text-3xl font-playfair font-semibold text-gray-800 mb-4">
                Cerimonia in Chiesa
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-lg text-primary">🕐</span>
                  <span className="text-lg font-inter text-gray-700">ore 11:00</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-lg text-primary">📍</span>
                  <span className="text-lg font-inter text-gray-700">[Chiesa da inserire]</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-primary/10 rounded-2xl">
                <p className="text-sm font-inter text-gray-600 italic">
                  "Dove due cuori si uniscono per sempre"
                </p>
              </div>
            </div>
          </div>

          {/* Reception */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/50 transform hover:scale-105 transition-transform duration-300">
            <div className="text-center">
              <div className="text-4xl mb-4 animate-float" style={{ animationDelay: '1s' }}>🍽️</div>
              <h3 className="text-2xl md:text-3xl font-playfair font-semibold text-gray-800 mb-4">
                Ricevimento al Ristorante
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-lg text-primary">🕐</span>
                  <span className="text-lg font-inter text-gray-700">ore 13:30</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-lg text-primary">📍</span>
                  <span className="text-lg font-inter text-gray-700">[Ristorante da inserire]</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-primary/10 rounded-2xl">
                <p className="text-sm font-inter text-gray-600 italic">
                  "Dove festeggeremo insieme con gioia"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Dress code or additional info */}
        <div className="mt-12 text-center">
          <div className="bg-wedding-rose/30 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-white/50">
            <h4 className="text-xl font-playfair font-semibold text-gray-800 mb-4">
              Note importanti
            </h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm font-inter text-gray-600">
              <div className="flex items-center justify-center space-x-2">
                <span className="text-lg">🌸</span>
                <span>Cerimonia all'aperto</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-lg">📸</span>
                <span>Fotografo presente</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-lg">🎵</span>
                <span>Musica e balli</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingInfo;
