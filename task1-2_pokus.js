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
  let status;
  if (typeof country !== "string" || country.length === 0) {
    console.log(`Zadaná hodnota country = ` + country);
    console.log(
      `Zadali jste neplatný dotaz: ${country}` +
        ` nelze zadat číslo nebo prázdný string !`
    );
    statusCountry = "not valid";
    return statusCountry;
  }
  if (countries.includes(country)) {
    console.log(`Zadaná hodnota country = ` + country);
    console.log(
      `Zadaná krajina ${country} se nachází v seznamu krajin na indexu ${countries.indexOf(
        country
      )}.`
    );
    statusCountry = "included";
    return statusCountry;
  }
  console.log(`Zadaná hodnota country = ` + country);
  console.log(`Zadaná krajina ${country} se nenachází v seznamu krajin.`);
  statusCountry = "not included";
  return statusCountry;
}
// FUNCTION addCountry**************************************
function addCountry(country, countries) {
  if (checkCountry(country, countries) === "not included") {
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
  return;
}
// FUNCTION removeCountry**************************************
function removeCountry(country, countries) {
  if (checkCountry(country, countries) === "included") {
    const index = countries.indexOf(country);
    if (index !== -1) {
      countries.splice(index, 1);
      console.log(
        "Zadaná krajina " +
          country +
          " byla odstraněna ze seznamu krajin na indexu " +
          index +
          "."
      );
      console.log(
        "Celkový počet krajin v seznamu je " + countries.length + "."
      );
    }
  }
}
// Projekt č.2 - 2.pokus: Zadání projektu - část pole, PRVNÍ část
// Pro kontrolu správnosti zavolej funkci s parametry:
// checkCountry("Germany", countries);
// checkCountry("Japan", countries);
// checkCountry(1000, countries);
// checkCountry("", countries);
console.log("Projekt č.2 - 2.pokus:");
console.log("Zadání projektu - část pole,");
console.log("PRVNÍ část - kontrola přítomnosti zadané country v daném poli.");
console.log(
  "========================================================================="
);
checkCountry("Germany", countries);
console.log(
  "========================================================================="
);
checkCountry("Japan", countries);
console.log(
  "========================================================================="
);
checkCountry(1000, countries);
console.log(
  "========================================================================="
);
checkCountry("", countries);
console.log(
  "========================================================================="
);
// ********************
// Projekt č.2: Zadání projektu - část pole, DRUHÁ část
// Pro kontrolu správnosti zavolej následující funkci s parametry
// addCountry("Vietnam", countries);
// addCountry("Mexico", countries);
// addCountry("Poland", countries);
// addCountry("", countries);
console.log(
  "========================================================================="
);
console.log("DRUHÁ část - přidání zadané country (pokud neexistuje) do pole.");
console.log(
  "========================================================================="
);
addCountry("Vietnam", countries);
console.log(
  "========================================================================="
);
addCountry("Mexico", countries);
console.log(
  "========================================================================="
);
addCountry("Poland", countries);
console.log(
  "========================================================================="
);
addCountry("", countries);
console.log(
  "========================================================================="
);
// ********************
// Projekt č.2: Zadání projektu - část pole, TŘETÍ část
// Pro kontrolu správnosti zavolej následující funkci s parametry
// removeCountry("", countries);
// removeCountry("Vietnam", countries);
// removeCountry("Laos", countries);
// removeCountry("Thailand", countries);
console.log(
  "========================================================================="
);
console.log("TŘETÍ část - odebrání zadané country (pokud existuje) z pole.");
console.log(
  "========================================================================="
);
removeCountry("", countries);
console.log(
  "========================================================================="
);
removeCountry("Vietnam", countries);
console.log(
  "========================================================================="
);
removeCountry("Laos", countries);
console.log(
  "========================================================================="
);
removeCountry("Thailand", countries);
console.log(
  "========================================================================="
);
// kontrolní výpis pole
console.log("Kontolní výpis pole countries.");
console.log(countries);
// ********************
//END
