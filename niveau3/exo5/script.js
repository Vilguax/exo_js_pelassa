function TriRapide(tab){
    if(tab.length <= 1){
        return tab;
    }
    var pivot = tab[0];
    var tabInf = [];
    var tabSup = [];
    for(var i = 1; i < tab.length; i++){
        if(tab[i] < pivot){
            tabInf.push(tab[i]);
        }else{
            tabSup.push(tab[i]);
        }
    }
    return TriRapide(tabInf).concat(pivot, TriRapide(tabSup));
}
console.log(TriRapide([5, 2, 4, 3, 1]));