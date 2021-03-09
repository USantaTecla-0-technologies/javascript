function sumatorioDoble(ini, fin){
    let sum = 0;
    for(let i=ini; i<=fin; i++){
        sum += doble(i);
    }
    return sum;
}
console.log(sumatorioDoble(1,10));
    
function sumatorioFibonacci(ini, fin){
    let sum = 0;
    for(let i=ini; i<=fin; i++){
        sum += fibonacci(i);
    }
    return sum;
}
console.log(sumatorioFibonacci(1,10));
    
/* función de orden superior */
function sumatorio(ini, fin, serie) {
    let sum = 0;
    for(let i=ini; i<=fin; i++){
        sum += serie(i);
    }
    return sum;
}
console.log(sumatorio(1, 10, fibonacci));
console.log(sumatorio(1, 10, doble));

console.log(sumatorio(1, 10, (x) => { return 2*x; }));
console.log(sumatorio(1, 10, x => { return 2*x; }));
console.log(sumatorio(1, 10, x => 2*x));
