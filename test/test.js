function aLinkcolor(str){
	var arr=str.trim().split("");
	var count=0;
	for(var i=0;i<arr.length;i++){
		if(arr[i]=='X'||arr[i]=='#'){
			continue;
		}
		if(i-parseInt(arr[i])<0){
			var small=0;
		}else{
			small=i-parseInt(arr[i]);
		}
		if(i+parseInt(arr[i])>=arr.length){
			var big=arr.length -1;
		}else{
			big=i+parseInt(arr[i]);
		}
		for(var j=small;j<=big;j++){
			if(arr[j]=='X'){
				count++;
				arr[j]='#';
			}
		}
	}
	console.log(count);
}

