function OccurencesMots(str){
    let obj = {};
    let mots = str.split(" ");
    for(let i = 0; i < mots.length; i++){
        if(obj[mots[i]]){
            obj[mots[i]]++;
        }else{
            obj[mots[i]] = 1;
        }
    }
    return obj;
}
console.log(OccurencesMots("Bonjour le monde !"));