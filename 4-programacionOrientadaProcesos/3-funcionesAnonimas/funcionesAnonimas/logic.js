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
var f = nominal;
console.log(typeof f);
console.log(f);
console.log(f());
console.log(typeof f());

var g = function() {
        console.log("anonima");
    };
console.log(typeof g);
console.log(g);
console.log(g());
console.log(typeof g());

/* asignación por referencia */
var f1 = estado;
var f2 = estado;
var f3 = f1;
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
var otra = una;
console.log(otra==una); 
