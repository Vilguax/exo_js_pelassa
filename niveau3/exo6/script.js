function rechercheBinaire(tab, element) {
    let debut = 0
    let fin = tab.length - 1
    let milieu = Math.floor((debut + fin) / 2)
    while (debut <= fin && tab[milieu] !== element) {
        if (element < tab[milieu]) {
            fin = milieu - 1
        } else {
            debut = milieu + 1
        }
        milieu = Math.floor((debut + fin) / 2)
    }
    return (tab[milieu] !== element) ? -1 : milieu
}
console.log(rechercheBinaire([1, 2, 3, 4, 5, 6, 7, 8, 9], 5))