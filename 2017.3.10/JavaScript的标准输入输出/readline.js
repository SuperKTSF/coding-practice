/*Readline��Node.js��ʵ�ֱ�׼��������ķ�װ�õ�ģ�飬ͨ�����ģ�����ǿ��������еķ�ʽ��ȡ��������ʹ��require(��readline��)��������ģ�顣*/

var readline = require('readline');
/*��createInterface�������Ҫ�����׼���������Ϊ���ݵ����������*/
var rl = readline.createInterface({
	input:process.stdin,
	output:process.stdout
});
var args = []; 
rl.on('line',fuction(data){
	var args; //ͨ�����ӱ�׼�������ݴ���������
	rl.close()  //readlineģ��һ��ʼ��ȡ���ݾͲ���������������ⷽʽ������ȡ����
});

rl.on('close',function(){
	args��//Ȼ��������������ݵĴ���
});

//���򵥵ķ�ʽ����npm��ֱ�Ӷ�ȡ������������Ƕ�ȡһ���е����ɸ�����
process.stdin.resume();
process.stdin.setEncoding("utf8");
process.stdin.on("data", function(chunk) {
    var datas = chunk.trim().split("\n");
    for(var i = 0; i < datas.length; i++) {
        var ab = datas[i].trim().split(" ");
        var a = parseInt(ab[0]);
        var b = parseInt(ab[1]);
        console.log(a + b);
    }
});