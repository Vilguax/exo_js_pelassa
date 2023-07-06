var num_aleatoire = Math.floor(Math.random() * 100) + 1;
var proposition = prompt("Entrez un nombre entre 1 et 100");
while (proposition != num_aleatoire) {
    if (proposition < num_aleatoire) {
        proposition = prompt("Trop petit");
    } else {
        proposition = prompt("Trop grand");
    }
}
console.log("Bravo ! Le nombre était " + num_aleatoire);