let number = +prompt("Escribe un número: ");
let factor = number < 1 ? -1 : 1;
let absoluteValue = factor * number;
console.log("El numero " + number + " es " + absoluteValue);
