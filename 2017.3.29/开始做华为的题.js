/*�����ַ������һ�����ʵĳ��ȣ������Կո������*/
process.stdin.resume();
process.stdin.setEncoding("utf8");
process.stdin.on("data",function(chunk){
    var datas = chunk.trim().split("\n");
    var ab = datas[0].trim().split(" ");//��һ�������ÿո���������
    console.log(ab[ab.length-1].length);
});

/*д��һ�����򣬽���һ������ĸ�������Լ��ո���ɵ��ַ�������һ���ַ���Ȼ����������ַ����к��и��ַ��ĸ����������ִ�Сд��*/
process.stdin.resume();
process.stdin.setEncoding("utf8");
process.stdin.on("data",function(chunk){
    var datas = chunk.trim().split("\n");
    var str = datas[0].trim().toLocaleUpperCase();//��һ�������ÿո���������
    var char = datas[1].toLocaleUpperCase(); //�ڶ���������һ���ַ���
    var count = 0;
    for(var i=0;i<str.length;i++){
        if(str[i]==char){
            count++;
        }
    }
    console.log(count);
});

/*�����źõ�˳��ȥ��ͬѧ�����顣����Э��������ɡ�ȥ�ء��롰���򡱵Ĺ������������������̫����*/
var readline = require('readline');
var num = 0;
var arr = [],brr = [];
var rl = new readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function(line) {  //������һ��һ������Ĺ��̣�Ȼ��һ��һ���Ĵ���
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
/*���������ַ������밴����Ϊ8���ÿ���ַ�����������µ��ַ������飻
���Ȳ���8���������ַ������ں��油����0�����ַ���������*/
//���ַ�ʽ������һ������һ������������ȫ��������ȥ����
process.stdin.resume();
process.stdin.setEncoding("utf8");
process.stdin.on("data", function(chunk) {
    var datas = chunk.trim().split("\n");//���ﱾ��Ҳ��һ��һ�еĶ�����	
	for(var i=0;i<datas.length;i++){
    	var str = datas[i].trim();
        var len = str.length;
        if(len==0){
            continue;  //���ַ���������
        }
        var a =len%8;   //aΪ����
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
//�ڶ�����������е���ȫ������ڽ��д���,�������ʱ����һ���ȴ��Ĺ��̣��Ҿ����ر��
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

        	var a =len%8;   //aΪ����
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

//�������ַ����ҳ�����������ַ���
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
        len = len1;  //ѡ��С���ַ����б���
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
//[a,b]֮���ж����ܱ�c����
var readline = require("readline");
var rl = readline.createInterface(process.stdin, process.stdout); 
var args = [];

rl.on("line", function(str){
    args.push(str);
    rl.close();
});
rl.on("close", function(){
	var arr = args[0].trim().split(" ");//�������������
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
//����ת�����⣬���͵�����һ�������һ������Ϊû��close�������ǳ����ȴ�����
var rl = require('readline')
    .createInterface({
      input: process.stdin,
      output: process.stdout
    });
 
rl.on('line', function(data){
    console.log(Number.parseInt(data));
});


//�������������⣬ͦ�õ����
var readline = require("readline");
var rl = readline.createInterface(process.stdin, process.stdout); 
var args = [];

rl.on("line", function(str){
    args.push(str);
    rl.close();
});
rl.on("close", function(){
	var num = parseInt(args[0]);//����һ���ַ���,����ַ�����
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
//����Math����ķ�����Math.ceil-����ȡ����Math.floor����ȡ����Math.round��׼����������--Ҳ������Number.toFixed()�ķ���������
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
//��Ҫ��ģ�����ݽṹ������
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
//����һ��int�����������մ���������Ķ�˳�򣬷���һ�������ظ����ֵ��µ����������͵�����ȥ������
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
//���ַ�����ķǳ���,����filter�����Խ����ж�
var result=result.split('').reverse().filter(function(item,index,array){
      return array.indexOf(item) == index;
    });
//����ת��Ϊ��Ӧ�Ľ����ַ���
var num= 10; num.toString(2); "1010"
//switch case ��Ӧ����������
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

//�滻���ַ�����ĳЩ�����������ķ��ţ���String.replace���������ʽ�������̫˧��
    var noWord = /[^a-zA-Z]/g;  
    var repeatSpace =/\s{2,}/g;
    str  = str.replace(noWord,function(match){  //�ѷ��ַ�����ȫ��ת��Ϊ�ո�
        return " ";
    });
    
    str  = str.replace(repeatSpace,function(match){  //�Ѷ���ո�ת��Ϊһ���ո�
        return " ";
    });
	
//�����õ���֮ǰû�нӴ����ķ���str,charAt(num)/str.charCodeAt(num)/String.fromCharCode(num1,num2)����һ�����߶��Unicode��ֵ�����ַ�
����String.fromCharCode(72,69,76,76,79)
"HELLO"
var readline = require("readline");
var rl = readline.createInterface(process.stdin, process.stdout); 
var args = [];
rl.on("line", function(str){
    args.push(str);
    rl.close();
});
rl.on("close", function(){
    var str = args[0].trim(); //������ַ���
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
//����������ʽ���ַ������м��ܽ��ܵĴ���
   //���ܹ��� 
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
//�����ʱ������������ȷ���Ǵ���û���������������ܾ��ǲ�����������������ģ���Ҫ��close������һ������һ��
var readline = require("readline");
var rl = readline.createInterface(process.stdin, process.stdout); 
var args = [];
rl.on("line", function(str){
    var num = parseInt(str); //������ַ���
    var str = num.toString(2);
    var count = 0;
    for(var i=0;i<str.length;i++){
        if(str[i] == "1"){
            count ++;
        }
    }
    console.log(count);
});
//��Ϊ�����������ʽ������꣬���˹�
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
























