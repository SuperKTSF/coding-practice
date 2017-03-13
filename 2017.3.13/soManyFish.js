var rl = require("readline").createInterface(process.stdin, process.stdout);
var args = [];
rl.on('line', function(data){
    args.push(data);
    rl.close();
});
rl.on('line', function(data){
    args.push(data); //通常将从标准输入数据存在数组中
    rl.close();  //readline模块一开始获取数据就不会结束，必须以这方式结束获取数据
});
rl.on('close',function(){
	var sizes = args[0].trim().split(" ");   //然后在这里进行数据的处理
	var minSize =parseInt(sizes[0]);
	var maxSize =parseInt(sizes[1]);	
	var num = parseInt(args[1]);   	//数组的长度	
	var size = args[2].trim().split(" ");   //数组
	var fishSize=size.map(function(item){
		return  parseInt(item);
	});
	var count = 0;
	for(var i = minSize;i<=maxSize;i++){
		var flag = false;
		for(var j = 0;j<num;j++){
			if((i<=fishSize[j]*10&&i>=fishSize[j]*2)||(10*i>=fishSize[j]&&2*i<=fishSize[j])){
				flag = true;
				break;
			}
		}
		if(!flag){
			count++;
		}
	}
	console.log(count);
});


//以后优先使用下面的版本，不需要第三方框架自动执行
process.stdin.resume();
process.stdin.setEncoding("utf8");
process.stdin.on("data", function(chunk) {
    var datas = chunk.trim().split("\n");//这里本身也是一行一行的读数据
	
    var sizes = datas[0].trim().split(" ");
    var minSize = parseInt(sizes[0]);         //每一行的数据是一个数组
    var maxSize = parseInt(sizes[1]);
	var num = parseInt(datas[1]);
	var size = datas[2].trim().split(" "); 
    var fishSize=size.map(function(item){
		return  parseInt(item);
	});
    var count = 0;
	for(var i = minSize;i<=maxSize;i++){
		var flag = false;
		for(var j = 0;j<num;j++){
			if((i<=fishSize[j]*10&&i>=fishSize[j]*2)||(10*i>=fishSize[j]&&2*i<=fishSize[j])){
				flag = true;
				break;
			}
		}
		if(!flag){
			count++;
		}
	}
	console.log(count);   
});



























