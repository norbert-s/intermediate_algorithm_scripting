function pairElement(str) {
  var b="";
  var newSzo = [];
  var re = /""/;
  var newStr = str.split("");
  console.log(newStr);
  var hossz = str.length;

  for(var i=0;i<hossz;i++){
    newSzo[i]=new Array(newStr[i]);
    if(newStr[i]==="G"){
      newSzo[i].push("C");
    }
    if(newStr[i]==="C"){
      newSzo[i].push("G");
    }
    if(newStr[i]==="T"){
      newSzo[i].push("A");
    }
    if(newStr[i]==="A"){
      newSzo[i].push("T");
    }
    
     

  }
  console.log(newSzo);

  return newSzo;
}

pairElement("GCG");