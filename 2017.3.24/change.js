var readline = require("readline");
var rl = readline.createInterface(process.stdin, process.stdout); 
var args = [];

rl.on("line", function(str){
    args.push(str);
    rl.close();
});
rl.on("close", function(){
	var arr = args[0].trim().split(" ");//输入的三个数字
	var num = "123456".split("");
    var arr = arr[0].split("");
	for(var i=0;i<arr.length;i++){
		switch(arr[i]){
			case 'L':
				swap(num,0,5);
				swap(num,1,4);
				swap(num,0,1);
				break;
			case 'R':
				swap(num,0,5);
				swap(num,1,4);
				swap(num,4,5);
				break;
			case 'F':
				swap(num,2,4);
				swap(num,3,5);
				swap(num,4,5);
				break;
			case 'B':
				swap(num,2,4);
				swap(num,3,5);
				swap(num,2,3);
				break;
			case 'A':
				swap(num,0,3);
				swap(num,1,2);
				swap(num,2,3);
				break;
			case 'C':
				swap(num,0,3);
				swap(num,1,2);
				swap(num,0,1);
				break;
				
			
		}
	}
	console.log(num.join(""));
});
function swap(arr,i,j){
	var temp;
	temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;	
}