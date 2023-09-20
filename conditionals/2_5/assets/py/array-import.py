import csv

#  csv datei öffnen (read) und trennzeichen anpassen
with open('bundeslaender.csv', newline='', encoding='utf-8') as csvfile:
    reader = csv.DictReader(csvfile, delimiter=';')

    # konvertieren in eine liste mit dictionaries
    data = [row for row in reader]

# print um zu prüfen ob es richtig geklappt hat
for row in data:
    print(row)

import json

#  daten in json konvertieren
json_data = json.dumps(data, ensure_ascii=False, indent=2)

# schreiben der json-daten in eine js-datei
with open('bundeslaender.js', 'w', encoding='utf-8') as jsfile:
    jsfile.write('const bundeslaenderDaten = ')
    jsfile.write(json_data)
    jsfile.write(';')