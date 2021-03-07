var anominaDosOMasParametros = 
	function(x, y) 
		{ x++; y++; console.log(x+y); };
console.log(typeof anominaDosOMasParametros);
console.log(anominaDosOMasParametros);
console.log(anominaDosOMasParametros(1, 2));

var flechaDosOMasParametros = 
	(x, y) => 
		{ x++; y++; console.log(x+y); }; 
console.log(typeof flechaDosOMasParametros);
console.log(flechaDosOMasParametros);
console.log(flechaDosOMasParametros(1, 2));

var anominaUnParametro = 
	function(x) 
		{ x++; console.log(x); };
console.log(typeof anominaUnParametro);
console.log(anominaUnParametro);
console.log(anominaUnParametro(1));

var flechaUnParametro = 
	x => 
		{ x++; console.log(x); };
console.log(typeof flechaUnParametro);
console.log(flechaUnParametro);
console.log(flechaUnParametro(1));

var anominaCeroParametros = 
	function() 
		{ console.log(0); };
console.log(typeof anominaCeroParametros);
console.log(anominaCeroParametros);
console.log(anominaCeroParametros());

var flechaCeroParametros = 
	() => 
		{ console.log(0); };
console.log(typeof flechaCeroParametros);
console.log(flechaCeroParametros);
console.log(flechaCeroParametros());

var anominaSoloRetorno = 
	function(x) 
		{ return x+1; };
console.log(typeof anominaSoloRetorno);
console.log(anominaSoloRetorno);
console.log(anominaSoloRetorno(1));

var flechaSoloRetorno = 
	x => x+1;
console.log(typeof flechaSoloRetorno);
console.log(flechaSoloRetorno);
console.log(flechaSoloRetorno(1));
