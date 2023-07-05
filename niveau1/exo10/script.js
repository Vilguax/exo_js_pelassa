var n = parseInt(prompt("Entrez un nombre :"));
var a = 0;
var b = 1;
var c = 0;
var i = 0;
while (i < n) {
    console.log(a + " ");
    c = a + b;
    a = b;
    b = c;
    i++;
}
