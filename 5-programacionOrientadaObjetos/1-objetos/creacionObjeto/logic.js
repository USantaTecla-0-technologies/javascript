/* creación de objeto */ 
var x = new Object();
console.log(x);
console.log(typeof x);
for(campo in x){
    console.log(campo);
    console.log(typeof campo);
}

var x = {};
console.log(x);
console.log(typeof x);
for(campo in x){
    console.log(campo);
    console.log(typeof campo);
}
