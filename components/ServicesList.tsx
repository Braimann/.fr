'use client';

import { 
  Bug, 
  Zap, 
  HardDrive, 
  Monitor, 
  Database, 
  Wifi,
  ArrowRight
} from 'lucide-react';

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  problems: string[];
}

const services: Service[] = [
  {
    icon: Bug,
    title: 'Virus & Malwares',
    description: 'Nettoyage complet de votre système infecté. Suppression de virus, trojans, ransomwares et logiciels espions.',
    problems: ['PC ralenti', 'Pop-ups intempestifs', 'Redirections navigateur', 'Données compromises'],
  },
  {
    icon: Zap,
    title: 'PC Lent',
    description: 'Optimisation complète pour retrouver un ordinateur rapide et réactif comme au premier jour.',
    problems: ['Démarrage lent', 'Applications figées', 'Freezes réguliers', 'Mémoire saturée'],
  },
  {
    icon: HardDrive,
    title: 'Formatage & Réinstallation',
    description: 'Réinstallation propre de Windows avec sauvegarde de vos données personnelles.',
    problems: ['Système corrompu', 'Erreurs BSOD', 'Plantages fréquents', 'Virus tenaces'],
  },
  {
    icon: Monitor,
    title: 'Windows & Mises à jour',
    description: 'Résolution des problèmes de mise à jour Windows et optimisation du système.',
    problems: ['Mises à jour bloquées', 'Erreurs Windows Update', 'Écran noir', 'Boucle de redémarrage'],
  },
  {
    icon: Database,
    title: 'Récupération de Données',
    description: 'Récupération de fichiers supprimés ou perdus suite à un crash système.',
    problems: ['Fichiers supprimés', 'Disque non reconnu', 'Photos perdues', 'Documents effacés'],
  },
  {
    icon: Wifi,
    title: 'Problèmes Réseau',
    description: 'Configuration et dépannage de votre connexion Internet et réseau local.',
    problems: ['Pas de connexion', 'WiFi instable', 'Partage de fichiers', 'Imprimante réseau'],
  },
];

export default function ServicesList() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mb-4">
            Nos Services de Dépannage
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Une solution complète pour tous vos problèmes informatiques. Intervention rapide et garantie.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-50 rounded-2xl p-6 hover:bg-brand-dark hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors">
                <service.icon className="w-6 h-6 text-brand-blue group-hover:text-white transition-colors" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-white transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-600 text-sm mb-4 group-hover:text-gray-300 transition-colors">
                {service.description}
              </p>

              <div className="space-y-2 mb-4">
                {service.problems.map((problem, pIndex) => (
                  <div key={pIndex} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-brand-blue rounded-full group-hover:bg-green-400 transition-colors" />
                    <span className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
                      {problem}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex items-center text-brand-blue group-hover:text-green-400 text-sm font-medium transition-colors">
                <span>En savoir plus</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
