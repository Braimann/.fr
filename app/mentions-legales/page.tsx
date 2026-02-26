import type { Metadata } from 'next';
import { WHATSAPP_DISPLAY } from '@/lib/contact';

export const metadata: Metadata = {
  title: 'Mentions Légales | AlloSupport',
  description: 'Mentions légales du site AlloSupport.fr - Service de dépannage informatique à distance en France.',
  alternates: {
    canonical: 'https://allosupport.fr/mentions-legales/',
  },
};

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm p-8 lg:p-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-brand-dark mb-8">
            Mentions Légales
          </h1>

          <div className="space-y-8 text-gray-600">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Éditeur du site</h2>
              <p className="leading-relaxed">
                Le site AlloSupport.fr est édité par AlloSupport, service de dépannage informatique à distance.
              </p>
              <ul className="mt-4 space-y-2">
                <li><strong>Contact :</strong> contact@allosupport.fr</li>
                <li><strong>Téléphone :</strong> {WHATSAPP_DISPLAY} (WhatsApp)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Hébergement</h2>
              <p className="leading-relaxed">
                Le site est hébergé par Vercel Inc.<br />
                340 S Lemon Ave #4133<br />
                Walnut, CA 91789<br />
                États-Unis
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Propriété intellectuelle</h2>
              <p className="leading-relaxed">
                L&apos;ensemble du contenu du site AlloSupport.fr (textes, images, logos, etc.) est protégé par 
                le droit d&apos;auteur. Toute reproduction, même partielle, est interdite sans autorisation préalable.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Données personnelles</h2>
              <p className="leading-relaxed">
                Les données personnelles collectées via le formulaire de contact ou WhatsApp sont utilisées 
                uniquement pour répondre à vos demandes de dépannage informatique. Conformément au RGPD, 
                vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Cookies</h2>
              <p className="leading-relaxed">
                Le site AlloSupport.fr utilise des cookies techniques nécessaires à son fonctionnement. 
                Aucun cookie de traçage ou publicitaire n&apos;est utilisé.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Responsabilité</h2>
              <p className="leading-relaxed">
                AlloSupport met tout en œuvre pour assurer l&apos;exactitude des informations publiées sur ce site. 
                Cependant, nous ne pouvons garantir l&apos;absence d&apos;erreurs. Les interventions à distance sont 
                réalisées selon les meilleures pratiques du métier, avec sauvegarde préalable des données 
                lorsque cela est possible.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Droit applicable</h2>
              <p className="leading-relaxed">
                Les présentes mentions légales sont soumises au droit français. En cas de litige, 
                les tribunaux français seront compétents.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
