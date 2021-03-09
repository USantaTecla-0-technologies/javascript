let msg = "";
for (let x = 0; x < 19; x++) {
    for (let y = 0; y < 19; y++) {
        if (x - y == 1 || x - y == -1) {
            msg += "0";
        } else {
            msg += "1";
        }
    }
    msg += "\n";
}
console.log(msg);

