var readline = require('readline');
/*在createInterface里，我们需要传入标准输入输出作为数据的输入输出流*/
var rl = readline.createInterface({
	input:process.stdin,
	output:process.stdout
});
var args = []; 
rl.on('line',fuction(data){
	args.push[data]; //通常将从标准输入数据存在数组中
	rl.close()  //readline模块一开始获取数据就不会结束，必须以这方式结束获取数据
});

rl.on('close',function(){
	var minSize = args[0][0]；//然后在这里进行数据的处理
	var maxSize = args[0][1];
	var num = args[1];
	var fishSize = args[2];
});