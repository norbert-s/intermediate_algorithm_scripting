function binaryAgent(str) {

var chopped = str.split(" ");
var szavak = [];
var betuk = [];
for (var i = 0; i < chopped.length; i++) {
	szavak.push(parseInt(chopped[i], 2));
    betuk.push(String.fromCharCode(szavak[i]));
  }
  
  console.log(betuk);
  var uj = betuk.join("");
  console.log(uj);
return uj;
}
binaryAgent('01000001 01110010 01100101 01101110 00100111 01110100');
