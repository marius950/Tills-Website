import { describe, expect, it } from 'vitest';
import { conversionEvent, erkenneConversion } from './google-tag';

describe('erkenneConversion', () => {
  it('erkennt Doctolib-Links als Buchungs-Conversion', () => {
    expect(erkenneConversion('https://www.doctolib.de/osteopath/hamburg/till-schneider-hamburg')).toBe(
      'doctolib'
    );
    expect(erkenneConversion('https://doctolib.de/')).toBe('doctolib');
  });

  it('erkennt Telefon-Links als Anruf-Conversion', () => {
    expect(erkenneConversion('tel:+491774680535')).toBe('anruf');
  });

  it('ignoriert alle anderen Links', () => {
    expect(erkenneConversion('/terminbuchung/')).toBeNull();
    expect(erkenneConversion('mailto:info@osteopathie-hamburg-till.de')).toBeNull();
    expect(erkenneConversion('https://notdoctolib.de/')).toBeNull();
    expect(erkenneConversion('https://doctolib.de.example.com/')).toBeNull();
  });
});

describe('conversionEvent', () => {
  it('meldet mit Label eine Google-Ads-Conversion', () => {
    expect(conversionEvent('AW-123', { doctolib: 'abcDEF' }, 'doctolib')).toEqual([
      'event',
      'conversion',
      { send_to: 'AW-123/abcDEF' },
    ]);
  });

  it('meldet ohne Label ein benanntes Klick-Event', () => {
    expect(conversionEvent('AW-123', {}, 'anruf')).toEqual(['event', 'anruf_klick', {}]);
  });
});
