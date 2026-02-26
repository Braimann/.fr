# Commande de déploiement Cloudflare (Workers)

Ce projet est déployé en **Cloudflare Worker** (Workers Sites), pas en Pages.

## Commandes dans le dashboard Cloudflare

Si Cloudflare sépare **Build** et **Deploy** :

| Étape   | Commande à configurer   |
|--------|--------------------------|
| **Build**  | `npm run build`          |
| **Deploy** | `npx wrangler deploy`    |

**Important** : la commande de déploiement doit être **`npx wrangler deploy`**, et **pas** :
- ~~`npx wrangler versions upload`~~ (incompatible avec Workers Sites)
- ~~`wrangler pages deploy`~~ (pour Pages, pas pour ce Worker)

Workers Sites exige **`wrangler deploy`** pour envoyer le Worker et le contenu de **`out/`** (généré par le build).

## Tout en une commande (optionnel)

Si vous avez un seul champ « commande » : `npm run deploy` (fait build puis `wrangler deploy`).

## Résumé

- **Type** : Worker (Workers Sites)
- **Build** : `next build` → sortie dans `out/`
- **Deploy** : `wrangler deploy` (après build) → Worker + assets dans KV
