function getMorse(sentence) {
    const LETTERS = [" ", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"
        , "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const MORSE = ["/ ", ".- ", "-... ", "-.-. ", "-.. ", ". ", "..-. ", "--. ", ".... "
        , ".. ", ".--- ", "-.- ", ".-.. ", "-- ", "-. ", "--- ", ".--. ", "--.- ", ".-. "
        , "... ", "- ", "..- ", "...- ", ".-- ", "-..- ", "-.-- ", "--.. "];
    let message = "";
    for (let i = 0; i < LETTERS.length; i++) {
        for (let j = 0; j < MORSE.length; j++) {
            if (sentence[i] == LETTERS[j]) {
                message += MORSE[j];
            }
        }
    }
    return message;
}

const sentence = prompt("Dime algo: ");
console.log('La frase:\n' + sentence + '\nse traduce a:\n' + getMorse(sentence));
