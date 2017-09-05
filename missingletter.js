
function fearNotLetter(str) {
  let betuk = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r",
               "s","t","u","v","w","x","y","z" ];
  let strSplit= str.split("");
  let kezdo = str[0];
  let index = -1;
  let hianyzo;
  for(var i=0;i<betuk.length;i++){
    if(betuk[i]===kezdo){
      index=i;
    }
  }
  if(index===-1){
    return undefined;
  }
  
  else{
    for(i = 0;i<strSplit.length;i++){
      if(strSplit[i]!==betuk[i+index]){
        hianyzo = betuk[i+index];
        break;
      }
      
    }
  }
  
  return hianyzo;
}

fearNotLetter("abce");
