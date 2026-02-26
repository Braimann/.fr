'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  ville?: string;
}

const defaultFAQ: FAQItem[] = [
  {
    question: 'Comment fonctionne le dépannage à distance ?',
    answer: 'Notre technicien vous guide pour installer un logiciel de contrôle à distance (TeamViewer ou AnyDesk). Une fois connecté, il prend le contrôle de votre PC et résout le problème en direct, sous vos yeux. Vous pouvez à tout moment interrompre la connexion.',
  },
  {
    question: 'Est-ce que mes données sont sécurisées ?',
    answer: 'Absolument. La connexion est chiffrée de bout en bout. Vous voyez tout ce que fait le technicien en temps réel et vous gardez le contrôle total. Nous ne conservons aucune donnée et respectons strictement la confidentialité.',
  },
  {
    question: 'Combien de temps dure une intervention ?',
    answer: 'La plupart des problèmes sont résolus en 30 à 60 minutes. Les cas plus complexes (formatage complet, récupération de données) peuvent prendre 1 à 2 heures. Nous vous donnons une estimation avant de commencer.',
  },
  {
    question: 'Que se passe-t-il si le problème n\'est pas résolu ?',
    answer: 'Vous ne payez que si nous résolvons votre problème. Si nous ne parvenons pas à le résoudre, l\'intervention est gratuite. C\'est notre garantie satisfait ou remboursé.',
  },
  {
    question: 'Puis-je vous contacter en dehors des heures de bureau ?',
    answer: 'Oui, nous sommes disponibles 7j/7, y compris le week-end et certains jours fériés. Contactez-nous par WhatsApp et nous vous répondrons dans les meilleurs délais.',
  },
];

export default function FAQ({ items, ville }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqItems = items.length > 0 ? items : defaultFAQ;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mb-4">
            Questions Fréquentes
          </h2>
          <p className="text-gray-600">
            Tout ce que vous devez savoir sur notre service de dépannage à distance.
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-medium text-gray-900 pr-4">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openIndex === index && (
                <div className="px-5 pb-5">
                  <p className="text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
