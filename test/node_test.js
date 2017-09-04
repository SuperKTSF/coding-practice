

/*var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var n = 0,
    arr = [];
rl.on('line', function(line) {
    if (!n) {
        n = parseInt(line)
    } else {		
        arr.push(line);
        if (arr.length == 1) {
			var resultStr = [];
			if(arr[0].length==1){
				console.log(1);
			}
			var newArr = arr[0].trim().split(" ");
			var count =1;
			var i = 1;
			var flag = newArr[0];
			while(i<newArr.length){
				if(newArr[i]==flag){
					i++;
				}else{
					flag = newArr[i];
					count ++;
					i++;
				}
			}
			console.log(count);
            arr = [];
            n = 0;
        }
    }
});*/

var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var arr=[];
rl.on('line', function(line) {
    arr.push(+line);
    if(arr.length==2){
       var n1=arr[0],
           n2=arr[1],
	   var chazhi = n2-n1;
	   var jiaodu;
		if(Math.abs(chazhi)>180 && chazhi>0){
			jiaodu = chazhi - 360;
		}else if(Math.abs(chazhi)>180 && chazhi<0){
			jiaodu = chazhi + 360;
		}
		console.log(jiaodu);
        arr=[];
    }
}); 

 
