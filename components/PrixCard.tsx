'use client';

import { Check } from 'lucide-react';
import CTAWhatsApp from './CTAWhatsApp';

interface Forfait {
  nom: string;
  prix: string;
  description: string;
  features: string[];
  populaire?: boolean;
}

const forfaits: Forfait[] = [
  {
    nom: 'Diagnostic',
    prix: '39€',
    description: 'Analyse complète de votre système',
    features: [
      'Analyse virus et malwares',
      'Diagnostic performance',
      'Rapport détaillé',
      'Devis réparation',
    ],
  },
  {
    nom: 'Réparation',
    prix: '79€',
    description: 'Notre formule la plus demandée',
    features: [
      'Nettoyage virus & malwares',
      'Optimisation Windows',
      'Mise à jour système',
      'Suppression logiciels inutiles',
      'Garantie 30 jours',
    ],
    populaire: true,
  },
  {
    nom: 'Forfait Pro',
    prix: '149€',
    description: 'Solution complète pour TPE',
    features: [
      'Tout le forfait Réparation',
      'Sauvegarde données',
      'Réinstallation complète',
      'Configuration logiciels',
      'Support 7j/7 pendant 1 mois',
      'Garantie 60 jours',
    ],
  },
];

export default function PrixCard() {
  return (
    <section id="tarifs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mb-4">
            Nos Tarifs
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Des prix transparents, sans surprise. Paiement uniquement après résultat.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {forfaits.map((forfait, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 ${
                forfait.populaire
                  ? 'bg-brand-dark text-white shadow-xl scale-105'
                  : 'bg-white text-gray-900 border border-gray-200'
              }`}
            >
              {forfait.populaire && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-green-500 text-white text-sm font-semibold px-4 py-1 rounded-full">
                    Plus populaire
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className={`text-xl font-semibold mb-2 ${forfait.populaire ? 'text-white' : 'text-gray-900'}`}>
                  {forfait.nom}
                </h3>
                <div className="flex items-baseline justify-center">
                  <span className={`text-4xl font-bold ${forfait.populaire ? 'text-white' : 'text-brand-dark'}`}>
                    {forfait.prix}
                  </span>
                </div>
                <p className={`text-sm mt-2 ${forfait.populaire ? 'text-gray-300' : 'text-gray-500'}`}>
                  {forfait.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {forfait.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start space-x-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${forfait.populaire ? 'text-green-400' : 'text-green-500'}`} />
                    <span className={`text-sm ${forfait.populaire ? 'text-gray-300' : 'text-gray-600'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <CTAWhatsApp 
                variant={forfait.populaire ? 'light' : 'dark'} 
                fullWidth 
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12 text-gray-500 text-sm">
          <p>Tous nos prix sont TTC. Paiement sécurisé après résultat.</p>
        </div>
      </div>
    </section>
  );
}
