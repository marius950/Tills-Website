import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, expect, it } from 'vitest';
import LpHeader from './LpHeader.astro';
import LpFooter from './LpFooter.astro';
import { hamburg, praxis } from '../config';

describe('LpHeader', () => {
  it('bietet Telefon und Doctolib-Buchung an, aber keine Navigation', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(LpHeader);

    expect(html).toContain(`href="${hamburg.telefonLink}"`);
    expect(html).toContain(`href="${praxis.doctolib}"`);
    expect(html).not.toContain('<nav');
  });
});

describe('LpFooter', () => {
  it('enthält die Pflichtlinks Impressum und Datenschutz', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(LpFooter);

    expect(html).toContain('href="/impressum/"');
    expect(html).toContain('href="/datenschutz/"');
  });
});
