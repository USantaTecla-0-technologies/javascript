  let amount = +prompt("Dame la cantidad de céntimos: ");

  let remainder50 = amount;
  let remainder20 = remainder50 % 50;
  let remainder10 = remainder20 % 20;
  let remainder5 = remainder10 % 10;
  let remainder2 = remainder5 % 5;
  const remainder1 = remainder2 % 2;
  
  remainder50 = remainder50 - remainder20;
  remainder20 = remainder20 - remainder10;
  remainder10 = remainder10 - remainder5;
  remainder5 = remainder5 - remainder2;
  remainder2 = remainder2 - remainder1;
  
  const coins50 = remainder50 / 50;
  const coins20 = remainder20 / 20;
  const coins10 = remainder10 / 10;
  const coins5 = remainder5 / 5;
  const coins2 = remainder2 / 2;
  
  const COINS_OF = " moneda(s) de ";
  console.log("El cambio de " + amount + " es:\n"
    + coins50 + COINS_OF + 50 + "\n" 
    + coins20 + COINS_OF + 20 + "\n" 
    + coins10 + COINS_OF + 10 + "\n" 
    + coins5 + COINS_OF + 5 + "\n" 
    + coins2 + COINS_OF + 2 + "\n" 
    + remainder1 + COINS_OF + 1);

  