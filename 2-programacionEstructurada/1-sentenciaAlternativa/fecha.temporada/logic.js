{
  // Dada una fecha, mostrar por consola el texto con la siguiente estructura 
  // “El <dia> del <mes> de <año> cae a [primeros|mediados|finales] de 
  //      [primavera|verano|otoño|invierno].”, siendo [ … | … ] alternativas. 
  // Considerando cualquier simplificación ... meses de 30 días, años de 360 días, ...

  let day = 12;
  let month = 6;
  let year = 1968;

  {
    let season = "invierno";
    if ((day >= 21 && month == 3 || month > 3) && (day < 21 && month == 6 || month < 6)) {
      season = "primavera";
    } else if ((day >= 21 && month == 6 || month > 6) && (day < 21 && month == 9 || month < 9)) {
      season = "verano";
    } else if ((day >= 21 && month == 9 || month > 9) && (day < 21 && month == 12 || month < 12)) {
      season = "otoño";
    }
    let position = "primeros";
    if (day >= 21 && (month - 1) % 3 == 0 || day <= 20 && (month - 2) % 3 == 0) {
      position = "mediados";
    } else if (day >= 21 && (month - 2) % 3 == 0 || day <= 20 && (month - 3) % 3 == 0) {
      position = "ultimos";
    }
    console.log("El " + day + " del " + month + " de " + year + " cae a " + position + " " + season + ".");
  }

  {
    let days = (month - 1) * 30 + day;
    let season = "invierno";
    let trimester = 0;
    if (80 < days && days <= 350) {
      trimester = parseInt((days - 81) / 90) + 1;
    }
    if (trimester == 1) {
      season = "primavera";
    } else if (trimester == 2) {
      season = "verano";
    } else if (trimester == 3) {
      season = "otoño";
    }
    days -= 80;
    if (days <= 0) {
      days += 360;
    }
    let monthly = parseInt((days - 1) / 30) % 3;
    let position = "primeros";
    if (monthly == 1) {
      position = "mediados";
    } else if (monthly == 2) {
      position = "ultimos";
    }
    console.log("El " + day + " del " + month + " de " + year + " cae a " + position + " " + season + ".");
  }

  {
    let days = (month - 1) * 30 + day;
    let trimester = 0;
    if (80 < days && days <= 350) {
      trimester = parseInt((days - 81) / 90) + 1;
    }
    let season;
    switch (trimester) {
      case 0:
        season = "invierno";
        break;
      case 1:
        season = "primavera";
        break;
      case 2:
        season = "verano";
        break;
      case 3:
        season = "otoño";
        break;
    }
    days -= 80;
    if (days <= 0) {
      days += 360;
    }
    let monthly = parseInt((days - 1) / 30) % 3;
    let position;
    switch (monthly) {
      case 0:
      position = "primeros";
        break;
      case 1:
      position = "mediados";
        break;
      case 2:
      position = "ultimos";
        break;
    }
    console.log("El " + day + " del " + month + " de " + year + " cae a " + position + " " + season + ".");
  }

}

{
  // Dada una fecha, mostrar por consola el texto con la siguiente estructura 
  // “El <dia> del <mes> de <año> cae a [primeros|mediados|finales] de 
  //      [primavera|verano|otoño|invierno].”, siendo [ … | … ] alternativas. 
  // Considerando cualquier simplificación ... meses de 30 días, años de 360 días, ...

  function afterOrEqualsInYear(day1, month1, day2, month2) {
    return day1 >= day2 && month1 == month2 || month1 > month2;
  }

  function beforeInYear(day1, month1, day2, month2) {
    return day1 < day2 && month1 == month2 || month1 < month2;
  }

  function getSeason3(day, month, year) {
    if (afterOrEqualsInYear(day, month, 21, 3) && beforeInYear(day, month, 21, 6)) {
      return "primavera";
    }
    if (afterOrEqualsInYear(day, month, 21, 6) && beforeInYear(day, month, 21, 9)) {
      return "verano";
    }
    if (afterOrEqualsInYear(day, month, 21, 9) && beforeInYear(day, month, 21, 12)) {
      return "otoño";
    }
    return "invierno";
  }

  function getSeason(day, month) {
    if (beforeInYear(day, month, 21, 3)) {
      return "invierno";
    }
    if (beforeInYear(day, month, 21, 6)) {
      return "primavera";
    }
    if (beforeInYear(day, month, 21, 9)) {
      return "verano";
    }
    if (beforeInYear(day, month, 21, 12)) {
      return "otoño";
    }
    return "invierno";
  }

  function getDaysSinceBeginningYear(day, month) {
    return (month - 1) * 30 + day;;
  }

  function getSeason2(day, month) {
    let days = getDaysSinceBeginningYear(day, month);
    let trimester = 0;
    if (80 < days && days <= 350) {
      trimester = parseInt((days - 81) / 90) + 1;
    }
    if (trimester == 1) {
      return "primavera";
    }
    if (trimester == 2) {
      return "verano";
    }
    if (trimester == 3) {
      return "otoño";
    }
    return "invierno";
  }

  function getPosition2(day, month) {
    if (day >= 21 && (month - 1) % 3 == 0 || day <= 20 && (month - 2) % 3 == 0) {
      return "mediados";
    } else if (day >= 21 && (month - 2) % 3 == 0 || day <= 20 && (month - 3) % 3 == 0) {
      return "ultimos";
    }
    return "primeros";
  }

  function getPosition(day, month) {
    days = getDaysSinceBeginningYear(day, month) - 80;
    if (days <= 0) {
      days += 360;
    }
    let monthly = parseInt((days - 1) / 30) % 3;
    if (monthly == 1) {
      return "mediados";
    } else if (monthly == 2) {
      return "ultimos";
    }
    return "primeros";
  }

  {
    let day = 21;
    let month = 3;
    let year = 1968;
    console.log("El " + day + " del " + month + " de " + year +
      " cae a " + getPosition(day, month) + " " + getSeason(day, month) + ".");
  }

}