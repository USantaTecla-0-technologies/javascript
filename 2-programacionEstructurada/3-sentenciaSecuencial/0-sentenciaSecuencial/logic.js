/* compuesta */
{
    console.log("primera");
    console.log("segunda");
}
            
/* acceso a variable global */
let x = 7;
console.log(x);
{
    console.log(x);
    x++;
    console.log(x);
}
console.log(x);
    
/* declaración de variable local: global */
{
    let y = 666;
    console.log(y);
    y++;
    console.log(y);
}
console.log(y); //undefined

/* ocultación local/global; redeclaración */
{
    let x;
    console.log(x);
    x++;
    console.log(x);
}
console.log(x);
            
/* variables locales */
let x = 7;
let y = 666;
console.log(x); 
console.log(y); 
{
  let x = 7*7; 
  let y = 999; 
  console.log(x);  
  console.log(y);  
} 
console.log(x); 
console.log(y); 
