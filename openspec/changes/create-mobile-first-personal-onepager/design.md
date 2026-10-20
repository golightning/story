# Design

## Context

Siehe `proposal.md` für Ziel und Umfang. Das Zielgerät ist ein Smartphone im Hochformat. Es gibt noch keinen ausgewählten Projekt-Checkout, keine finalen Bildassets und keine für diese Seite zusammengestellten Kontaktdaten. Die Umsetzung erfolgt später mit Claude Code.

### Verbindlich aus dem Gespräch

- Mobile First, voraussichtlich 99 % Handynutzung.
- Cool, persönlich, visuell hochwertig, mit trockenem Humor; keine sentimentalen Texte.
- Echte Paarwirkung in generierten gemeinsamen Fotos ist ausdrücklich erwünscht.
- Alle vier Fotos vermitteln die gewünschte Dynamik: Tolga männlich, ruhig und selbstsicher; sie feminin, entspannt und vertraut an seiner Seite. Das ist eine Bildvorgabe, kein erklärender Website-Text.
- Szenen: Strand, Therme, Shishabar und FC-Barcelona-Stadion.
- Scrollen und Animationen tragen den Ablauf.
- Dramatischer Einstieg, Scroll-Pointe, Zeitaufwand-Gag, falsches Ende und Kontakt-Eskalation sind akzeptiert.
- Überforderte Dönerladenbetreiber, Pressekonferenz, Fahndungsfoto, herumfliegende Köpfe und Beziehungs-Beweissammlung sind verworfen.

### Zusätzliche Arbeitsentscheidungen dieses Designs

- Statisches HTML/CSS/JavaScript als Standard; eine vorhandene passende Projektstruktur kann übernommen werden.
- Kein verpflichtendes 3D. img2threejs war eine Idee, kein Muss. 3D gehört nicht zum initialen Umfang.
- Das Stadionfoto übernimmt die Scroll-Enthüllung. Ein zusätzlicher Meme-Asset ist für die erste Version nicht nötig.
- Das stärkste der vier Paarfotos wird nach dem falschen Ende als Schlussbild wiederverwendet; ein fünftes Foto ist nicht erforderlich.
- Keine Musik oder automatische Tonwiedergabe in der ersten Version.
- Eine dunkle, kontrastreiche Bildstrecke mit heller großer Schrift und höchstens einer Akzentfarbe ist der Ausgangspunkt. Die konkrete visuelle Ausarbeitung bleibt flexibel.
- Die Insider aus `insiders.md` werden sparsam in bestehende Inhalte integriert. Der Nutzer hat auch die drei ergänzenden Details für WhatsApp, Strandpose und Blonde-Edition-Legende zum Einbauen ausgewählt. Es entstehen keine zusätzlichen Story-Sektionen.

## Goals / Non-Goals

**Goals:**

- Auf dem Handy von der ersten Sekunde an eine gut gestaltete, persönliche Überraschung liefern.
- Mit wenigen Bildern und wenigen guten Gags eine vollständige Geschichte erzählen.
- Natives Scrollen beibehalten und Bilder trotz Bildschirmformaten und Browserleisten zuverlässig darstellen.
- Einfache statische Veröffentlichung und spätere Pflege der Assets und Kontakte ermöglichen.

**Non-Goals:**

- Keine klassische Landingpage, Liebeserklärung, Therapie- oder Stimmungsreparatur-Oberfläche.
- Keine Spiele, Aufgaben für die Freundin, Ratings, Beziehungstests oder Pflichtinteraktionen.
- Kein Backend, Login, Tracking, Kontaktformular oder Versand im Hintergrund.
- Kein verpflichtendes 3D und keine neue komplexe Framework-Architektur nur für diese Seite.

## Decisions

### 1. Mobile Layout zuerst

Zuerst das Layout bei 390 CSS-Pixeln Breite ausarbeiten. Danach 320, 360, 375 und 430 px prüfen und korrigieren. Tablet und Desktop werden anschließend daraus abgeleitet. Auf großen Bildschirmen eine bewusst begrenzte Bildbühne statt unkontrolliert vergrößerter Handyfotos verwenden.

Einspaltiger Ablauf; Bilder und Kontaktkarten werden nie auf zwei Spalten verteilt, wenn dadurch ihre mobile Reihenfolge verändert wird. Fließtext mindestens 16 px, ergänzende Beschriftungen mindestens 14 px. Interaktive Flächen mindestens 44 × 44 CSS-Pixel; ausreichender Abstand verhindert Fehlbedienungen.

Für ruhige bildschirmhohe Szenen ist `svh` ein Ausgangspunkt. `dvh` nur dort einsetzen, wo die Veränderung durch Browserleisten keine Sprünge erzeugt. Lange Texte und Kontakte dürfen über eine Bildschirmhöhe wachsen. Safe-Area-Abstände berücksichtigen. Keine globale fixe Seitenhöhe.

### 2. Storyboard und Rhythmus

| Reihenfolge | Inhalt | Scroll-Verhalten | Text / Funktion |
| --- | --- | --- | --- |
| 1 | Ruhiger, groß gesetzter Einstieg | Schrift bewegt sich leicht; ein Bildfenster öffnet sich beim Weiterscrollen | „Ich muss dir kurz was zeigen“ Danach „Hatte Langeweile“ |
| 2 | Strandfoto | Kurzer ruhiger Bildmoment, sanfter Übergang | Kein Pflichtspruch; Bild darf wirken |
| 3 | Thermenfoto | Nächste Bildebene schiebt sich darüber oder einfacher Übergang | Keine sentimentale Bildunterschrift |
| 4 | Zeitaufwand-Gag | Textzustände wechseln in einem begrenzten Scrollabschnitt | „Das hat übrigens fünf Minuten gedauert.“ → „zwanzig“ → „Zeit ist ein schwieriges Konzept“ |
| 5 | Shishabar-Foto | Bild aus einem Ausschnitt vollständig enthüllen | Ruhiger Moment ohne weiteren Gag |
| 6 | Stadionfoto als Scroll-Enthüllung | Von Tolgas Gesicht zu beiden Personen und dann zur Stadionkulisse herauszoomen | Kein zusätzlicher erklärender Witz nötig |
| 7 | Falsches Ende | Kurzer Abstand, danach klar erkennbare Fortsetzung | „Das war’s“ → „Fast“ |
| 8 | Stärkstes Paarfoto | Ruhig und groß; bestehendes Foto wiederverwenden | Kein Text über den Gesichtern |
| 9 | Kontakt-Finale | Karten erscheinen und stapeln sich, bleiben erreichbar | „Falls du dazu etwas sagen möchtest“ |

Die neun Beats sind keine neun langen Pflichtsektionen. Kurze Textbeats dürfen in benachbarte Bildübergänge integriert werden. Ziel ist eine kurze Erfahrung, keine künstlich verlängerte Scrollstrecke. Ohne absichtliche Pausen soll man in etwa 1–3 Minuten bequem bis zum Ende gelangen; dies ist ein Rhythmusziel, kein Timer.

Das falsche Ende erhält höchstens ungefähr eine halbe Bildschirmhöhe Abstand bis zur sichtbaren Fortsetzung. Keine langen leeren Bereiche, die wie ein Ladefehler wirken. Witze über ihren Gemütszustand entfallen.

#### Persönliche Ergänzungen ohne zusätzliche Scrollstrecke

Die Insidernotizen sind in `insiders.md` festgehalten. Drei kurze Anspielungen bilden die ursprüngliche Auswahl:

- **Beim Einstieg, nach der Auflösung:** „Ganz nach unten scrollen? Sen yapamasin“ Als kurze Nebenzeile, nicht als Aufgabe oder Zugangssperre. Die Schreibweise folgt bewusst Tolgas eigener Formulierung; keine ungefragte Sprachkorrektur.
- **Als kleine Bildlegende beim Strandfoto:** „Erstes Date: Standstreifen. ADAC war auch dabei“ Das ist eine Rückblende auf die tatsächliche Vorgeschichte, keine Behauptung über das Strandbild. Falls die Zuordnung missverständlich wirkt, die Legende unmittelbar vor dem Foto als eigenen kurzen Satz setzen. Kein zusätzliches Pannenfoto, keine künstliche Rettungsgeschichte und kein „Ich habe dich gerettet“.
- **Nach dem Kontakt-Finale, als letzte kleine Zeile:** „Guten Morgen. Oder gute Nacht. Ja, musste sein“ Kein klassischer Footer, kein Zeitabgleich und keine spätere Benachrichtigung.

Die vom Nutzer anschließend zum Einbauen ausgewählten Ergänzungen kommen sparsam an diese Stellen:

- **Im Strandfoto:** Tolgas Bizeps ist durch einen entspannt sichtbaren Oberarm erkennbar, beispielsweise mit dem Arm um sie. Keine Flexpose und keine zusätzliche Beschriftung für den Muskel.
- **Beim Shishabar-Foto:** Einmal die kleine Bildlegende „Türkin. Blonde Edition“ außerhalb der Gesichter. Ihre tatsächliche blonde Haarfarbe bleibt erhalten. Keine weitere Erklärung oder eigene Sektion.
- **Bei WhatsApp:** Die bestehende Beschriftung wird durch „Auch für Bilder von dir“ ersetzt. Kein zusätzlicher Button und keine Aufforderung, ein Bild zu schicken.

Diese Details sind nun Teil des Entwurfs, keine unverwendeten Optionen. Ihre Mutter, fehlende Zeit und Ghosting werden weiterhin nicht als Inhalt oder Pointe verwendet. Die Seite behält dieselbe Scrollstrecke und dieselben vier Fotos.

### 3. Native Scrollposition statt eigener Gestensteuerung

CSS und kleine JavaScript-Erweiterungen sind der Standard. Ein einzelnes Animationswerkzeug ist zulässig, wenn es komplexe Bildübergänge vereinfacht und das Ressourcenbudget einhält. Keine Glättungsbibliothek, die den nativen Scrollvorgang ersetzt. Touchmove und Wheel nicht blockieren, kein verpflichtendes Scroll-Snap.

Sticky-Bereiche bleiben kurz: pro Bildenthüllung oder Gag höchstens 1,5 zusätzliche Bildschirmhöhen Scrollweg. Der Bühneninhalt muss dabei sichtbar fortschreiten. Bei kleinem Querformat oder Platzproblemen auf einfache Übergänge umstellen. Das finale Kontaktziel darf nicht hinter überlagerten Sticky-Ebenen liegen.

Reverse-Scroll stellt den passenden sichtbaren Zustand wieder her. Resize oder Wechsel ins Querformat darf keine verdoppelten Animationsinstanzen erzeugen. Bevorzugt `transform` und `opacity` animieren; keine kontinuierlichen Layout-Messungen während jeder Bewegung.

### 4. Progressive Enhancement und Reduced Motion

Semantisches HTML enthält von Anfang an alle Bilder, Texte und echten Links in Lesereihenfolge. JavaScript darf Inhalte nicht dauerhaft unsichtbar machen. Bei fehlender Animationsunterstützung bleibt eine vollständige statische Fotostory.

Bei `prefers-reduced-motion: reduce` Zoom, Parallax, räumliche Bewegungen und lange Sticky-Inszenierungen abschalten. Die Bildenthüllung wird zum vollständigen Foto, der Zeitwitz zu einer kurzen lesbaren Textfolge und das falsche Ende zu zwei normalen Textblöcken. Informationen und Kontakte bleiben identisch.

### 5. Fotoauswahl und Verarbeitung

Die vier Bildbriefings stehen in `assets.md`. Zuerst die Qualität der Gesichter und die gemeinsame Bildwirkung prüfen, dann die Scroll-Effekte darauf abstimmen. Jedes Foto bekommt pro Person einen kontrollierten Fokuspunkt und bei Bedarf einen eigenen mobilen Export. Der Stadion-Master muss genügend Auflösung für den Startausschnitt haben.

Die aktuellen Größenangaben sind verbindlich: Tolga 187 cm, seine Freundin 177 cm. Die Relation von 10 cm wird für alle Szenen berücksichtigt. Bei vergleichbarem Stand ist er etwas größer; bei Sitz- und Poolszenen ergeben sich sichtbare Kopfpositionen aus Pose und Perspektive. Der Größenunterschied wird nicht künstlich verstärkt, um die gewünschte Paardynamik zu erzeugen.

Die vom Nutzer ausdrücklich gewünschte männlich-feminine Paardynamik gilt in jeder Szene. Tolga erhält eine ruhige, aufrechte, selbstsichere Haltung und natürliche Präsenz, etwa mit einem entspannten Arm um sie. Sie erhält eine feminine, zur Szene passende Ausstrahlung, eine entspannte Haltung und vertraute Nähe, etwa indem sie sich leicht an ihn lehnt. Kleidung, Licht und Pose unterstützen diese Wirkung; Identität und reale Körperproportionen werden dafür nicht verändert. Die vier Posen variieren, damit keine wiederholte Studiopose entsteht. Die Wirkung bleibt auch im mobilen Bildausschnitt erkennbar.

Portrait-Ausschnitte bevorzugen. Responsive Exporte und deklarierte Bildabmessungen verhindern unnötige Downloads und Layoutsprünge. Die ersten sichtbaren Inhalte priorisieren; spätere Fotos bedarfsgerecht laden. Keine gesamte Galerie als Lade-Voraussetzung vor den Einstieg stellen.

Arbeitsbudgets für das mobile Profil: früh benötigtes Paarfoto maximal 350 KiB, alle vier mobilen Foto-Dateien zusammen maximal 2,5 MiB und initiales JavaScript maximal 120 KiB gzip. Ein alternativer Bildexport darf das Gewicht senken; Gesichter dürfen dadurch nicht sichtbar zerfallen. Details der Messung stehen im Mobile-Spec.

Referenzfotos, Originale, Bildprompts, private Briefingdateien einschließlich `insiders.md` und ungenutzte Hochauflösungsdateien gehören nicht in den veröffentlichten Ausgabeordner. Nur fertige Webassets ausliefern. Vor Veröffentlichung EXIF-/GPS-Daten entfernen. Bei einem öffentlichen Quellrepository auch das private Briefing nicht mit veröffentlichen; für ein solches Ziel nur die statische Ausgabe bereitstellen.

### 6. Kontaktkonfiguration und Fallbacks

Ein gemeinsamer lokaler Datensatz enthält Typ, Beschriftung und den echten Zielwert. Nicht ausgefüllte echte Kanäle werden im Entwicklungsstand als fehlender Inhalt dokumentiert und im fertigen Kontaktbereich nicht als leere Links angezeigt.

| Typ | Aktion | Beschriftungsbeispiel |
| --- | --- | --- |
| WhatsApp | HTTPS-Chatlink zur international normalisierten Nummer | „Auch für Bilder von dir“ |
| Telefon | `tel:` mit internationaler Nummer | „Für besonders dringenden Quatsch“ |
| SMS | `sms:` mit internationaler Nummer, ohne komplizierte Body-Parameter | „Falls wir wieder 2008 haben“ |
| Instagram | HTTPS-Link zum tatsächlichen Profil | „Andere App, gleicher Typ“ |
| Snapchat | HTTPS-Profillink | „Auch hier erreichbar“ |
| E-Mail | `mailto:` zur echten Adresse | „Bitte mit aussagekräftigem Betreff“ |
| Fax | Lokaler Button, keine echte Nummer | „Gerät befindet sich noch in Beschaffung“ |
| Brieftaube | Lokaler Button, keine Standortabfrage | „Standortfreigabe erforderlich“ |

Fax und Brieftaube öffnen eine kurze Inline-Rückmeldung, beispielsweise „Papierstau“ oder „Taube hat Feierabend“ Keine Browser-Alerts, kein automatischer Versand und keine Berechtigungsabfrage. Bei deaktiviertem JavaScript ist die trockene Erklärung bereits lesbar; nur die zusätzliche Reaktion entfällt. Eine Option zum Kopieren der Telefonnummer ergänzt Telefon/SMS. Scheitert Clipboard-Zugriff, die Nummer auswählbar anzeigen.

### 7. Statische Auslieferung

Buildless-Dateien sind der Standard; relative Assetpfade für einen möglichen Projekt-Unterpfad verwenden. Bei vorhandenem Buildtool dessen statischen Export übernehmen. Alle fürs Anzeigen notwendigen Fonts und Assets lokal ausliefern. Keine privaten API-Schlüssel im Browser.

GitHub Pages ist eine Hosting-Arbeitsannahme. Kein Betrieb des lokalen Laptops als Voraussetzung für den finalen Link. Eine öffentliche URL ist keine Zugangsbeschränkung: nur bewusst zur Veröffentlichung ausgewählte Bilder und Kontakte in die Ausgabe aufnehmen. Keine zusätzliche Anmeldung im Produktablauf vorsehen.

## Risks / Trade-offs

- [KI-Gesichter wirken fremd] → Referenzen gezielt auswählen und Gesichter vor der Webintegration prüfen; fehlerhafte Bilder neu erzeugen.
- [Mobile Browserleisten oder Sticky-Flächen verdecken Inhalte] → mehrere schmale Formate, reales Safari und Querformat prüfen; bei Problemen einfachere Übergänge verwenden.
- [Bilder laden zu langsam] → mobile Exporte, feste Größen, frühe Priorisierung und nachgelagerte Downloads einsetzen.
- [Mehr Animation macht das Scrollen langwierig] → kurze Effekte mit sichtbarem Fortschritt, keine Pflichtwartezeit und Reduced-Motion-Version.
- [App-Verknüpfung öffnet nicht die erwartete App] → webfähige Profilziele verwenden und Telefonnummer zusätzlich kopierbar machen.

## Migration Plan

Es gibt keine Datenmigration. Zuerst mit lokalen Platzhaltern das mobile Grundlayout implementieren, danach finalisierte Fotos und Kontakte integrieren. Statischen Ausgabeordner prüfen und anschließend hosten. Bei einer fehlerhaften Veröffentlichung vorherigen statischen Stand wieder bereitstellen.

## Open Content Inputs

Diese Inhalte ändern die Architektur nicht und werden vor dem finalen Release ergänzt:

- Ausgewählte Referenzfotos beider Personen und vier fertige Paarbilder.
- Echte Nummer, E-Mail-Adresse und die tatsächlich gewünschten Profil-URLs.
- Endgültiger Seitenname und Hosting-Ziel.

