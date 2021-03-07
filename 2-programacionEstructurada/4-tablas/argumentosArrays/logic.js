/* array arguments por defecto */
function sum(){
    var sum = 0;
    for(argument of arguments){
        sum += argument;
    }
    return sum;
}
console.log(sum(1,2,3,2,3,2,3,2,3,2,3));
