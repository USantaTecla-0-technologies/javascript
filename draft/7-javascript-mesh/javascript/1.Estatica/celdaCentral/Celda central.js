let msg = "";
for (let x = 0; x < 19; x++) {
    for (let y = 0; y < 19; y++) {
        if (x == 9 && y == 9) {
            msg += "0";
        } else {
            msg += "1";
        }
    }
    msg += "\n";
}
console.log(msg);


