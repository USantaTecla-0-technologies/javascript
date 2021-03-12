function doble(number){
    return 2*number;
}

function sumatorioDoble(ini, fin){
    let sum = 0;
    for(let i=ini; i<=fin; i++){
        sum += doble(i);
    }
    return sum;
}
console.log(sumatorioDoble(1,5));

function factorial(number){
    let result = 1;
    for(let i=1; i<=number; i++){
        result *= i;
    }
    return result;
}
function sumatorioFactorial(ini, fin){
    let sum = 0;
    for(let i=ini; i<=fin; i++){
        sum += factorial(i);
    }
    return sum;
}
console.log(sumatorioFactorial(1,5));
    
/* función de orden superior */
function sumatorio(ini, fin, serie) {
    let sum = 0;
    for(let i=ini; i<=fin; i++){
        sum += serie(i);
    }
    return sum;
}
console.log(sumatorio(1, 5, factorial));
console.log(sumatorio(1, 5, doble));


