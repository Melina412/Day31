// - Aufgabe 1_1 --------------------------------------------------
console.log("%c 1_1 ---------- ", "background: purple; color: white");

let first_name = "Melina";
let last_name = "Schild";

console.log(first_name.length);
console.log(last_name.length);

let full_name = first_name + last_name;
console.log(full_name.length);

// - Aufgabe 1_2 --------------------------------------------------
console.log("%c 1_2 ----------", "background: purple; color: white");

const txt =
  "How inappropriate to call this planet Earth, when clearly it is Ocean.";

console.log(txt.indexOf("h"));
console.log(txt.indexOf("Earth"));
console.log(txt.indexOf("Moon")); // nicht vorhanden

// - Aufgabe 1_3 --------------------------------------------------
console.log("%c 1_3 ----------", "background: purple; color: white");

let txt2 =
  "Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent.";

console.log(txt2.search(";"));
console.log(txt2.search("green"));
console.log(txt2.search("blue"));

// - Aufgabe 1_4 --------------------------------------------------
document.write("<br/><br/>Aufgabe 1_4<br/><br/>");

const A = "Susi is going to codingschool";

let var_1 = A.slice(0, 5);
let var_2 = A.slice(5, 8);
let var_3 = A.slice(5, 17);
let var_4 = A.slice(23);

document.write(var_1 + "<br/>");
document.write(var_2 + "<br/>");
document.write(var_3 + var_4 + "<br/>");
document.write(var_4 + "<br/>");
document.write(var_1 + var_2 + var_4 + "<br/>");

// - Aufgabe 1_7 --------------------------------------------------
document.write("<br/><br/>Aufgabe 1_7<br/><br/>");

const text = "Sam is good at codingschool";

let var_5 = text.replace("good", "bad").replace("codingschool", "school");
let var_6 = text.replace("Sam", "Susi").replace("codingschool", "school");
let var_7 = text.replace("codingschool", "tennis");

document.write(var_5 + "<br/>");
document.write(var_6 + "<br/>");
document.write(var_7 + "<br/>");

// - Aufgabe 1_8 --------------------------------------------------
document.write("<br/><br/>Aufgabe 1_8<br/><br/>");

const text2 = "Sam is going to school";

let var_8 = text2.toUpperCase();
let var_9 = text2.toLowerCase();
let var_10 =
  text2.slice(0, 3).toUpperCase() +
  text2.slice(3, 16) +
  text2.slice(16).toUpperCase();
let var_11 =
  text2.slice(0, 3) + text2.slice(3, 16).toUpperCase() + text2.slice(16);
let var_12 =
  text2.slice(0, 4) +
  text2.slice(4, 5).toUpperCase() +
  text2.slice(5, 7) +
  text2.slice(7, 8).toUpperCase() +
  text2.slice(8, 13) +
  text2.slice(13, 14).toUpperCase() +
  text2.slice(14, 16) +
  text2.slice(16, 17).toUpperCase() +
  text2.slice(17);

document.write(var_8 + "<br/>");
document.write(var_9 + "<br/>");
document.write(var_10 + "<br/>");
document.write(var_11 + "<br/>");
document.write(var_12 + "<br/>");

// - Aufgabe 1_9 --------------------------------------------------
document.write("<br/><br/>Aufgabe 1_9<br/><br/>");

const text_1 = "Sam is going to codingschool";
const text_2 = "Susi";
const text_3 = "and";

let var_13 = text_1
  .slice(0, 16)
  .concat("school ")
  .concat(text_3)
  .concat(" to the movie theater");

let var_14 = text_1.slice(0, 16).concat("the movie theater");
let var_15 = text_2.concat(` ${text_3} Sam are going to school`);
let var_16 = var_15.slice(0, 26).concat("gym and to the movie theater");
let var_17 = text_2.concat(` ${text2.slice(4)} ${text_3} to the movie theater`);

document.write(`${var_13} <br/>`);
document.write(`${var_14} <br/>`);
document.write(`${var_15} <br/>`);
document.write(`${var_16} <br/>`);
document.write(`${var_17} <br/>`);

// - Aufgabe 2_3 --------------------------------------------------

function highlight() {
  const get_text = document.querySelector("article");
  const plain_text = get_text.innerText;

  const plain_word = document.getElementById("search-input").value;

  const highlighted_word = `<span class="highlight">${plain_word}</span>`;

  const highlighted_text = plain_text.replaceAll(plain_word, highlighted_word);
  get_text.innerHTML = highlighted_text;
}
