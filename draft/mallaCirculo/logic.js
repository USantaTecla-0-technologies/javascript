let msg = "";
for(let i=0; i<18; i++){
	for(let j=0; j<18; j++){
  	if(Math.sqrt((i-9)**2 + (j-9)**2) > 5){
    	msg += "1"
    } else {
    	msg += "0"
    }
  }
  msg += "\n"
}
console.log(msg)
