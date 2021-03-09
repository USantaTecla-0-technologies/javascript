let characters = ["A", "B", "C", "CH", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let morseCharacters = ["· — ", "— · · · ", "— · — · ", "— — — — ", "— · · ", "· ", "· · — · ", "— — · ", "· · · · ", "· · ", "· — — — ", "— · — ", "· — · · ", "— — ", "— · ", "— — · — — ", "— — — ", "· — — · ", "— — · — ", "· — · ", "· · · ", "— ", "· · — ", "· · · — ", "· — — ", "— · · — ", "— · — — ", "— — · · "];

  function stringToMorse(str) {
    str = str.toUpperCase();
    let morseString = "";
    for (let i = 0; i < str.length; i++) {
      for (let j = 0; j < characters.length; j++) {
        if (str[i] == "C" && str[i + 1] == "H") {
          morseString += morseCharacters[3];
          i += 2;
        } else if (str[i] == characters[j]) {
          morseString += morseCharacters[j];
        }
      }
    }
    return morseString;
  }

  console.log(stringToMorse("Saray"));
  console.log(stringToMorse("SOS"));
  console.log(stringToMorse("Hoy es navidad"));
  console.log(stringToMorse("Prueba con CH"));
  