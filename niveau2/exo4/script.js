function ReverseStr(str) {
    var strArray = str.split(" ");
    var reverseStrArray = strArray.reverse();
    var reverseStr = reverseStrArray.join(" ");
    console.log(reverseStr);
}
ReverseStr("Bonjour le monde");