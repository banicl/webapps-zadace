var x = [];
var y = 1;
var z = 10;
for (i = y; i < z; i++) {
    if (i % 3 == 0) {
        x.push(i);
    }
}
console.log("Brojevi djeljivi s 3: " + x);