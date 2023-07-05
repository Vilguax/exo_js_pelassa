var testpalindrome = prompt("Entrez un mot pour vérifier si c'est un palindrome:");
var testpalindromeinverse = "";
for (var i = testpalindrome.length - 1; i >= 0; i--) {
    testpalindromeinverse += testpalindrome[i];
}
if (testpalindrome == testpalindromeinverse) {
    console.log("Le mot " + testpalindrome + " est un palindrome.");
}
else {
    console.log("Le mot " + testpalindrome + " n'est pas un palindrome.");
}