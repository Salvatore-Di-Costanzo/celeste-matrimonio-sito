
import React from 'react';

const LocationMap = () => {
  const locations = [
    {
      id: 1,
      name: 'Chiesa',
      icon: '⛪',
      address: 'Basilica Concattedrale di Maria SS. Assunta',
      time: '11:00',
      color: 'bg-blue-500',
      mapLink: 'https://maps.app.goo.gl/XWjuAKumSc2msdfK8'
    },
    {
      id: 2,
      name: 'Parcheggio multipiano',
      icon: '🅿️',
      address: 'Parcheggio multipiano',
      time: 'dalle 10:30',
      color: 'bg-green-500',
      mapLink: 'https://maps.app.goo.gl/1HDkNWegdvdAdVTr6'
    },
    {
      id: 3,
      name: 'Ristorante',
      icon: '🍽️',
      address: 'Colle Rajano',
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

                {location.name === 'Parcheggio multipiano' && (
                  <div className="mt-4 p-3 bg-green-50 rounded-xl border border-green-200">
                    <p className="text-xs font-inter text-green-700">
                      💡 Per maggiore comodità, consigliamo di far scendere i passeggeri nei pressi della rotonda, vicino alla Farmacia De Lucia, prima di imboccare il senso unico, e poi proseguire verso il parcheggio
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
