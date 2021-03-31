function contenedora() {
    let local = -1;
    function anidada(arg) {
        console.log("anidada" + arg);
    }
    console.log("contenedora");
    anidada(local);
    console.log("contenedora");
}
contenedora();
//local = ...; Error!!!
//anidada(); Error!!!


let global= 1;
console.log(global);
let igual = 2;
console.log(igual);
//console.log(local); Error!!! 

function ambito() {
    global--;
    console.log(global);
    let igual = 0;
    igual--;
    console.log(igual);
    let local = 3;
    console.log(local);
}     
console.log(global);
console.log(igual);
//console.log(local); Error!!! 
ambito();
console.log(global);
console.log(igual);
//console.log(local); Error!!! 

let variable = "cadena";
function withHoisting() {
    console.log(variable);
    var variable = 7;
    console.log(variable);
}

console.log(variable);
withHoisting();
console.log(variable);
    
function withoutHoisting() {
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
withoutHoisting();
console.log(variable);
