function Palindrome(str) {
    var strAlpha = str.replace(/[^A-Za-z]/g, "").toLowerCase();
    var strReverse = strAlpha.split("").reverse().join("");
    if (strAlpha === strReverse) {
        console.log("C'est un palindrome");
    }
    else {
        console.log("Ce n'est pas un palindrome");
    }
}
Palindrome("Bonjour le monde !");