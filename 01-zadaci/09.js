var myobject1 = {
    a: 1,
    b: 2,
    c: 3
}

var myobject2 = {
    a: 321,
    b: 3,
    c: 1
}

var comp = function (myobject1, myobject2) {
    var myobject1len = Object.keys(myobject1).length;
    var myobject2len = Object.keys(myobject2).length;

    if (myobject1len === myobject2len) {
        return Object.keys(myobject1).every(
            key => myobject2.hasOwnProperty(key)
                && myobject2[key] === myobject1[key]);
    }
    return false;
}
console.log(comp(myobject1, myobject2));
