{
  // Cuadrante 1º, 2º, 3º y 4º de un punto fuera de los ejes
  let x = 7;
  let y = 0;

  {
    let quadrant;
    if (x > 0) {
      if (y > 0) {
        quadrant = 1;
      } else if (y < 0) {
        quadrant = 4;
      }
    } else if (x < 0) {
      if (y > 0) {
        quadrant = 2;
      } else if (y < 0) {
        quadrant = 3;
      }
    }
    let msg = "La coordenada (" + x + ", " + y + ")";
    if (quadrant == undefined) {
      msg = msg + " NO está en ningún";
    } else {
      msg = msg + " está en el " + quadrant + "º";
    }
    msg = msg + " cuadrante.";
    console.log(msg);
  }

  {
    let quadrant;
    if (x != 0 && y != 0) {
      quadrant = 0;
      if (x > 0) {
        quadrant = quadrant + 1;
      }
      if (y < 0) {
        quadrant = quadrant + 3;
      } else if (x < 0) {
        quadrant = quadrant + 2;
      }
    }
    let msg = "La coordenada (" + x + ", " + y + ")";
    if (quadrant == undefined) {
      msg += " NO está en ningún"
    } else {
      msg += " está en el " + quadrant + "º";
    }
    msg += " cuadrante.";
    console.log(msg);
  }

  {
    // acumuladores e incrementadores
    let quadrant;
    if (x != 0 && y != 0) {
      quadrant = 0;
      if (x > 0) {
        quadrant++;
      }
      if (y < 0) {
        quadrant += 3;
      } else if (x < 0) {
        quadrant += 2;
      }
    }
    let msg = "La coordenada (" + x + ", " + y + ")";
    if (quadrant == undefined) {
      msg += " NO está en ningún";
    } else {
      msg += " está en el " + quadrant + "º";
    }
    msg += " cuadrante.";
    console.log(msg);
  }

  {
    // otra con algebra de boole!!!

    let row = 3;
    let column = 4;
    let quadrant;
    if (row != 0 && column != 0) {
      quadrant = 1;
      if (column < 0) {
        quadrant += 2;
      }
      if (row > 0 && column < 0 || row < 0 && column > 0) {
        quadrant++;
      }
    }
    let msg = "La coordenada (" + row + ", " + column + ")";
    if (quadrant == undefined) {
      msg += " NO está en ningún"
    } else {
      msg += " está en el " + quadrant + "º";
    }
    msg += " cuadrante.";
    console.log(msg);
  }
}

{
  // Cuadrante 1º, 2º, 3º y 4º de un punto fuera de los ejes

  function getQuadrant(x, y) {
    if (x > 0) {
      if (y > 0) {
        return 1;
      } else if (y < 0) {
        return 4;
      }
    } else if (x < 0) {
      if (y > 0) {
        return 2;
      } else if (y < 0) {
        return 3;
      }
    }
    return undefined;
  }

  function getQuadrant2(x, y) {
    let quadrant;
    if (x != 0 && y != 0) {
      quadrant = 0;
      if (x > 0) {
        quadrant++;
      }
      if (y < 0) {
        quadrant += 3;
      } else if (x < 0) {
        quadrant += 2;
      }
    }
    return quadrant;
  }

  function getQuadrant3(x, y) {
    let quadrant;
    if (x != 0 && y != 0) {
      quadrant = 1;
      if (y < 0) {
        quadrant += 2;
      }
      if (x > 0 && y < 0 || x < 0 && y > 0) {
        quadrant++;
      }
    }
    return quadrant;
  }

  {
    let x = 10;
    let y = -6;
    let quadrant = getQuadrant(x, y);
    let msg = "La coordenada (" + x + ", " + y + ")";
    if (quadrant == undefined) {
      msg = msg + " NO está en ningún";
    } else {
      msg = msg + " está en el " + quadrant + "º";
    }
    msg = msg + " cuadrante.";
    console.log(msg);
  }

}