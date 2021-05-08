function getAverage(amounts) {
  let sum = 0;
  let count = 0;
  for (let amount of amounts) {
    if (typeof amount == "number") {
      sum += amount;
      count++;
    }
  }
  return sum / count;
}

console.log("Media de los números dados menores que 5: ",
  getAverage(
    [1, 2, 3, 4, 5, null, 6, 7, 8, 9]
      .filter(num => num < 5)));

console.log("Media de población de paises asiaticos: ",
  getAverage(
    countries
      .filter(country => country.region === "Asia")
      .map(country => country.population)));

console.log("Media de densidad de paises asiaticos con población menor a 1000000: ",
  getAverage(
      countries
        .filter(country => country.population < 1000000
          && country.region !== "Asia")
        .map(country => typeof country.area != "number"
          || typeof country.population != "number" ?
          null
          : country.population / country.area)));

let getAreaAverage = function (countries) {
  return getAverage(
    countries
      .filter(country => typeof country.area == "number")
      .map(country => country.area));
}
console.log("Media de areas de paises: ", getAreaAverage(countries));

console.log("Media de areas de paises con area superior a la media: ",
  getAverage(
    countries
      .filter(country => country.area > getAreaAverage(countries))
      .map(country => country.area)));

