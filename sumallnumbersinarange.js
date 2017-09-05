
function sumAll(arr) {
  arr.sort(function (a,b){
   return a-b; 
  });
  console.log(arr); 
  let min = arr[0];
  let max = arr[arr.length-1];
  console.log(min,max);

  let osszeg=0;
  for(let i=min;i<=max;i++){
  	osszeg+=i;
  }
  console.log(osszeg);
  return osszeg;
  
}

sumAll([1, 4, 19,10,22,2,0,-36,-100,500]);
