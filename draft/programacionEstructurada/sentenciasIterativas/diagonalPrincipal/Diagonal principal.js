let msg = "";
for (let i = 0; i < 19; i++) {
    for (let j = 0; j < 19; j++) {
        if (i - j == 0) {
            msg += "0";
        } else {
            msg += "1";
        }
    }
    msg += "\n";
}
console.log(msg);


