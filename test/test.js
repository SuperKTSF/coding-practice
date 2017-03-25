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
	var num = parseInt(args[0]);
    var arr = args[1].trim().split(" ");
	var str= "";
    var result = [];
    for(var i = 0;i<arr.length;i++){
        var newarr = arr.slice(i+1);
        if(newarr.indexOf(arr[i])==-1){
            result.push(arr[i]);
        }
    }
	for(var j = 0;j<result.length;j++){
		str=str+result[j]+" ";
	}
    

    console.log(str.trim());

});