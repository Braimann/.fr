# Contact et SEO — allosupport.fr vs allosupport.ma

## Risque identifié

Le site **allosupport.fr** cible la France (contenu, villes, schema.org `addressCountry: FR`, `areaServed: France`) mais affichait partout un **numéro +212** (indicatif **Maroc**). Cela peut :

1. **Créer une confusion avec allosupport.ma**  
   Même marque + même numéro sur .fr et .ma → Google peut considérer des signaux dupliqués ou une ambiguïté de positionnement.

2. **Donner des signaux géographiques incohérents**  
   Pour Google, une entité « France » avec un téléphone marocain peut nuire au référencement local et à la confiance.

3. **Exposer à des filtres ou à une pénalité**  
   Contenu et ciblage France vs contact Maroc peut être vu comme du cloaking géographique ou du contenu peu cohérent.

## Ce qui a été fait

- **Centralisation du contact** dans `lib/contact.ts` :  
  `WHATSAPP_E164`, `WHATSAPP_DISPLAY`, `WHATSAPP_LINK`.  
  Tout l’affichage et les schema utilisent ces constantes.

- **Recommandation** : pour **allosupport.fr**, utiliser un **numéro français (+33)** dans `lib/contact.ts` (numéro réel ou SVI/redirigé vers votre centre au Maroc). Ainsi :
  - le site .fr envoie un signal clair « France » ;
  - la confusion avec allosupport.ma est réduite ;
  - le schema.org reste cohérent avec le pays ciblé.

## Changer le numéro

Éditer **`lib/contact.ts`** uniquement :

- `WHATSAPP_E164` : format E.164, ex. `+33612345678`
- `WHATSAPP_DISPLAY` : format affiché, ex. `+33 6 12 34 56 78`
- `WHATSAPP_LINK` est dérivé de `WHATSAPP_E164`, pas besoin de le modifier à part si vous changez la constante.

Après modification, refaire un build : toutes les pages et le schema utiliseront le nouveau numéro.
