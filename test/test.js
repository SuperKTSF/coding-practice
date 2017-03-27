var readline = require("readline");
var rl = readline.createInterface(process.stdin, process.stdout); 
var args = [];

rl.on("line", function(str){
    args.push(str);
    rl.close();
});
rl.on("close", function(){
	var arr = args[0].trim().split("");//����һ���ַ���,����ַ�����
	var result = [];
	var str = "";
	result = sortString(arr,str,[]);   //result��'123456'��ȫ��
	var newarr =[];
	for(var i=0;i<result.length;i++){
		if(IsPopOrder(args[0].trim(),result[i])){
			newarr.push(result[i]);
		}
	}
	console.log(result);
	console.log(newarr);
	console.log(newarr.length);
});

function sortString(arr,str,res){
	if(arr.length == 0){
		res.push(str);
	}else{
		var isUsed = {};//����������ж��ַ��������Ƿ����ظ�Ԫ�ص�
		for(var i=0;i<arr.length;i++){
			if(!isUsed[arr[i]]){
				var temp  = arr.splice(i,1); //��ȡһ��Ԫ�أ�����������ɾ��
				str +=temp;
				sortString(arr,str,res);
				arr.splice(i,0,temp); 
				str = str.slice(0,str.length-1);
				isUsed[temp] = true;
			}
		}
	}
	return res;
}
function IsPopOrder(pushV, popV)
{

    if(pushV==null||popV==null){
        return false;
    }
    //�����ǳ���������ò���˳����룬���ó�ջ˳���ջ��������ȫ����ջΪ�գ���Ϊ��ȷ�ĳ�ջ˳��
    var stack = [];
    for(var i=0,j=0;i<pushV.length;i++){
        stack.push(pushV[i]);
        //whileѭ����Ŀ�������ж��ٲ���Ĺ����к�ʱ����ֳ�ջ
        while(j<popV.length&&stack[stack.length-1]==popV[j]){
            stack.pop();
            j++;
        }
    }
    
    return stack.length==0;
}