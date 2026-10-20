# Entwicklung und Übergabe

Privat. Nichts in diesem Ordner wird veröffentlicht.

## Struktur

| Pfad | Inhalt |
| --- | --- |
| `site/` | Die statische Seite, buildless. Nur dieser Ordner wird veröffentlicht. |
| `site/index.html` | Story und alle echten Kontaktlinks. Die Kontaktdaten stehen direkt hier im Markup, damit sie auch ohne JavaScript funktionieren. |
| `site/styles.css`, `site/main.js` | Gestaltung und Scroll-Inszenierung (GSAP ScrollTrigger aus `site/vendor/`). |
| `site/img/ph-*.svg` | Entwicklungs-Platzhalter. Werden durch die finalen Fotos ersetzt. |
| `production/` | Bild-Prompts, Export-Skript, finale Originale (`production/final/`). |
| `openspec/` | Spezifikation und Tasks. |
| `bilder/` | Private Referenzfotos. |

## Lokal starten

```sh
python3 -m http.server 8765 --directory site
# http://localhost:8765
```

Kein Build-Schritt. Am Handy im selben WLAN: `http://<IP-des-Macs>:8765`.

## Finale Fotos einbauen

1. Fotos nach `production/bildprompts.md` erzeugen und als `production/final/beach.jpg`, `spa.jpg`, `shisha.jpg`, `barca.jpg` ablegen (Hochformat 4:5).
2. `production/export-images.sh` ausführen. Es schreibt WebP-Varianten ohne Metadaten nach `site/img/` und zeigt die Größen an.
3. In `site/index.html` jedes Platzhalter-`<img>` ersetzen, Beispiel Strand:

   ```html
   <img src="img/beach-960.webp"
        srcset="img/beach-640.webp 640w, img/beach-960.webp 960w, img/beach-1122.webp 1122w"
        sizes="(min-width: 560px) 560px, 100vw"
        width="1122" height="1402"
        alt="Tolga und seine Freundin zusammen am Strand" decoding="async">
   ```

   Das Skript skaliert nie hoch: Breiten über dem Original entfallen. Aktuell sind die Originale 1122 × 1402 px, daher gibt es nur 640/960/1122 und beim Stadion nur `barca-1122.webp`. Der Zoom startet deshalb 2,2-fach (`stadiumZoom` in `site/main.js`). Mit einem Stadionfoto ab etwa 3200 px Breite kann er wieder auf 3,2 hoch.
4. Fokuspunkte anpassen (Pflicht beim Stadion, die aktuellen Werte passen nur zum Platzhalter): `--fx`/`--fy` am `<figure>` (Bildausschnitt) und beim Stadion `data-face-x/y` (Tolgas Gesicht) und `data-pair-x/y` (Mitte des Paars), jeweils als Anteil 0–1 der Bildbreite/-höhe.
5. Alttexte: das Wort „Platzhalter:“ entfernen.
6. Schlussbild (`.shot--closing`): das stärkste der vier Fotos eintragen, `alt=""` bleibt.
7. `site/img/ph-*.svg` löschen.

Budgets (Spec): erstes Foto ≤ 350 KiB, die vier gewählten Mobil-Dateien ≤ 2,5 MiB, initiales JS ≤ 120 KiB gzip (aktuell ca. 46 KiB: GSAP 28 + ScrollTrigger 18 + main.js).

## Veröffentlichen

GitHub → Settings → Pages → Source: „GitHub Actions“. Dann Actions → „Pages“ → „Run workflow“. Der Workflow bricht ab, solange `site/index.html` Platzhalter einbindet.
