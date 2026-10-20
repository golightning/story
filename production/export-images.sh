#!/bin/sh
# Erzeugt Web-Varianten der vier finalen Paarfotos in site/img/.
# Quelle: production/final/<id>.(jpg|jpeg|png|heic), Hochformat 4:5.
# cwebp schreibt standardmäßig keine Metadaten -> kein EXIF/GPS im Output.
set -eu
cd "$(dirname "$0")/.."
src=production/final
out=site/img
tmp=$(mktemp -d)
trap 'rm -rf "$tmp"' EXIT

widths_for() {
  case "$1" in
    barca) echo "1200 1800 2400 3200" ;; # Zoomstart braucht Reserven
    *)     echo "640 960 1440" ;;
  esac
}

for id in beach spa shisha barca; do
  f=$(ls "$src/$id".* 2>/dev/null | head -1 || true)
  if [ -z "$f" ]; then echo "fehlt: $src/$id.*"; continue; fi
  # nie hochskalieren: Breiten über dem Original entfallen, das Original selbst ist dann die größte Variante
  sw=$(sips -g pixelWidth "$f" | awk '/pixelWidth/ {print $2}')
  ws=""
  for w in $(widths_for "$id"); do
    if [ "$w" -lt "$sw" ]; then ws="$ws $w"; else ws="$ws $sw"; break; fi
  done
  for w in $ws; do
    sips -s format png --resampleWidth "$w" "$f" --out "$tmp/$id-$w.png" >/dev/null
    cwebp -quiet -q 74 -m 6 -metadata none "$tmp/$id-$w.png" -o "$out/$id-$w.webp"
    printf '%-8s %5spx %6s KiB\n' "$id" "$w" $(( $(wc -c < "$out/$id-$w.webp") / 1024 ))
  done
done
echo "Danach in site/index.html die Platzhalter durch die echten Bilder ersetzen (siehe production/README.md)."
