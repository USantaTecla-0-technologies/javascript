/* inicilización de objetos */
var y = {
    a : 666*7,
    b : "campo",
    c : function(){
        console.log("método c");
    }
}
console.log(y);
console.log(typeof y);
for(campo in y){
    console.log(y[campo]);
    console.log(typeof y[campo]);
}
console.log(y.c());
console.log(typeof y.c());

/* inicilización de objetos por JSON */
console.log("JSON!!!!!!!!!!!!");
var z = {
    "a" : 666*7,
    "b" : "campo",
    "c" : function(){
        console.log("método c");
    }
}
console.log(y);
console.log(typeof y);
for(campo in y){
    console.log(y[campo]);
    console.log(typeof y[campo]);
}
console.log(y.c());
console.log(typeof y.c());

/* objeto JSON */
console.log(JSON.stringify(x));
console.log(typeof JSON.stringify(x));
console.log(JSON.parse('{"a":7,"aa":7,"y":{}}'));
console.log(typeof JSON.parse('{"a":7,"aa":7,"y":{}}'));

/* inicialización por desestructuración */
var { m, n } = {n : 666, m : true};
console.log(m);
console.log(n);
