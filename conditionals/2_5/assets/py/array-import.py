import csv

#  Öffnen der CSV-Datei zum Lesen mit angepassten Trennzeichen
with open('bundeslaender.csv', newline='', encoding='utf-8') as csvfile:
    reader = csv.DictReader(csvfile, delimiter=';')

    # Konvertieren der CSV-Daten in eine Liste von Dictionaries
    data = [row for row in reader]

# Daten zur Überprüfung printen
for row in data:
    print(row)

import json

#  Daten in JSON konvertieren
json_data = json.dumps(data, ensure_ascii=False, indent=2)

# Schreiben der JSON-Daten in die JavaScript-Datei
with open('bundeslaender.js', 'w', encoding='utf-8') as jsfile:
    jsfile.write('const bundeslaenderDaten = ')
    jsfile.write(json_data)
    jsfile.write(';')