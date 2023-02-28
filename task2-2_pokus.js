//Funkce pro kontrolní výpis polí po jednotlivých operacích.
function controlListing(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
  console.log(
    "============================================================================================="
  );
}
//
//
//
//Obecná funkce pro výpočet procentního podílu populace státu na celkové populaci.
const percentageOfPopulation = (population, totalPopulation) => {
  const percentage = (population / totalPopulation) * 100;
  return Number(percentage.toFixed(2));
};
//
//
//
// Definování pole objektů
const countriesPopulation = [
  { country: "China", population: 1439323776 },
  { country: "India", population: 1379302771 },
  { country: "USA", population: 331002651 },
  { country: "Indonesia", population: 269603400 },
  { country: "Pakistan", population: 220892340 },
  { country: "Bangladesh", population: 164970459 },
  { country: "Japan", population: 126451398 },
  { country: "Philippines", population: 109581078 },
  { country: "Vietnam", population: 97338579 },
  { country: "Turkey", population: 84339642 },
];
//
// Zadání celkové populace
const populationTotal = 8000000000;
//
//
//
// Vytvoření klonu pole objektů
const countryCopy = [...countriesPopulation];
// Kontrolní výpis
console.log("Kontrolní výpis klonu pole objektů.");
controlListing(countryCopy);
//
//
//
// Setřídění pole klonu (vzestupně) států dle výše populace
const countriesSorted = countryCopy.sort((a, b) => {
  return a.population - b.population;
});
// Kontrolní výpis.
console.log("Kontrolní výpis setříděného pole klonu.");
controlListing(countriesSorted);
//
//
//
// Doplnění nové vlastnosti ID do pole klonu
countriesSorted.forEach((item, index) => {
  const stringPart = item.country.slice(0, 3);
  const id = stringPart + index;
  item.id = id;
});
//
//
//
// Doplnění další vlastnosti percentage do klonu objektu.
countriesSorted.forEach((item) => {
  const population = item.population;
  item.percentage = percentageOfPopulation(population, populationTotal);
});
// Kontrolní výpis doplněných vlastností.
console.log(
  "Kontrolní výpis setříděného pole doplněného o nové vlastnosti ID a percentage."
);
controlListing(countriesSorted);
//
//
//
//Vytvoření nového pole a jeho naplnění objekty splňujícími zadané podmínky.
const newCountries = countriesSorted.filter((item) => {
  if (
    item.country.length > 4 &&
    item.country.length <= 8 &&
    item.percentage > 1.5 &&
    item.percentage < 10
  ) {
    return item;
  }
});
// Kontrolní výpis.
console.log(
  "Kontrolní výpis nového pole newCountries a jeho naplnění objekty splňujícími zadané podmínky."
);
controlListing(newCountries);
//END
