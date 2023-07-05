function NombrePremier(n) {
    var i = 2;
    while (i < n) {
        if (n % i == 0) {
            console.log("Le nombre " + n + " n'est pas premier");
        }
        i++;
    }
    console.log("Le nombre " + n + " est premier");
}
NombrePremier(7);