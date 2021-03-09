let decimalNumber = +prompt("Dame un numero? ")
let SIZE_BITS = 32
let msg = "";
for(let i=0; i<SIZE_BITS; i++){
	msg = (decimalNumber & 1) + msg
  decimalNumber >>= 1
}
console.log(msg)
