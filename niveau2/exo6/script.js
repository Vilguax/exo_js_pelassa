function TrieParTitre(books) {
    var sortedBooks = books.sort(function (a, b) {
        if (a.titre < b.titre) {
            return -1;
        }
        else if (a.titre > b.titre) {
            return 1;
        }
        else {
            return 0;
        }
    });
    console.log(sortedBooks);
}
TrieParTitre([
    {
        titre: "Harry Potter",
        auteur: "J.K. Rowling",
        annee: 1997
    },
    {
        titre: "Le Seigneur des Anneaux",
        auteur: "J.R.R. Tolkien",
        annee: 1954
    },
    {
        titre: "Le Trône de Fer",
        auteur: "George R.R. Martin",
        annee: 1996
    }
]);