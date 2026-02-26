# Commande de déploiement Cloudflare (Workers)

Ce projet est déployé en **Cloudflare Worker** (Workers Sites), pas en Pages.

## Commande à utiliser

Dans le dashboard Cloudflare (Build / Deploy), configurez :

```bash
npm run deploy
```

Cette commande :
1. Lance **`npm run build`** (Next.js) → crée le dossier **`out/`**
2. Lance **`wrangler deploy`** → déploie le Worker et uploade le contenu de **`out/`** dans KV

**À utiliser** : `npm run deploy` (build + Worker)  
**À ne pas utiliser** : `npx wrangler deploy` seul si le build n’a pas été fait avant (sinon le dossier `out/` est absent et le Worker n’a rien à servir).

## Résumé

- **Type** : Worker (Workers Sites)
- **Build** : `next build` → sortie dans `out/`
- **Deploy** : `wrangler deploy` (après build) → Worker + assets dans KV
