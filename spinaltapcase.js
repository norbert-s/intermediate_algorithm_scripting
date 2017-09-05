
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  
  let regEx = /\s/g;
  let regExx = /_/g;
  

	str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
	str = str.replace(regExx," ");
	str = str.replace(regEx,"-");
	str = str.toLowerCase();
  console.log(str);
  return str;
}

spinalCase('This Is Spinal Tap');

