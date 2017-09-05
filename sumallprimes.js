
function sumPrimes(num) {
  var numbers = [], primeNumbers=[];
	var stepFactor = Math.sqrt(num);
	var osszeg =0;
	for(var i=2; i< stepFactor;i++){
		if(!numbers[i]){
			for(var j=i*i;j<=num;j+=i){
				numbers[j] = "composite";
			}
		}
	}
	for( i=2;i<=num;i++){
		if(!numbers[i]){
			primeNumbers.push(i);
		}
	}
	for( i=0;i<primeNumbers.length;i++){
		osszeg+=primeNumbers[i];
	}
	
  return osszeg;
}

sumPrimes(10);
