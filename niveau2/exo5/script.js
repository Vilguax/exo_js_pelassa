function NombreVoyelles(str) {
    var strArray = str.split("");
    var nbVoyelles = 0;
    for (var i = 0; i < strArray.length; i++) {
        if (strArray[i] === "a" || strArray[i] === "e" || strArray[i] === "i" || strArray[i] === "o" || strArray[i] === "u" || strArray[i] === "y") {
            nbVoyelles++;
        }
    }
    console.log(nbVoyelles);
}
NombreVoyelles("aeiouy");