# Osteopathie-Praxis Till Schneider — Website

Statische Website, gebaut mit [Astro](https://astro.build). Inhalte basieren auf dem
Website-Konzept (Google Doc / `website-konzept-draft.md.docx`).

## Befehle

| Befehl | Wirkung |
|---|---|
| `npm install` | Abhängigkeiten installieren |
| `npm run dev` | Dev-Server auf http://localhost:4321 |
| `npm run build` | Produktions-Build nach `dist/` |
| `npm run preview` | Build lokal testen |

## Wo was gepflegt wird

- **Praxisdaten & Platzhalter:** `src/config.ts` — alle `[Platzhalter]` hier ersetzen.
  Noch offene Platzhalter werden auf der Website automatisch gelb markiert.
- **Doctolib:** Link in `src/config.ts` eintragen und `doctolibAktiv: true` setzen.
- **Wissen-Artikel (Blog):** Markdown-Dateien in `src/content/wissen/` (Frontmatter siehe Beispielartikel). Texte in du-Form!
- **Texte der Seiten:** `src/pages/*.astro`
- **Design-Tokens (Farben, Typo):** `src/styles/global.css`

## Vor dem Livegang (Checkliste)

- [ ] Alle Platzhalter in `src/config.ts` ersetzen
- [ ] Doctolib-Link eintragen (`doctolibAktiv: true`)
- [ ] Echte Fotos einfügen — alle Bilder in `public/images/` sind **Unsplash-Platzhalter**
      (Unsplash-Lizenz, frei nutzbar; Praxis-/Personenfotos auf der Website sind mit
      „Platzhalter-Foto (Unsplash)" gekennzeichnet). Seitenfotos (Hero, Portrait, Praxisraum)
      sollten durch professionelle Fotos von Till ersetzt werden; die Wissen-Artikelbilder
      können bleiben oder ebenfalls ersetzt werden. Quellen:
      [Hero](https://unsplash.com/photos/uLWW09LLG04) ·
      [Portrait](https://unsplash.com/photos/bBuUjB98PPY) ·
      [Praxisraum](https://unsplash.com/photos/oAvwAKFiU7Q) ·
      [Rücken](https://unsplash.com/photos/UhzeAgXvGSs) ·
      [Nacken](https://unsplash.com/photos/aotrm-bpAAk) ·
      [Stress](https://unsplash.com/photos/NTyBbu66_SI) ·
      [Kopfschmerzen](https://unsplash.com/photos/tuiYHBro_zs) ·
      [Kiefer](https://unsplash.com/photos/roCfgvkBLVY) ·
      [Schlaf](https://unsplash.com/photos/WD6HSPOIgSk) ·
      [Sport](https://unsplash.com/photos/8Naac6Zpy28) ·
      [Evidenz](https://unsplash.com/photos/07d1RdYYRjM) ·
      [Osteopath](https://unsplash.com/photos/hBLf2nvp-Yc) ·
      [Entscheidung](https://unsplash.com/photos/ubeslMfS1lk)
- [ ] Impressum vollständig erstellen (`src/pages/impressum.astro`) — anwaltlich prüfen
- [ ] Datenschutzerklärung erstellen (`src/pages/datenschutz.astro`)
- [ ] Domain in `astro.config.mjs` (`site:`) eintragen
- [ ] Die 10 Wissen-Artikel fachlich prüfen (Till) und rechtlich absichern (HWG) —
      die Texte sind KI-unterstützt nach dem Konzept-Leitfaden geschrieben und bewusst
      vorsichtig formuliert, ersetzen aber keine fachliche/anwaltliche Prüfung

## Deployment (Vercel)

1. Repo auf GitHub pushen
2. Auf vercel.com „New Project“ → Repo importieren — Astro wird automatisch erkannt
3. Deploy. Jeder Push deployt automatisch neu.

Die Seite ist rein statisch und kann später ohne Änderungen zu jedem anderen Hoster
umziehen (Inhalt von `dist/` = die komplette Website).
