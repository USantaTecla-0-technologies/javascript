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
function nominal(){
    return true;
}

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

/* igualdad por referencia */
function una() { 
console.log("mensaje");
}
function otra() { 
console.log("mensaje");
}
console.log(una==otra);
otra = una;
console.log(otra==una); 
