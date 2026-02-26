/**
 * Cloudflare Worker — sert le site statique Next.js (dossier out/) via Workers Sites.
 * Commande : npm run build && npx wrangler deploy
 */
import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

// Manifest injecté par Wrangler au déploiement (dossier [site] bucket)
import manifestJSON from '__STATIC_CONTENT_MANIFEST';
const assetManifest = JSON.parse(manifestJSON);

export default {
  async fetch(request, env, ctx) {
    try {
      return await getAssetFromKV(
        { request, waitUntil: ctx.waitUntil.bind(ctx) },
        {
          ASSET_NAMESPACE: env.__STATIC_CONTENT,
          ASSET_MANIFEST: assetManifest,
        }
      );
    } catch (e) {
      const pathname = new URL(request.url).pathname;
      return new Response(`"${pathname}" not found`, {
        status: 404,
        statusText: 'not found',
      });
    }
  },
};
