let addCountr = false;
let remCountr = false;
let remPoz = 0;
const countries = [
  "United States",
  "China",
  "India",
  "Indonesia",
  "Brazil",
  "Pakistan",
  "Nigeria",
  "Bangladesh",
  "Russia",
  "Mexico",
  "Japan",
  "Philippines",
  "Vietnam",
  "Ethiopia",
  "Egypt",
  "Iran",
  "Turkey",
  "Democratic Republic of the Congo",
  "Thailand",
  "Myanmar",
];
// FUNCTION checkCountry**************************************
function checkCountry(country, countries) {
  if (typeof country == "string") {
    if (country.length > 0) {
      console.log("Zadán platný dotaz " + "'" + country + "',");
      for (let i = 0; i < countries.length; i++) {
        if (country === countries[i]) {
          console.log(
            "a zadaná krajina " +
              country +
              " se nachází v seznamu krajin na indexu " +
              i +
              "."
          );
          remCountr = true;
          remPoz = i;
          return;
        }
      }
      console.log(
        "ale zadaná krajina " + country + " se nenachází v seznamu krajin."
      );

      addCountr = true;
    } else {
      console.log(
        "Zadán neplatný dotaz ''" + country + ", string má nulovou délku."
      );
    }
  } else {
    console.log("Zadán neplatný dotaz " + country + ", není typu string.");

    return;
  }
}
// FUNCTION addCountry**************************************
function addCountry(country, countries) {
  countries.push(country);
  console.log(
    "Zadaná krajina " +
      country +
      " byla úspěšně přidaná do seznamu krajin na indexu " +
      (countries.length - 1) +
      "."
  );
  console.log("Celkový počet krajin v seznamu je " + countries.length + ".");
}
// FUNCTION removeCountry**************************************
function removeCountry(country, countries) {
  countries.splice(remPoz, 1);
  console.log(
    "Zadaná krajina " +
      country +
      " byla odstraněna ze seznamu krajin na indexu " +
      remPoz +
      "."
  );
  console.log("Celkový počet krajin v seznamu je " + countries.length + ".");
}
// Projekt č.2: Zadání projektu - část pole, PRVNÍ část
// Pro kontrolu správnosti zavolej funkci s parametry:
// checkCountry("Germany", countries);
// checkCountry("Japan", countries);
// checkCountry(1000, countries);
// checkCountry("", countries);
console.log("Projekt č.2:");
console.log("Zadání projektu - část pole,");
console.log("PRVNÍ část");
console.log("===============================================================");
checkCountry("Germany", countries);
console.log("===============================================================");
checkCountry("Japan", countries);
console.log("===============================================================");
checkCountry(1000, countries);
console.log("===============================================================");
checkCountry("", countries);
console.log("===============================================================");
// ********************
// Projekt č.2: Zadání projektu - část pole, DRUHÁ část
// Pro kontrolu správnosti zavolej následující funkci s parametry
// addCountry("Vietnam", countries);
// addCountry("Mexico", countries);
// addCountry("Poland", countries);
// addCountry("", countries);
console.log("===============================================================");
console.log("DRUHÁ část");
console.log("===============================================================");
addCountr = false;
checkCountry("Vietnam", countries);
if (addCountr) {
  addCountry("Vietnam", countries);
}
console.log("===============================================================");
addCountr = false;
checkCountry("Mexico", countries);
if (addCountr) {
  addCountry("Mexico", countries);
}
console.log("===============================================================");
addCountr = false;
checkCountry("Poland", countries);
if (addCountr) {
  addCountry("Poland", countries);
}
console.log("===============================================================");
addCountr = false;
checkCountry("", countries);
if (addCountr) {
  addCountry("", countries);
}
console.log("===============================================================");
// ********************
// Projekt č.2: Zadání projektu - část pole, TŘETÍ část
// Pro kontrolu správnosti zavolej následující funkci s parametry
// removeCountry("", countries);
// removeCountry("Vietnam", countries);
// removeCountry("Laos", countries);
// removeCountry("Thailand", countries);
console.log("===============================================================");
console.log("TŘETÍ část");
console.log("===============================================================");
remPoz = 0;
remCountr = false;
checkCountry("", countries);
if (remCountr) {
  removeCountry("", countries);
}
console.log("===============================================================");
remPoz = 0;
remCountr = false;
checkCountry("Vietnam", countries);
if (remCountr) {
  removeCountry("Vietnam", countries);
}
console.log("===============================================================");
remPoz = 0;
remCountr = false;
checkCountry("Laos", countries);
if (remCountr) {
  removeCountry("Laos", countries);
}
console.log("===============================================================");
remPoz = 0;
remCountr = false;
checkCountry("Thailand", countries);
if (remCountr) {
  removeCountry("Thailand", countries);
}
console.log("===============================================================");
// kontrolní výpis pole
console.log("Kontolní výpis pole countries.");
console.log(countries);
// ********************
