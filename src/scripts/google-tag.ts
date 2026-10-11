// Google-Ads-Tag (gtag.js) und Conversion-Events. Wird ausschließlich nach Einwilligung
// in die Kategorie „marketing" geladen (siehe consent.ts) – vorher geht keine Anfrage an Google.

export type ConversionZiel = 'doctolib' | 'anruf';

export type ConversionLabels = Partial<Record<ConversionZiel, string>>;

type GtagArgumente = [string, ...unknown[]];

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: GtagArgumente) => void;
  }
}

// Welche Klicks als Conversion zählen: Doctolib-Buchung (Hamburg) und Anruf (beide Standorte).
export const erkenneConversion = (href: string): ConversionZiel | null => {
  if (href.startsWith('tel:')) return 'anruf';
  try {
    const host = new URL(href, 'https://platzhalter.invalid').hostname;
    if (host === 'doctolib.de' || host.endsWith('.doctolib.de')) return 'doctolib';
  } catch {
    return null;
  }
  return null;
};

// Mit Label wird eine echte Google-Ads-Conversion gemeldet, ohne Label ein benanntes Event,
// das in Google Ads später als Conversion-Ziel ausgewählt werden kann.
export const conversionEvent = (
  adsId: string,
  labels: ConversionLabels,
  ziel: ConversionZiel
): GtagArgumente => {
  const label = labels[ziel];
  return label ? ['event', 'conversion', { send_to: `${adsId}/${label}` }] : ['event', `${ziel}_klick`, {}];
};

export const ladeGoogleTag = (adsId: string) => {
  if (document.querySelector('script[data-google-tag]')) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // gtag.js wertet nur das arguments-Objekt aus – ein Array würde stillschweigend ignoriert.
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  } as Window['gtag'];
  // Consent Mode v2: Standard „abgelehnt"; consent.ts hebt das nach Einwilligung auf.
  window.gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
  });
  window.gtag('js', new Date());
  // Kein Remarketing: Google verbietet personalisierte Werbung bei Gesundheitsthemen,
  // und die Datenschutzerklärung deckt nur Conversion-Messung ab.
  window.gtag('config', adsId, { allow_ad_personalization_signals: false });

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(adsId)}`;
  script.dataset.googleTag = '';
  document.head.appendChild(script);
};

export const bindeConversions = (adsId: string, labels: ConversionLabels) => {
  document.addEventListener('click', (ereignis) => {
    const link = (ereignis.target as Element | null)?.closest('a[href]');
    if (!link || typeof window.gtag !== 'function') return;
    const ziel = erkenneConversion(link.getAttribute('href') ?? '');
    if (ziel) window.gtag(...conversionEvent(adsId, labels, ziel));
  });
};
