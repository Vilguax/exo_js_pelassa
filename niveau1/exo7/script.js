var tableau = ["premiermot", "deuxiememot", "troisiememot", "quatriememot", "cinquiememot", "sixiememot"];

var motlepluslong = "";
for (var i = 0; i < tableau.length; i++) {
    if (tableau[i].length > motlepluslong.length) {
        motlepluslong = tableau[i];
    }
}
console.log("Le mot le plus long est : " + motlepluslong);