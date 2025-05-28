
import React, { useState } from 'react';
import { useToast } from '../hooks/use-toast';
import { supabase } from '../integrations/supabase/client';

const RSVPForm = () => {
  const [formData, setFormData] = useState({
    family: '',
    adults: '',
    children: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const { toast } = useToast();

  const families = [
    'Famiglia Rossi',
    'Famiglia Bianchi',
    'Famiglia Verdi',
    'Famiglia Neri',
    'Famiglia Romano',
    'Famiglia Ricci',
    'Famiglia Marino',
    'Famiglia Greco',
    'Famiglia Bruno',
    'Famiglia Gallo'
  ];

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.family) {
      newErrors.family = 'Seleziona il nome della famiglia';
    }

    if (!formData.adults || parseInt(formData.adults) < 1) {
      newErrors.adults = 'Inserisci almeno 1 adulto';
    }

    if (formData.children && parseInt(formData.children) < 0) {
      newErrors.children = 'Il numero di bambini non può essere negativo';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('rsvp_confirmations')
        .insert({
          family_name: formData.family,
          adults_count: parseInt(formData.adults),
          children_count: parseInt(formData.children) || 0,
          will_attend: true
        });

      if (error) {
        console.error('Error inserting RSVP:', error);
        toast({
          title: "Errore durante il salvataggio",
          description: "Si è verificato un errore. Riprova più tardi.",
          variant: "destructive"
        });
        return;
      }

      setIsSubmitted(true);
      toast({
        title: "Partecipazione confermata! 💕",
        description: "Grazie per aver confermato! Non vediamo l'ora di festeggiare con voi.",
      });
      console.log('RSVP saved successfully to database');
    } catch (error) {
      console.error('Unexpected error:', error);
      toast({
        title: "Errore inaspettato",
        description: "Si è verificato un errore. Riprova più tardi.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-16 px-4 bg-gradient-to-r from-wedding-rose-light to-wedding-blue-light">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg border border-white/50 animate-fade-in">
            <div className="text-6xl mb-6 animate-gentle-bounce">💕</div>
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-gray-800 mb-6">
              Grazie di cuore!
            </h2>
            <p className="text-lg md:text-xl text-gray-600 font-inter leading-relaxed mb-8">
              La vostra partecipazione è confermata! Non vediamo l'ora di festeggiare insieme a voi 
              in questo giorno così speciale.
            </p>
            
            <div className="bg-primary/10 rounded-2xl p-6 mb-8">
              <h3 className="font-playfair font-semibold text-gray-800 mb-4">Riepilogo:</h3>
              <div className="space-y-2 text-gray-700 font-inter">
                <p><strong>Famiglia:</strong> {formData.family}</p>
                <p><strong>Adulti:</strong> {formData.adults}</p>
                <p><strong>Bambini:</strong> {formData.children || '0'}</p>
              </div>
            </div>

            <div className="text-sm text-gray-500 font-inter">
              Riceverete ulteriori dettagli più vicino alla data del matrimonio
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-wedding-rose-light to-wedding-blue-light">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-gray-800 mb-6">
            Conferma la tua partecipazione
          </h2>
          <p className="text-lg text-gray-600 font-inter">
            Aiutaci a organizzare al meglio questo giorno speciale confermando la tua presenza
          </p>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-lg border border-white/50">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Family selection */}
            <div>
              <label className="block text-lg font-playfair font-semibold text-gray-800 mb-3">
                Nome della famiglia *
              </label>
              <select
                value={formData.family}
                onChange={(e) => handleInputChange('family', e.target.value)}
                disabled={isSubmitting}
                className={`w-full p-4 border-2 rounded-2xl font-inter bg-white/80 transition-all duration-300 focus:ring-4 focus:ring-primary/20 focus:border-primary disabled:opacity-50 disabled:cursor-not-allowed ${
                  errors.family ? 'border-red-400' : 'border-gray-200'
                }`}
              >
                <option value="">Seleziona la tua famiglia</option>
                {families.map((family) => (
                  <option key={family} value={family}>
                    {family}
                  </option>
                ))}
              </select>
              {errors.family && (
                <p className="mt-2 text-red-500 text-sm font-inter">{errors.family}</p>
              )}
            </div>

            {/* Adults count */}
            <div>
              <label className="block text-lg font-playfair font-semibold text-gray-800 mb-3">
                Numero di adulti *
              </label>
              <input
                type="number"
                min="1"
                max="10"
                value={formData.adults}
                onChange={(e) => handleInputChange('adults', e.target.value)}
                disabled={isSubmitting}
                placeholder="es. 2"
                className={`w-full p-4 border-2 rounded-2xl font-inter bg-white/80 transition-all duration-300 focus:ring-4 focus:ring-primary/20 focus:border-primary disabled:opacity-50 disabled:cursor-not-allowed ${
                  errors.adults ? 'border-red-400' : 'border-gray-200'
                }`}
              />
              {errors.adults && (
                <p className="mt-2 text-red-500 text-sm font-inter">{errors.adults}</p>
              )}
            </div>

            {/* Children count */}
            <div>
              <label className="block text-lg font-playfair font-semibold text-gray-800 mb-3">
                Numero di bambini
              </label>
              <input
                type="number"
                min="0"
                max="10"
                value={formData.children}
                onChange={(e) => handleInputChange('children', e.target.value)}
                disabled={isSubmitting}
                placeholder="es. 1 (opzionale)"
                className={`w-full p-4 border-2 rounded-2xl font-inter bg-white/80 transition-all duration-300 focus:ring-4 focus:ring-primary/20 focus:border-primary disabled:opacity-50 disabled:cursor-not-allowed ${
                  errors.children ? 'border-red-400' : 'border-gray-200'
                }`}
              />
              {errors.children && (
                <p className="mt-2 text-red-500 text-sm font-inter">{errors.children}</p>
              )}
              <p className="mt-2 text-sm text-gray-500 font-inter">
                Lascia vuoto se non ci sono bambini
              </p>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary/90 disabled:bg-primary/50 disabled:cursor-not-allowed text-white font-inter font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100 shadow-lg hover:shadow-xl text-lg"
            >
              <div className="flex items-center justify-center space-x-2">
                <span>💌</span>
                <span>{isSubmitting ? 'Salvando...' : 'Conferma Partecipazione'}</span>
              </div>
            </button>

            <p className="text-xs text-gray-500 font-inter text-center">
              * Campi obbligatori
            </p>
          </form>
        </div>

        {/* Additional info */}
        <div className="mt-8 text-center">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
            <p className="text-sm text-gray-600 font-inter">
              <span className="text-lg mr-2">📞</span>
              Per qualsiasi domanda o necessità speciale, contattaci direttamente
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RSVPForm;
