'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import { villesData } from '@/lib/villes';
import { WHATSAPP_LINK } from '@/lib/contact';

export default function Footer() {
  const mainVilles = villesData.slice(0, 12);

  return (
    <footer id="contact" className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-brand-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AS</span>
              </div>
              <span className="text-xl font-bold">AlloSupport</span>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Dépannage informatique à distance partout en France. 
              Intervention rapide, prix transparent, paiement après résultat.
            </p>
            <div className="space-y-3">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">WhatsApp</span>
              </a>
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <span className="text-sm">contact@allosupport.fr</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Service disponible en France</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Nos Services</h3>
            <ul className="space-y-2">
              {[
                'Suppression virus',
                'Optimisation PC lent',
                'Formatage Windows',
                'Récupération données',
                'Mise à jour système',
                'Dépannage réseau',
              ].map((service, index) => (
                <li key={index}>
                  <span className="text-gray-400 text-sm hover:text-white transition-colors cursor-default">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Villes */}
          <div>
            <h3 className="font-semibold mb-4">Nos Zones d&apos;Intervention</h3>
            <ul className="space-y-2">
              {mainVilles.map((ville) => (
                <li key={ville.slug}>
                  <Link 
                    href={`/depannage-informatique-${ville.slug}/`}
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    {ville.nom}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Horaires & Info */}
          <div>
            <h3 className="font-semibold mb-4">Horaires</h3>
            <div className="space-y-2 text-sm text-gray-400 mb-6">
              <p>Lundi - Vendredi : 8h - 22h</p>
              <p>Samedi - Dimanche : 9h - 20h</p>
              <p className="text-green-400">7j/7 disponible par WhatsApp</p>
            </div>

            <h3 className="font-semibold mb-4">Moyens de paiement</h3>
            <div className="flex flex-wrap gap-2">
              {['Carte bancaire', 'PayPal', 'Virement'].map((method, index) => (
                <span 
                  key={index}
                  className="bg-white/10 px-3 py-1 rounded-full text-xs text-gray-300"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} AlloSupport.fr — Tous droits réservés.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link href="/mentions-legales/" className="hover:text-white transition-colors">
                Mentions légales
              </Link>
              <Link href="/cgv/" className="hover:text-white transition-colors">
                CGV
              </Link>
              <span className="text-gray-600">|</span>
              <span>France</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
