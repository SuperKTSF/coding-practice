var readline = require("readline");
var rl = readline.createInterface(process.stdin, process.stdout); 
var args = [];

rl.on("line", function(str){
    args.push(str);
    rl.close();
});
rl.on("close", function(){
	var arr = args[0].trim().split("");//输入一个字符串,变成字符数组
	var result = [];
	var str = "";
	result = sortString(arr,str,[]);
	console.log(result);
});

function sortString(arr,str,res){
	if(arr.length == 0){
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