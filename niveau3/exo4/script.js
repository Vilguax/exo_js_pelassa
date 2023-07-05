function StatsPersonnes(personnes) {
    if (personnes.length === 0) {
      return {
        nombrePersonnes: 0,
        ageMoyen: 0,
        professions: {}
      };
    }
  
    var nombrePersonnes = personnes.length;
    var sommeAges = 0;
    var professions = {};

    personnes.forEach(function(personne) {
      sommeAges += personne.age;
      if (personne.profession in professions) {
        professions[personne.profession]++;
      } else {
        professions[personne.profession] = 1;
      }
    });
  
    var ageMoyen = sommeAges / nombrePersonnes;
  
    return {
      nombrePersonnes: nombrePersonnes,
      ageMoyen: ageMoyen,
      professions: professions
    };
  }

var personnes = [
{ nom: "Alice", age: 30, profession: "Ingénieur" },
{ nom: "Bob", age: 35, profession: "Développeur" },
{ nom: "Charlie", age: 25, profession: "Ingénieur" },
{ nom: "Dave", age: 40, profession: "Manager" }
];
  
var statistiques = StatsPersonnes(personnes);
console.log(statistiques);
  