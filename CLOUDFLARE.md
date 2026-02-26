# Déploiement sur Cloudflare Workers

Ce projet Next.js est configuré en **export statique** (`output: 'export'`) et est déployé en **Cloudflare Worker** (Workers Sites) : le Worker sert le contenu du dossier `out/` via KV.

## Prérequis

- Node.js 18+
- Un compte Cloudflare

## Build local

```bash
npm install
npm run build
```

Le dossier de sortie est **`out/`** (Next.js export statique).

## Déploiement Worker

Une seule commande (build + déploiement) :

```bash
npm run deploy
```

Elle exécute :
1. **`npm run build`** → génère `out/` (HTML, JS, CSS, sitemap, etc.)
2. **`wrangler deploy`** → envoie le Worker + le contenu de `out/` (Workers Sites, bucket `./out`)

## Configuration dashboard Cloudflare

Si vous déployez via le dashboard (ex. liaison Git) :

- **Commande de déploiement** : `npm run deploy`
- Ne pas utiliser `npx wrangler deploy` seul si le build n’a pas été exécuté avant (le dossier `out/` doit exister).

## Fichiers concernés

- **`worker.js`** : Worker qui sert les assets avec `@cloudflare/kv-asset-handler` (getAssetFromKV).
- **`wrangler.toml`** : `name`, `main = "worker.js"`, `[site] bucket = "./out"`.

## Compatibilité

- Aucune API Node (fs, path, etc.) dans le code applicatif : OK pour Workers.
- Export statique : toutes les pages sont pré-générées au build.
- Sitemap : présent dans `out/sitemap.xml`.
