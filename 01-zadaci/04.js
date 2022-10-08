function satiminute(x) {
    var sati = Math.floor(x / 60);   //Math.floor funkcija zaokružuje i vraća najveći cijeli broj manji ili jednak zadanom broju.
    var minute = x % 60;
    return "To je " + sati + " sata i " + minute + " minuta.";
}

console.log(satiminute(120));