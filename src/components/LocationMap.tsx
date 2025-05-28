
import React from 'react';

const LocationMap = () => {
  const locations = [
    {
      id: 1,
      name: 'Chiesa',
      icon: '⛪',
      address: 'Chiesa San Giuseppe',
      time: '11:00',
      color: 'bg-blue-500',
      mapLink: 'https://maps.app.goo.gl/XWjuAKumSc2msdfK8'
    },
    {
      id: 2,
      name: 'Parcheggio Chiesa',
      icon: '🅿️',
      address: 'Parcheggio vicino alla chiesa',
      time: 'dalle 10:30',
      color: 'bg-green-500',
      mapLink: 'https://maps.app.goo.gl/1HDkNWegdvdAdVTr6'
    },
    {
      id: 3,
      name: 'Ristorante',
      icon: '🍽️',
      address: 'Ristorante per il ricevimento',
      time: '13:30',
      color: 'bg-red-500',
      mapLink: 'https://maps.app.goo.gl/qsr51LXK9UZdUNAZ8'
    }
  ];

  const openInGoogleMaps = (mapLink: string) => {
    window.open(mapLink, '_blank');
  };

  return (
    <section className="py-16 px-4 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-gray-800 mb-6">
            I luoghi del nostro matrimonio
          </h2>
          <p className="text-lg text-gray-600 font-inter">
            Clicca sui pulsanti per aprire la mappa e raggiungere facilmente ogni location
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {locations.map((location, index) => (
            <div 
              key={location.id}
              className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-white/50 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-center">
                <div className="text-4xl mb-4 animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                  {location.icon}
                </div>
                
                <h3 className="text-xl md:text-2xl font-playfair font-semibold text-gray-800 mb-3">
                  {location.name}
                </h3>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-primary">🕐</span>
                    <span className="text-gray-700 font-inter">{location.time}</span>
                  </div>
                  
                  <div className="text-gray-600 font-inter text-sm">
                    {location.address}
                  </div>
                </div>

                <button
                  onClick={() => openInGoogleMaps(location.mapLink)}
                  className="w-full bg-primary hover:bg-primary/90 text-white font-inter font-medium py-3 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <div className="flex items-center justify-center space-x-2">
                    <span>🗺️</span>
                    <span>Apri in Google Maps</span>
                  </div>
                </button>

                {location.name === 'Parcheggio Chiesa' && (
                  <div className="mt-4 p-3 bg-green-50 rounded-xl border border-green-200">
                    <p className="text-xs font-inter text-green-700">
                      💡 Consigliamo di arrivare con anticipo per trovare parcheggio
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Map placeholder with decorative elements */}
        <div className="mt-12 bg-gradient-to-r from-wedding-blue to-wedding-blue-dark rounded-3xl p-8 text-center shadow-lg">
          <h4 className="text-2xl font-playfair font-semibold text-white mb-4">
            Mappa delle location
          </h4>
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
            <div className="text-6xl mb-4 animate-gentle-bounce">🗺️</div>
            <p className="text-white font-inter">
              Clicca sui pulsanti sopra per navigare verso ogni location con Google Maps
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
