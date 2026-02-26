# Analyse de risques — AlloSupport.fr

*Dernière mise à jour : après centralisation du contact et numéro +212 7 70 30 39 40*

---

## 1. Risques liés au Maroc et à allosupport.ma

### 1.1 Éléments « Maroc » dans le projet

| Élément | Présent | Détail |
|--------|--------|--------|
| Numéro de téléphone | **Oui** | +212 7 70 30 39 40 (indicatif **+212 = Maroc**) |
| Domaine / lien .ma | **Non** | Aucune mention de allosupport.ma dans le contenu public |
| Villes marocaines | **Non** | Uniquement villes françaises (Paris, Lyon, Marseille, etc.) |
| Texte « Maroc » / « Morocco » | **Non** | Aucune occurrence dans les pages (hors commentaires et doc) |
| Adresse / siège | **Non** | Schema : `addressCountry: 'FR'`, pas d’adresse physique marocaine |

**Conclusion** : le seul signal « Maroc » visible pour l’utilisateur et pour Google est le **numéro +212**.

### 1.2 Risque de confusion avec allosupport.ma

- **Même marque** « AlloSupport » sur un site .fr et potentiellement sur un .ma.
- **Même indicatif** (+212) sur le .fr → un moteur ou un utilisateur peut associer le .fr au Maroc ou à une entité marocaine.
- **Risque** : Google peut considérer les deux sites comme très proches (même marque, même type de contact), avec risque de :
  - regroupement des signaux (autorité partagée),
  - confusion géographique (pour qui est le .fr ? France ou Maroc ?),
  - dilution du positionnement « France » du .fr.

**Niveau de risque** : **moyen à élevé** si allosupport.ma existe et cible le Maroc. Faible si le .ma n’existe pas ou n’est pas référencé.

### 1.3 Incohérence des signaux géographiques (SEO)

- **Contenu** : 100 % France (villes, « partout en France », tarifs en €, langue fr).
- **Schema.org** : `addressCountry: 'FR'`, `areaServed: France`, coordonnées France (lat/long).
- **Contact** : téléphone **+212** (Maroc).

Pour Google, une entité présentée comme française avec un numéro marocain peut :
- nuire à la **confiance** et à la **clarté** du ciblage local,
- compliquer le **référencement local** (queries « dépannage informatique France »),
- être interprété comme du **cloaking géographique** ou du contenu peu cohérent.

**Niveau de risque** : **moyen** (dégradation possible du positionnement « France », plus qu’une pénalité manuelle en général).

---

## 2. Risques SEO / Google

### 2.1 Duplication / thin content

- **Pages par ville** : générées par `generateStaticParams()`, contenu dédié par ville (intro, FAQ, liens) → **risque faible** si les textes restent uniques.
- **Pas de copie** avec allosupport.ma dans le code (aucun lien ni texte .ma).
- **Recommandation** : garder des intros/descriptions vraiment différentes par page ville pour limiter la similarité.

### 2.2 Pénalité ou filtre

- Aucun contenu caché, pas de redirection trompeuse, pas de spam visible.
- **Risque principal** : **confusion géographique** (France vs Maroc) et **ambiguïté de marque** (fr vs .ma), plutôt qu’une pénalité explicite. Effet possible : classement moins bon sur des requêtes géo « France » ou moins de mise en avant en « local ».

### 2.3 Technique

- **Contact centralisé** dans `lib/contact.ts` : un seul numéro partout (pages, schema, Header, Footer, CTA) → **cohérent**.
- **Canonicals** : en place (allosupport.fr).
- **Sitemap** : généré (villes + pages statiques).
- **Pas de conflit** : plus aucun lien en dur vers l’ancien numéro dans les composants (Header, Footer, CTA, pages).

---

## 3. Synthèse des risques

| Risque | Niveau | Commentaire |
|--------|--------|-------------|
| Confusion avec allosupport.ma | Moyen à élevé | Réduit si .ma n’existe pas ou n’est pas fort. |
| Signaux géo incohérents (FR vs +212) | Moyen | Peut freiner le SEO « France » et la confiance. |
| Pénalité manuelle Google | Faible | Aucun indice de pratique sanctionnable. |
| Duplication / thin content | Faible | Contenu par ville structuré et dédié. |
| Incohérence technique (numéros) | **Résolu** | Tout passe par `lib/contact.ts`. |

---

## 4. Recommandations

1. **Pour limiter confusion et renforcer le .fr**  
   Utiliser un **numéro français (+33)** sur allosupport.fr (réel ou SVI / redirigé vers votre centre), et garder le +212 éventuellement pour allosupport.ma uniquement. Modifier uniquement `lib/contact.ts`.

2. **Si vous gardez le +212 sur le .fr**  
   - Éviter que le même numéro soit le seul contact sur .fr et .ma (par ex. numéro dédié par site).
   - En mentions légales / « À propos », préciser que le service pour la France est assuré par une équipe joignable via ce numéro (sans mentir sur la localisation).

3. **Surveillance**  
   - Google Search Console : vérifier les requêtes et le positionnement géo (France).
   - Vérifier si allosupport.ma est indexé et avec quelles requêtes, pour mesurer le chevauchement de marque.

4. **Contenu**  
   - Conserver des textes uniques par page ville pour limiter la similarité interne.

---

## 5. État actuel du projet (contact)

- **Numéro affiché** : +212 7 70 30 39 40  
- **Numéro E.164** : +212770303940 (wa.me + schema)  
- **Centralisation** : `lib/contact.ts` → utilisé partout (Header, Footer, CTAWhatsApp, toutes les pages, schema).  
- **Ancien numéro** : plus aucune occurrence en dur dans le code applicatif.
