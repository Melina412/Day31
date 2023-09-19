let vorname = "Anna";
let nachname = "Müller";
let alter = 28;
let geburtsort = "Berlin";
let groesse = 170;
let gewicht = 60;
let hobbys = "Wandern, Lesen, Malen";
let computerspiele = "Minecraft & The Witcher 3";
let lieblingsessen = "Pizza";
let lieblingssport = "Tennis";
let lieblingsmodemarke = "Nike";
let lieblingsjahreszeit = "Herbst";
let lieblingsurlaubsort = "Santorini, Griechenland";

// - String Concatenation -------------------------------------------

document.getElementById("stringConcatenation").innerHTML +=
  "Mein Name ist " +
  vorname +
  " " +
  nachname +
  ", ich bin " +
  alter +
  " Jahre alt und wurde in " +
  geburtsort +
  " geboren. Ich bin " +
  groesse +
  " cm groß und wiege " +
  gewicht +
  " kg. " +
  "In meiner Freizeit genieße ich Hobbys wie " +
  hobbys +
  " und spiele gerne Computerspiele wie " +
  computerspiele +
  ". " +
  "Eines meiner Lieblingsessen ist definitiv " +
  lieblingsessen +
  ", und ich liebe es, " +
  lieblingssport +
  " zu spielen. " +
  "Ich trage gerne Kleidung von " +
  lieblingsmodemarke +
  ", besonders im " +
  lieblingsjahreszeit +
  ". " +
  "Einer meiner absoluten Lieblingsorte für Urlaub ist " +
  lieblingsurlaubsort +
  ".";

//
//
console.log("%c string concatenation:", "background: purple; color: white");
console.log(
  "Mein Name ist " +
    vorname +
    " " +
    nachname +
    ", ich bin " +
    alter +
    " Jahre alt und wurde in " +
    geburtsort +
    " geboren. Ich bin " +
    groesse +
    " cm groß und wiege " +
    gewicht +
    " kg. " +
    "In meiner Freizeit genieße ich Hobbys wie " +
    hobbys +
    " und spiele gerne Computerspiele wie " +
    computerspiele +
    ". " +
    "Eines meiner Lieblingsessen ist definitiv " +
    lieblingsessen +
    ", und ich liebe es, " +
    lieblingssport +
    " zu spielen. " +
    "Ich trage gerne Kleidung von " +
    lieblingsmodemarke +
    ", besonders im " +
    lieblingsjahreszeit +
    ". " +
    "Einer meiner absoluten Lieblingsorte für Urlaub ist " +
    lieblingsurlaubsort +
    "."
);

// - String Concatenation -------------------------------------------

document.getElementById(
  "templateLiterals"
).innerHTML += `Mein Name ist ${vorname} ${nachname}, ich bin ${alter} Jahre alt und wurde in ${geburtsort} geboren. Ich bin ${groesse} cm groß und wiege ${gewicht} kg.

In meiner Freizeit genieße ich Hobbys wie ${hobbys} und spiele gerne Computerspiele wie ${computerspiele}.

Eines meiner Lieblingsessen ist definitiv ${lieblingsessen}, und ich liebe es, ${lieblingssport} zu spielen.

Ich trage gerne Kleidung von ${lieblingsmodemarke}, besonders im ${lieblingsjahreszeit}.

Einer meiner absoluten Lieblingsorte für Urlaub ist ${lieblingsurlaubsort}.`;

//
//
console.log("%c template literals:", "background: purple; color: white");
console.log(`Mein Name ist ${vorname} ${nachname}, ich bin ${alter} Jahre alt und wurde in ${geburtsort} geboren. Ich bin ${groesse} cm groß und wiege ${gewicht} kg.

In meiner Freizeit genieße ich Hobbys wie ${hobbys} und spiele gerne Computerspiele wie ${computerspiele}.

Eines meiner Lieblingsessen ist definitiv ${lieblingsessen}, und ich liebe es, ${lieblingssport} zu spielen.

Ich trage gerne Kleidung von ${lieblingsmodemarke}, besonders im ${lieblingsjahreszeit}.

Einer meiner absoluten Lieblingsorte für Urlaub ist ${lieblingsurlaubsort}.`);
