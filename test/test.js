function containsNumber(str) {
    var arr = str.split("");
	arr.map(function(item){
        return (typeof parseInt(item) =="number");
    });
}

