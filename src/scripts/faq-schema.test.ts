import { describe, expect, it } from 'vitest';
import { faqSchema } from './faq-schema';

describe('faqSchema', () => {
  it('bildet jede Frage als Question mit acceptedAnswer ab', () => {
    const schema = faqSchema([
      { f: 'Gibt es Parkplätze?', a: 'Ja, eigene Parkplätze.' },
      { f: 'Was kostet es?', a: '130 €.' },
    ]);

    expect(schema['@context']).toBe('https://schema.org');
    expect(schema['@type']).toBe('FAQPage');
    expect(schema.mainEntity).toEqual([
      {
        '@type': 'Question',
        name: 'Gibt es Parkplätze?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ja, eigene Parkplätze.' },
      },
      {
        '@type': 'Question',
        name: 'Was kostet es?',
        acceptedAnswer: { '@type': 'Answer', text: '130 €.' },
      },
    ]);
  });
});
