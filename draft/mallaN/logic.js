{
  // Mallas de asteríscos

  {
    // 19 x 19
    let msg = "";
    for (let i = 0; i < 19; i++) {
      for (let j = 0; j < 19; j++) {
        msg += "*";
      }
      msg += "\n";
    }
    console.log(msg);
  }

  // Diagonal principal
  {
    let msg = "";
    for (let i = 0; i < 19; i++) {
      for (let j = 0; j < 19; j++) {
        if (i - j == 0) {
          msg += "*";
        } else {
          msg += " ";
        }
      }
      msg += "\n";
    }
    console.log(msg);
  }

  {
    let msg = "";
    for (let i = 0; i < 19; i++) {
      for (let j = 0; j < i; j++) {
        msg += " ";
      }
      msg += "*\n";
    }
    console.log(msg);
  }

}
