var x = 23;
var vk = function (x) {
    var ispis = 1;
    if (x >= 0 && x <= 1000) {
        for (i = 1; i <= x; i++) {
            if (i % 7 == 0) {
                ispis *= i;
            }
        }
        return ispis;
    }
};
console.log("Rezultat dobiven množenjem svih višekratnika broja 7 do 1000: " + vk(x));
