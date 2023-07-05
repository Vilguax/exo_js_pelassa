function Moyenne(tableau) {
    var somme = 0;
    for (var i = 0; i < tableau.length; i++) {
        somme += tableau[i];
    }
    return somme / tableau.length;
}
console.log(Moyenne([12, 29, 34, 40, 523]));
