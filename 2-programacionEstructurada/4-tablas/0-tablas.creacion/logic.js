/* array vacío con corchete */
let arrayCorchete = [];
console.log(arrayCorchete);
console.log(typeof arrayCorchete);
console.log(arrayCorchete instanceof Array);
console.log(arrayCorchete.length);
for(let item of arrayCorchete){
    console.log(item);
}

/* array vacío con new Array */
let array = new Array();
console.log(array);
console.log(typeof array);
console.log(array instanceof Array);
console.log(array.length);
for(let item of array){
    console.log(item);
}
