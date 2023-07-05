function MotLettreMaj(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i].charAt(0) === array[i].charAt(0).toUpperCase()) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
console.log(MotLettreMaj(["test", "Test", "tEst", "teSt", "tesT", "TEST", "tEST", "teST", "tEsT", "TesT"]));