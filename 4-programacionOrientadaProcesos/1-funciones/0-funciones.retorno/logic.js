function doble (value){
    return value*2;
}
console.log(doble(333))

function fibonacci(value){
    if (value<=2) {
        return 1;
    }
    return fibonacci(value-1) + fibonacci(value-2);
}
console.log(fibonacci(6))
