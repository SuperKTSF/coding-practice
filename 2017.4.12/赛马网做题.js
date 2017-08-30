var line;
while (line = read_line()){
	line = parseInt(line); //�൱��һ����һ���ַ���,�������������whileѭ��
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
//��������ֱ�Ӷ���ֻ��һ���������
var str = read_line().trim();
var num = read_line().trim();
print(findString(str));

//��������
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
print(func(nn, aa));//��������׼������ú������

//������
var line;
while (line = read_line()){      //�ж���������ݵ�ʱ�����whileѭ������Ϊ�㲻֪��ʲʱ��
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
while (line = read_line()){      //�ж���������ݵ�ʱ�����whileѭ������Ϊ�㲻֪��ʲʱ��
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
//�������ͷ���ı����⣬û����ȫд����
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
print(func(num, arr));//��������׼������ú������

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

///������һ�⣬��˾�������
var arr = [];
var line;
while(line = read_line()){
    line = line.split(' ');
    for(var i=0; i<line.length;i++){
      line[i] = parseInt(line[i])
    }
    arr = [].concat(arr, line)  //�ǰ����е���������ȫ�����������ڽ��зָ�
}
numOfProduct = arr[0];  //ȡ��ǰ�������
numOfCustom = arr[1];
arr.shift();  //ȡ�����ݺ���ԭ������ɾ��
arr.shift();
print(func(numOfProduct,numOfCustom,arr));//��������׼������ú������

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
		for(var j=0;j<m;j++){  //���ַ���ÿһ�ζ�Ҫȥ�����������飬û���������÷��㣬���������ͨ����ʼ�ղ��ԣ��Ƚ��ɱ�
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
//�����ڶ��⣬С����ȷ�ʵ����⣬��ά���ݵĶ�̬�滮�����Խ��һ��ĵݹ�����
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
		//����i����ȫ��������ʣ�˵��i-1��϶�ȫ������Ҳ����dp[i-1][0]��ÿһ�е������ȫ��
		p=dp[i-1][0]*(1-b[i-1]);
		arr.push(p); //ÿһ�е�����
		//����i����j����ȷ����
		for (var j = 1; j < i; j++) {
			p=dp[i-1][j]*(1-b[i-1])+dp[i-1][j-1]*b[i-1];
			arr.push(p);
		}
		//����i����ȫ����ȷ����,��ʱ��j�͵���i
		p=dp[i-1][j-1]*b[i-1];
		arr.push(p);//ÿһ�е����һ��
		dp.push(arr);
	}
    //�������
    var p1=0;
    for (var i = correct; i <= n; i++) {
    	p1+=dp[n][i];
    }
print(p1.toFixed(5));
//��ϰһ�¾��������⣬����С͵
var arr = [];
var line;       //���Բ���whileѭ�������ݵķ�ʽ����յ�
while(line = read_line()){  
    line = line.split("");
    arr = [].concat(arr, line)  //�ǰ����е���������ȫ�����������ڽ��зָ�
}
var n =arr.shift();
//	var n = parseInt(read_line());  //���ֶ����ݲ���whileѭ���п��ܻᵼ��������̫�࣬�ᵼ�±�����һ�е����ݻ��ɶ���
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
//�����ĵ����⣬Сʯͷ�ֶ�
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
//�����ĵ����⣬�������
var line;
var n = read_line();
var str1 = read_line().trim();
var str2 = read_line().trim();
var num = parseInt(str1,2)^parseInt(str2,2);
print(num);
















































