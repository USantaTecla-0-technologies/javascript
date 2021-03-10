let amount = +prompt("Dame la cantidad de céntimos: ");

const amount50 = amount - amount % 50;
amount = amount - amount50;
const amount20 = amount - amount % 20;
amount = amount - amount20;
const amount10 = amount - amount % 10;
amount = amount - amount10;
const amount5 = amount - amount % 5;
amount = amount - amount5;
const amount2 = amount - amount % 2;
amount = amount - amount2;

const coins50 = amount50 / 50;
const coins20 = amount20 / 20;
const coins10 = amount10 / 10;
const coins5 = amount5 / 5;
const coins2 = amount2 / 2;

const COINS_OF = " moneda(s) de ";
let msg = conins50 > 0 ? coin50 + COINS_OF + 50 + "\n" : "";
msg += coins20 > 0 ? coin20 + COINS_OF + 20 + "\n" : "";
msg += coins10 > 0 ? coin10 + COINS_OF + 10 + "\n" : "";
msg += coins5 > 0 ? coin5  + COINS_OF + 5 + "\n" : "";
msg += coins2 > 0 ? coin2 + COINS_OF + 2 + "\n" : "";
msg += amount > 0 ? amount + COINS_OF + 1 : "";

console.log(msg);
