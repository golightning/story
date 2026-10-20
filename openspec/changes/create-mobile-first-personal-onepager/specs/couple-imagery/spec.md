# Couple Imagery

## Purpose

Vier vorab generierte, natürliche gemeinsame Paarfotos machen die Seite persönlich und bleiben trotz mobiler Ausschnitte und Animationen in ihrer Bildwirkung nachvollziehbar.

## ADDED Requirements

### Requirement: Four shared scenes
The page SHALL display four final generated photos showing Tolga and his girlfriend together at the beach, a thermal spa, a shisha bar and an FC Barcelona stadium.

#### Scenario: Final photo sequence
- **WHEN** die fertige Fotostrecke durchgesehen wird
- **THEN** sind beide Personen in jeder der vier bestätigten Szenen gemeinsam abgebildet
- **AND** ersetzen weder zwei getrennte Porträts noch beliebige Models ein gemeinsames Bild

### Requirement: Recognizable and natural couple appearance
The final photos SHALL preserve both people's recognizable appearance from their selected references and show natural couple closeness with plausible anatomy.

#### Scenario: Photo quality review
- **WHEN** jedes generierte Foto mit den ausgewählten Einzelreferenzen verglichen wird
- **THEN** stimmen insbesondere Gesicht, Nasen- und Lippenform, Haare und Proportionen hinreichend überein
- **AND** werden fehlerhafte Hände, künstliche Gesichtszüge oder unplausible Körperüberschneidungen vor Integration korrigiert
- **AND** wirkt die Nähe entspannt statt übertrieben inszeniert

### Requirement: Mobile photo composition
The page SHALL preserve both faces in final mobile photo compositions, except during the intentional close-crop phase of the stadium reveal.

#### Scenario: Portrait viewport crops
- **WHEN** die Fotos bei 320, 390 und 430 CSS-Pixeln Breite geprüft werden
- **THEN** bleiben beide Gesichter im jeweils vollständigen Bildzustand sichtbar und sinnvoll positioniert
- **AND** verdecken Text, Browserausschnitte oder Kontaktkarten keines der Gesichter

### Requirement: Requested masculine-feminine couple dynamic
All four photos SHALL portray Tolga with calm, confident masculine presence and his girlfriend with relaxed feminine presence through natural pose, styling and closeness while preserving their reference identities and body proportions.

#### Scenario: Review each scene and mobile crop
- **WHEN** Strand-, Thermen-, Shishabar- und Stadionfoto einschließlich mobiler Ausschnitte geprüft werden
- **THEN** wirkt Tolga ruhig, selbstsicher und männlich und seine Freundin feminin, entspannt und vertraut an seiner Seite
- **AND** vermitteln Körperhaltung, Styling und Nähe diese Wirkung gemäß `assets.md`
- **AND** bleiben Identität, Gesichter und Körperproportionen referenzgetreu
- **AND** variieren die Posen zwischen den Szenen, ohne eine zusätzliche erklärende Website-Sektion zu benötigen

### Requirement: Subtle beach pose detail
The beach photo SHALL show Tolga's upper arm naturally enough to reference the couple's biceps insider without an exaggerated flex pose or altered anatomy.

#### Scenario: Beach pose review
- **WHEN** das finale Strandfoto gegen das Bildbriefing geprüft wird
- **THEN** ist Tolgas Oberarm durch eine entspannte Paarpose dezent sichtbar, beispielsweise mit dem Arm um sie
- **AND** gibt es weder eine isolierte Muskelaufnahme noch Cartoon-Vergrößerung, Flexanimation oder eigene Bizeps-Beschriftung

### Requirement: Accurate relative height
All four photos SHALL use the supplied heights of 187 cm for Tolga and 177 cm for his girlfriend, preserving a natural 10 cm standing height difference while accounting for posture, footwear and perspective.

#### Scenario: Comparable standing pose
- **WHEN** beide aufrecht auf gleicher Bodenhöhe, in vergleichbarer Entfernung zur Kamera und mit vergleichbaren Schuhen stehen
- **THEN** ist Tolga entsprechend den Größenangaben etwas größer als seine Freundin
- **AND** wird der Unterschied nicht künstlich verstärkt oder durch verkleinerte Körperproportionen erzeugt

#### Scenario: Seated or pool composition
- **WHEN** beide sitzen, sich anlehnen oder am Beckenrand positioniert sind
- **THEN** bleiben Körperproportionen und räumliche Anordnung mit 187/177 cm vereinbar
- **AND** wird kein pauschaler 10-cm-Abstand zwischen den Köpfen erzwungen

### Requirement: Descriptive image alternatives
The page SHALL provide concise scene descriptions for meaningful couple photos and avoid redundant announcements for purely decorative repetitions.

#### Scenario: Nonvisual reading
- **WHEN** die Fotostory mit einem Screenreader gelesen wird
- **THEN** wird jede der vier Szenen verständlich beschrieben
- **AND** wird ein nur dekorativ wiederholtes Schlussfoto nicht unnötig erneut vorgelesen

### Requirement: Final web assets only
The published output SHALL contain only the selected final web images, without development placeholders, private reference originals or embedded location metadata.

#### Scenario: Release asset inspection
- **WHEN** der statische Ausgabeordner für die Veröffentlichung geprüft wird
- **THEN** enthält er vier finale Szenenbilder und erforderliche Webvarianten
- **AND** enthält er keine Referenzoriginale, Platzhalterbilder oder GPS-/EXIF-Daten

### Requirement: Robust image loading
The page SHALL reserve photo space before loading and preserve the story's text and contact access if a photo cannot load.

#### Scenario: Slow or failed photo download
- **WHEN** Bilder langsam laden oder ein Bildrequest fehlschlägt
- **THEN** springt die nachfolgende Story nicht durch nachträgliche Größenänderungen
- **AND** bleiben Bildbeschreibung, übrige Story und Kontaktbereich erreichbar
- **AND** bleibt die Seite nicht hinter einem endlosen Ladebildschirm stehen

