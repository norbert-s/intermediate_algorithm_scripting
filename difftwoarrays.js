
function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  let flag =false;
  for(let i=0;i<arr1.length;i++){
    flag=false;
    for(let j=0;j<arr2.length;j++){
      if(arr2[j]===arr1[i]){
        flag =true;
      }
    }
    if(flag===false){
      newArr.push(arr1[i]);
    }
  }
  for(let i=0;i<arr2.length;i++){
    flag=false;
    for(let j=0;j<arr1.length;j++){
      if(arr1[j]===arr2[i]){
        flag =true;
      }
    }
    if(flag===false){
      newArr.push(arr2[i]);
    }
  }
  return newArr;
}


diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
