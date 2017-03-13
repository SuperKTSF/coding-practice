/*如果一个数字能表示为p^q(^表示幂运算)且p为一个素数,q为大于1的正整数就称这个数叫做超级素数幂。现在给出一个正整数n,如果n是一个超级素数幂需要找出对应的p,q。 */
var rl = require("readline").createInterface(process.stdin, process.stdout);
var args = [];

rl.on('line', function(data){
    args.push(data);
    rl.close();
});

rl.on('close', function(){
    var num = args[0];
	var p,q;
	/* 暴力的做法，分别循环处理p和q，但是编译器无法通过
	if(num>2){
		var sum = 0;
		for(p=2;p<Math.sqrt(num);p++){
			if(isPrime(p)){
				for(q=2;q<Math.sqrt(num);q++){
					if(Math.pow(p,q)==num){
						sum+=1;
						console.log(p+" "+q);
						break;
					}
				}
			}
		}
	}
	if(sum==0){
		console.log("No");
	}*/
	//方法二：从q到p的映射关系
	var maxq = Math.log(num)/Math.log(2);//N=p的q次方，显然p最小时q最大，因为最小的素数是2，所以q的上限也就是log2N
	for(q=2;q<=maxq;q++){
		p=Math.pow(num,1/q);
		if((p-parseInt(p)==0)&&Math.pow(p,q)==num&&isPrime(p)){
			console.log(p+" "+q);
			break;
		}
	}
	if(q>maxq){
		console.log("No");
	}

});

//首先是搞清楚如果判断一个数为素数

function isPrime(num){
	var n = Math.sqrt(num); //求平方根；
	for(var i=2;i<=n;i++){
		if(num%i==0){
			return false;
		}
	}
	return true;
}