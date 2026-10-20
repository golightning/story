# Proposal

## Why

Tolga möchte seiner aktuell etwas schlecht gelaunten Freundin einen persönlichen Link schicken, der sie mit coolen gemeinsamen Bildern und trockenem Humor überrascht. Die Seite wird voraussichtlich zu 99 % auf dem Handy geöffnet; Mobile First ist eine verbindliche Produktanforderung.

## What Changes

- Eine statische, durch natives Scrollen erzählte Seite ohne klassische Navigation, Marketingsektionen oder herkömmlichen Footer erstellen.
- Einen übertrieben dramatischen Einstieg mit einer banalen Auflösung kombinieren.
- Vier generierte, glaubwürdige Paarbilder integrieren: Strand, Therme, Shishabar und FC-Barcelona-Stadion.
- In allen vier Fotos die ausdrücklich gewünschte Paardynamik darstellen: Tolga männlich und selbstsicher, seine Freundin feminin und entspannt an seiner Seite; über natürliche Pose, Styling und Nähe.
- Eine Bildenthüllung durch Scrollen, einen beiläufigen Gag über den Zeitaufwand und ein falsches Ende einbauen.
- Mit einem starken Paarfoto und danach gestapelten Kontaktmöglichkeiten enden.
- Persönliche Anspielungen integrieren: „sen yapamasin“, ADAC beim ersten Date und der Guten-Morgen/Gute-Nacht-Gag; ergänzt um „Auch für Bilder von dir“ bei WhatsApp, einen dezent sichtbaren Bizeps im Strandfoto und „Türkin. Blonde Edition“ beim Shishabar-Foto. Alle Details bleiben innerhalb bestehender Story-Beats.
- Reale Kontaktwege benutzbar machen; absurde Wege wie Fax und Brieftaube mit lokalen Reaktionen versehen.
- Darstellung, Bildausschnitte, Bewegung und Ladeverhalten zuerst für kleine Touchscreens auslegen.
- Alle Inhalte bei reduzierter Bewegung und bei fehlender Animationsunterstützung zugänglich halten.

## Capabilities

### New Capabilities

- `scroll-story`: Dramaturgie, Reihenfolge, Bildenthüllung, trockene Gags und falsches Ende.
- `couple-imagery`: Vier Paarfoto-Szenen, natürliche Nähe, Wiedererkennbarkeit und passende Ausschnitte.
- `mobile-experience`: Mobile Darstellung, natives Scrollen, Zugänglichkeit und überprüfbare Ladebudgets.
- `contact-finale`: Echte Kontaktaktionen und harmlose lokale Reaktionen auf fiktive Kontaktwege.

### Modified Capabilities

Keine; es ist kein bestehendes Projekt als Ziel angegeben.

## Impact

Neues statisches Frontend, Bildassets, lokale Konfiguration der Kontakte und Hosting-Konfiguration. Keine bestehenden APIs oder Systeme werden geändert. Die Bilder werden vorab erzeugt und exportiert; die Website benötigt keine KI-Schnittstelle.

Die aktuelle Aufgabe liefert ausschließlich dieses OpenSpec-Paket. Umsetzung, Bilderstellung und Deployment sind spätere Implementierungsaufgaben. GitHub Pages ist die Arbeitsannahme für das Hosting; die Entscheidung ist austauschbar, solange statische Dateien und Projekt-Unterpfade funktionieren.

