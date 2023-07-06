function RandomNum(){
    var date = new Date();
    var time = date.getTime();
    var randomNum = time.toString().split('').sort(function(){return 0.5-Math.random()}).join('');
    return randomNum;
}
console.log(RandomNum());