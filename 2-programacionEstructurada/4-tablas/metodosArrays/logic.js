/* métodos push y pop de arrays */ 
t.push("escondido");
t.push("otro");
t.push(false);
console.log("XXX");
console.log(t);
console.log(t.find((x)=>(x==="escondido")));
console.log(t.pop());
console.log(t.pop());
console.log(t.pop());
console.log("YYY");
console.log(t);
console.log(t.find((x)=>(x==="escondido")));
            
/* métodos indexOf, splice, find, map, ... */
var tt=[1,2,3,4,5,6,7,8,9,10];
console.log(tt.indexOf(7));
console.log(tt.splice(7,2));
console.log(tt);
console.log(tt.find(x => x>5));

console.log(tt.map(x =>x>5));                   
var t = [1,2,3,4];
console.log(t);
console.log(t.map(value => value**2));
t.forEach((value, index, array) => array[index]=value+1);
console.log(t);
