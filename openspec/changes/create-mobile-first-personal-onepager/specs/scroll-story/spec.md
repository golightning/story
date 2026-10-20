# Scroll Story

## Purpose

Die persönliche Fotostory führt durch eine kurze Folge aus visuellen Enthüllungen, trockenen Textgags und einem Kontakt-Finale, ohne klassische Website-Navigation zu benötigen.

## ADDED Requirements

### Requirement: Ordered story
The page SHALL present the dramatic intro, couple-photo sequence, time-effort gag, stadium reveal, false ending, closing photo and contact finale in the order defined by the storyboard.

#### Scenario: Complete scroll journey
- **WHEN** die Besucherin von oben bis zum tatsächlichen Seitenende scrollt
- **THEN** erlebt sie alle Story-Beats in der Reihenfolge aus `design.md`, einschließlich Strand, Therme, Shishabar und Stadion
- **AND** ist weder ein Menü noch ein Button erforderlich, um die Geschichte fortzusetzen

### Requirement: Dramatic intro with banal payoff
The page SHALL open with an exaggerated visual buildup and resolve it with the short, dry payoff about having spare time.

#### Scenario: Intro reveal
- **WHEN** die Besucherin den ersten Abschnitt nach unten scrollt
- **THEN** geht „Ich muss dir kurz was zeigen“ in eine hochwertige visuelle Enthüllung über
- **AND** erscheint die banale Auflösung „Hatte Langeweile“ vor oder beim ersten Paarbild
- **AND** gibt es weder einen Countdown noch eine vorgeschriebene Wartezeit

### Requirement: Stadium scroll reveal
The page SHALL reveal the stadium photo from a close crop of Tolga to both people and finally the stadium context, with a complete-photo fallback when motion is reduced or unsupported.

#### Scenario: Animated reveal
- **WHEN** die Besucherin den Stadionabschnitt mit aktivierter Bewegung durchscrollt
- **THEN** wird zuerst Tolgas Gesicht, dann das Paar und anschließend die Stadionkulisse sichtbar
- **AND** bleibt der Bildausschnitt bei Rückwärtsscrollen passend zur Scrollposition

#### Scenario: Static reveal
- **WHEN** reduzierte Bewegung aktiv ist oder Scrollanimationen nicht verfügbar sind
- **THEN** erscheint das vollständige Paarfoto mit Stadionkulisse ohne erforderlichen Zoom

### Requirement: Time-effort joke
The page SHALL include one short joke whose estimate of the creation time changes while scrolling, without presenting a real timer.

#### Scenario: Escalating estimate
- **WHEN** die Besucherin den Zeitaufwand-Beat durchscrollt
- **THEN** entwickelt sich „Das hat übrigens fünf Minuten gedauert.“ über „zwanzig“ zu „Zeit ist ein schwieriges Konzept“
- **AND** ist jeder Zustand bei normalem Scrolltempo lesbar

#### Scenario: Joke without animation
- **WHEN** Bewegung reduziert oder JavaScript deaktiviert ist
- **THEN** bleibt die Aussage als kurze statische Textfolge verständlich

### Requirement: False ending and closing image
The page SHALL include a brief false ending followed by a strong couple photo and the contact finale, without excessive blank space.

#### Scenario: Continue after apparent ending
- **WHEN** „Das war’s“ sichtbar wird und die Besucherin weiter nach unten scrollt
- **THEN** folgt innerhalb höchstens ungefähr einer halben Bildschirmhöhe „Fast“
- **AND** erscheinen anschließend das Schlussbild und die Kontaktmöglichkeiten
- **AND** wird kein fünftes Foto vorausgesetzt, weil eines der vier Szenenbilder wiederverwendet werden kann

### Requirement: Dry personal tone
The page SHALL use short, dry humor and cool couple imagery without sentimentality, mood commentary or rejected gag concepts.

#### Scenario: Editorial review
- **WHEN** alle sichtbaren Texte und Motive gegen das Briefing geprüft werden
- **THEN** enthalten sie keine Aufforderung zu lächeln, keinen Gefühlsvortrag und keine Witze über ihren Gemütszustand
- **AND** gibt es keine herumfliegenden Köpfe, Paar-Minispiele, Beziehungs-Beweissammlung oder verworfenen Fantasieszenarien

### Requirement: Personal insider annotations
The page SHALL integrate the selected insider references into existing beats, including one small Blonde Edition caption, without adding required interaction, extra scroll sections or pressure to respond.

#### Scenario: Running gag at the intro
- **WHEN** die kurze Nebenzeile nach dem Einstieg erscheint
- **THEN** greift sie „Sen yapamasin“ in der vom Nutzer gelieferten Schreibweise als spielerische Provokation auf
- **AND** läuft die Geschichte unabhängig von einer Antwort oder Aktion normal weiter

#### Scenario: First-date reference
- **WHEN** die Rückblende beim ersten Paarfoto lesbar wird
- **THEN** verweist sie knapp auf den Standstreifen und ADAC beim ersten Date
- **AND** behauptet sie weder eine Rettungsleistung noch zeigt sie eine erfundene gefährliche Autobahnszene

#### Scenario: Closing greeting
- **WHEN** die Besucherin das tatsächliche Ende nach den Kontaktkarten erreicht
- **THEN** erscheint der kurze Guten-Morgen/Gute-Nacht-Gag als persönliche letzte Zeile
- **AND** löst er keine Nachricht oder Benachrichtigung aus

#### Scenario: Blonde Edition caption
- **WHEN** das Shishabar-Foto sichtbar wird
- **THEN** steht einmal die kleine lesbare Legende „Türkin. Blonde Edition“ außerhalb der Gesichter
- **AND** erzeugt sie weder einen weiteren Story-Beat noch zusätzliche Scrollstrecke

#### Scenario: Background stays out of the published story
- **WHEN** die sichtbare Seite und ihre ausgelieferten Dateien geprüft werden
- **THEN** thematisieren sie weder die Erkrankung ihrer Mutter noch fehlende Zeit oder ausbleibende Rückrufe
- **AND** verlangen sie keine Antwort, Bilder oder Gegenleistung
- **AND** bleiben die ausgewählten Bilddetails und Texte innerhalb der vorhandenen Story-Beats

