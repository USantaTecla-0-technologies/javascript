let age = +prompt("Edad");
let months = age * 12;
let weeks = age * 52;
let days = age * 365;
let hours = days * 24;
let minutes = hours * 60;
let seconds = minutes * 60;
let decades = age / 10;
let centuries = decades / 10;
let millennia = centuries / 10;
let msg = `Aproximadamente has vivido
	${millennia} milenios
	${centuries} siglos
	${decades} decadas
	${age} años
	${months} meses
	${weeks} semanas
	${days} días
	${hours} horas
	${minutes} minutos
	${seconds} segundos
`;
console.log(msg);
