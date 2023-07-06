function Palaindrome(n) {
    const reverseStr = String(n).split('').reverse().join('');
    return String(n) === reverseStr;
  }
  
  function calcPalindrome(n) {
    while (true) {
      if (Palaindrome(n)) {
        return n;
      }
      n++;
    }
  }

const nombre = 123;
const resultat = calcPalindrome(nombre);
console.log(resultat);