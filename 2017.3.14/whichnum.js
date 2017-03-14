process.stdin.resume();
process.stdin.setEncoding("utf8");
process.stdin.on("data", function(chunk) {
    var datas = chunk.trim().split("\n");//这里本身也是一行一行的读数据
	
    var num = parseInt(datas[0]);
    var intstr = datas[1].trim().split(" ");
	var ints=intstr.map(function(item){
		return  parseInt(item);
	});
	function compare(a,b){
		return a-b;
	}
    ints.sort(compare);
	var small = 0;
	var big = small+1;
	var flag = true;
	var differ = 0;
    var str = "";
	while(big<num){ //num是数组的长度
		if(ints[small]==ints[big]){
			flag = false; //mistake的标志
			break;
		}
		differ +=ints[big] - ints[small]-1;
		small = big;
		big++;
	}
	if(differ==0&&flag){
		if(ints[0]==1){
			str = (ints[ints.length-1]+1);
		}else {
			str = (ints[0]-1)+" "+ (ints[ints.length-1]+1);
		}
		console.log(str);		
	}
	
	if(differ==1&&flag){
		for(var i = 0;i<ints.length;i++){
			if((ints[i]+1)!=ints[i+1]){
				str = ints[i]+1;
				break;
			}
		}
		console.log(str);		
	}
	if(!flag||differ>1||differ<0){
		console.log("mistake");
	}
});
