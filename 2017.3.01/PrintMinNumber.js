/*����һ�����������飬����������������ƴ�������ų�һ��������ӡ��ƴ�ӳ���������������С��һ����������������{3��32��321}�����ӡ���������������ųɵ���С����Ϊ321323��*/
function PrintMinNumber(numbers)
{
    // write code here
    /*��ѡ�����Ǹ������ų����п��ܵ���ϣ�Ȼ������Сֵ,��������򷽷���ǰ����ַ���������ȫ��ͬ
    var len = numbers.length;
    if(numbers==null||len<=0){
        return "";
    } 
    var result = [];
    var str2=[];
    result=sortString(numbers,str2,[]);
    return Math.min.apply(Math,result);*/
    //������ʵ���Ͼ��Ƕ�����һ�������������ǿ��Դ����Զ�������򷽷�
    var result = numbers.sort(compareTo);
    return result.join("");    
}
function compareTo(a,b){
    return Number([a,b].join(""))-Number([b,a].join(""));
}

 /*
function sortString(arr,str2,res){
    if(arr.length==0){
        res.push(str2.join(""));
    }else{
        var isUsed ={};
        for(var i =0;i<arr.length;i++){
            if(!isUsed[arr[i]]){
                var temp = arr.splice(i,1);//ɾ����Ӧλ�ú�������Ԫ��
                str2.push(temp);
                sortString(arr,str2,res);
                arr.splice(i,0,temp); //�Ѹղ�ɾ����Ԫ�ز�ȫ�����ű����ַ��������һλ
                str2.pop();  //�Ѹղ���ӵ�һλɾ��
                isUsed[temp] =true;
            }
        }
    }
    return res;
}
 */
module.exports = {
    PrintMinNumber : PrintMinNumber
};