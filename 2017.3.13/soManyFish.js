var rl = require("readline").createInterface(process.stdin, process.stdout);
var args = [];
rl.on('line', function(data){
    args.push(data);
    rl.close();
});
rl.on('line', function(data){
    args.push(data); //ͨ�����ӱ�׼�������ݴ���������
    rl.close();  //readlineģ��һ��ʼ��ȡ���ݾͲ���������������ⷽʽ������ȡ����
});
rl.on('close',function(){
	var sizes = args[0].trim().split(" ");   //Ȼ��������������ݵĴ���
	var minSize =parseInt(sizes[0]);
	var maxSize =parseInt(sizes[1]);	
	var num = parseInt(args[1]);   	//����ĳ���	
	var size = args[2].trim().split(" ");   //����
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



























