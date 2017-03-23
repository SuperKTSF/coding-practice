/*Readline是Node.js里实现标准输入输出的封装好的模块，通过这个模块我们可以以逐行的方式读取数据流。使用require(“readline”)可以引用模块。*/
var readline = require('readline');
/*在createInterface里，我们需要传入标准输入输出作为数据的输入输出流*/
var rl = readline.createInterface({
	input:process.stdin,
	output:process.stdout
});
var args = []; 
rl.on('line', function(data){
    args.push(data); //通常将从标准输入数据存在数组中
    rl.close();  //readline模块一开始获取数据就不会结束，必须以这方式结束获取数据
});
rl.on('close',function(){
	args;//然后在这里进行数据的处理
});

//更简单的方式不用npm包直接读取，这种情况下是读取一行中的若干个数字
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

//多行输入的标准模板
var readline = require('readline');
var num = 0;
var arr = [],brr = [];
var rl = new readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function(line) {
    if(num ==0){
        num = line.trim();
    }else{
        arr.push(line.trim());
        if(num == arr.length){
            arr = arr.sort(function(a,b){
            return a-b;
        })
        var j = 0;
        for(var i=0;i<arr.length;i++){
            if(arr[i]!= arr[i+1]){
                brr[j] = arr[i];
                j++;
            }
        }
        for(var i = 0; i<brr.length;i++){
            process.stdout.write(brr[i] + "\n");
        }
         num =0;
         arr.length = brr.length = 0;
        }
    }
})