// Kuratierte Google-Bewertungen für die Website. Manuell gepflegt, keine API, kein Drittscript.
// Quelle: Google-Unternehmensprofil „Osteopathie Till Schneider" (Hamburg). Schnitt und Anzahl
// regelmäßig mit dem Profil abgleichen und `stand` aktualisieren. Sobald das Mölln-Profil
// Bewertungen hat: Anzahl addieren und den Schnitt gewichtet mitteln (ein gemeinsamer Wert).
//
// Zitate: wörtliche Auszüge, Auslassungen mit „…" gekennzeichnet, nur Vorname + Initiale.
// Keine Aussagen über Heilerfolge zitieren (Heilmittelwerbegesetz), nur Erfahrung und Umgang.

export interface Bewertung {
  name: string;
  datum: string;
  text: string;
}

export const googleBewertungen = {
  schnitt: 5.0,
  anzahl: 17,
  stand: '10. Oktober 2026',
  profilUrl: 'https://www.google.com/maps/place/?q=place_id:ChIJmz27rjOPsUcR9zcvDpr40rM',
  bewertenUrl: 'https://search.google.com/local/writereview?placeid=ChIJmz27rjOPsUcR9zcvDpr40rM',
  zitate: [
    {
      name: 'Jan P.',
      datum: 'August 2026',
      text: 'Ich habe kurzfristig einen Termin wegen akuter Beschwerden bekommen.',
    },
    {
      name: 'Florian J.',
      datum: 'August 2026',
      text: 'Er hört aufmerksam zu und geht sehr professionell und einfühlsam auf die Beschwerden ein.',
    },
    {
      name: 'Alexandra H.',
      datum: 'September 2026',
      text: 'Ich war heute zur osteopathischen Behandlung in der neuen Praxis und habe mich von Anfang an sehr wohl und gut aufgehoben gefühlt.',
    },
  ] as Bewertung[],
};
