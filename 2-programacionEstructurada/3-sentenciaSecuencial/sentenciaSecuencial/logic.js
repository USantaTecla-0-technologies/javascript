/* compuesta */
{
    console.log("primera");
    console.log("segunda");
}
            
/* acceso a variable global */
var x = 7;
console.log(x);
{
    console.log(x);
    x++;
    console.log(x);
}
console.log(x);
    
/* declaración de variable local: global */
{
    var y = 666;
    console.log(y);
    y++;
    console.log(y);
}
console.log(y); //undefined

/* ocultación local/global; redeclaración */
{
    var x;
    console.log(x);
    x++;
    console.log(x);
}
console.log(x);
            
/* variables locales */
var x = 7;
var y = 666;
console.log(x); 
console.log(y); 
{
  let x = 7*7; 
  var y = 999; 
  console.log(x);  
  console.log(y);  
} 
console.log(x); 
console.log(y); 
