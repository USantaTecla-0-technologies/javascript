function nominal() {
    console.log("nominal");
}
console.log(typeof nominal);
console.log(nominal);
console.log(nominal());
console.log(typeof nominal());

/* parámetros y argumentos */
function parametrizada(x, y) {
    console.log(x);
    console.log(y);
    x++;
    y++;
    console.log(x);
    console.log(y);
}
parametrizada(4,5);
let x=7;
let y=13;
parametrizada(x,y);
console.log(x);
console.log(y);
  
/* exceso de argumentos */
parametrizada(4,5,6);
let z=666;
console.log(x);
console.log(y);
console.log(z);
parametrizada(x,y,z);
console.log(x);
console.log(y);
console.log(z);

/* defecto de argumentos */
parametrizada(4);
let x=7;
parametrizada(x);
console.log(x);  
    
/* valores por defecto */
function defecto(x=7){
    console.log(x);
}
defecto(3*2);
defecto();
defecto(undefined);

