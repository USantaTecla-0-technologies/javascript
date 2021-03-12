function getLength(number) {
  let digits = 0;
  while (number > 0) {
    number = parseInt(number / 10);
    digits++;
  }
  return digits;
}

function getRightDigit(number, position) {
  for (let i = 0; i < position - 1; i++) {
    number = parseInt(number / 10);
  }
  return number % 10;
}

const CODES = [
  ["I","V","X"],
  ["C","D","M"],
  ["X","L","C"]];

const UNITS = 0;
const TEENS = 1;
const CENTS = 2;

function toUnitsRoman(digit, position) {
  const x = digit % 5;
  if (x < 4) {
    let msg = "";
    for (let i = 0; i < x; i++) {
      msg += CODES[position][UNITS];
    }
    return msg
  }
  return "I";
}

function toDigitRoman(digit, position) {
  let roman = toUnitsRoman(digit, position);
  if (4 <= digit && digit <= 8) {
    if (digit < 5) {
      roman += CODES[position][TEENS];
    } else {
      roman = CODES[position][TEENS] + roman;
    }
  } else if (digit == 9) {
    roman += CODES[position][CENTS];
  }
  return roman;
}

function toRoman(decimal) {
  let roman = "";
  for (let i = 0; i < decimal.length; i++) {
    roman += toRomanSystem(codes[i], separatedNumbers[i]);
  }
  return roman;
}

function toDigits(number) {
  let result = [];
  do {
    let temp = num % 10;
    result.unshift(temp);
    num = parseInt(num / 10);
  } while (result.length < 3);
  return result;
}

function toRomanSystem(code, num) {
  let result = "";
  if (num == 0) {
    result += "";
  } else if (num < 5) {
    result += code[2];
    if (num >= 2 && num < 4) {
      result += code[2];
      if (num == 3) {
        result += code[2];
      }
    }
  }
  if (num >= 4 && num < 9) {
    result += code[1];
  }
  if (num > 5) {
    result += code[2];
    if (num >= 7 && num < 9) {
      result += code[2];
      if (num == 8) {
        result += code[2];
      }
    }
  }
  if (num >= 9) {
    result += code[0];
  }
  return result;
}

console.log('101 en romano: ' + decimalToRoman(101));
console.log('45 en romano: ' + decimalToRoman(45));
console.log('236 en romano: ' + decimalToRoman(236));
console.log('841 en romano: ' + decimalToRoman(841));
