# Contact Finale

## Purpose

Das Ende bietet echte, direkt benutzbare Kontaktwege zu Tolga und steigert sie mit absurden lokalen Kontaktoptionen zu einem trockenen visuellen Schlussgag.

## ADDED Requirements

### Requirement: Escalating contact cards
The page SHALL present real contact methods before fictional ones in an accessible sequence introduced by a short dry line.

#### Scenario: Reach the finale
- **WHEN** die Besucherin nach dem Schlussbild weiterscrollt
- **THEN** erscheint „Falls du dazu etwas sagen möchtest“
- **AND** folgen ausgefüllte echte Kontaktwege, anschließend mindestens Fax und Brieftaube
- **AND** bleiben alle Karten trotz visueller Stapelung lesbar, fokussierbar und antippbar

### Requirement: Real contact destinations
Each visible real contact action SHALL open its configured destination using an appropriate telephone, SMS, email or web link without sending anything automatically.

#### Scenario: Use a configured channel
- **WHEN** die Besucherin WhatsApp, Telefon, SMS, Instagram, Snapchat oder E-Mail auswählt
- **THEN** öffnet die Aktion das jeweilige echte Ziel oder den systemüblichen Handler
- **AND** wird keine Nachricht, E-Mail oder sonstige Mitteilung ohne weitere Aktion der Besucherin versendet

#### Scenario: Missing contact configuration
- **WHEN** für einen echten Kanal kein gültiger Zielwert vorliegt
- **THEN** wird dieser Kanal nicht als funktionierende Aktion in der fertigen Seite angezeigt
- **AND** ersetzt keine Beispielnummer, kein geratener Handle und kein leeres Ziel den fehlenden Wert

### Requirement: Copyable phone fallback
The page SHALL offer a way to copy the configured phone number and a selectable-number fallback if clipboard access fails.

#### Scenario: Successful copy
- **WHEN** die Besucherin „Nummer kopieren“ aktiviert und der Browser den Zugriff erlaubt
- **THEN** liegt die tatsächliche Nummer in der Zwischenablage
- **AND** bestätigt eine kurze zugängliche Rückmeldung die Aktion

#### Scenario: Clipboard unavailable
- **WHEN** der Clipboard-Zugriff fehlt oder abgelehnt wird
- **THEN** wird die echte Nummer auswählbar angezeigt
- **AND** behauptet die Seite keinen erfolgreichen Kopiervorgang

### Requirement: Personal WhatsApp caption
The WhatsApp card SHALL use the subtitle "Auch für Bilder von dir" when a valid WhatsApp destination is configured, without adding a separate image-request action.

#### Scenario: WhatsApp insider subtitle
- **WHEN** die konfigurierte WhatsApp-Karte sichtbar ist
- **THEN** lautet ihre Unterzeile „Auch für Bilder von dir“
- **AND** gibt es keine zusätzliche Aufforderung, Pflicht oder Upload-Funktion für Bilder

### Requirement: Daily mood vote
The finale SHALL offer Tolga's recurring question "Wie geht’s dir heute?" with an optional 1–10 scale whose values each open the configured WhatsApp destination with that value prefilled, without sending automatically or requiring an answer.

#### Scenario: Pick a number
- **WHEN** die Besucherin im Finale eine Zahl von 1 bis 10 antippt
- **THEN** öffnet WhatsApp den Chat mit Tolga mit dem vorausgefüllten Text „Heute: n/10“
- **AND** wird nichts ohne ihr eigenes Absenden verschickt
- **AND** speichert oder wertet die Seite die Auswahl nicht aus

#### Scenario: Scale on small screens
- **WHEN** das Televoting bei 320 px Breite oder ohne JavaScript angezeigt wird
- **THEN** sind alle zehn Zahlen lesbar, fokussierbar und mindestens 44 × 44 px groß
- **AND** bleibt der übrige Kontaktbereich ohne Auswahl erreichbar

### Requirement: Fictional methods stay local
Fictional contact actions SHALL produce brief local jokes without external requests, real destinations, browser alerts or permission prompts.

#### Scenario: Fax or carrier pigeon
- **WHEN** die Besucherin Fax oder Brieftaube aktiviert
- **THEN** erscheint eine kurze Inline-Reaktion wie „Papierstau“ oder „Taube hat Feierabend“
- **AND** werden weder Standortrechte angefragt noch eine Nummer gewählt oder eine Nachricht gesendet
- **AND** wird die Rückmeldung auch assistiven Technologien zugänglich gemacht

#### Scenario: Fictional contacts without JavaScript
- **WHEN** JavaScript nicht verfügbar ist
- **THEN** bleibt bei Fax und Brieftaube eine lesbare trockene Erklärung stehen
- **AND** gibt es keine scheinbar funktionierende Aktion ohne Reaktion

