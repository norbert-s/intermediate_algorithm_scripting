function sumFibs(num) {
	var osszeg =1;
    var a = 0, 
    b = 1, 
    f = 1;
    for(var i = 2; i <= num; i++) {
        f = a + b;
        a = b;
        b = f;
        if(f%2!==0 && f<=num){
        	osszeg += f;
        }
    }
    console.log(osszeg);
    return osszeg;

}
sumFibs(75025);