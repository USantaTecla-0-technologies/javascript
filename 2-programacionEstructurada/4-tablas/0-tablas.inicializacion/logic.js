/* inicialización de tabla */
let x = 666;
let t = [7, undefined, x, 5+6>5-6];
console.log(t);

let soloUno = [666];
for(let item of soloUno){
    console.log(item);
}
let muchosIndefinidos = new Array(666);
for(let item of muchosIndefinidos){
    console.log(item);
}

/* inicialización por desestructuración */
let [head, ...rest] = [1,2,3,4,5];
console.log(head);
console.log(rest);
function sumDesestructurado ([head, ...rest]){
    if (rest.length==0) {
        return head;
    }
    return head + sumDesestructurado(rest);
}
console.log(sumDesestructurado([1,2,3,4,5]));
