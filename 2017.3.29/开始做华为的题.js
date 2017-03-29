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
rl.on('line', function(line) {  //持续的一个一个输入的过程，然后一个一个的处理
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
//进制转换问题，典型的输入一个，输出一个，因为没有close，所以是持续等待输入
var rl = require('readline')
    .createInterface({
      input: process.stdin,
      output: process.stdout
    });
 
rl.on('line', function(data){
    console.log(Number.parseInt(data));
});


//关于质数的问题，挺好的玩的
var readline = require("readline");
var rl = readline.createInterface(process.stdin, process.stdout); 
var args = [];

rl.on("line", function(str){
    args.push(str);
    rl.close();
});
rl.on("close", function(){
	var num = parseInt(args[0]);//输入一个字符串,变成字符数组
    var str ="";
    while(isZhishu(num)!==true){
        var temp = isZhishu(num);
        num = num/temp;
        str = str+temp+" ";
    }
    str = str+num+" ";
    console.log(str);

});

function isZhishu(num){
    var flag = true;
    var newnum  = Math.floor(Math.sqrt(num));
    for(var i=2;i<=newnum;i++){
        if(num%i==0){
            flag = i;
            break;
        }
    }
    return flag;
}
//关于Math舍入的方法，Math.ceil-向上取整，Math.floor向下取整，Math.round标准的四舍五入--也可以用Number.toFixed()的方法来代替
var readline = require("readline");
var rl = readline.createInterface(process.stdin, process.stdout); 
var args = [];

rl.on("line", function(str){
    args.push(str);
    rl.close();
});
rl.on("close", function(){
	var num = Math.round(args[0]);
    console.log(num);
});
//主要是模拟数据结构的问题
var readline = require("readline");
var rl = readline.createInterface(process.stdin, process.stdout); 
var args = [];

rl.on("line", function(str){
    args.push(str);
    if(args.length == parseInt(args[0])+1){
         rl.close();
    }

});
rl.on("close", function(){
	var num = parseInt(args[0]);
    var data = [];
	var result = {};
    for (var i =1;i<=num;i++){
        data.push(args[i].trim().split(" "));
    }
	for(var i = 0;i<num;i++){
		if(result[parseInt(data[i][0])]){
			result[parseInt(data[i][0])]+=parseInt(data[i][1]);
		}else{
			result[parseInt(data[i][0])]=parseInt(data[i][1]);
		}
	}
	for(var item in result){
		console.log(item + " "+ result[item]);
	}
});
//输入一个int型整数，按照从右向左的阅读顺序，返回一个不含重复数字的新的整数。典型的数组去重问题
var readline = require("readline");
var rl = readline.createInterface(process.stdin, process.stdout); 
var args = [];

rl.on("line", function(str){
    args.push(str);
    rl.close();
});
rl.on("close", function(){
	var num = args[0].trim().split("").reverse();
    var stack = [];
    for(var i = 0;i<num.length;i++){
        if(stack.indexOf(num[i])==-1){
            stack.push(num[i]);
        }
    }
    console.log(stack.join(""));
});
//这种方法真的非常叼,利用filter的特性进行判断
var result=result.split('').reverse().filter(function(item,index,array){
      return array.indexOf(item) == index;
    });
//数字转换为对应的进制字符串
var num= 10; num.toString(2); "1010"
//switch case 对应操作的问题
var readline = require("readline");
var rl = readline.createInterface(process.stdin, process.stdout); 
var args = [];
rl.on("line", function(str){
    args.push(str);
    rl.close();

});
rl.on("close", function(){
    var arr = args[0].trim().split(";");
    var pattern =/^[WASD]\d{1,2}$/ ;
    var result = arr.filter(function(item){
        return pattern.test(item);
    }); 
	console.log(arr);
	console.log(result);
	var X = 0;
    var Y = 0;
    for(var i = 0; i<result.length;i++){
        switch(result[i].slice(0,1)){
            case 'A':
            	X = X-parseInt(result[i].slice(1));
                break;
            case'D':
            	X = X+parseInt(result[i].slice(1));
                break;
            case'W':
            	Y = Y+parseInt(result[i].slice(1));
                break;
            case'S':
            	Y = Y-parseInt(result[i].slice(1));
                break;
        }
    }
    console.log(X+","+Y);
});

//替换掉字符串中某些不符合条件的符号，用String.replace配合正则表达式，真的是太帅了
    var noWord = /[^a-zA-Z]/g;  
    var repeatSpace =/\s{2,}/g;
    str  = str.replace(noWord,function(match){  //把非字符符号全部转换为空格
        return " ";
    });
    
    str  = str.replace(repeatSpace,function(match){  //把多个空格转化为一个空格
        return " ";
    });
	
//这里用到了之前没有接触过的方法str,charAt(num)/str.charCodeAt(num)/String.fromCharCode(num1,num2)根据一个或者多个Unicode的值返回字符
例如String.fromCharCode(72,69,76,76,79)
"HELLO"
var readline = require("readline");
var rl = readline.createInterface(process.stdin, process.stdout); 
var args = [];
rl.on("line", function(str){
    args.push(str);
    rl.close();
});
rl.on("close", function(){
    var str = args[0].trim(); //输入的字符串
    var upperCase = /[A-Z]/g;
    var lowerCase = /[a-z]/g;
	str = str.replace(lowerCase,function(match){
		if(match<='c'&&match>='a'){return 2};
		if(match<='f'&&match>='d'){return 3};
		if(match<='i'&&match>='g'){return 4};
		if(match<='l'&&match>='j'){return 5};
		if(match<='o'&&match>='m'){return 6};
		if(match<='s'&&match>='p'){return 7};
		if(match<='v'&&match>='t'){return 8};
		if(match<='z'&&match>='w'){return 9};
    });
    str = str.replace(upperCase,function(match){
        var Unicode = match.toLowerCase().charCodeAt();
		if(Unicode==122){
			return 'a';
		}else{
			return String.fromCharCode(Unicode+1);
		}
    });
    console.log(str);
});
//根据正则表达式对字符串进行加密解密的处理
   //加密过程 
	var str1 = str1.replace(letterCase,function(match){
		if(match<='z'&&match>='a'){
			var Unicode = match.toUpperCase().charCodeAt();
			if(Unicode==90){
				return 'A';
			}else{
				return String.fromCharCode(Unicode+1);
			}
		}else{
			var Unicode = match.toLowerCase().charCodeAt();
			if(Unicode==122){
				return 'a';
			}else{
				return String.fromCharCode(Unicode+1);
			}
		}
    });
       
    var str1 = str1.replace(numCase,function(match){
		if(match=='9'){
			return '0';
		}else{
			return parseInt(match) + 1;
		}
    });
//如果有时候碰到本地正确但是代码没有输出的情况，可能就是测试用例是连续输入的，不要用close，输入一个处理一个
var readline = require("readline");
var rl = readline.createInterface(process.stdin, process.stdout); 
var args = [];
rl.on("line", function(str){
    var num = parseInt(str); //输入的字符串
    var str = num.toString(2);
    var count = 0;
    for(var i=0;i<str.length;i++){
        if(str[i] == "1"){
            count ++;
        }
    }
    console.log(count);
});
//华为的输入输出格式真的尼玛，日了狗
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
























