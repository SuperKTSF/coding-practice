/*����һ���ַ���,���ֵ����ӡ�����ַ������ַ����������С����������ַ���abc,���ӡ�����ַ�a,b,c�������г����������ַ���abc,acb,bac,bca,cab��cba�� */
function Permutation(str)
{
    // write code here
    var result = [];
    if(str.length<=0){
        return [];
    }
    var str2="";
    var arr = str.split("");
    result=sortString(arr,str2,[]);
    return result;
}

function sortString(arr,str2,res){
    if(arr.length==0){
        res.push(str2);
    }else{
        var isUsed ={};
        for(var i =0;i<arr.length;i++){
            if(!isUsed[arr[i]]){
                var temp = arr.splice(i,1);//ɾ����Ӧλ�ú�������Ԫ��
                str2 +=temp;
                sortString(arr,str2,res);
                arr.splice(i,0,temp); //�Ѹղ�ɾ����Ԫ�ز�ȫ�����ű����ַ��������һλ
                str2 = str2.slice(0,str2.length-1);
                isUsed[temp] =true;
            }
        }
    }
    return res;
}
module.exports = {
    Permutation : Permutation
};