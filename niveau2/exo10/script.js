function ElemCommuns(tab1, tab2) {
    var tab3 = [];
    for (var i = 0; i < tab1.length; i++) {
        for (var j = 0; j < tab2.length; j++) {
            if (tab1[i] == tab2[j]) {
                tab3.push(tab1[i]);
            }
        }
    }
    return tab3;
}
console.log(ElemCommuns([1, 2, 3, 4, 5], [1, 3, 5, 7, 9]));