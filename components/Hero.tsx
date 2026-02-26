'use client';

import { Clock, Shield, CheckCircle } from 'lucide-react';
import CTAWhatsApp from './CTAWhatsApp';

interface HeroProps {
  titre?: string;
  sousTitre?: string;
  ville?: string;
}

export default function Hero({ 
  titre = "Votre PC en panne ?",
  sousTitre = "Technicien informatique en 15 minutes, où que vous soyez en France",
  ville 
}: HeroProps) {
  const displayTitre = ville ? `Dépannage PC à ${ville}` : titre;
  const displaySousTitre = ville 
    ? `Technicien informatique à distance pour ${ville} et environs — intervention en 15 minutes`
    : sousTitre;

  return (
    <section className="relative bg-gradient-to-br from-brand-dark via-brand-dark to-brand-blue overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Clock className="w-4 h-4 text-green-400" />
              <span className="text-white/90 text-sm font-medium">Intervention en 15 minutes</span>
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
              {displayTitre}
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              {displaySousTitre}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <CTAWhatsApp size="large" />
              <div className="text-white/80 text-sm">
                <span className="block font-semibold text-white">À partir de 79€</span>
                <span>Paiement après résultat</span>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-white/70 text-sm">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-green-400" />
                <span>Garantie satisfait</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Sans déplacement</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>7j/7 disponible</span>
              </div>
            </div>
          </div>

          {/* Right Content - Service Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: '🦠', title: 'Virus & Malwares', desc: 'Nettoyage complet' },
              { icon: '🐌', title: 'PC Lent', desc: 'Optimisation rapide' },
              { icon: '💿', title: 'Formatage', desc: 'Réinstallation propre' },
              { icon: '🪟', title: 'Windows', desc: 'Mise à jour & réparation' },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-colors"
              >
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="text-white font-semibold mb-1">{service.title}</h3>
                <p className="text-white/70 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80V40C240 0 480 0 720 20C960 40 1200 40 1440 20V80H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
