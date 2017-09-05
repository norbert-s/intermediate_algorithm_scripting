

function steamrollArray(arr) {
  // I'm a steamroller, baby
    let newArr=[];
  function bemegyunk(arr){
    for(let i=0;i<arr.length;i++){
      if(!Array.isArray(arr[i])){
        newArr.push(arr[i]);
      }
      else{
        let atadjuk = arr[i];
        bemegyunk(atadjuk);
      }
  }
}


  
bemegyunk(arr);
console.log(newArr);
  return newArr;
}

steamrollArray([1, [2], [3, [[4]]]]);
