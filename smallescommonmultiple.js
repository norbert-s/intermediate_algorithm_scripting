//
function smallestCommons(arr) {
  	var flag=0;
  	var flag2=false;
  	var i=arr[1];
  	arr =arr.sort();
  	var szam=0;
  	console.log(arr);
	while(flag2!=true){
		flag=0;
		for(var j=arr[0];j<=arr[1];j++){
			

			if(i%j===0 ){
				flag++;
				
			}
		}
	if(flag===arr[1]-arr[0]+1){
		flag2=true;
		szam = i;
	}
	i++;
	
	}
  console.log(szam);
  return szam;
}


smallestCommons([1,13]);