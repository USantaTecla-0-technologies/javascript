/* miembros estáticos */
CoordenadaPrototipo.dimension = 2;
CoordenadaPrototipo.prototype.isValid = function() {
    console.log(this.x);
    console.log(this.y);
    console.log(CoordenadaPrototipo.dimension);
    return 0<=this.x && this.x<=CoordenadaPrototipo.dimension &&
        0<=this.y && this.y<=CoordenadaPrototipo.dimension    
}
console.log(coordenadaPrototipo1.isValid());
CoordenadaPrototipo.getDimension = function() {
    return CoordenadaPrototipo.dimension;
}
console.log(CoordenadaPrototipo.getDimension());
