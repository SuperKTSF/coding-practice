function aLinkcolor(arr){

var result =[];
for(var i=0;i<arr.length;i++){
	if(result.indexOf(arr[i])==-1){
		result.push(arr[i]);
	}
}
console.log(result.length);
}

