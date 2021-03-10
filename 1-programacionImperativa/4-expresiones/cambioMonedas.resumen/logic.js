let amount = +prompt("Dame la cantidad de céntimos: ");

const amount50 = amount - amount % 50;
amount -= amount50;
const amount20 = amount - amount % 20;
amount -= amount20;
const amount10 = amount - amount % 10;
amount -= amount10;
const amount5 = amount - amount % 5;
amount -= amount5;
const amount2 = amount - amount % 2;
amount -= amount2;

const COINS_OF = " moneda(s) de ";
let msg = amount50 / 50 > 0 ? coin50 + COINS_OF + 50 + "\n" : "";
msg += amount20 / 20 > 0 ? coin20 + COINS_OF + 20 + "\n" : "";
msg += amount10 / 10 > 0 ? coin10 + COINS_OF + 10 + "\n" : "";
msg += amount5 / 5 > 0 ? coin5  + COINS_OF + 5 + "\n" : "";
msg += amount2 / 2 > 0 ? coin2 + COINS_OF + 2 + "\n" : "";
msg += amount > 0 ? amount + COINS_OF + 1 : "";

console.log(msg);
