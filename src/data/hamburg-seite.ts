// Inhalte der Standortseite Hamburg, die auch ins strukturierte FAQ-Schema einfließen.
// Wegangaben verifiziert am 29.10.2026: Linien laut HVV-Fahrplan 2025/26, Entfernungen als
// Luftlinie aus OpenStreetMap (Grindelhof ca. 280 m, Bundesstraße ca. 620 m, Schlump ca. 730 m).
import { praxis, hamburg, zeitenSatz } from '../config';
import type { FaqEintrag } from '../scripts/faq-schema';

export interface Stadtteil {
  name: string;
  text: string;
}

export const stadtteile: Stadtteil[] = [
  {
    name: 'Rotherbaum & Grindelviertel',
    text: 'Die Praxis liegt mitten in Rotherbaum, im Grindelviertel zwischen Universität und Messe. Die Buslinien 4 und 5 halten an der Haltestelle Grindelhof, rund 300 Meter entfernt.',
  },
  {
    name: 'Harvestehude',
    text: 'Harvestehude grenzt direkt an Rotherbaum. Die Buslinie 15 fährt von der Alsterchaussee über Hallerstraße und Parkallee bis zur Haltestelle Bundesstraße, von dort sind es rund 600 Meter. Mit dem Rad bist du in wenigen Minuten da.',
  },
  {
    name: 'Eimsbüttel',
    text: 'Eimsbüttel liegt gleich nebenan. Von der Weidenallee bringt dich die Buslinie 15 bis zur Bundesstraße, die U2 und U3 halten am Schlump. Von beiden Haltestellen sind es rund 600 bis 700 Meter zu Fuß.',
  },
  {
    name: 'Aus ganz Hamburg mit dem Auto',
    text: 'Für die Praxis gibt es eigene Parkplätze. Du musst im Viertel also nicht lange nach einem Platz suchen.',
  },
];

export const hamburgFaq: FaqEintrag[] = [
  {
    f: 'Wo genau liegt die Praxis für Osteopathie in Hamburg?',
    a: `Die Praxis liegt im The Plaece Two, ${hamburg.strasse.split(',')[0]}, ${hamburg.plz} Hamburg, im Stadtteil Rotherbaum im Grindelviertel. Aus Harvestehude und Eimsbüttel bist du in wenigen Minuten da.`,
  },
  {
    f: 'Gibt es Parkplätze an der Praxis?',
    a: 'Ja. Für die Praxis gibt es eigene Parkplätze, du musst also nicht im Viertel nach einem Platz suchen.',
  },
  {
    f: 'Wann behandelst du in Hamburg und wie bekomme ich einen Termin?',
    a: `In Hamburg behandle ich ${zeitenSatz(hamburg.zeiten)}. Termine buchst du rund um die Uhr online über Doctolib und siehst dort alle freien Zeiten in Echtzeit. Da ich in Hamburg nur an zwei Tagen behandle, lohnt sich eine frühzeitige Buchung.`,
  },
  {
    f: 'Was kostet Osteopathie in Hamburg?',
    a: `Eine Behandlung dauert ${praxis.dauer} und kostet ${praxis.preis}. Du erhältst eine Rechnung nach der Gebührenordnung für Heilpraktiker (GebüH). Private Krankenversicherungen und viele Zusatzversicherungen erstatten ganz oder teilweise, einige gesetzliche Krankenkassen bezuschussen anteilig. Bitte frag vorab bei deiner Versicherung nach.`,
  },
  {
    f: 'Brauche ich eine Überweisung?',
    a: 'Nein. Als Heilpraktiker darf ich dich auch ohne ärztliche Verordnung behandeln. Wenn deine gesetzliche Krankenkasse einen Zuschuss zahlt, verlangt sie dafür aber häufig eine ärztliche Empfehlung.',
  },
];
