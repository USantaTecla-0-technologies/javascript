/* miembros privados */
function CoordenadaPrivada(x, y){
    var _x = x;
    var _y = y;
    var _getX = function() { return _x};
    this.isDiagonal = function(){
        return _getX() == _y;
    }
}
console.log(CoordenadaPrivada);
console.log(typeof CoordenadaPrivada);
console.log(CoordenadaPrivada.prototype);
console.log(typeof CoordenadaPrivada.prototype);

var coordenadaPrivada1 = new CoordenadaPrivada(0,1);
console.log(coordenadaPrivada1);
console.log(typeof coordenadaPrivada1);

console.log(coordenadaPrivada1._x);
console.log(coordenadaPrivada1._y);
console.log(coordenadaPrivada1.x);
console.log(coordenadaPrivada1.y);
console.log(coordenadaPrivada1.isDiagonal());
//console.log(coordenadaPrivada1._getX());
for(campo in coordenadaPrivada1){
    console.log(coordenadaPrivada1[campo]);
}      
