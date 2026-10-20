# OpenSpec: Persönlicher Mobile-First-Onepager

Eine kurze, visuelle Scroll-Story für Tolgas Freundin: coole gemeinsame Paarfotos, trockener Humor und am Ende eine absurde Anzahl von Kontaktmöglichkeiten. Die Seite wird voraussichtlich zu 99 % auf einem Handy geöffnet. Mobile First ist deshalb ein Abnahmekriterium und bestimmt Gestaltung, Animationen und Performance von Beginn an.

## Status und Nutzung

Dieses Paket enthält die Spezifikation und den Implementierungsplan, noch keine Website und keine generierten Bilder. Alle Implementierungsaufgaben sind offen. Die bisherigen Entscheidungen aus dem Gespräch sind eingearbeitet; zusätzliche Entscheidungen und Arbeitsannahmen sind in `design.md` ausgewiesen.

Den Ordner `openspec/` in das gewünschte Projekt übernehmen. Gibt es dort schon eine `openspec/config.yaml`, deren Kontext ergänzen statt sie blind zu überschreiben. Kein vorhandenes `openspec/specs/` überschreiben: Die neuen Anforderungen liegen als Change-Deltas vor und werden erst nach Umsetzung archiviert.

Change-ID: `create-mobile-first-personal-onepager`

Enthaltene Dateien:

- `openspec/config.yaml`: Projektkontext und Leitplanken.
- `openspec/changes/create-mobile-first-personal-onepager/proposal.md`: Ziel und Umfang.
- `openspec/changes/create-mobile-first-personal-onepager/design.md`: Storyboard und technische Entscheidungen.
- `openspec/changes/create-mobile-first-personal-onepager/specs/*/spec.md`: vier Capabilities mit Anforderungen und WHEN/THEN-Szenarien.
- `openspec/changes/create-mobile-first-personal-onepager/assets.md`: Bildbriefing und fehlende Inhalte.
- `openspec/changes/create-mobile-first-personal-onepager/insiders.md`: persönliche Hintergründe und die ausgewählten Insider mit ihrer Platzierung.
- `openspec/changes/create-mobile-first-personal-onepager/tasks.md`: geordnete Implementierungsaufgaben mit Prüfhinweisen.

## Übergabe an Claude Code

> Lies den OpenSpec-Change `create-mobile-first-personal-onepager` vollständig. Setze ihn anhand der Aufgaben in `tasks.md` um. Beginne mit dem Smartphone-Layout bei 390 px und prüfe anschließend 320–430 px. Beachte die Requirements aller vier Capabilities. Nutze impeccable/taste, sofern verfügbar, für die visuelle Ausarbeitung innerhalb dieses Briefings. Erfinde keine Kontaktdaten oder Insider. Nutze bis zur Lieferung der finalen Bilder klar erkennbare lokale Platzhalter; stelle die Seite mit Platzhaltern nicht als fertig dar. Markiere nur tatsächlich umgesetzte und geprüfte Aufgaben als erledigt. Protokolliere nicht ausgeführte Gerätetests ehrlich.

## Validierung

Die persönlichen Insider sind im Design verankert. Zusätzlich zu Sen yapamasin, ADAC und Schlussgruß hat der Nutzer die WhatsApp-Beschriftung, den dezent sichtbaren Bizeps und „Türkin. Blonde Edition“ zum Einbauen ausgewählt. Diese Details verteilen sich auf bestehende Inhalte; zusätzliche Sektionen oder Fotos sind dafür nicht vorgesehen. Mobile-First-Kriterien und Umfang der vier Paarfotos bleiben bestehen.

Als weitere verbindliche Bildvorgabe gilt für alle vier Fotos: Tolga wirkt männlich, ruhig und selbstsicher; seine Freundin feminin, entspannt und vertraut an seiner Seite. Diese gewünschte Paardynamik wird über Pose, Styling und Nähe vermittelt. Gesichter und reale Körperproportionen bleiben anhand der Referenzen erhalten.

Aktuelle Größenangaben des Nutzers für die Bilder: Tolga **187 cm**, seine Freundin **177 cm**. Der reale Unterschied beträgt **10 cm** und wird unter Berücksichtigung von Haltung, Schuhen und Perspektive natürlich dargestellt.

Die Paketstruktur, Anforderungsblöcke, Szenarien, YAML-Dateien und internen Dateiverweise wurden lokal strukturell geprüft. Die OpenSpec-CLI war in der Erstellungsumgebung nicht installiert; ein offizieller CLI-Validierungslauf wurde deshalb nicht durchgeführt. Im Zielprojekt mit verfügbarer CLI ausführen:

```bash
openspec validate create-mobile-first-personal-onepager --strict
```

Eine erfolgreiche Spezifikationsprüfung ersetzt keine späteren Browser- und Gerätetests der Website.

## Referenzen zur Struktur

Das Paket orientiert sich am offiziellen OpenSpec-Schema `spec-driven` mit Proposal, Delta-Specs, Design und Tasks:

- https://github.com/Fission-AI/OpenSpec/blob/main/docs-lab/reference/schemas/spec-driven/index.md
- https://github.com/Fission-AI/OpenSpec/blob/main/docs/customization.md

