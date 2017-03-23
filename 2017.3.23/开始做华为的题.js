/*计算字符串最后一个单词的长度，单词以空格隔开。*/
process.stdin.resume();
process.stdin.setEncoding("utf8");
process.stdin.on("data",function(chunk){
    var datas = chunk.trim().split("\n");
    var ab = datas[0].trim().split(" ");//第一行数组用空格分组成数组
    console.log(ab[ab.length-1].length);
});

/*写出一个程序，接受一个有字母和数字以及空格组成的字符串，和一个字符，然后输出输入字符串中含有该字符的个数。不区分大小写。*/
process.stdin.resume();
process.stdin.setEncoding("utf8");
process.stdin.on("data",function(chunk){
    var datas = chunk.trim().split("\n");
    var str = datas[0].trim().toLocaleUpperCase();//第一行数组用空格分组成数组
    var char = datas[1].toLocaleUpperCase(); //第二行数据是一个字符串
    var count = 0;
    for(var i=0;i<str.length;i++){
        if(str[i]==char){
            count++;
        }
    }
    console.log(count);
});

/*按照排好的顺序去找同学做调查。请你协助明明完成“去重”与“排序”的工作。这个输入输出真的太难了*/
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
});
/*连续输入字符串，请按长度为8拆分每个字符串后输出到新的字符串数组；
长度不是8整数倍的字符串请在后面补数字0，空字符串不处理。*/
//这种方式是输入一个处理一个，而不是完全输出入后再去处理
process.stdin.resume();
process.stdin.setEncoding("utf8");
process.stdin.on("data", function(chunk) {
    var datas = chunk.trim().split("\n");//这里本身也是一行一行的读数据	
	for(var i=0;i<datas.length;i++){
    	var str = datas[i].trim();
        var len = str.length;
        if(len==0){
            continue;  //空字符串不处理
        }
        var a =len%8;   //a为余数
        if(a!=0){
            for(var i=0;i<8-a;i++){
                str=str+"0";
            }
        }
        var left = 0;
        var right = 8;
        while(right<=str.length){
            process.stdout.write(str.slice(left,right) + "\n");
            left+=8;
            right+=8;
        }
    }
});
//第二中情况是所有的完全输入后，在进行处理,再输入的时候有一个等待的过程，我觉得特别好
var readline = require("readline");
var rl = readline.createInterface(process.stdin, process.stdout); 
var args = [];

rl.on("line", function(str){
    args.push(str);
    if(args.length == 2){
        rl.close();
    }
});
rl.on("close", function(){
    var res = [];
    for(var i = 0 ; i < args.length; i ++){
        res = change(args[i]);
        for(var j = 0 ; j < res.length; j ++){
            console.log(res[j]);
        }
    }
    args.length = 0;
})
function change(data){
    var result=[];
    
    		var str = data.trim();
        	var len = str.length;

        	var a =len%8;   //a为余数
        	if(a!=0){
            	for(var i=0;i<8-a;i++){
                	str=str+"0";
            	}
        	}
        	var left = 0;
        	var right = 8;
        	while(right<=str.length){
            	result.push(str.slice(left,right));
            	left+=8;
            	right+=8;
        	}
    return result;
}

//有两个字符创找出公共最大子字符串
var readline = require("readline");
var rl = readline.createInterface(process.stdin, process.stdout); 
var args = [];
rl.on("line", function(str){
    args.push(str);
    if(args.length == 2){
        rl.close();
    }
});
rl.on("close", function(){
	var str1 = args[0].trim();
    var str2 = args[1].trim();
    var len1 = str1.length;
    var len2 = str2.length;
    var len = 0;
    var smstr;
    var lastr;
    var num=0;
    if(len1<len2){
        len = len1;  //选择小的字符进行遍历
        smstr = str1;
        lastr = str2;
    }else{
        len = len2;
        smstr = str2;
        lastr = str1;
    }
    loop:
    for(var i=0;i<len;i++){
        var left=0;
        var right=len-1-i;
        while(right<=len-1){
            if(lastr.indexOf(smstr.slice(left,right+1))!==-1){
            	num = smstr.slice(left,right+1).length;
                break loop;
            }
			left++;
			right++;
        }
    }
    console.log(num);
});
//[a,b]之间有多少能被c整除
var readline = require("readline");
var rl = readline.createInterface(process.stdin, process.stdout); 
var args = [];

rl.on("line", function(str){
    args.push(str);
    rl.close();
});
rl.on("close", function(){
	var arr = args[0].trim().split(" ");//输入的三个数字
    var small = parseInt(arr[0]);
    var big = parseInt(arr[1]);
    var c = parseInt(arr[2]);
    var count = 0;
    var smallest;
    for(var i = small;i<=big;i++){
        if(i%c==0){
            smallest = i;
            break;
        };
    }
    count = Math.floor((big-smallest)/c)+1;
    console.log(count);
});

function junje(str,M,K){
    var len  = str.length;
    var left =0;
    var right =M;
    var count = 0;
    
    while(right<=len){
        var newstr = str.slice(left,right); 
        var flag = true;
        for(var j=0;j<=Math.floor(newstr.length/2);j++){
            if(newstr[j]!=newstr[newstr.length-1-j]){
                flag = false;
                break;
            }
        }
        if(flag){
            count++;
        }
        left++;
        right++;
    }
    return count>=K?true:false;
}

































