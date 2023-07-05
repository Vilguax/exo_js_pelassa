function TabNbPremier(number){
    var tab = [];
    var nbPremier = true;
    for (var i = 2; i <= number; i++) {
        for (var j = 2; j < i; j++) {
            if (i % j === 0) {
                nbPremier = false;
            }
        }
        if (nbPremier) {
            tab.push(i);
        }
        nbPremier = true;
    }
    return tab;
}
console.log(TabNbPremier(100));