/*���һ�������ܱ�ʾΪp^q(^��ʾ������)��pΪһ������,qΪ����1���������ͳ�������������������ݡ����ڸ���һ��������n,���n��һ��������������Ҫ�ҳ���Ӧ��p,q�� */
var rl = require("readline").createInterface(process.stdin, process.stdout);
var args = [];

rl.on('line', function(data){
    args.push(data);
    rl.close();
});

rl.on('close', function(){
    var num = args[0];
	var p,q;
	/* �������������ֱ�ѭ������p��q�����Ǳ������޷�ͨ��
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
	//����������q��p��ӳ���ϵ
	var maxq = Math.log(num)/Math.log(2);//N=p��q�η�����Ȼp��Сʱq�����Ϊ��С��������2������q������Ҳ����log2N
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

//�����Ǹ��������ж�һ����Ϊ����

function isPrime(num){
	var n = Math.sqrt(num); //��ƽ������
	for(var i=2;i<=n;i++){
		if(num%i==0){
			return false;
		}
	}
	return true;
}