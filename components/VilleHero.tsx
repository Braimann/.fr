'use client';

import { MapPin, Clock, Shield } from 'lucide-react';
import CTAWhatsApp from './CTAWhatsApp';
import { VilleData } from '@/lib/villes';

interface VilleHeroProps {
  ville: VilleData;
}

export default function VilleHero({ ville }: VilleHeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-brand-dark via-brand-dark to-brand-blue overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center max-w-4xl mx-auto">
          {/* Location Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <MapPin className="w-4 h-4 text-green-400" />
            <span className="text-white/90 text-sm font-medium">
              {ville.nom} • {ville.deptNom} ({ville.dept}) • {ville.region}
            </span>
          </div>

          <h1 className="text-3xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Dépannage Informatique à {ville.nom}
            <span className="block text-2xl lg:text-3xl text-gray-300 mt-2 font-normal">
              Intervention à Distance — Technicien en 15 min
            </span>
          </h1>

          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            {ville.intro}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
            <CTAWhatsApp size="large" />
          </div>

          {/* Info Cards */}
          <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <Clock className="w-6 h-6 text-green-400 mx-auto mb-2" />
              <div className="text-white font-semibold">15 minutes</div>
              <div className="text-white/70 text-sm">Délai d&apos;intervention</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <Shield className="w-6 h-6 text-green-400 mx-auto mb-2" />
              <div className="text-white font-semibold">79€</div>
              <div className="text-white/70 text-sm">À partir de</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <span className="text-2xl mb-2 block">💳</span>
              <div className="text-white font-semibold">Après résultat</div>
              <div className="text-white/70 text-sm">Paiement sécurisé</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60V30C240 0 480 0 720 15C960 30 1200 30 1440 15V60H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
