import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Dépannage Informatique France | Technicien à Distance 79€ | AlloSupport',
  description: 'Dépannage PC à distance partout en France dès 79€. Virus, lenteur, formatage, Windows. Technicien en 15 min via WhatsApp. Paiement après résultat.',
  keywords: 'dépannage informatique, réparation PC, virus, Windows lent, technicien à distance, France',
  authors: [{ name: 'AlloSupport' }],
  creator: 'AlloSupport',
  publisher: 'AlloSupport',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://allosupport.fr',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://allosupport.fr',
    siteName: 'AlloSupport',
    title: 'Dépannage Informatique France | Technicien à Distance 79€',
    description: 'Dépannage PC à distance partout en France dès 79€. Virus, lenteur, formatage, Windows. Technicien en 15 min via WhatsApp.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dépannage Informatique France | AlloSupport',
    description: 'Dépannage PC à distance partout en France dès 79€. Technicien en 15 min.',
  },
  verification: {
    google: 'à-ajouter',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
