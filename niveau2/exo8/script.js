function diviseurs(n) {
    var diviseurs = [];
    for (var i = 1; i <= n; i++) {
        if (n % i == 0) {
            diviseurs.push(i);
        }
    }
    console.log(diviseurs);
}
diviseurs(12);