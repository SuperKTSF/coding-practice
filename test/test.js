var readline = require("readline");
var rl = readline.createInterface(process.stdin, process.stdout); 
var args = [];

rl.on("line", function(str){
    args.push(str);
    rl.close();
});
rl.on("close", function(){
	var num = parseInt(args[0]);
    var str = num.toString(2);
    var count = 0;
    for(var i = 0;i<str.length;i++){
        if(str[i]==1){
            count++;
        }
    }
    console.log(count);
});