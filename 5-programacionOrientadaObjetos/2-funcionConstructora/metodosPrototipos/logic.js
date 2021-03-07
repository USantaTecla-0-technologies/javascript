/* métodos en Prototipo */
function CoordenadaPrototipo(x, y){
    this.x = x;
    this.y = y;
}
CoordenadaPrototipo.prototype.isDiagonalPublic = function(){
        console.log(this.x);
        console.log(this.y);
        return this.x == this.y;
}
console.log("!!!!!!!!!!!!!!!! !");
console.log(CoordenadaPrototipo);
console.log(typeof CoordenadaPrototipo);
console.log(CoordenadaPrototipo.prototype);
console.log(typeof CoordenadaPrototipo.prototype);
var coordenadaPrototipo1 = new CoordenadaPrototipo(0,1);
console.log(coordenadaPrototipo1);
console.log(typeof coordenadaPrototipo1);
for(campo in coordenadaPrototipo1){
    console.log(coordenadaPrototipo1[campo]);
}  
console.log(coordenadaPrototipo1.isDiagonalPublic());

var coordenadaPrototipo2 = new CoordenadaPrototipo(2,2);
console.log(coordenadaPrototipo2);
console.log(typeof coordenadaPrototipo2);
for(campo in coordenadaPrototipo2){
    console.log(coordenadaPrototipo2[campo]);
}  
console.log(coordenadaPrototipo2.isDiagonalPublic());
