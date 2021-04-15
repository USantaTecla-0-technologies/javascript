/* creación */
let array = [];
console.log(typeof array);
console.log(array);
for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}
for(let item of array){
    console.log(item);
}
for(let key in array){
    console.log(array[key]);
}
console.log(array.length);

/* añadir elementos al array */
array[0] = 10;
for(let item of array){
    console.log(item);
}
for(let key in array){
    console.log(array[key]);
}
console.log("length: " + array.length);

array[1] = 11;
for(let item of array){
    console.log(item);
}
for(let key in array){
    console.log(array[key]);
}
console.log("length: " + array.length);

array[99] = 990;
for(let item of array){
    console.log(item);
}
for(let key in array){
    console.log(array[key]);
}
console.log("length: " + array.length);

array[-1] = -10;
for(let item of array){
    console.log(item);
}
console.log(array[-1]); 
for(let key in array){
    console.log(array[key]);
}
console.log("length: " + array.length);

array["zzz"] = "zzz";
for(let item of array){
    console.log(item);
}
console.log(array[-1]);
console.log(array["zzz"]);
for(let key in array){
    console.log(array[key]);
}
console.log("length: " + array.length);

/* modificar elementos del array */
array[1] = 1111111;
for(let item of array){
    console.log(item);
}
for(let key in array){
    console.log(array[key]);
}
console.log("length: " + array.length);

/* eliminar elementos del array asociativo */
delete array[1];
for(let item of array){
    console.log(item);
}
for(let key in array){
    console.log(array[key]);
}
console.log("length: " + array.length);

delete array[99];
for(let item of array){
    console.log(item);
}
for(let key in array){
    console.log(array[key]);
}
console.log("length: " + array.length);
