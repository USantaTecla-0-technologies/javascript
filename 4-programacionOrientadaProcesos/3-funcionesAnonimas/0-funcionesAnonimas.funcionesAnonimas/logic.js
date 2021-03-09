console.log(typeof function() {
    console.log("anonima");
});
console.log(function() {
    console.log("anonima");
});
console.log(function() {
    console.log("anonima");
}());
console.log(typeof function() {
    console.log("anonima");
}());

/* variables de tipo función */
let f = nominal;
console.log(typeof f);
console.log(f);
console.log(f());
console.log(typeof f());

let g = function() {
        console.log("anonima");
    };
console.log(typeof g);
console.log(g);
console.log(g());
console.log(typeof g());

/* asignación por referencia */
let f1 = estado;
let f2 = estado;
let f3 = f1;
f1();
f2();
f2.variable = 666;
f3();
console.log(estado.variable);

/* igualdad por referencia */
function una() { 
console.log("mensaje");
}
function otra() { 
console.log("mensaje");
}
console.log(una==otra);
let otra = una;
console.log(otra==una); 
