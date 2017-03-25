var readline = require("readline");
var rl = readline.createInterface(process.stdin, process.stdout); 
var args = [];

rl.on("line", function(str){
    args.push(str);
	if(args.length==2){
		    rl.close();
	}

});
rl.on("close", function(){
	var X = parseInt(args[0]);
	var Y = parseInt(args[1]);
	var time = [];
	var result=[];
	var arr = "512346".split("");
	str = "";
	time[0] = [0,2,10,5,3,1000];
	time[1] = [1000,0,12,1000,1000,10];
	time[2] = [1000,1000,0,1000,7,1000];
	time[3] = [2,1000,1000,1,0,1000];
	time[4] = [4,1000,1000,1,0,1000];
	time[5] = [3,1000,1,1000,2,0];
	for(var i=0;i<6;i++){
		for(var j=0;j<6;j++){
			if(i==Y||j==Y){
				time[i][j] = 1000;
			}
		}
	}
	result = sortString(arr,str,[]);
	console.log(result);
});

function sortString(arr,str,res){
	if(str[str.length-1] == '(X-1)'){
		res.push(str);
	}else{
		var isUsed = {};//这个是用来判断字符数组中是否有重复元素的
		for(var i=0;i<arr.length;i++){
			if(!isUsed[arr[i]]){
				var temp  = arr.splice(i,1); //获取一个元素，并从数组中删除
				str +=temp;
				sortString(arr,str,res);
				arr.splice(i,0,temp); 
				str = str.slice(0,str.length-1);
				isUsed[temp] = true;
			}
		}
	}
	return res;
}