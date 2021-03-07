var global= 3;
console.log(global);
var igual = 13;
console.log(igual);
//console.log(local); Error!!! 

function ambito() {
    console.log(global);
    var igual = 666;
    console.log(igual);
    var local = 7;
    console.log(local);
}     
console.log(global);
console.log(igual);
//console.log(local); Error!!! 
ambito();
console.log(global);
console.log(igual);
//console.log(local); Error!!! 

/* hoisting de variables: var */
var variable = "cadena";
function hoisting() {
    console.log(variable);
    var variable = 7;
    console.log(variable);
}

console.log(variable);
hoisting();
console.log(variable);
    
/* sin hoisting de variables y constantes: let y const */
function sinHoisting() {
    //console.log(variable); Error!!!
    //console.log(constante); Error!!!
    let variable = 13;
    const constante = 666;
    //let variable = 666; Error!!! no permite redeclaración
    //let constante = 7; Error!!! no permite redeclaración
    console.log(variable);
    console.log(constante);
};

console.log(variable);
sinHoisting();
console.log(variable);
