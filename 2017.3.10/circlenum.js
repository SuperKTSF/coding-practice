/*���һ������ͨ��ѭ�����ƻ�õĵ��ʣ����ǳ���Щ���ʶ�Ϊһ��ѭ�����ʡ� ���磺picture �� turepic ��������ͬһ��ѭ�����ʡ� ���ڸ���n�����ʣ���Ҫͳ�����n���������ж�����ѭ�����ʡ� */

var rl = require("readline").createInterface(process.stdin, process.stdout);
var args = [];

rl.on('line', function(data){
    args.push(data);
    if(args.length >= parseInt(args[0] + 1)){
        rl.close();
    }
});

rl.on('close', function(){
    var arr = args.slice(1);
    var res = 0;
    for(var i = 0 ; i < arr.length; i ++){
        for(var j = i + 1; j < arr.length; j ++){
            if(judge(arr[i], arr[j])){
                // ���������ѭ�����ʣ��Ͱ�arr[j]�Ƴ�����
                arr.splice(j, 1);
                j--;
            }
        }
    }
    res = arr.length;
    console.log(res);
});
// �ж��Ƿ�Ϊѭ������
function judge(str1, str2){
    if(str1.split('').sort().join('') == str2.split('').sort().join('')){
        var temp1, temp2;
        for(var i = 0 ; i < str1.length; i ++){
            temp1 = str1.slice(0, i);
            temp2 = str1.slice(i);
            if(str2 == temp2 + temp1){
                return true;
            }
        }
    }
    return false;
}