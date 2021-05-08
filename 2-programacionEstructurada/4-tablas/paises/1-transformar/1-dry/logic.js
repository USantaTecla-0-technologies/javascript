function getAreaAverage(countries) {
  let sum = 0;
  let count = 0;
  for (let country of countries) {
    if (typeof country.area == "number") {
      sum += country.area;
      count++;
    }
  }
  return sum / count;
}
console.log("Media de areas: ", 
  getAreaAverage(countries));

function getPopulationAverage(countries) {
  let sum = 0;
  let count = 0;
  for (let country of countries) {
    if (typeof country.population == "number") {
      sum += country.population;
      count++;
    }
  }
  return sum / count;
}
console.log("Media de poblacion: ", 
  getPopulationAverage(countries));
