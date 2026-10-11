// Cookie-Banner (vanilla-cookieconsent, MIT) mit Google Consent Mode v2 im „Basic"-Modus:
// Google-Scripte werden erst nach Einwilligung geladen, vorher verlässt keine Anfrage die Seite.
// „Alle akzeptieren" und „Nur notwendige" sind gleichwertig (DSK-Orientierungshilfe Telemedien).
import 'vanilla-cookieconsent/dist/cookieconsent.css';
import * as CookieConsent from 'vanilla-cookieconsent';
import { bindeConversions, ladeGoogleTag, type ConversionLabels } from './google-tag';

const adsId = import.meta.env.PUBLIC_GOOGLE_ADS_ID as string | undefined;
const labels: ConversionLabels = {
  doctolib: import.meta.env.PUBLIC_ADS_LABEL_DOCTOLIB || undefined,
  anruf: import.meta.env.PUBLIC_ADS_LABEL_ANRUF || undefined,
};

let conversionsGebunden = false;

const aktiviereMarketing = () => {
  if (!adsId || !CookieConsent.acceptedCategory('marketing')) return;
  ladeGoogleTag(adsId);
  window.gtag('consent', 'update', {
    ad_storage: 'granted',
    ad_user_data: 'granted',
    ad_personalization: 'denied',
  });
  if (!conversionsGebunden) {
    bindeConversions(adsId, labels);
    conversionsGebunden = true;
  }
};

CookieConsent.run({
  // Bei inhaltlichen Änderungen an den Kategorien hochzählen: erzwingt eine neue Einwilligung.
  revision: 1,
  guiOptions: {
    consentModal: { layout: 'box', position: 'bottom left', equalWeightButtons: true, flipButtons: false },
    preferencesModal: { layout: 'box', equalWeightButtons: true, flipButtons: false },
  },
  categories: {
    notwendig: { enabled: true, readOnly: true },
    marketing: {
      autoClear: { cookies: [{ name: /^_gcl/ }, { name: 'test_cookie' }] },
    },
  },
  language: {
    default: 'de',
    translations: {
      de: {
        consentModal: {
          title: 'Cookies auf dieser Website',
          description:
            'Wir nutzen ein notwendiges Cookie, um deine Auswahl zu speichern. Nur mit deiner Einwilligung messen wir zusätzlich über Google Ads, ob Besucher:innen aus unseren Anzeigen einen Termin buchen oder anrufen. Du kannst deine Entscheidung jederzeit unter „Cookie-Einstellungen" im Footer ändern.',
          acceptAllBtn: 'Alle akzeptieren',
          acceptNecessaryBtn: 'Nur notwendige',
          showPreferencesBtn: 'Einstellungen',
          footer: '<a href="/datenschutz/">Datenschutz</a> <a href="/impressum/">Impressum</a>',
        },
        preferencesModal: {
          title: 'Cookie-Einstellungen',
          acceptAllBtn: 'Alle akzeptieren',
          acceptNecessaryBtn: 'Nur notwendige',
          savePreferencesBtn: 'Auswahl speichern',
          closeIconLabel: 'Schließen',
          sections: [
            {
              title: 'Notwendig',
              description:
                'Speichert nur deine Cookie-Entscheidung (Cookie „cc_cookie", 6 Monate). Ohne dieses Cookie würde der Banner bei jedem Besuch erneut erscheinen.',
              linkedCategory: 'notwendig',
            },
            {
              title: 'Marketing (Google Ads)',
              description:
                'Lädt nach deiner Einwilligung das Google-Ads-Tag. Es misst, ob ein Klick auf „Termin buchen" (Doctolib) oder auf die Telefonnummer aus einer Google-Anzeige stammt. Cookies „_gcl_au" und „_gcl_aw" (90 Tage) von Google Ireland Ltd.',
              linkedCategory: 'marketing',
            },
          ],
        },
      },
    },
  },
  onConsent: aktiviereMarketing,
  onChange: aktiviereMarketing,
});
