
function translatePigLatin(str) {
  let betuk = str.split("");
  
  let vowels = ["a","o","u","e","i"];
  
  //kezeljük a magánhangzósat
  for(var i=0;i<vowels.length;i++){
    if(betuk[0]===vowels[i]){
      betuk=betuk.join("")+"way";
    }
  }
  
  if(betuk.length!==str.length){
    return betuk;
  }
  
  let flag=false;
  for( i=0;i<vowels.length;i++){
    for(var j=0;j<betuk.length;j++){
      if(betuk[j]===vowels[i]){
        flag=true;
      }
    }
  }
  if(flag===false){
    
    return str+="ay";
  }
  
  //kezeljük a massalhangzos verziot
  
  while(true){
    let temp = betuk[0];
    console.log(temp);
    if(temp!=="a" && temp!=="o" && temp!=="u" && temp!=="e" && temp !=="i"){
      betuk.push(betuk.splice(0,1));
    }
    else{
      break;
    }
  }
  if(betuk){
    betuk=betuk.join("")+"ay";
    return betuk;
  }
  
  
  //kezeljuk magánhangzó nélkül
  
  
}

translatePigLatin("ccnsnnt");



