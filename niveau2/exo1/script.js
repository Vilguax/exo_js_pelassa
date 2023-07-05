function affichePair(tab) {
    var tabPair = [];
    for (var i = 0; i < tab.length; i++) {
        if (tab[i] % 2 == 0) {
            tabPair.push(tab[i]);
        }
    }
    console.log(tabPair);
}
affichePair([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);