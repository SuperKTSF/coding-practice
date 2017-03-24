var readline = require("readline");
var rl = readline.createInterface(process.stdin, process.stdout); 
var args = [];

rl.on("line", function(str){
    args.push(str);
    rl.close();
});
rl.on("close", function(){
	var arr = args[0].trim().split(" ");//输入的三个数字
	var num = 0;
    var num1 = parseInt(arr[0].split("").reverse().join(""));
    var num2 = parseInt(arr[1].split("").reverse().join(""));
	num = num1+num2;

    console.log(num);
});