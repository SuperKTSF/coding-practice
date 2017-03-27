var readline = require("readline");
var rl = readline.createInterface(process.stdin, process.stdout); 
var args = [];

rl.on("line", function(str){
    args.push(str);
    rl.close();
});
rl.on("close", function(){
	var arr = args[0].trim().split("");//输入一个字符串,变成字符数组
	var result = [];
	var str = "";
	result = sortString(arr,str,[]);   //result是'123456'的全排
	var newarr =[];
	for(var i=0;i<result.length;i++){
		if(IsPopOrder(args[0].trim(),result[i])){
			newarr.push(result[i]);
		}
	}
	console.log(result);
	console.log(newarr);
	console.log(newarr.length);
});

function sortString(arr,str,res){
	if(arr.length == 0){
		res.push(str);
	}else{
		var isUsed = {};//这个是用来判断字符数组中是否有重复元素的
		for(var i=0;i<arr.length;i++){
			if(!isUsed[arr[i]]){
				var temp  = arr.splice(i,1); //获取一个元素，并从数组中删除
				str +=temp;
				sortString(arr,str,res);
				arr.splice(i,0,temp); 
				str = str.slice(0,str.length-1);
				isUsed[temp] = true;
			}
		}
	}
	return res;
}
function IsPopOrder(pushV, popV)
{

    if(pushV==null||popV==null){
        return false;
    }
    //方法非常的巧妙，利用插入顺序插入，利用出栈顺序出栈，如果最后全部出栈为空，则为正确的出栈顺序
    var stack = [];
    for(var i=0,j=0;i<pushV.length;i++){
        stack.push(pushV[i]);
        //while循环的目的在于判断再插入的过程中何时会出现出栈
        while(j<popV.length&&stack[stack.length-1]==popV[j]){
            stack.pop();
            j++;
        }
    }
    
    return stack.length==0;
}