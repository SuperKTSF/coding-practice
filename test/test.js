 function a(str){
	
    var noWord = /[^a-zA-Z]/g;
    var repeatSpace =/\s{2,}/g;
    str  = str.replace(noWord,function(match){
        return " ";
    });
    
    str  = str.replace(repeatSpace,function(match){
        return " ";
    });
    var arr = str.trim().split(" ");
	arr.reverse();
    console.log(arr.join(" "));
};