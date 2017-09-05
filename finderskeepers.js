

function findElement(arr, func) {
  var num ;
  var van = false ;
  for(var i=0;i<arr.length;i++){
  	num = arr[i];
  	

  	if(func(num)){

  		return num;

  	}
  }

  if(van===false){
  	return undefined;
  }
  
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
