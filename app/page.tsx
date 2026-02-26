import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import ServicesList from '@/components/ServicesList';
import PrixCard from '@/components/PrixCard';
import FAQ from '@/components/FAQ';
import CTAWhatsApp from '@/components/CTAWhatsApp';
import { villesData } from '@/lib/villes';
import { WHATSAPP_DISPLAY } from '@/lib/contact';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dépannage Informatique France | Technicien à Distance 79€ | AlloSupport',
  description: 'Dépannage PC à distance partout en France dès 79€. Virus, lenteur, formatage, Windows. Technicien en 15 min via WhatsApp. Paiement après résultat.',
  alternates: {
    canonical: 'https://allosupport.fr',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://allosupport.fr',
    title: 'Dépannage Informatique France | Technicien à Distance 79€',
    description: 'Dépannage PC à distance partout en France dès 79€. Technicien en 15 min via WhatsApp.',
  },
};

// JSON-LD Schema
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'AlloSupport',
  url: 'https://allosupport.fr',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://allosupport.fr/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'AlloSupport',
  url: 'https://allosupport.fr',
  logo: 'https://allosupport.fr/logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    availableLanguage: 'French',
  },
  sameAs: [],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Dépannage Informatique à Distance',
  provider: {
    '@type': 'Organization',
    name: 'AlloSupport',
  },
  areaServed: {
    '@type': 'Country',
    name: 'France',
  },
  serviceType: 'Dépannage informatique',
  offers: {
    '@type': 'Offer',
    price: '79',
    priceCurrency: 'EUR',
    priceValidUntil: '2025-12-31',
    availability: 'https://schema.org/InStock',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Comment fonctionne le dépannage à distance ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Notre technicien vous guide pour installer un logiciel de contrôle à distance (TeamViewer ou AnyDesk). Une fois connecté, il prend le contrôle de votre PC et résout le problème en direct, sous vos yeux.',
      },
    },
    {
      '@type': 'Question',
      name: 'Est-ce que mes données sont sécurisées ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolument. La connexion est chiffrée de bout en bout. Vous voyez tout ce que fait le technicien en temps réel et vous gardez le contrôle total.',
      },
    },
    {
      '@type': 'Question',
      name: 'Combien de temps dure une intervention ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La plupart des problèmes sont résolus en 30 à 60 minutes. Les cas plus complexes peuvent prendre 1 à 2 heures.',
      },
    },
    {
      '@type': 'Question',
      name: 'Que se passe-t-il si le problème n\'est pas résolu ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vous ne payez que si nous résolvons votre problème. Si nous ne parvenons pas à le résoudre, l\'intervention est gratuite.',
      },
    },
    {
      '@type': 'Question',
      name: 'Puis-je vous contacter en dehors des heures de bureau ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, nous sommes disponibles 7j/7, y compris le week-end et certains jours fériés.',
      },
    },
  ],
};

export default function Home() {
  const mainVilles = villesData.slice(0, 20);

  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Hero />
      <ServicesList />
      <PrixCard />

      {/* Comment ça marche */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mb-4">
              Comment ça marche ?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              4 étapes simples pour retrouver un PC qui fonctionne parfaitement.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Contactez-nous',
                description: 'Envoyez un message WhatsApp avec la description de votre problème.',
                icon: '💬',
              },
              {
                step: '2',
                title: 'Diagnostic',
                description: 'Nous évaluons votre problème et vous donnons un devis gratuit.',
                icon: '🔍',
              },
              {
                step: '3',
                title: 'Intervention',
                description: 'Notre technicien se connecte à distance et résout le problème.',
                icon: '🔧',
              },
              {
                step: '4',
                title: 'Paiement',
                description: 'Vous payez uniquement si le problème est résolu. Garantie incluse.',
                icon: '✅',
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <div className="text-brand-blue font-bold text-lg mb-2">
                  Étape {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Villes Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mb-4">
              Dépannage Informatique près de chez vous
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Notre technicien à distance intervient partout en France. 
              Découvrez nos pages dédiées par ville.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {mainVilles.map((ville) => (
              <Link
                key={ville.slug}
                href={`/depannage-informatique-${ville.slug}/`}
                className="bg-white rounded-lg p-4 text-center hover:shadow-md hover:bg-brand-blue hover:text-white transition-all group"
              >
                <span className="font-medium text-sm group-hover:text-white text-gray-700">
                  {ville.nom}
                </span>
                <span className="block text-xs text-gray-400 group-hover:text-white/70 mt-1">
                  {ville.region}
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/depannage-informatique-france/"
              className="inline-flex items-center text-brand-blue hover:text-brand-dark font-medium transition-colors"
            >
              <span>Voir toutes les villes</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Prêt à retrouver un PC qui fonctionne ?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Ne laissez pas un problème informatique ralentir votre quotidien. 
            Contactez-nous maintenant et soyez dépanné en 15 minutes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <CTAWhatsApp size="large" />
            <div className="text-white/80">
              <span className="block text-2xl font-bold text-white">{WHATSAPP_DISPLAY}</span>
              <span className="text-sm">Disponible 7j/7 sur WhatsApp</span>
            </div>
          </div>
        </div>
      </section>

      <FAQ items={[]} />
    </>
  );
}
