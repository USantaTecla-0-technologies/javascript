function nominal() {
    console.log("nominal");
}
console.log(typeof nominal);
console.log(nominal);
console.log(nominal());
console.log(typeof nominal());

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
