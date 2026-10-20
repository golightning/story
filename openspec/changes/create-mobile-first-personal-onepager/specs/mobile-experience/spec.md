# Mobile Experience

## Purpose

Der Onepager wird vorrangig für kleine Touchscreens gestaltet und bleibt unabhängig von Browserleisten, Bewegungspräferenzen und Animationsunterstützung vollständig benutzbar.

## ADDED Requirements

### Requirement: Mobile-first viewport support
The page SHALL fit portrait viewports from 320 to 430 CSS pixels wide without horizontal document overflow, clipped controls or unreadable text.

#### Scenario: Small-screen acceptance matrix
- **WHEN** die gesamte Seite bei 320, 360, 375, 390 und 430 px Breite im Hochformat geprüft wird
- **THEN** entsteht kein horizontaler Dokument-Scroll
- **AND** bleiben Storytexte, beide Gesichter im vollständigen Bildzustand und alle Kontaktaktionen benutzbar
- **AND** wird die 390-px-Ansicht vor der Desktopansicht umgesetzt und geprüft

### Requirement: Native scrolling
The page SHALL allow normal touch, wheel and keyboard scrolling without custom gesture capture, mandatory snapping or delays that block progress.

#### Scenario: Continuous touch scrolling
- **WHEN** die Besucherin schnell, langsam oder rückwärts wischt
- **THEN** folgt die Seite dem nativen Scrollverhalten des Browsers
- **AND** bleibt der Kontaktbereich ohne Pflichtinteraktion erreichbar
- **AND** erzeugt kein einzelner inszenierter Beat mehr als 1,5 zusätzliche Bildschirmhöhen Scrollweg

### Requirement: Browser chrome and orientation resilience
The page SHALL keep content reachable when mobile browser bars change, safe areas apply or device orientation changes.

#### Scenario: Browser bars and notch
- **WHEN** mobile Browserleisten beim Scrollen ein- oder ausgeblendet werden
- **THEN** bleiben wichtige Texte und Kontaktaktionen außerhalb verdeckter Safe Areas
- **AND** entstehen keine großen Layoutsprünge oder verdeckten Fortsetzungen

#### Scenario: Rotation and short viewport
- **WHEN** das Handy ins Querformat gedreht oder die Seite in einer kurzen Browseransicht geöffnet wird
- **THEN** bleiben Inhalte vertikal erreichbar
- **AND** werden aufwendige Sticky-Effekte bei Platzproblemen zu einfachen Übergängen

### Requirement: Touch and text accessibility
The page SHALL use touch targets of at least 44 by 44 CSS pixels, readable text and visible keyboard focus, while remaining usable at 200 percent text zoom.

#### Scenario: Touch-target and text review
- **WHEN** alle interaktiven Elemente und Texte auf dem Handy geprüft werden
- **THEN** betragen aktive Flächen mindestens 44 × 44 px, Fließtexte mindestens 16 px und ergänzende Beschriftungen mindestens 14 px
- **AND** beträgt der Textkontrast mindestens 4,5:1 für normalen und 3:1 für großen Text

#### Scenario: Keyboard and zoom
- **WHEN** per Tastatur navigiert und die Textdarstellung auf 200 Prozent vergrößert wird
- **THEN** sind Fokus und aktive Elemente sichtbar
- **AND** verschwinden weder Texte noch Kontaktfunktionen durch feste Abschnittshöhen

### Requirement: Reduced-motion experience
The page SHALL preserve the complete story with zoom, parallax, spatial motion and prolonged pinning disabled when reduced motion is requested.

#### Scenario: Reduced-motion journey
- **WHEN** `prefers-reduced-motion: reduce` vor dem Laden aktiv ist
- **THEN** zeigt die Seite die vollständigen Fotos und lesbaren Gags in normaler Reihenfolge
- **AND** bleiben falsches Ende und sämtliche Kontakte vorhanden
- **AND** ist keine Animation nötig, um einen Inhalt zu verstehen oder zu erreichen

### Requirement: No-script and unsupported-animation fallback
The page SHALL expose all essential text, photos and real contact links without JavaScript or scroll-animation support.

#### Scenario: Progressive-enhancement failure
- **WHEN** JavaScript deaktiviert ist oder die Animationsinitialisierung fehlschlägt
- **THEN** bleibt eine vollständige statische Fotostory mit echten Kontaktlinks sichtbar
- **AND** ist kein Hauptinhalt dauerhaft transparent oder außerhalb des sichtbaren Layouts versteckt

### Requirement: Mobile resource budget
The page SHALL limit the first needed couple image to 350 KiB, the four selected mobile photo variants to 2.5 MiB combined and initial JavaScript to 120 KiB gzip.

#### Scenario: Payload measurement
- **WHEN** bei deaktiviertem Cache und 390 px Viewport mit DPR 2 die geladenen Ressourcen geprüft werden
- **THEN** entsprechen die vom Browser gewählten Foto-Dateien und das initiale JavaScript den Budgets
- **AND** müssen spätere Bilder nicht vollständig geladen sein, bevor die Einleitung sichtbar ist
- **AND** zählen mehrfach angezeigte identische Bilddateien nur einmal zum Foto-Gesamtbudget

### Requirement: Stable loading and measured performance
The page SHALL achieve a median mobile lab LCP of at most 2.5 seconds and CLS of at most 0.1 across three cold-load runs, with the measurement environment documented.

#### Scenario: Release performance check
- **WHEN** die fertige statische Seite dreimal mit dem mobilen Lighthouse-Standard-Throttling und kaltem Cache gemessen wird
- **THEN** liegen die Medianwerte innerhalb der genannten Grenzen
- **AND** dokumentiert der Prüfbericht Browser, Toolversion, Host und Messergebnisse statt daraus echte Nutzerwerte abzuleiten

### Requirement: Mobile browser verification
The page SHALL be verified on iOS Safari and Android Chrome, with real-device and emulated checks clearly distinguished.

#### Scenario: Device acceptance
- **WHEN** die finale Seite zur Abnahme bereitsteht
- **THEN** wurden Scrollen, Rotation, Bildausschnitte und echte Kontaktaktionen in beiden Browserfamilien geprüft
- **AND** nennt der Bericht pro Prüfung Gerät oder Emulation und Browser
- **AND** werden nicht verfügbare reale Gerätetests als offen ausgewiesen, ohne sie als bestanden zu melden

