# Bildprompts für die vier Paarfotos

Privat. Gehört nicht in `site/`. Grundlage: `openspec/changes/create-mobile-first-personal-onepager/assets.md`.

## Vorgehen

1. Pro Person 2–4 gute, aktuelle Referenzen auswählen (Gesicht frontal und im Halbprofil, gutes Licht):
   - Tolga: aus `bilder/er/` (HEIC; bei Bedarf mit `sips -s format jpeg IN --out OUT.jpg` konvertieren)
   - Sie: aus `bilder/sie/`
   - Keine früheren KI-Generierungen als Identitätsvorlage verwenden.
2. Dieselben Referenzen für alle vier Szenen nutzen.
3. Prompt in ein identitätserhaltendes Bildmodell geben (Referenzbilder anhängen).
4. Jedes Ergebnis gegen die „Prüfung pro Bild“ in `assets.md` prüfen; schlechte Hände, fremde Gesichter → neu erzeugen.
5. Bestes Ergebnis als JPG/PNG in hoher Auflösung ablegen unter `production/final/<id>.jpg` (`beach`, `spa`, `shisha`, `barca`). Dann `production/export-images.sh` ausführen (erzeugt Webvarianten ohne EXIF in `site/img/`).

Format: **Hochformat 4:5**, mindestens 2000 × 2500 px. Stadion: mindestens 3200 × 4000 px (der Zoom startet etwa 3-fach auf Tolgas Gesicht und muss bei DPR 3 scharf bleiben).

## Gemeinsamer Block (an jeden Prompt anhängen)

> Photorealistic candid couple photo, looks like a great smartphone or travel photo, not a studio shoot. The man is the person in the first reference set, the woman is the person in the second reference set; preserve both identities exactly: face shape, nose, lips, hairline, hairstyle, her natural blonde hair. Both are adults. Heights: he is 187 cm, she is 177 cm; both tall, he is slightly taller when standing on equal ground, do not exaggerate the difference. He has a calm, upright, confident masculine presence; she has a relaxed feminine presence, close and comfortable at his side. Natural closeness, no kissing pose, no hearts, no text, no watermark. Plausible hands and anatomy. Portrait 4:5, both faces well inside the frame, not at the edges, readable when cropped to a narrow phone screen.

## beach – Strand

> Together on a beach in late warm natural light, holiday feeling. He stands relaxed and upright with one arm around her shoulders, his upper arm and biceps naturally visible because of the pose (no flexing, no enlarged muscles). She leans lightly into him. Eyes clearly visible. Sea and sand softly out of focus behind them.

## spa – Therme

> At the edge of a steaming outdoor thermal pool in the evening. He rests relaxed at the pool edge, she sits close at his side. Normal swimwear, believable warm pool lighting, gentle steam that does not cover the faces. Leave calm space above the heads and below the shoulders.

## shisha – Shishabar

> Sitting together on a couch in a dark shisha lounge, subtle direct-flash look, relaxed direct look into the camera. He sits at ease with one arm behind her or around her; she sits relaxed and close to him, feminine evening styling. Smoke may drift but never covers the faces. No text in the image.

## barca – FC-Barcelona-Stadion

> In the stands of the FC Barcelona stadium, both wearing FC Barcelona jerseys, arm around each other. He has a confident relaxed posture with his arm around her, she is slightly turned toward him or leaning in. The pitch and the stadium bowl are clearly visible behind them. No specific match day, no construction. Very high resolution; his face must stay sharp when cropped tightly.
