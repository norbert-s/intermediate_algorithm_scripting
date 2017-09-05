function myReplace(str, before, after) {
  
  var nagye = false;
  var myRegex = /^[A-Z]+/;
  
  var res = str.indexOf(before);
  console.log(res);
  var strHossz= str.length;
  
  //itt meg kell nézni, hogy a kicserélendő szó nagybetűvel kezdődik e
  if(myRegex.test(before)===true){
  	nagye=true;
  	console.log('nagybetus');
  	var nagy= after.charAt(0).toUpperCase();
  	var ujSzo=nagy+after.substring(1);
  console.log(ujSzo);
  after= ujSzo;
  }


  //ha nagybetűvel kezdődik akkor
  

  str = str.replace(before,after);
  
  //átváltoztatjuk az adott betűt nagyra
 
	return str;
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");



//ha az első betű az eredetiben nagybetű, akkor annak
// nagynak kell lennie a változtatás után is