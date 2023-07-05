//fonction qui prend en paramètre une chaine de caractère et qui reverse les mots de cette chaines
function ReverseStr(str) {
    var strArray = str.split(" ");
    var reverseStrArray = strArray.reverse();
    var reverseStr = reverseStrArray.join(" ");
    console.log(reverseStr);
}
ReverseStr("Bonjour le monde");