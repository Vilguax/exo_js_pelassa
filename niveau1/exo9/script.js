var num_aleatoire = Math.floor(Math.random() * 100) + 1;
var num = prompt("Entrez un nombre entre 1 et 100:");

if (num > num_aleatoire) {
    console.log("Trop petit");
}
else {
    console.log("Trop grand.");
}
if (num == num_aleatoire) {
    console.log("Bravo, vous avez trouvé le nombre à trouver qui était " + num_aleatoire + ".");
}