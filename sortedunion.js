function uniteUnique(arr) {
  //its an argument object
  var args = Array.prototype.slice.call(arguments);
//var args = [].slice.call(arguments);
	var newArr= args.reduce(function(a,b){
		return a.concat(b);
	});
	console.log(newArr);
	console.log("nulladik",newArr[0]);
	var reducedArr=[];
	for(var i=0;i<newArr.length;i++){
		if(reducedArr.indexOf(newArr[i])===-1){
			reducedArr.push(newArr[i]);
		}
	}
	return reducedArr;
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);