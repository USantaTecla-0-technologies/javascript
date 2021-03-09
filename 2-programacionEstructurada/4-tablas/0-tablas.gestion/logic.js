/* añadir elementos al array asociativo */
array[0] = 10;
console.log("length: " + array.length);
for(let item of array){
    console.log(item);
}
array[1] = 11;
console.log("length: " + array.length);
for(let item of array){
    console.log(item);
}
array[99] = 990;
console.log("length: " + array.length);
for(let item of array){
    console.log(item);
}
array[-1] = -10;
console.log("length: " + array.length);
for(let item of array){
    console.log(item);
}
console.log(array[-1]); 

array["zzz"] = "zzz";
console.log("length: " + array.length);
for(let item of array){
    console.log(item);
}
console.log(array[-1]);
console.log(array["zzz"]);

/* modificar elementos del array asociativo */
array[1] = 1111111;
console.log("length: " + array.length);
for(let item of array){
    console.log(item);
}

/* eliminar elementos del array asociativo */
delete array[1];
console.log("length: " + array.length);
for(let item of array){
    console.log(item);
}
delete array[99];
console.log("length: " + array.length);
for(let item of array){
    console.log(item);
}
