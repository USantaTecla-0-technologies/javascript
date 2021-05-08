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

function map(array, transform) {
  let result = [];
  for (let item of array) {
    result.push(transform(item));
  }
  return result;
}

function filter(array, condition) {
  let result = [];
  for (let item of array) {
    if (condition(item)) {
      result.push(item);
    }
  }
  return result;
}

console.log("Media de los números dados menores que 5: ",
  getAverage(
    filter([1, 2, 3, 4, 5, null, 6, 7, 8, 9],
      num => num < 5)));

console.log("Media de población de paises asiaticos: ",
  getAverage(
    map(
      filter(countries, country => country.region === "Asia"),
      country => country.population)));

console.log("Media de densidad de paises asiaticos con población menor a 1000000: ",
  getAverage(
    map(
    filter(countries,
      country => country.population < 1000000
        && country.region !== "Asia"),
    country => typeof country.area != "number"
      || typeof country.population != "number" ?
      null
      : country.population / country.area)));

let getAreaAverage = function (countries) {
  return getAverage(
    map(
      filter(countries,
        country => typeof country.area == "number"),
      country => country.area));
}
console.log("Media de areas de paises: ", getAreaAverage(countries));

console.log("Media de areas de paises con area superior a la media: ",
  getAverage(
    map(
      filter(countries,
        country => country.area > getAreaAverage(countries)),
      country => country.area)));
