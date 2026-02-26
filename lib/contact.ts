/**
 * Contact AlloSupport.fr — à centraliser ici pour cohérence et SEO.
 *
 * ⚠️ SEO / allosupport.ma :
 * - Un numéro +212 (Maroc) sur un site .fr dédié à la France peut créer une
 *   confusion avec allosupport.ma et des signaux géographiques incohérents pour Google.
 * - Recommandation : utiliser un numéro français (+33) sur allosupport.fr pour
 *   éviter toute confusion de marque et renforcer le positionnement "France".
 * - Si vous gardez un centre d’appels au Maroc, vous pouvez le préciser en
 *   mentions légales tout en utilisant un numéro français (redirigé ou SVI).
 */

/** Numéro au format E.164 (sans espaces) pour wa.me et schema.org */
export const WHATSAPP_E164 = '+212770303940';

/** Numéro affiché dans l’UI (avec espaces) */
export const WHATSAPP_DISPLAY = '+212 7 70 30 39 40';

/** Lien WhatsApp (sans le +) */
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_E164.replace('+', '')}`;
