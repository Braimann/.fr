import type { Metadata } from 'next';
import { WHATSAPP_DISPLAY } from '@/lib/contact';

export const metadata: Metadata = {
  title: 'Conditions Générales de Vente | AlloSupport',
  description: 'Conditions générales de vente d\'AlloSupport.fr - Service de dépannage informatique à distance en France.',
  alternates: {
    canonical: 'https://allosupport.fr/cgv/',
  },
};

export default function CGV() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm p-8 lg:p-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-brand-dark mb-8">
            Conditions Générales de Vente
          </h1>

          <div className="space-y-8 text-gray-600">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Objet</h2>
              <p className="leading-relaxed">
                Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre 
                AlloSupport et ses clients pour la fourniture de services de dépannage informatique à distance. 
                Toute commande implique l&apos;acceptation sans réserve des présentes CGV.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Services proposés</h2>
              <p className="leading-relaxed">
                AlloSupport propose les services suivants :
              </p>
              <ul className="mt-4 space-y-2 list-disc list-inside">
                <li>Diagnostic informatique à distance (39€)</li>
                <li>Réparation et optimisation PC (79€)</li>
                <li>Forfait Pro pour TPE (149€)</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Ces services sont réalisés à distance via des logiciels de contrôle à distance (TeamViewer, AnyDesk).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Tarifs et paiement</h2>
              <p className="leading-relaxed">
                Les tarifs sont indiqués en euros TTC. Le paiement est exigible uniquement après résolution 
                du problème et validation par le client. Les moyens de paiement acceptés sont :
              </p>
              <ul className="mt-4 space-y-2 list-disc list-inside">
                <li>Carte bancaire (via lien sécurisé)</li>
                <li>PayPal</li>
                <li>Virement bancaire</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Déroulement de l&apos;intervention</h2>
              <p className="leading-relaxed">
                Le client contacte AlloSupport via WhatsApp pour décrire son problème. Après évaluation, 
                un devis est établi. Le client installe le logiciel de contrôle à distance sous la guidance 
                du technicien. L&apos;intervention est réalisée en direct, le client pouvant observer toutes les actions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Garantie et responsabilité</h2>
              <p className="leading-relaxed">
                AlloSupport s&apos;engage à mettre en œuvre tous les moyens nécessaires pour résoudre les problèmes 
                signalés. Une garantie de 30 jours (60 jours pour le forfait Pro) est accordée sur les interventions. 
                Cette garantie couvre uniquement le problème initialement traité.
              </p>
              <p className="leading-relaxed mt-4">
                AlloSupport ne peut être tenu responsable des pertes de données si le client n&apos;a pas procédé 
                à une sauvegarde préalable. Une sauvegarde est systématiquement proposée avant toute intervention 
                majeure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Droit de rétractation</h2>
              <p className="leading-relaxed">
                Conformément à l&apos;article L221-28 du Code de la consommation, le droit de rétractation ne peut 
                être exercé pour les services pleinement exécutés avant la fin du délai de rétractation et dont 
                l&apos;exécution a commencé après accord préalable exprès du consommateur. En demandant une intervention, 
                le client accepte expressément que le service commence immédiatement.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Confidentialité et sécurité</h2>
              <p className="leading-relaxed">
                Les interventions sont réalisées via des connexions chiffrées sécurisées. AlloSupport s&apos;engage 
                à ne pas accéder aux données personnelles du client sans son autorisation expresse et à ne conserver 
                aucune information après l&apos;intervention.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Litiges</h2>
              <p className="leading-relaxed">
                En cas de litige, une solution amiable sera recherchée en priorité. À défaut d&apos;accord, 
                les tribunaux français seront compétents.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">9. Contact</h2>
              <p className="leading-relaxed">
                Pour toute question relative aux présentes CGV, vous pouvez nous contacter :
              </p>
              <ul className="mt-4 space-y-2">
                <li><strong>Email :</strong> contact@allosupport.fr</li>
                <li><strong>WhatsApp :</strong> {WHATSAPP_DISPLAY}</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
