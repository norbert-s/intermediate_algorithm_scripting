
function truthCheck(collection, pre) {
  // Is everyone being true?
   console.log(collection.length);
  let length = collection.length;
  let returnBool=true;
  let flag = 0;
  
  
  

	for(let key in collection) {
    	if(collection.hasOwnProperty(key)) {
            var value = collection[key];
            console.log(value);
	        if(value[pre]===""){
	        	console.log("hurray");
	        	
	        }
	        else if(typeof value[pre]==="object"){
	        	console.log("null");
	        	
	        }
			else if (typeof value[pre]==="boolean"){
				console.log("boolean");
            }
            else{
            	flag++;
            }
			//do something with value;
		}
	}




  if(length===flag){
    returnBool=true;
      }
	else{
	returnBool= false;

	}  
console.log(returnBool);
return returnBool;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
