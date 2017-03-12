/*Readline是Node.js里实现标准输入输出的封装好的模块，通过这个模块我们可以以逐行的方式读取数据流。使用require(“readline”)可以引用模块。*/

var readline = require('readline');
/*在createInterface里，我们需要传入标准输入输出作为数据的输入输出流*/
var rl = readline.createInterface({
	input:process.stdin,
	output:process.stdout
});
var args = []; 
rl.on('line',fuction(data){
	var args; //通常将从标准输入数据存在数组中
	rl.close()  //readline模块一开始获取数据就不会结束，必须以这方式结束获取数据
});

rl.on('close',function(){
	args；//然后在这里进行数据的处理
});

//更简单的方式不用npm包直接读取，这种情况下是读取一行中的若干个数字
process.stdin.resume();
process.stdin.setEncoding("utf8");
process.stdin.on("data", function(chunk) {
    var datas = chunk.trim().split("\n");
    for(var i = 0; i < datas.length; i++) {
        var ab = datas[i].trim().split(" ");
        var a = parseInt(ab[0]);
        var b = parseInt(ab[1]);
        console.log(a + b);
    }
});