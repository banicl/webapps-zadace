var cammelCase = (string) => {
    var x = string.split(" ");
    for (i = 0; i < x.length; i++) {
        if (i != 0) {
            x[i] = x[i].charAt(0).toUpperCase() + x[i].substring(1);
        }
        else continue;
    }
    return x.join("");
};
console.log(cammelCase("web apps vjezbe"));