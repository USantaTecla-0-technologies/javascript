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
var x=7;
var y=13;
parametrizada(x,y);
console.log(x);
console.log(y);
  
/* exceso de argumentos */
parametrizada(4,5,6);
var z=666;
console.log(x);
console.log(y);
console.log(z);
parametrizada(x,y,z);
console.log(x);
console.log(y);
console.log(z);

/* defecto de argumentos */
parametrizada(4);
var x=7;
parametrizada(x);
console.log(x);  
    
/* valores por defecto */
function defecto(x=7){
    console.log(x);
}
defecto(3*2);
defecto();
defecto(undefined);
