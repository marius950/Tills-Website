import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, expect, it } from 'vitest';
import FaqListe from './FaqListe.astro';
import { hamburgFaq } from '../data/hamburg-seite';

describe('FaqListe', () => {
  it('zeigt jede Frage aufklappbar und liefert dieselben Fragen als FAQPage-Schema', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(FaqListe, { props: { fragen: hamburgFaq } });

    const schemaJson = html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)?.[1];
    const schema = JSON.parse(schemaJson ?? '{}');

    expect(schema['@type']).toBe('FAQPage');
    expect(schema.mainEntity).toHaveLength(hamburgFaq.length);
    for (const frage of hamburgFaq) {
      // Im Dev-Modus hängt Astro Quell-Attribute an die Tags, daher nur auf den Abschluss prüfen.
      expect(html).toContain(`>${frage.f}</summary>`);
    }
  });
});
