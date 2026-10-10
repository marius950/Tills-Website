import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, expect, it } from 'vitest';
import GoogleBewertungen from './GoogleBewertungen.astro';
import { googleBewertungen } from '../data/bewertungen';

describe('GoogleBewertungen', () => {
  it('Badge zeigt Schnitt, Anzahl und verlinkt das Google-Profil', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(GoogleBewertungen, {
      props: { variante: 'badge' },
    });

    expect(html).toContain('5,0');
    expect(html).toContain(`${googleBewertungen.anzahl} Bewertungen`);
    expect(html).toContain(`href="${googleBewertungen.profilUrl}"`);
    expect(html).toContain('rel="noopener"');
  });

  it('Zitate-Variante rendert jedes kuratierte Zitat mit Name', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(GoogleBewertungen, {
      props: { variante: 'zitate' },
    });

    for (const zitat of googleBewertungen.zitate) {
      expect(html).toContain(zitat.text);
      expect(html).toContain(zitat.name);
    }
    expect(html).toContain('Alle Bewertungen bei Google lesen');
  });
});

describe('googleBewertungen (Datenpflege)', () => {
  it('hält die Regeln für kuratierte Zitate ein', () => {
    expect(googleBewertungen.schnitt).toBeGreaterThanOrEqual(1);
    expect(googleBewertungen.schnitt).toBeLessThanOrEqual(5);
    expect(googleBewertungen.anzahl).toBeGreaterThan(0);
    expect(googleBewertungen.zitate.length).toBeGreaterThanOrEqual(3);
    expect(googleBewertungen.zitate.length).toBeLessThanOrEqual(5);
    for (const zitat of googleBewertungen.zitate) {
      // Nur Vorname + Initiale, keine vollen Nachnamen auf der Website
      expect(zitat.name).toMatch(/^[A-ZÄÖÜ][a-zäöüß]+ [A-ZÄÖÜ]\.$/);
      expect(zitat.text.length).toBeGreaterThan(20);
    }
  });
});
