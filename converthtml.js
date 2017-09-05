function convertHTML(str) {
  // &colon;&rpar;
  var newStr ="";
  var newSzo="";
  for ( var i=0;i<str.length;i++){
    var x = str[i];
    newStr="";
    console.log("x:"+x);
    if(x==="&" ){
      newStr = "&amp;";
      
    }
    else if(x==="<" ){
      newStr = "&lt;";
      
      
    }
    else if(x===">" ){
      newStr = "&gt;";
      
      
    }
    else if(x==="'" ){
      newStr = "&apos;";
      
      
    }
    else if(x==='"' ){
      newStr = "&quot;";
      
      
    }
    else{
    	newStr=x;
    }
    newSzo+=newStr;
     
}
  return newSzo;
}

convertHTML("Dolce & Gabbana");
