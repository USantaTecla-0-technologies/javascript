analyze(
  ["x==4 || y==4"
    , "x+y==8"
    , "x-y==0"]);

function analyze(questions) {
  instructions();
  let hits = 0;
  for (let i = 0; i < questions.length; i++) {
    let ok = analizeExpression(questions[i]);
    if (ok) {
      hits++;
    }
    console.log("Llevas " + hits + " aciertos de " + (i+1) + " intentos!");
  }
  console.log("FIN!!!");
}

function instructions() {
  const EXAMPLE = "x == 4 || y == 4";
  console.log(toString(
    ["A continuación se presentarán diversas configuraciones de cuadrados de 9x9 'luces' encendidas (1) o apagadas (0)."
      , "Por ejemplo, para la configuración '" + EXAMPLE + "', solo se encenderá la luz central:"
      , toString(getMesh(EXAMPLE))
      , "A continuación, se solicitaran expresiones lógicas basadas en las variables 'x' e 'y' para iluminar las mismas casillas de cada configuración propuesta!"
      , "Se dispone de tres intentos para cada configuracion!!! Suerte, ;-)"]));
}

function toString(lines) {
  let msg = "";
  for (let i = 0; i < lines.length; i++) {
    msg += lines[i] + "\n";
  }
  return msg;
}

function getMesh(expression) {
  let msg = [];
  for (let x = 0; x < 9; x++) {
    msg[x] = "";
    for (let y = 0; y < 9; y++) {
      msg[x] += eval(expression) ? "1" : "0";
    }
  }
  return msg;
}

function analizeExpression(question) {
  const MAX_ATTEMPS = 3;
  let attemps = 0;
  let ok;
  do {
    attemps++;
    let answer = prompt(toString(getMesh(question)));
    ok = analizeAttemp(question, answer);
  } while (!ok && attemps < MAX_ATTEMPS);
  return ok;
}

function analizeAttemp(question, answer) {
  if (getError(answer)) {
    return false;
  }
  let ok = toString(getMesh(question)) == toString(getMesh(answer));
  let msg = "";
  if (ok) {
    msg += getCorrectMsg(question);
  } else {
    msg += getIncorrectMsg(question, answer);
  }
  console.log(msg);
  return ok;
}

function getError(answer) {
  try {
    getMesh(answer);
  } catch (exception) {
    console.log(exception);
    return true;
  }
}

function getCorrectMsg(question) {
  return "CORRECTO!!! :-) \n" + toString(getMesh(question));
}

function getIncorrectMsg(question, answer) {
  return "INCORRECTO!!! :-( \n"
    + "Esperaba:        ... pero fue:\n"
    + toString(mergeMeshes(getMesh(question), getMesh(answer)));
}

function mergeMeshes(goodLines, badLines) {
  let msg = [];
  for (let i = 0; i < goodLines.length; i++) {
    msg[i] = goodLines[i] + "    " + badLines[i];
  }
  return msg;
}  
