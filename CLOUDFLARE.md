# Déploiement sur Cloudflare Pages

Ce projet Next.js est configuré en **export statique** (`output: 'export'`) et est compatible Cloudflare Pages (et Workers pour hébergement statique).

## Prérequis

- Node.js 18+
- Un compte Cloudflare

## Build local

```bash
npm install
npm run build
```

Le dossier de sortie est **`out/`** (convention Next.js pour l’export statique).

## Option 1 : Cloudflare Pages (recommandé)

### Via le dashboard

1. [Workers & Pages](https://dash.cloudflare.com/?to=/:account/workers-and-pages) → **Create** → **Pages** → **Connect to Git** (ou Direct Upload).
2. Si **Git** :
   - Preset : **Next.js (Static HTML Export)**
   - Build command : `npm run build`
   - Build output directory : `out`
3. Si **Direct Upload** : uploadez le contenu du dossier `out/` après un `npm run build` local.

### Via Wrangler (CLI)

Après avoir créé le projet Pages dans le dashboard (une fois) :

```bash
npm run build
npx wrangler pages deploy out --project-name=allosupport
```

Variables d’environnement pour la CLI : `CLOUDFLARE_ACCOUNT_ID` + token API avec permission **Pages Edit**.

## Option 2 : Script npm

```bash
npm run pages:deploy
```

Effectue `npm run build` puis `wrangler pages deploy out --project-name=allosupport`. À utiliser après configuration de Wrangler (login + projet créé).

## Compatibilité

- **Aucune API Node** (fs, path, etc.) dans le code applicatif : OK pour l’environnement Cloudflare.
- **Export statique** : toutes les pages sont pré-générées au build (y compris les villes via `generateStaticParams()`).
- **Sitemap** : généré au build dans `out/sitemap.xml`.
