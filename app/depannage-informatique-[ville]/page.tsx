import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { 
  getVilleBySlug, 
  getAllVilleSlugs, 
  getVoisinesBySlug,
  villesData 
} from '@/lib/villes';
import { WHATSAPP_DISPLAY, WHATSAPP_E164 } from '@/lib/contact';
import VilleHero from '@/components/VilleHero';
import CTAWhatsApp from '@/components/CTAWhatsApp';
import FAQ from '@/components/FAQ';
import { 
  Bug, 
  Zap, 
  HardDrive, 
  Monitor, 
  CheckCircle,
  MapPin,
  ArrowRight
} from 'lucide-react';

// Generate static params for all 30 cities
export function generateStaticParams() {
  return villesData.map((ville) => ({
    ville: ville.slug,
  }));
}

// Generate metadata for each city page
export function generateMetadata({ params }: { params: { ville: string } }): Metadata {
  const ville = getVilleBySlug(params.ville);
  
  if (!ville) {
    return {
      title: 'Page non trouvée | AlloSupport',
    };
  }

  return {
    title: `Dépannage Informatique ${ville.nom} | Technicien à Distance | AlloSupport`,
    description: `Dépannage PC à distance à ${ville.nom} (${ville.deptNom}, ${ville.region}) dès 79€. Virus, lenteur, formatage, Windows. Technicien en 15 min via WhatsApp. Paiement après résultat.`,
    keywords: `dépannage informatique ${ville.nom}, réparation PC ${ville.nom}, technicien informatique ${ville.nom}, dépannage à distance ${ville.deptNom}`,
    alternates: {
      canonical: `https://allosupport.fr/depannage-informatique-${ville.slug}/`,
    },
    openGraph: {
      type: 'article',
      locale: 'fr_FR',
      url: `https://allosupport.fr/depannage-informatique-${ville.slug}/`,
      title: `Dépannage Informatique ${ville.nom} | Technicien à Distance`,
      description: `Dépannage PC à distance à ${ville.nom} dès 79€. Technicien en 15 min via WhatsApp.`,
    },
  };
}

// Generate unique intro text for each city
function generateIntro(ville: ReturnType<typeof getVilleBySlug>): string {
  if (!ville) return '';
  
  const intros: Record<string, string> = {
    paris: `Au cœur de l'Île-de-France, Paris concentre une densité exceptionnelle de particuliers et de TPE dépendants de leur outil informatique. Que vous soyez dans le 75, 92, 93 ou 94, notre service de dépannage à distance intervient en 15 minutes pour tous vos problèmes PC.`,
    lyon: `Capitale de la région Auvergne-Rhône-Alpes, Lyon et son agglomération regroupent des milliers de professionnels et de familles. Notre technicien à distance dessert tout le département du Rhône pour un dépannage rapide et efficace.`,
    marseille: `De la Canebière aux quartiers nord, Marseille est une métropole dynamique où l'informatique est essentielle. Notre service de dépannage PC à distance couvre tout le 13 et la région PACA avec une réactivité optimale.`,
    toulouse: `Ville rose et capitale de l'aéronautique, Toulouse compte de nombreuses TPE et startups tech. Notre support informatique à distance intervient sur tout le département de la Haute-Garonne en moins de 15 minutes.`,
    bordeaux: `Au cœur du vignoble bordelais et capitale de la Nouvelle-Aquitaine, Bordeaux est un pôle économique majeur. Notre technicien à distance dessert tout le 33 pour vos urgences informatiques.`,
    nantes: `Capitale de la Loire-Atlantique et des Pays de la Loire, Nantes est une ville innovante où le digital est roi. Notre service de dépannage informatique couvre tout le 44 depuis nos bureaux virtuels.`,
    strasbourg: `Capitale européenne et de l'Alsace, Strasbourg est un carrefour technologique du Grand Est. Notre support informatique à distance intervient sur tout le Bas-Rhin (67) pour particuliers et entreprises.`,
    montpellier: `Ville étudiante et technopole dynamique, Montpellier est au cœur de l'Hérault. Notre technicien à distance dessert tout le 34 avec la même réactivité, du centre-ville aux communes environnantes.`,
    lille: `Capitale des Flandres et du Nord, Lille est un pôle économique majeur des Hauts-de-France. Notre service de dépannage PC couvre tout le 59 avec intervention garantie en 15 minutes.`,
    rennes: `Capitale de la Bretagne et de l'Ille-et-Vilaine, Rennes est une ville jeune et connectée. Notre support informatique à distance intervient sur tout le 35 pour tous vos problèmes PC.`,
    reims: `Cité des sacres et capitale de la Champagne, Reims est un centre économique du Grand Est. Notre technicien à distance dessert tout le département de la Marne (51) pour vos urgences informatiques.`,
    'le-havre': `Premier port français et ville de la Seine-Maritime, Le Havre est un pôle logistique majeur de Normandie. Notre service de dépannage informatique couvre tout le 76 à distance.`,
    'saint-etienne': `Capitale du design et de la Loire, Saint-Étienne est une ville en pleine transformation digitale. Notre support informatique à distance intervient sur tout le 42 en moins de 15 minutes.`,
    toulon: `Port militaire et ville du Var, Toulon est un centre économique important de PACA. Notre technicien à distance dessert tout le 83 pour vos problèmes de PC et de logiciels.`,
    grenoble: `Capitale des Alpes et de l'Isère, Grenoble est un pôle scientifique et technologique majeur. Notre service de dépannage informatique couvre tout le 38 avec expertise technique pointue.`,
    dijon: `Capitale de la Bourgogne et de la Côte-d'Or, Dijon est une ville historique tournée vers le digital. Notre support à distance intervient sur tout le 21 pour particuliers et TPE.`,
    angers: `Capitale de l'Anjou et du Maine-et-Loire, Angers est une ville dynamique des Pays de la Loire. Notre technicien à distance dessert tout le 49 pour un dépannage rapide et efficace.`,
    nimes: `Ville romaine et capitale du Gard, Nîmes est un centre économique majeur d'Occitanie. Notre service de dépannage informatique couvre tout le 30 avec la même réactivité.`,
    villeurbanne: `Ville voisine de Lyon dans le Rhône, Villeurbanne est une commune densément peuplée d'Auvergne-Rhône-Alpes. Notre support informatique à distance intervient sur tout le 69 métropole.`,
    'le-mans': `Capitale de la Sarthe et célèbre pour ses 24 Heures, Le Mans est un pôle économique des Pays de la Loire. Notre technicien à distance dessert tout le 72 pour vos urgences PC.`,
    'aix-en-provence': `Ville d'eau et ville d'art dans les Bouches-du-Rhône, Aix-en-Provence est un centre universitaire et culturel de PACA. Notre service de dépannage couvre tout le 13 à distance.`,
    'clermont-ferrand': `Capitale de l'Auvergne et du Puy-de-Dôme, Clermont-Ferrand est un pôle technologique majeur. Notre support informatique à distance intervient sur tout le 63 en 15 minutes.`,
    brest: `Port maritime et capitale du Finistère, Brest est une ville technologique de Bretagne. Notre technicien à distance dessert tout le 29 pour tous vos problèmes informatiques.`,
    tours: `Capitale de la Touraine et de l'Indre-et-Loire, Tours est au cœur du Centre-Val de Loire. Notre service de dépannage informatique couvre tout le 37 avec expertise.`,
    amiens: `Capitale de la Somme et de la Picardie, Amiens est un centre historique des Hauts-de-France. Notre support à distance intervient sur tout le 80 pour particuliers et TPE.`,
    limoges: `Capitale de la Haute-Vienne et de la porcelaine, Limoges est un pôle économique de Nouvelle-Aquitaine. Notre technicien à distance dessert tout le 87 rapidement.`,
    metz: `Capitale de la Moselle et du pays messin, Metz est une ville d'art et d'histoire du Grand Est. Notre service de dépannage informatique couvre tout le 57 à distance.`,
    perpignan: `Capitale du Roussillon et des Pyrénées-Orientales, Perpignan est la porte de l'Espagne en Occitanie. Notre support informatique à distance intervient sur tout le 66.`,
    besancon: `Capitale de la Franche-Comté et du Doubs, Besançon est une ville historique et technologique. Notre technicien à distance dessert tout le 25 pour vos urgences PC.`,
    orleans: `Capitale du Loiret et ville historique du Centre-Val de Loire, Orléans est un pôle économique dynamique. Notre service de dépannage informatique couvre tout le 45.`,
  };

  return intros[ville.slug] || ville.intro;
}

// Generate unique H2 variations
function generateH2(ville: ReturnType<typeof getVilleBySlug>): string {
  if (!ville) return 'Nos services';
  
  const h2Variations = [
    `Intervention à distance depuis ${ville.region}`,
    `Support informatique ${ville.deptNom}`,
    `Dépannage PC ${ville.nom} et alentours`,
    `Services informatiques en ${ville.region}`,
    `Assistance technique ${ville.deptNom} (${ville.dept})`,
  ];
  
  // Use slug length to deterministically select variation
  const index = ville.slug.length % h2Variations.length;
  return h2Variations[index];
}

export default function VillePage({ params }: { params: { ville: string } }) {
  const ville = getVilleBySlug(params.ville);
  
  if (!ville) {
    notFound();
  }

  const voisines = getVoisinesBySlug(params.ville);
  const introText = generateIntro(ville);
  const servicesTitle = generateH2(ville);

  // Generate unique FAQ for this city
  const villeFAQ = [
    {
      question: `Le dépannage à distance fonctionne-t-il bien à ${ville.nom} ?`,
      answer: `Absolument. Notre service de dépannage à distance fonctionne parfaitement à ${ville.nom} et dans tout le département ${ville.deptNom}. Vous avez juste besoin d'une connexion Internet stable. Nous intervenons aussi rapidement que si nous étions physiquement présents, sans les contraintes de déplacement.`,
    },
    {
      question: `Quel est le délai d'intervention pour ${ville.nom} ?`,
      answer: `Notre technicien intervient en moyenne en 15 minutes après votre contact WhatsApp, que vous soyez à ${ville.nom} ou ailleurs en France. Notre service à distance nous permet d'être réactifs sans dépendre des embouteillages ou des distances.`,
    },
    {
      question: `Proposez-vous des interventions sur place à ${ville.nom} ?`,
      answer: `Non, nous sommes spécialisés exclusivement dans le dépannage à distance. Cette approche nous permet d'intervenir plus rapidement et à des tarifs plus compétitifs. La grande majorité des problèmes informatiques (virus, lenteur, Windows, etc.) peuvent être résolus à distance avec la même efficacité.`,
    },
  ];

  // Schema LocalBusiness for this city
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `AlloSupport ${ville.nom}`,
    description: `Dépannage informatique à distance à ${ville.nom} et dans le ${ville.deptNom}. Virus, lenteur, formatage, Windows.`,
    url: `https://allosupport.fr/depannage-informatique-${ville.slug}/`,
    telephone: WHATSAPP_E164,
    email: 'contact@allosupport.fr',
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      addressLocality: ville.nom,
      addressRegion: ville.region,
      postalCode: ville.codePostal,
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 46.227638,
      longitude: 2.213749,
    },
    areaServed: {
      '@type': 'City',
      name: ville.nom,
      containedInPlace: {
        '@type': 'State',
        name: ville.region,
      },
    },
    serviceType: 'Dépannage informatique à distance',
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
  };

  // Schema FAQPage
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: villeFAQ.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  const services = [
    {
      icon: Bug,
      title: 'Virus & Malwares',
      description: `Nettoyage complet de votre PC infecté à ${ville.nom}. Suppression de virus, trojans, ransomwares et logiciels espions.`,
    },
    {
      icon: Zap,
      title: 'PC Lent',
      description: `Optimisation de votre ordinateur lent à ${ville.nom}. Redonnez vie à votre machine avec notre expertise.`,
    },
    {
      icon: HardDrive,
      title: 'Formatage Windows',
      description: `Réinstallation propre de Windows avec sauvegarde de vos données personnelles à ${ville.nom}.`,
    },
    {
      icon: Monitor,
      title: 'Problèmes Windows',
      description: `Résolution des erreurs Windows Update, écran bleu et autres problèmes système sur ${ville.nom}.`,
    },
  ];

  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <VilleHero ville={ville} />

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-gray-500 mb-4">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{ville.nom} • {ville.deptNom} ({ville.dept}) • {ville.region}</span>
          </div>
          <p className="text-xl text-gray-700 leading-relaxed">
            {introText}
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            Notre technicien spécialisé intervient à distance sur tous les problèmes logiciels : 
            suppression de virus, optimisation de PC lent, formatage et réinstallation Windows, 
            récupération de données, et dépannage réseau. Grâce à notre service à distance, 
            nous couvrons l&apos;ensemble de {ville.nom} et ses environs avec la même réactivité, 
            sans les contraintes de déplacement.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mb-4">
              {servicesTitle}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dépannage informatique complet à {ville.nom} pour particuliers et professionnels.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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

      {/* Pourquoi AlloSupport à [Ville] */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mb-6">
                Pourquoi choisir AlloSupport à {ville.nom} ?
              </h2>
              <div className="space-y-6">
                <div className="flex space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Intervention en 15 minutes</h3>
                    <p className="text-gray-600">Notre technicien disponible 7j/7 intervient rapidement sur {ville.nom} et le {ville.deptNom}.</p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Prix fixe et transparent</h3>
                    <p className="text-gray-600">À partir de 79€, pas de surprise. Devis gratuit avant intervention à {ville.nom}.</p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Garantie satisfait ou remboursé</h3>
                    <p className="text-gray-600">Paiement uniquement après résultat. Si nous ne résolvons pas votre problème, c&apos;est gratuit.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-brand-dark rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Nos tarifs à {ville.nom}</h3>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <span className="text-gray-300">Diagnostic</span>
                  <span className="font-bold text-xl">39€</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <span className="text-gray-300">Réparation standard</span>
                  <span className="font-bold text-xl text-green-400">79€</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <span className="text-gray-300">Forfait Pro TPE</span>
                  <span className="font-bold text-xl">149€</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-6">
                Tous nos prix sont TTC. Paiement sécurisé après résultat.
              </p>
              <CTAWhatsApp fullWidth variant="light" />
            </div>
          </div>
        </div>
      </section>

      {/* Villes voisines */}
      {voisines.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-brand-dark mb-8 text-center">
              Dépannage informatique près de {ville.nom}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {voisines.map((voisine) => (
                <Link
                  key={voisine.slug}
                  href={`/depannage-informatique-${voisine.slug}/`}
                  className="bg-white rounded-lg p-6 text-center hover:shadow-md hover:bg-brand-blue hover:text-white transition-all group flex items-center justify-between"
                >
                  <div className="text-left">
                    <span className="font-medium group-hover:text-white text-gray-700 block">
                      {voisine.nom}
                    </span>
                    <span className="text-xs text-gray-400 group-hover:text-white/70">
                      {voisine.deptNom}
                    </span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-brand-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Besoin d&apos;un dépannage PC à {ville.nom} ?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Notre technicien intervient dans les 15 minutes. Contactez-nous par WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <CTAWhatsApp size="large" />
            <div className="text-white/80">
              <span className="block text-2xl font-bold text-white">{WHATSAPP_DISPLAY}</span>
              <span className="text-sm">7j/7 sur WhatsApp</span>
            </div>
          </div>
        </div>
      </section>

      <FAQ items={villeFAQ} ville={ville.nom} />
    </>
  );
}
