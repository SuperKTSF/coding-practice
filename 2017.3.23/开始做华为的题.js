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

































