function nominal() {
    console.log("nominal");
}
console.log(typeof nominal);
console.log(nominal);
console.log(nominal());
console.log(typeof nominal());

/* funciones locales */
function contenedora() {
    function anidada() {
        console.log("anidada");
    }
    console.log("contenedora");
    anidada();
    console.log("contenedora");
}
contenedora();
//anidada(); Error!!!
