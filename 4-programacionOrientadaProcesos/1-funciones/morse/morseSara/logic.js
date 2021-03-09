function morseGenerator(sentence) {
    this.sentence = sentence;
    this.toString = function () {
        return '' + this.sentence + '';
    };
    this.getMorse = function () {
        let letters = [" ", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        let morseLetters = ["/ ", ".- ", "-... ", "-.-. ", "-.. ", ". ", "..-. ", "--. ", ".... ", ".. ", ".--- ", "-.- ", ".-.. ", "-- ", "-. ", "--- ", ".--. ", "--.- ", ".-. ", "... ", "- ", "..- ", "...- ", ".-- ", "-..- ", "-.-- ", "--.. "];
        let message = "";

        for (let i = 0; i < letters.length; i++) {
            for (let j = 0; j < morseLetters.length; j++) {
                if (this.sentence[i] == letters[j]) {
                    message += morseLetters[j];
                }
            }
        }

        return message;
    }
}
let morsification = new morseGenerator('hello world');
let msg = 'La frase ' + morsification.toString() + ' se traduce a ' + morsification.getMorse();
console.log(msg);
