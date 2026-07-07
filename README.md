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
- **Blogartikel:** Markdown-Dateien in `src/content/blog/` (Frontmatter siehe Beispielartikel).
- **Texte der Seiten:** `src/pages/*.astro`
- **Design-Tokens (Farben, Typo):** `src/styles/global.css`

## Vor dem Livegang (Checkliste)

- [ ] Alle Platzhalter in `src/config.ts` ersetzen
- [ ] Doctolib-Link eintragen (`doctolibAktiv: true`)
- [ ] Echte Fotos einfügen — die Bilder in `public/images/` sind **Unsplash-Platzhalter**
      (auf der Website mit „Platzhalter-Foto (Unsplash)" gekennzeichnet) und müssen durch
      professionelle Fotos von Till/der Praxis ersetzt werden. Quellen:
      [Hero](https://unsplash.com/photos/a9pFSC8dTlo) ·
      [Portrait](https://unsplash.com/photos/bBuUjB98PPY) ·
      [Praxisraum](https://unsplash.com/photos/oAvwAKFiU7Q) ·
      [Blog](https://unsplash.com/photos/UhzeAgXvGSs) (Unsplash-Lizenz, frei nutzbar)
- [ ] Impressum vollständig erstellen (`src/pages/impressum.astro`) — anwaltlich prüfen
- [ ] Datenschutzerklärung erstellen (`src/pages/datenschutz.astro`)
- [ ] Domain in `astro.config.mjs` (`site:`) eintragen
- [ ] Beispiel-Blogartikel ersetzen oder löschen

## Deployment (Vercel)

1. Repo auf GitHub pushen
2. Auf vercel.com „New Project“ → Repo importieren — Astro wird automatisch erkannt
3. Deploy. Jeder Push deployt automatisch neu.

Die Seite ist rein statisch und kann später ohne Änderungen zu jedem anderen Hoster
umziehen (Inhalt von `dist/` = die komplette Website).
