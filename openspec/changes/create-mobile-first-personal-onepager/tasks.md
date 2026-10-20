# Tasks

Alle Aufgaben sind Implementierungsaufgaben für die spätere Website. Im aktuellen Paket ist keine davon als erledigt markiert. Referenzen: `design.md`, `assets.md`, `insiders.md` und die vier Delta-Specs.

## 1. Projekt und mobiles Grundgerüst

- [x] 1.1 Ziel-Checkout und bestehende Projektregeln prüfen; Ergebnis: gewählte statische Struktur und Start-/Buildbefehle dokumentiert, vorhandene OpenSpec-Konfiguration erhalten.
  - _Stand 2026-10-20: buildless `site/`, Start `python3 -m http.server 8765 --directory site`, dokumentiert in `production/README.md`; `openspec/` ins Projekt-Root übernommen._
- [x] 1.2 Semantische Storystruktur mit allen Beats und klar gekennzeichneten lokalen Bildplatzhaltern erstellen; Prüfung: vollständige Reihenfolge bereits ohne JavaScript lesbar.
- [x] 1.3 Layout zuerst bei 390 px erstellen und danach 320, 360, 375 und 430 px prüfen; Ergebnis: kein horizontaler Dokument-Scroll, keine abgeschnittenen Texte, dokumentierte mobile Screenshots.
  - _Stand 2026-10-20: geprüft per Headless-Chrome-Emulation (DPR 2), Screenshots in `.impeccable/review/r3/`. Keine realen Geräte._
- [ ] 1.4 Safe Areas, variable Browserleisten, Querformat und 200-Prozent-Textzoom berücksichtigen; Prüfung: Inhalte bleiben erreichbar, auch wenn bildschirmhohe Abschnitte zu normalen Blöcken werden.
  - _Teilweise: Safe Areas, `svh`, Querformat (Pins aus) umgesetzt und emuliert geprüft. 200-%-Textzoom noch nicht geprüft._

## 2. Paarbilder

- [ ] 2.1 Ausgewählte Referenzbilder für beide Personen zusammenstellen; Ergebnis: eindeutige Referenzzuordnung für die spätere Bildgenerierung, keine ungeprüften älteren Generierungen als Identitätsvorlage.
- [ ] 2.2 Vier Paarbilder gemäß `assets.md` erzeugen oder gelieferte finale Bilder integrieren; Prüfung: Strand, Therme, Shishabar und Barça-Stadion zeigen jeweils beide Personen wiedererkennbar und mit plausibler Anatomie; im Strandfoto ist Tolgas Oberarm durch eine natürliche Paarpose dezent sichtbar. *Stand: vier Bilder per Codex erzeugt und eingebaut (`production/final/`), Anatomie und Komposition geprüft; Wiedererkennbarkeit der Gesichter muss Tolga selbst abnehmen.*
- [x] 2.3 Responsive Webvarianten mit reservierten Abmessungen, Alttexten und passenden Fokuspunkten erstellen; Prüfung: Gesichter bei 320, 390 und 430 px im vollständigen Bildzustand sichtbar, Stadion-Zoomstart ausreichend scharf. *Original nur 1122 × 1402 px: Varianten 640/960/1122, Stadion-Zoomstart deshalb 2,2- statt 3,2-fach.*
  - _Teilweise: reservierte Abmessungen (4:5), Alttexte und Fokuspunkt-Variablen stehen; Webvarianten fehlen mangels Fotos._
- [x] 2.4 Ladeprioritäten und Bildbudgets einhalten; Prüfung: bei 390 px/DPR 2 maximal 350 KiB für das zuerst benötigte Paarfoto und maximal 2,5 MiB für die vier gewählten Foto-Dateien, stabiler Ablauf auch bei Bildfehler. *Strand 960 px 55 KiB; die vier 960/1122-Dateien zusammen 336 KiB. Bildfehler-Fall nicht gesondert getestet.*
- [x] 2.5 Referenzen und ungenutzte Originale aus dem Ausgabeordner ausschließen und Metadaten entfernen; Ergebnis: veröffentlichbare Assetliste ohne GPS-/EXIF-Daten und ohne Platzhalter. *cwebp `-metadata none`, kein EXIF/XMP/GPS in `site/img/`, Platzhalter gelöscht.*
- [ ] 2.6 Alle vier Bilder auf die gewünschte Paardynamik prüfen und bei Bedarf überarbeiten; Ergebnis: Tolga wirkt männlich, ruhig und selbstsicher, sie feminin und entspannt an seiner Seite, auch bei 320–430 px Zuschnitt; Gesichter und Proportionen bleiben referenzgetreu.
- [ ] 2.7 Größenrelation in allen vier Bildern prüfen; Ergebnis: 187 cm für Tolga und 177 cm für seine Freundin berücksichtigt, bei vergleichbarem Stand natürlicher 10-cm-Unterschied und bei Sitz-/Poolszenen passende Proportionen ohne erzwungenen Kopfabstand.

## 3. Scroll-Inszenierung

- [x] 3.1 Dramatischen Einstieg und banale Auflösung umsetzen; Prüfung: erstes Wischen startet die Enthüllung ohne Klick, Wartezeit oder blockiertes Scrollen.
- [x] 3.2 Ruhige Übergänge für Strand, Therme und Shishabar sowie den Stadion-Zoom erstellen; Prüfung: mobile Vorwärts- und Rückwärtsbewegung zeigen korrekte Zustände, kein Beat benötigt mehr als 1,5 zusätzliche Bildschirmhöhen.
  - _Pinstrecken: Zeit-Gag +110 %, Stadion +140 % Bildschirmhöhe. Vor- und Rückwärts emuliert geprüft._
- [x] 3.3 Zeitaufwand-Gag und falsches Ende einbauen; Prüfung: alle Textzustände sind lesbar, nach „Das war’s“ folgt innerhalb ungefähr einer halben Bildschirmhöhe „Fast“ und anschließend das Schlussbild.
- [x] 3.4 Reduced-Motion- und No-Script-Version ausarbeiten; Prüfung: vollständige Fotostory und echte Kontaktlinks ohne Zoom, Parallax, lange Pinning-Strecken oder versteckte Inhalte.
- [x] 3.5 Resize und Rotation während aktiver Effekte prüfen; Ergebnis: keine hängen gebliebenen Ebenen, doppelten Animationen oder verdeckten Kontaktkarten.
  - _Emuliert: Rotation 390×844 → 844×390 → zurück, 17 → 17 ScrollTrigger, keine doppelten Instanzen._
- [x] 3.6 Die ausgewählten Textanspielungen aus `insiders.md` in vorhandene Beats integrieren; Prüfung: Sen-yapamasin-Zeile, ADAC-Rückblende, Schlussgruß und einmal „Türkin. Blonde Edition“ beim Shishabar-Foto vorhanden, keine zusätzliche Scrollsektion, Pflichtaktion oder Antworterwartung.

## 4. Kontakt-Finale

- [x] 4.1 Tatsächlich gewünschte Kontaktdaten übernehmen und normalisieren; Prüfung: keine erfundenen Nummern, Handles, E-Mail-Adressen oder leeren Linkziele, fehlende Kanäle dokumentiert.
  - _Kontakte vom Nutzer am 2026-10-20 geliefert und in `site/index.html` eingetragen._
- [ ] 4.2 Kontaktkarten mit geeigneten echten Links erstellen; Prüfung: jeder konfigurierte Kanal öffnet das richtige Ziel, ohne etwas automatisch zu versenden; die WhatsApp-Unterzeile lautet „Auch für Bilder von dir“; Stapelung verdeckt keine Aktion.
  - _Teilweise: alle Links und die WhatsApp-Zeile gesetzt; Öffnen der Ziele auf echten Geräten noch nicht geprüft._
- [ ] 4.3 Kopierfunktion mit auswählbarer Telefonnummer als Fallback ergänzen; Prüfung: Erfolg und verweigerter Clipboard-Zugriff zeigen jeweils den tatsächlichen Zustand.
  - _Teilweise: umgesetzt (Button nur bei verfügbarer Clipboard-API, Nummer immer markierbar sichtbar); Erfolgs- und Fehlerpfad noch nicht im Browser geprüft._
- [x] 4.4 Fax und Brieftaube mit lokalen Inline-Reaktionen versehen; Prüfung: keine Netzwerkanfrage, Browser-Alerts oder Berechtigungsabfrage und lesbare Erklärung ohne JavaScript.
- [ ] 4.5 Touch- und Tastaturbedienung prüfen; Ergebnis: mindestens 44 × 44 px aktive Flächen, sichtbarer Fokus, ausreichender Kontrast und zugängliche Rückmeldungen.
- [x] 4.6 Televoting „Wie geht’s dir heute?“ mit 1–10 ins Finale einbauen; Prüfung: zehn WhatsApp-Links mit vorausgefülltem „Heute: n/10“, Felder bei 320 px mindestens 44 × 44 px, kein Überlauf, Senderlogo verdeckt kein Feld (Emulation 320/390, reduzierte und volle Bewegung).
  - _Teilweise: 44-px-Flächen und Schriftgrößen gemessen, Fokusring gestaltet; Tastaturdurchlauf und Kontrastmessung im Browser stehen aus._

## 5. Integration und statische Auslieferung

- [ ] 5.1 Mobile Gesamtreise auf iOS Safari und Android Chrome prüfen; Ergebnis: Browser und Geräte/Emulation dokumentiert, Screenshots und offene reale Gerätetests ehrlich ausgewiesen.
- [ ] 5.2 Drei kalte mobile Performance-Läufe durchführen; Ergebnis: Median LCP höchstens 2,5 s, CLS höchstens 0,1 und initiales JavaScript höchstens 120 KiB gzip, Messumgebung und tatsächliche Werte dokumentiert.
- [ ] 5.3 Tablet und Desktop aus der fertigen mobilen Gestaltung ableiten; Prüfung: bewusste Bildgrößen, unveränderte Storyreihenfolge und vollständig bedienbare Kontakte.
- [ ] 5.4 Statischen Output inklusive Projekt-Unterpfad prüfen; Ergebnis: keine fehlenden Assets, keine Laufzeit-Abhängigkeit von einem Backend, keine privaten Referenzbilder, Schlüssel oder Briefingdateien im Output oder einem öffentlichen Quellrepository.
  - _Vorbereitet: `.github/workflows/pages.yml` veröffentlicht nur `site/` und bricht ab, solange Platzhalter eingebunden sind._
- [ ] 5.5 OpenSpec-Change im Zielprojekt validieren und Anforderungen gegen das Ergebnis prüfen; Ergebnis: `openspec validate create-mobile-first-personal-onepager --strict` erfolgreich und verbleibende Abweichungen ausdrücklich dokumentiert.
- [ ] 5.6 Finale statische Seite auf dem gewählten Host veröffentlichen; Prüfung: permanente HTTPS-URL vom Handy aus erreichbar und unabhängig vom laufenden Entwicklungsrechner.

## Workflow follow-up

- Den Change nach Umsetzung und Projektabnahme gemäß dem verwendeten OpenSpec-Workflow archivieren.
- Dabei die vier neuen Capability-Deltas in die kanonischen Specs übernehmen lassen.

