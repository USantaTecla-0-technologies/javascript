/* función constructora */
function CoordenadaPublica(x, y){
    this.x = x;
    this.y = y;
    this.isDiagonal = function(){
        return this.x == this.y;
    }
}
console.log(CoordenadaPublica);
console.log(typeof CoordenadaPublica);
for(campo in CoordenadaPublica){
    console.log("propiedad: " + CoordenadaPublica[campo]);
}
console.log(CoordenadaPublica.prototype);
console.log(typeof CoordenadaPublica.prototype);
for(campo in CoordenadaPublica.prototype){
    console.log("propiedad: " + CoordenadaPublica.prototype[campo]);
}

/* objeto */
var coordenadaPublica1 = new CoordenadaPublica(0,1);            
console.log(coordenadaPublica1);
console.log(typeof coordenadaPublica1);
console.log(coordenadaPublica1.x);
console.log(coordenadaPublica1.y);
console.log(coordenadaPublica1.isDiagonal());
coordenadaPublica1.x = 2;
coordenadaPublica1.y = 2;
console.log(coordenadaPublica1.x);
console.log(coordenadaPublica1.y);
console.log(coordenadaPublica1.isDiagonal());
for(campo in coordenadaPublica1){
    console.log(coordenadaPublica1[campo]);
}

var coordenadaPublica2 = new CoordenadaPublica(2,3);
console.log(coordenadaPublica2);
console.log(typeof coordenadaPublica2);
console.log(coordenadaPublica2.x);
console.log(coordenadaPublica2.y);
console.log(coordenadaPublica2.isDiagonal());
coordenadaPublica1.y = 2;
console.log(coordenadaPublica1.x);
console.log(coordenadaPublica1.y);
console.log(coordenadaPublica1.isDiagonal());
for(campo in coordenadaPublica2){
    console.log(coordenadaPublica2[campo]);
}
