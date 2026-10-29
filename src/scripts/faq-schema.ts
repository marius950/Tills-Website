// FAQPage-Schema (schema.org) für Rich Results in der Google-Suche.

export interface FaqEintrag {
  f: string;
  a: string;
}

export const faqSchema = (fragen: FaqEintrag[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: fragen.map((frage) => ({
    '@type': 'Question',
    name: frage.f,
    acceptedAnswer: { '@type': 'Answer', text: frage.a },
  })),
});
