// Zentrale Praxisdaten. Änderungen hier wirken sich auf die gesamte Website aus
// (Seiten, Footer, strukturierte Daten für Google).

export const praxis = {
  name: 'Praxis für Osteopathie Till Schneider',
  inhaber: 'Till Schneider',
  email: 'info@osteopathie-hamburg-till.de',
  doctolib: 'https://www.doctolib.de/osteopath/hamburg/till-schneider-hamburg',
  preis: '130 €',
  dauer: 'ca. 50 Minuten',
};

export const hamburg = {
  name: 'Hamburg',
  seite: '/osteopathie-hamburg/',
  stadtteil: 'Rotherbaum',
  adresse: ['Durchschnitt 21', 'The Plaece Two', '20146 Hamburg'],
  strasse: 'Durchschnitt 21, The Plaece Two',
  plz: '20146',
  ort: 'Hamburg',
  // Koordinaten via OpenStreetMap/Nominatim verifiziert
  geo: { lat: 53.5648541, lon: 9.9800768 },
  bild: '/images/standort-hamburg.webp',
  praxisbild: '/images/hamburg-praxis-1.webp',
  buchungText: 'Die Terminbuchung für Hamburg erfolgt online über Doctolib.',
  zeiten: 'Dienstag, 7:30–13:30 Uhr',
  telefon: '+49 177 4680535',
  telefonLink: 'tel:+491774680535',
};

export const moelln = {
  name: 'Mölln',
  seite: '/osteopathie-moelln/',
  adresse: ['Wasserkrüger Weg 127a', '23879 Mölln'],
  strasse: 'Wasserkrüger Weg 127a',
  plz: '23879',
  ort: 'Mölln',
  // Koordinaten via OpenStreetMap/Nominatim verifiziert
  geo: { lat: 53.6155983, lon: 10.6903728 },
  bild: '/images/standort-moelln.webp',
  praxisbild: '/images/moelln-praxis.webp',
  telefon: '+49 4542 835328',
  telefonLink: 'tel:+494542835328',
  email: 'info@osteo-moelln.de',
  buchungText: 'Termine in Mölln können telefonisch vereinbart werden.',
  zeiten: 'Flexibel nach Vereinbarung',
};

// Google-Maps-Kurzlinks für „Route planen" (Adresssuche, kein Tracking beim Seitenaufruf)
export const mapsLink = (s: typeof hamburg | typeof moelln) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${s.strasse}, ${s.plz} ${s.ort}`
  )}`;
