function isCircle(str1,str2){
    var i =0;
    while(i<str2.length){
		
        if(str1==(str2>>i)){
            return true
        }else{
            i++;
        }
    }
    return false;
}