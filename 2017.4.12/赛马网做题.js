var line;
while (line = read_line()){
	line = parseInt(line); //相当于一行是一个字符换,多组测试数据用while循环
    print(returnMoney(line));
}
function returnMoney(n){
	var start = 1,
			currentRise = rise = 1,
			money = 1;
	for(var i = 2; i <= n ;i++){
		if(currentRise > 0){
			money++;
			currentRise--;
		}else if(currentRise == 0){
			money--;
			rise++;
			currentRise = rise;
		}
	}
	return money;
}
//两行数据直接读，只有一组测试数据
var str = read_line().trim();
var num = read_line().trim();
print(findString(str));

//两行数据
var nn, one;
var aa = [];
var line;
while(line= read_line()){
    line = line.split(' ');
	if(line.length == 1){
    	nn = parseInt(line[0]);
    }else{
    	aa = line;
    	for(one in aa){
        	aa[one] = parseInt(aa[one]);
        }
	}
}
print(func(nn, aa));//数据做好准备后调用函数输出

//测试题
var line;
while (line = read_line()){      //有多组测试数据的时候就用while循环，因为你不知道什时候
	line = line.trim().split(" "); 
	var m = parseInt(line[0]);
	var n = parseInt(line[1]);
    print(returnFloor(m,n));
}

function returnFloor(m,n){
	var str ="";
	for(var i =m;i<=n;i++){
		var baiwei = parseInt(i/100);
		var shiwei = parseInt(i/10) - baiwei*10;
		var gewei =i%10;
		if(i==(baiwei*baiwei*baiwei+shiwei*shiwei*shiwei+gewei*gewei*gewei)){
			str= str+i+" ";
		}
	}
	if(str.length ==0){
		return 'no';
	}else{
		return str.trim();
	}
}


var line;
while (line = read_line()){      //有多组测试数据的时候就用while循环，因为你不知道什时候
	line = line.trim().split(" "); 
	var n = parseInt(line[0]);
	var m = parseInt(line[1]);
    print(Sum(n,m));
}

function Sum(n,m){
	var sum = n;
	var beforeNum = sum;
	for(var i = m;i>1;i--){
		
		var afterNum = Math.sqrt(beforeNum);
		sum +=afterNum;
		beforeNum = afterNum;
	}
	return sum.toFixed(2);
}
//这个今日头条的笔试题，没有完全写出来
var num;
var one;
var arr = [];
var line;
while(line= read_line()){
    line = line.split(' ');
	if(line.length == 1){
    	num = parseInt(line[0]);
    }else{
    	arr = line;
    	for(one in arr){
        	arr[one] = parseInt(arr[one]);
        }
	}
}
print(func(num, arr));//数据做好准备后调用函数输出

function func(num,arr){
	var left = 0;
	var right = 0;
	var resultlength = [];
	var xiabiao = [];
	var lowToHigh =false;
	var highToLow = false;
	while(right<num){
		while(right<num&&arr[right]<arr[right+1]){
			right++;
			lowToHigh =true;
		}
		while(right<num&&arr[right]>arr[right+1]){
			right++;
			highToLow =true;
		}
		resultlength.push(right-left+1);
		xiabiao.push(left);
		xiabiao.push(right);
		left = right;
		right++;
		
	}
	if(!lowToHigh||!highToLow||resultlength.length==0){
		return "-1 -1";
	}
	var maxlength = Math.max.apply(Math,resultlength);
	var index = resultlength.indexOf(maxlength);
	var str = xiabiao[2*index]+" "+xiabiao[2*index+1];
	return str;
}

///京东第一题，公司利润最大
var arr = [];
var line;
while(line = read_line()){
    line = line.split(' ');
    for(var i=0; i<line.length;i++){
      line[i] = parseInt(line[i])
    }
    arr = [].concat(arr, line)  //是把所有的输入数据全部变成数组后在进行分割
}
numOfProduct = arr[0];  //取出前面的数据
numOfCustom = arr[1];
arr.shift();  //取出数据后在原数组中删除
arr.shift();
print(func(numOfProduct,numOfCustom,arr));//数据做好准备后调用函数输出

function func(n,m,arr){
	//arr.sort(function(a,b){
	//	return b-a;
	//});
	var prise =0;
	var maxprofit =0;
	var endprise=0;
	for(var i=0;i<m;i++){
		prise = arr[i];
		var profit=0;
		var count =n;
		for(var j=0;j<m;j++){  //这种方法每一次都要去遍历整个数组，没有排序来得方便，但是排序的通过率始终不对，比较蒙蔽
			if(count<1){
				break;
			}
			if(arr[j]>=prise){
				profit+=prise;
				count--;
			}
		}
		if(profit>maxprofit){
			maxprofit = profit;
			endprise = prise;
		}
	}
	return endprise;	
}
//京东第二题，小明正确率的问题，二维数据的动态规划，可以解决一般的递归问题
	var n = parseInt(read_line());
	var a=read_line().split(" ");
	var correct=Math.ceil(n*0.6);
	var b=a.map(function(x){
		return x/100;
	});
	var dp=[];
	var p;
	dp.push([1]);
	for (var i = 1; i <= b.length; i++) {
		var arr=[];
		//计算i道题全部错误概率，说明i-1题肯定全错，本题也错，即dp[i-1][0]，每一行的首项都是全错
		p=dp[i-1][0]*(1-b[i-1]);
		arr.push(p); //每一行的首项
		//计算i道题j道正确概率
		for (var j = 1; j < i; j++) {
			p=dp[i-1][j]*(1-b[i-1])+dp[i-1][j-1]*b[i-1];
			arr.push(p);
		}
		//计算i道题全部正确概率,此时的j就等于i
		p=dp[i-1][j-1]*b[i-1];
		arr.push(p);//每一行的最后一项
		dp.push(arr);
	}
    //计算概率
    var p1=0;
    for (var i = correct; i <= n; i++) {
    	p1+=dp[n][i];
    }
print(p1.toFixed(5));
//练习一下京东第三题，警察小偷
var arr = [];
var line;       //所以才用while循环读数据的方式是最保险的
while(line = read_line()){  
    line = line.split("");
    arr = [].concat(arr, line)  //是把所有的输入数据全部变成数组后在进行分割
}
var n =arr.shift();
//	var n = parseInt(read_line());  //这种读数据不用while循环有可能会导致数据量太多，会导致本来在一行的数据换成多行
//  var arr=read_line().trim().split("");
	var count=0;
	for(var i=0;i<arr.length;i++){
		if(arr[i]=='X'||arr[i]=='#'){
			continue;
		}
		if(i-parseInt(arr[i])<0){
			var small=0;
		}else{
			small=i-parseInt(arr[i]);
		}
		if(i+parseInt(arr[i])>=arr.length){
			var big=arr.length -1;
		}else{
			big=i+parseInt(arr[i]);
		}
		for(var j=small;j<=big;j++){
			if(arr[j]=='X'){
				count++;
				arr[j]='#';
			}
		}
	}
	print(count);
//京东的第四题，小石头分堆
var line;       
var arr=read_line().split(" ");
var n = parseInt(arr[0]);
var k = parseInt(arr[1]);
var score =0;
var m = n%(2*k+1);
var t = Math.floor(n/(2*k+1));
if(m>=k){
	score = 2*t+1;
}else{
	score = 2*t;
}
print(score);
//京东的第五题，异或运算
var line;
var n = read_line();
var str1 = read_line().trim();
var str2 = read_line().trim();
var num = parseInt(str1,2)^parseInt(str2,2);
print(num);
















































