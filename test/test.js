var readline = require("readline");
var rl = readline.createInterface(process.stdin, process.stdout); 
var args = [];
rl.on("line", function(str){
    args = str.split(" ");
	var year = parseInt(args[0]); 
    var month = parseInt(args[1]); 
    var day = parseInt(args[2]); 
    var monthDays=[31,28,31,30,31,30,31,31,30,31,30,31];
    if(year%4==0){
        monthDays[1]++;
    }
    var count = 0;
    for(var i =0;i<month-1;i++){
        count+=monthDays[i];
    }
    console.log(count+day);
});