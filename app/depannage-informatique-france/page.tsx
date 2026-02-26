import type { Metadata } from 'next';
import Link from 'next/link';
import { villesData } from '@/lib/villes';
import { WHATSAPP_DISPLAY, WHATSAPP_E164 } from '@/lib/contact';
import CTAWhatsApp from '@/components/CTAWhatsApp';
import FAQ from '@/components/FAQ';
import { 
  Bug, 
  Zap, 
  HardDrive, 
  Monitor, 
  Database, 
  Wifi,
  Clock,
  Shield,
  CheckCircle,
  MapPin
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Dépannage Informatique France | Technicien à Distance | AlloSupport',
  description: 'Service de dépannage informatique à distance partout en France. Virus, lenteur, formatage, Windows. Intervention en 15 min. À partir de 79€, paiement après résultat.',
  alternates: {
    canonical: 'https://allosupport.fr/depannage-informatique-france/',
  },
  openGraph: {
    type: 'article',
    locale: 'fr_FR',
    url: 'https://allosupport.fr/depannage-informatique-france/',
    title: 'Dépannage Informatique France | Technicien à Distance',
    description: 'Service de dépannage informatique à distance partout en France. Intervention en 15 min.',
  },
};

// Schema Service
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Dépannage Informatique à Distance France',
  description: 'Service de dépannage informatique à distance pour particuliers et TPE en France. Virus, lenteur, formatage, Windows.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'AlloSupport',
    image: 'https://allosupport.fr/logo.png',
    '@id': 'https://allosupport.fr',
    url: 'https://allosupport.fr',
    telephone: WHATSAPP_E164,
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 46.227638,
      longitude: 2.213749,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '22:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday'],
        opens: '09:00',
        closes: '20:00',
      },
    ],
    areaServed: {
      '@type': 'Country',
      name: 'France',
    },
  },
  serviceType: 'Dépannage informatique',
  areaServed: {
    '@type': 'Country',
    name: 'France',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services de dépannage',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Diagnostic',
        },
        price: '39',
        priceCurrency: 'EUR',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Réparation',
        },
        price: '79',
        priceCurrency: 'EUR',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Forfait Pro',
        },
        price: '149',
        priceCurrency: 'EUR',
      },
    ],
  },
};

// Schema FAQPage
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quels types de problèmes informatiques traitez-vous ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nous traitons tous les problèmes logiciels : virus et malwares, PC lent, formatage et réinstallation Windows, erreurs de mise à jour, récupération de données, problèmes réseau et WiFi, configuration de logiciels, et optimisation système.',
      },
    },
    {
      '@type': 'Question',
      name: 'Intervenez-vous partout en France ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, notre service de dépannage à distance couvre l\'ensemble du territoire français. Que vous soyez à Paris, Lyon, Marseille ou dans une petite commune, nous pouvons intervenir sur votre PC à distance avec la même efficacité.',
      },
    },
    {
      '@type': 'Question',
      name: 'Comment se déroule une intervention à distance ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vous nous contactez par WhatsApp, nous évaluons votre problème, vous installez TeamViewer ou AnyDesk sous notre guidance, et notre technicien prend le contrôle de votre PC pour résoudre le problème en direct.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quel est le délai d\'intervention ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nous intervenons généralement dans les 15 minutes suivant votre contact. Pour les demandes hors heures de pointe, le délai peut être encore plus court.',
      },
    },
  ],
};

const pilierFAQ = [
  {
    question: 'Quels types de problèmes informatiques traitez-vous ?',
    answer: 'Nous traitons tous les problèmes logiciels : virus et malwares, PC lent, formatage et réinstallation Windows, erreurs de mise à jour, récupération de données, problèmes réseau et WiFi, configuration de logiciels, et optimisation système.',
  },
  {
    question: 'Intervenez-vous partout en France ?',
    answer: 'Oui, notre service de dépannage à distance couvre l\'ensemble du territoire français. Que vous soyez à Paris, Lyon, Marseille ou dans une petite commune, nous pouvons intervenir sur votre PC à distance avec la même efficacité.',
  },
  {
    question: 'Comment se déroule une intervention à distance ?',
    answer: 'Vous nous contactez par WhatsApp, nous évaluons votre problème, vous installez TeamViewer ou AnyDesk sous notre guidance, et notre technicien prend le contrôle de votre PC pour résoudre le problème en direct.',
  },
  {
    question: 'Quel est le délai d\'intervention ?',
    answer: 'Nous intervenons généralement dans les 15 minutes suivant votre contact. Pour les demandes hors heures de pointe, le délai peut être encore plus court.',
  },
];

const services = [
  {
    icon: Bug,
    title: 'Suppression Virus & Malwares',
    description: 'Nettoyage complet de votre système infecté. Nous éliminons virus, trojans, ransomwares, logiciels espions et adwares qui ralentissent votre PC et compromettent vos données.',
  },
  {
    icon: Zap,
    title: 'Optimisation PC Lent',
    description: 'Votre ordinateur met 5 minutes à démarrer ? Les applications se figent ? Nous optimisons votre système pour retrouver la fluidité d\'origine.',
  },
  {
    icon: HardDrive,
    title: 'Formatage & Réinstallation',
    description: 'Réinstallation propre de Windows 10 ou 11 avec sauvegarde préalable de vos documents, photos et données importantes.',
  },
  {
    icon: Monitor,
    title: 'Réparation Windows',
    description: 'Résolution des erreurs Windows Update, écran bleu (BSOD), boucles de redémarrage et autres problèmes système.',
  },
  {
    icon: Database,
    title: 'Récupération de Données',
    description: 'Récupération de fichiers supprimés par erreur ou rendus inaccessibles suite à un problème système.',
  },
  {
    icon: Wifi,
    title: 'Dépannage Réseau',
    description: 'Configuration WiFi, partage de fichiers entre ordinateurs, problèmes de connexion Internet.',
  },
];

export default function PilierPage() {
  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-dark via-brand-dark to-brand-blue overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <MapPin className="w-4 h-4 text-green-400" />
              <span className="text-white/90 text-sm font-medium">Service disponible partout en France</span>
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
              Dépannage Informatique France
              <span className="block text-2xl lg:text-3xl text-gray-300 mt-4 font-normal">
                Technicien à distance pour particuliers et TPE
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Service de dépannage informatique à distance couvrant l&apos;ensemble du territoire français. 
              Intervention rapide en 15 minutes, prix transparents à partir de 79€, paiement uniquement après résultat.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
              <CTAWhatsApp size="large" />
              <div className="text-white/80 text-center sm:text-left">
<span className="block text-2xl font-bold text-white">{WHATSAPP_DISPLAY}</span>
              <span className="text-sm">Disponible 7j/7 sur WhatsApp</span>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-white/70">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-green-400" />
                <span>15 min d&apos;intervention</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-green-400" />
                <span>Garantie satisfait</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Paiement après résultat</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 80V40C240 0 480 0 720 20C960 40 1200 40 1440 20V80H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed">
              AlloSupport est votre service de dépannage informatique à distance spécialisé dans l&apos;assistance 
              aux particuliers et aux très petites entreprises (TPE) sur tout le territoire français. Que vous 
              soyez confronté à un virus tenace, un PC devenu lent au fil du temps, ou des erreurs Windows 
              récurrentes, notre technicien intervient rapidement pour remettre votre ordinateur en état de marche.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Le dépannage à distance représente la solution idéale pour résoudre la majorité des problèmes 
              logiciels sans attendre le déplacement d&apos;un technicien. Grâce à des outils sécurisés comme 
              TeamViewer et AnyDesk, nous prenons le contrôle de votre machine en temps réel, sous vos yeux, 
              pour diagnostiquer et réparer votre système. Cette approche vous fait gagner un temps précieux 
              et réduit considérablement le coût de l&apos;intervention.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mb-4">
              Nos Services de Dépannage
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une gamme complète de services pour résoudre tous vos problèmes informatiques à distance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-brand-blue" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi choisir AlloSupport */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mb-6">
                Pourquoi choisir AlloSupport pour votre dépannage informatique ?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Intervention ultra-rapide',
                    description: 'Notre technicien est disponible 7j/7 et intervient en moyenne en 15 minutes après votre contact WhatsApp. Plus besoin d\'attendre des jours pour un rendez-vous.',
                  },
                  {
                    title: 'Prix transparents et fixes',
                    description: 'Pas de surprises : nos tarifs sont affichés clairement. Le diagnostic à 39€, la réparation standard à 79€, et le forfait complet Pro à 149€. Aucun frais caché.',
                  },
                  {
                    title: 'Paiement après résultat',
                    description: 'Vous ne payez que si nous résolvons votre problème. C\'est notre engagement qualité. Si nous n\'y parvenons pas, l\'intervention est gratuite.',
                  },
                  {
                    title: 'Service national',
                    description: 'Que vous habitiez à Paris, Lyon, Marseille, Bordeaux ou dans une petite commune rurale, notre service à distance vous offre la même qualité d\'intervention partout en France.',
                  },
                ].map((item, index) => (
                  <div key={index} className="flex space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-brand-dark rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Comment ça marche ?</h3>
              <div className="space-y-6">
                {[
                  { step: '1', title: 'Contact WhatsApp', desc: 'Décrivez-nous votre problème' },
                  { step: '2', title: 'Devis gratuit', desc: 'Nous évaluons et vous donnons un prix' },
                  { step: '3', title: 'Connexion', desc: 'Installation rapide de TeamViewer' },
                  { step: '4', title: 'Intervention', desc: 'Notre technicien répare votre PC' },
                  { step: '5', title: 'Paiement', desc: 'Vous payez uniquement si résolu' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center font-bold">
                      {item.step}
                    </div>
                    <div>
                      <div className="font-semibold">{item.title}</div>
                      <div className="text-gray-400 text-sm">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-white/20">
                <CTAWhatsApp fullWidth />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mb-4">
              Nos Tarifs
            </h2>
            <p className="text-lg text-gray-600">
              Des prix clairs et transparents, sans mauvaise surprise.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Diagnostic', price: '39€', desc: 'Analyse complète', features: ['Analyse virus', 'Diagnostic perf.', 'Rapport détaillé', 'Devis réparation'] },
              { name: 'Réparation', price: '79€', desc: 'Notre best-seller', features: ['Nettoyage virus', 'Optimisation', 'MàJ Windows', 'Garantie 30j'], popular: true },
              { name: 'Forfait Pro', price: '149€', desc: 'Pour les TPE', features: ['Tout le forfait 79€', 'Sauvegarde données', 'Config logiciels', 'Support 1 mois'] },
            ].map((forfait, index) => (
              <div key={index} className={`rounded-2xl p-8 ${forfait.popular ? 'bg-brand-dark text-white scale-105 shadow-xl' : 'bg-white border border-gray-200'}`}>
                {forfait.popular && <div className="text-center -mt-4 mb-4"><span className="bg-green-500 text-white text-sm px-4 py-1 rounded-full">Plus populaire</span></div>}
                <div className="text-center mb-6">
                  <h3 className={`text-xl font-semibold mb-2 ${forfait.popular ? 'text-white' : 'text-gray-900'}`}>{forfait.name}</h3>
                  <div className={`text-4xl font-bold ${forfait.popular ? 'text-white' : 'text-brand-dark'}`}>{forfait.price}</div>
                  <p className={`text-sm mt-2 ${forfait.popular ? 'text-gray-300' : 'text-gray-500'}`}>{forfait.desc}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {forfait.features.map((f, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <CheckCircle className={`w-5 h-5 ${forfait.popular ? 'text-green-400' : 'text-green-500'}`} />
                      <span className={`text-sm ${forfait.popular ? 'text-gray-300' : 'text-gray-600'}`}>{f}</span>
                    </li>
                  ))}
                </ul>
                <CTAWhatsApp variant={forfait.popular ? 'light' : 'dark'} fullWidth />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Villes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mb-4">
              Dépannage informatique dans votre ville
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nous couvrons l&apos;ensemble des grandes villes françaises. 
              Cliquez sur votre ville pour accéder à la page dédiée.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {villesData.map((ville) => (
              <Link
                key={ville.slug}
                href={`/depannage-informatique-${ville.slug}/`}
                className="bg-gray-50 rounded-lg p-4 text-center hover:bg-brand-blue hover:text-white transition-all group"
              >
                <span className="font-medium text-sm group-hover:text-white text-gray-700">
                  {ville.nom}
                </span>
                <span className="block text-xs text-gray-400 group-hover:text-white/70 mt-1">
                  {ville.deptNom}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-brand-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Besoin d&apos;un dépannage informatique en France ?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Notre technicien est prêt à intervenir sur votre PC en 15 minutes. 
            Contactez-nous maintenant par WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <CTAWhatsApp size="large" />
            <div className="text-white/80">
              <span className="block text-2xl font-bold text-white">{WHATSAPP_DISPLAY}</span>
              <span className="text-sm">7j/7 — 8h-22h en semaine, 9h-20h week-end</span>
            </div>
          </div>
        </div>
      </section>

      <FAQ items={pilierFAQ} />
    </>
  );
}
