function expressionMath(expression) {
    var resultat = eval(expression);
    if (isFinite(resultat)) {
        return resultat;
      } else {
        return "Erreur: Expression invalide";
      }
  }

var expression = "2 + 3 * 4";
var resultat = expressionMath(expression);
console.log(resultat);