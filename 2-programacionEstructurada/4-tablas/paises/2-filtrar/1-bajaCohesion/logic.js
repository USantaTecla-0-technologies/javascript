function getAverage(array, getValue) {
  let sum = 0;
  let count = 0;
  for (let item of array) {
    let value = getValue(item);
    if (typeof value == "number") {
      sum += value;
      count++;
    }
  }
  return sum / count;
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

console.log("Media de población de paises asiaticos: ",
  getAverage(
    filter(countries,
      country => country.region === "Asia"),
    country => country.population));

console.log("Media de densidad de paises asiaticos con población menor a 1000000: ",
  getAverage(
    filter(countries,
      country => country.population < 1000000
        && country.region !== "Asia"),
    country => typeof country.area != "number"
      || typeof country.population != "number" ?
      null
      : country.population / country.area));


let getAreaAverage = function(countries){
  return getAverage(
    countries,
    country => country.area);
}
console.log("Media de areas de paises: ", 
  getAreaAverage(countries));

console.log("Media de areas de paises con area superior a la media: ",
  getAverage(
    filter(countries,
      country => country.area > getAreaAverage(countries)),
    country => country.area));

console.log("Media de los números dados menores que 5: ",
  getAverage(
    filter([1, 2, 3, 4, 5, null, 6, 7, 8, 9],
      num => num < 5),
    num => num));
