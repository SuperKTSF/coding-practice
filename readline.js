/*Readline��Node.js��ʵ�ֱ�׼��������ķ�װ�õ�ģ�飬ͨ�����ģ�����ǿ��������еķ�ʽ��ȡ��������ʹ��require(��readline��)��������ģ�顣*/
var readline = require('readline');
/*��createInterface�������Ҫ�����׼���������Ϊ���ݵ����������*/
var rl = readline.createInterface({
	input:process.stdin,
	output:process.stdout
});
var args = []; 
rl.on('line', function(data){
    args.push(data); //ͨ�����ӱ�׼�������ݴ���������
    rl.close();  //readlineģ��һ��ʼ��ȡ���ݾͲ���������������ⷽʽ������ȡ����
});
rl.on('close',function(){
	args;//Ȼ��������������ݵĴ���
});

//���򵥵ķ�ʽ����npm��ֱ�Ӷ�ȡ������������Ƕ�ȡһ���е����ɸ�����
//�Ժ�����ʹ������İ汾������Ҫ����������Զ�ִ��
process.stdin.resume();
process.stdin.setEncoding("utf8");
process.stdin.on("data", function(chunk) {
    var datas = chunk.trim().split("\n");//���ﱾ��Ҳ��һ��һ�еĶ�����	
    var sizes = datas[0].trim().split(" ");
    var minSize = parseInt(sizes[0]);         //ÿһ�е�������һ������
    var maxSize = parseInt(sizes[1]);
	var num = parseInt(datas[1]);
	var size = datas[2].trim().split(" "); 
    var fishSize=size.map(function(item){
		return  parseInt(item);
	});
    var count = 0;
	for(var i = minSize;i<=maxSize;i++){
		var flag = false;
		for(var j = 0;j<num;j++){
			if((i<=fishSize[j]*10&&i>=fishSize[j]*2)||(10*i>=fishSize[j]&&2*i<=fishSize[j])){
				flag = true;
				break;
			}
		}
		if(!flag){
			count++;
		}
	}
	console.log(count);   
});

//��������ı�׼ģ��
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
})