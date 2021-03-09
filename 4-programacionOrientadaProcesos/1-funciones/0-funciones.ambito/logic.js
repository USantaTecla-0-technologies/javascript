let global= 3;
console.log(global);
let igual = 13;
console.log(igual);
//console.log(local); Error!!! 

function ambito() {
    console.log(global);
    let igual = 666;
    console.log(igual);
    let local = 7;
    console.log(local);
}     
console.log(global);
console.log(igual);
//console.log(local); Error!!! 
ambito();
console.log(global);
console.log(igual);
//console.log(local); Error!!! 

/* hoisting de variables: let */
let variable = "cadena";
function hoisting() {
    console.log(variable);
    let variable = 7;
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
