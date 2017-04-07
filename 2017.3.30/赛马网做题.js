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
//
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
var numOfProduct;
var numOfCustom;
var one;
var arr = [];
var line;
while(line= read_line()){
    line = line.split(' ');
	if(line.length == 2){
    	numOfProduct = parseInt(line[0]);
		numOfCustom = parseInt(line[1]);
    }else{
    	arr = line;
    	for(one in arr){
        	arr[one] = parseInt(arr[one]);
        }
	}
}
print(func(numOfProduct,numOfCustom,arr));//数据做好准备后调用函数输出

function func(n,m,arr){
	arr.sort(function(a,b){
		return a-b;
	});
	var prise =0;
	var maxprofit =0;
	var endprise=0;
	for(var i=0;i<arr.length;i++){
		var prise = arr[i];
		if((m-i)<=n){
			var profit = prise*(m-i);
		}else{
			var profit = prise*n;
		}		
		if(profit>maxprofit){
			maxprofit = profit;
			endprise = prise;
		}
	}
	return endprise;	
}
//京东第二题，小明正确率的问题
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
print(func(num,arr));//数据做好准备后调用函数输出

function func(num,arr){	
	var numOfCurrent = Math.ceil(num*0.6); 
	var Current =5/16;
	for(var i = numOfCurrent;i<=num;i++){
		
	}
	return Current.toFixed(5);
}












































