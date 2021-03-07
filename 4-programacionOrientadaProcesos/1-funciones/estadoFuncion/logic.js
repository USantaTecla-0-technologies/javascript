function estado() {
    console.log(estado.variable);
    estado.variable++;
}
estado.variable = 0;
estado();
estado();
estado();
console.log(estado.variable);
