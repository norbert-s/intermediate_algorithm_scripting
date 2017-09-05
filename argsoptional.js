function addTogether() {
  let argsLength =arguments.length;
  
  let szam1 = arguments[0];
  let szam2 = arguments[1];
  console.log(szam1);
  console.log(szam2);
  
  
  //vesszük azt az esetet ha két argument van
  //kell még venni azt az esetet, hogy valid számokról van e szó
  if(argsLength===2){
    let typeOfArg1=typeof szam1;
    console.log(typeOfArg1);
    let typeOfArg2=typeof szam2;
    console.log(typeOfArg2);
      if(typeOfArg1=="number" && typeOfArg2=="number"){
        console.log(szam1+szam2);
        return szam1+szam2;
      }
      else{
        
        return undefined;
      }
    }
  
    else if(argsLength===1){
    let szam01 = arguments[0];
    let typeOfSzam01=typeof szam01;
    console.log(szam01);
    if(typeOfSzam01!=="number"){
      return undefined;
    }
    else{
      
      
       return function (szam){
           
           if(typeof szam!=="number"){
             return undefined;
           }
          else{
            return szam+szam01;
      }
    };
    }
  
  
    }
  }

addTogether(2,3);
