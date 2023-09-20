const dataBundeslaender = [
  {
    Bundesland: "Baden-Württemberg",
    Info: "Baden-Württemberg hat 10.880 Mio Einwohner und Stuttgart ist die Hauptstadt",
    "": "",
  },
  {
    Bundesland: "Bayern",
    Info: "Bayern hat 12.844 Mio Einwohner und München ist die Hauptstadt",
    "": "",
  },
  {
    Bundesland: "Berlin",
    Info: "Berlin hat 3.520 Mio Einwohner und Berlin ist die Hauptstadt",
    "": "",
  },
  {
    Bundesland: "Brandenburg",
    Info: "Brandenburg hat 2.485 Mio Einwohner und Potsdam ist die Hauptstadt",
    "": "",
  },
  {
    Bundesland: "Bremen",
    Info: "Bremen hat 0.671 Mio Einwohner und Bremen ist die Hauptstadt",
    "": "",
  },
  {
    Bundesland: "Hamburg",
    Info: "Hamburg hat 1.787 Mio Einwohner und Hamburg ist die Hauptstadt",
    "": "",
  },
  {
    Bundesland: "Hessen",
    Info: "Hessen hat 6.176 Mio Einwohner und Wiesbaden ist die Hauptstadt",
    "": "",
  },
  {
    Bundesland: "Mecklenburg-Vorpommern",
    Info: "Mecklenburg-Vorpommern hat 1.612 Mio Einwohner und Schwerin ist die Hauptstadt",
    "": "",
  },
  {
    Bundesland: "Niedersachsen",
    Info: "Niedersachsen hat 7.927 Mio Einwohner und Hannover ist die Hauptstadt",
    "": "",
  },
  {
    Bundesland: "Nordrhein-Westfalen",
    Info: "Nordrhein-Westfalen hat 17.865 Mio Einwohner und Düsseldorf ist die Hauptstadt",
    "": "",
  },
  {
    Bundesland: "Rheinland-Pfalz",
    Info: "Rheinland-Pfalz hat 4.053 Mio Einwohner und Mainz ist die Hauptstadt",
    "": "",
  },
  {
    Bundesland: "Saarland",
    Info: "Saarland hat 0.996 Mio Einwohner und Saarbrücken ist die Hauptstadt",
    "": "",
  },
  {
    Bundesland: "Sachsen",
    Info: "Sachsen hat 4.085 Mio Einwohner und Dresden ist die Hauptstadt",
    "": "",
  },
  {
    Bundesland: "Sachsen-Anhalt",
    Info: "Sachsen-Anhalt hat 2.245 Mio Einwohner und Magdeburg ist die Hauptstadt",
    "": "",
  },
  {
    Bundesland: "Schleswig-Holstein",
    Info: "Schleswig-Holstein hat 2.859 Mio Einwohner und Kiel ist die Hauptstadt",
    "": "",
  },
  {
    Bundesland: "Thüringen",
    Info: "Thüringen hat 2.171 Mio Einwohner und Erfurt ist die Hauptstadt",
    "": "",
  },
];

function check() {
  const inputElement = document.getElementById("bundeslandInfo");
  const outputElement = document.getElementById("bundeslandInfoErgebnis");

  const eingabe = inputElement.value;

  const datensatz = dataBundeslaender.find(
    (item) => item.Bundesland === eingabe
  );

  if (datensatz) {
    // Bundesland gefunden, zeige die Info an
    outputElement.textContent = datensatz.Info;
  } else {
    // Bundesland nicht gefunden
    outputElement.textContent =
      "Ein solches Bundesland gibt es in Deutschland nicht.";
  }
}
