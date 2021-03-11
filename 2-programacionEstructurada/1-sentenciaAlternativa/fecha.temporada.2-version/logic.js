let day = +prompt("Dame el día: ");
let month = +prompt("Dame el mes: ");
let year = +prompt("Dame el año: ");

let season = "invierno";
if ((day >= 21 && month == 3 || month > 3) && (day < 21 && month == 6 || month < 6)) {
  season = "primavera";
} else if ((day >= 21 && month == 6 || month > 6) && (day < 21 && month == 9 || month < 9)) {
  season = "verano";
} else if ((day >= 21 && month == 9 || month > 9) && (day < 21 && month == 12 || month < 12)) {
  season = "otoño";
}
let position = "primeros";
if (day >= 21 && (month - 1) % 3 == 0 || day <= 20 && (month - 2) % 3 == 0) {
  position = "mediados";
} else if (day >= 21 && (month - 2) % 3 == 0 || day <= 20 && (month - 3) % 3 == 0) {
  position = "ultimos";
}
console.log("El " + day + " del " + month + " de " + year + " cae a " + position + " " + season + ".");

