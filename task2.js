// Obecná funkce pro výpočet procentního podílu populace státu na celkové populaci
function percentageOfPopulation(population, populationTotal) {
  procPod = population / (populationTotal / 100);
}
// Funkce pro zaokrouhlení výsledku výpočtu procentního podílu na 2 des.místa
function zaokrouhliNaDesetinneMisto(procPod, pocetMist) {
  pocetMist = Math.pow(10, pocetMist);
  procPod = procPod * pocetMist;
  procPod = Math.round(procPod);
  procPod = procPod / pocetMist;
  return procPod;
}
// Definování nového pole pro podmínečný výběr (poslední krok úlohy)
const newArray = [];
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
// Kontrolní výpis definovaného pole objektů
console.log("==============================");
console.log("Kontrolní výpis definovaného pole objektů");
for (let i = 0; i < countriesPopulation.length; i++) {
  console.log(countriesPopulation[i]);
}
// Zadání celkové populace
const populationTotal = 8000000000;
// Vytvoření klonu pole objektů
const copyCountries = JSON.parse(JSON.stringify(countriesPopulation));
// Setřídění pole klonu (vzestupně) států dle výše populace
copyCountries.sort(function (a, b) {
  return a.population - b.population;
});
// Kontrolní výpis setříděného pole klonu
console.log("==============================");
console.log("Kontrolní výpis setřiděného pole klonu");
for (let i = 0; i < copyCountries.length; i++) {
  console.log(copyCountries[i]);
}
//Doplnění nové vlastnosti id do pole klonu
console.log("==============================");
console.log("Kontrolní výpis - doplnění nové vlastnosti id do pole klonu");
for (let i = 0; i < copyCountries.length; i++) {
  copyCountries[i].id =
    copyCountries[i].country[0] + // dá se to napsat v cyklu, ale takhle mi to přijde přehlednější...
    copyCountries[i].country[1] +
    copyCountries[i].country[2] +
    i;
  //Kontrolní výpis doplněného pole o id.
  console.log(copyCountries[i]);
}
//Doplnění další vlastnosti percentage do pole klonu
//Dalo se řešit v rámci předešlého for, takto jsem zvolil opět kvůli přehlednosti.
console.log("==============================");
console.log(
  "Kontrolní výpis - doplnění nové vlastnosti percentage do pole klonu"
);
for (let i = 0; i < copyCountries.length; i++) {
  percentageOfPopulation(copyCountries[i].population, populationTotal);
  procPod = zaokrouhliNaDesetinneMisto(procPod, 2);
  copyCountries[i].percentage = procPod;
  //Kontrolní výpis doplněného pole o percentage.
  console.log(copyCountries[i]);
}
//Naplnění nového pole objekty splňujícími zadané podmínky
for (let i = 0; i < copyCountries.length; i++) {
  if (
    copyCountries[i].country.length > 4 &&
    copyCountries[i].country.length <= 8
  ) {
    if (copyCountries[i].percentage > 1.5 && copyCountries[i].percentage < 10) {
      newArray.push(copyCountries[i]);
    }
  }
}
//Kontrolní výpis nového pole naplněného objekty splňujícími podmínky
console.log("==============================");
console.log(
  "Kontrolní výpis nového pole naplněného objekty splňujícími podmínky"
);
for (let i = 0; i < newArray.length; i++) {
  console.log(newArray[i]);
}
//END