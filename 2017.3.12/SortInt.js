/*��һ���ַ���ת����һ��������Ҫ����ʹ���ַ���ת�������Ŀ⺯���� ��ֵΪ0�����ַ�������һ���Ϸ�����ֵ�򷵻�0 */
function StrToInt(str)
{
    // write code here
    //����˼�룺��strת��Ϊ���� �������� ����ת��Ϊ����
    var result=0;
    var start=0;
    var temparr=str.split("");
    var len=temparr.length;
    var j=temparr.length;//ָ��
    var flag=false;
    if(temparr[0]=="+")//����
        {
            start=1;
            j=temparr.length-1;
        } 
    else if(temparr[0]=="-")//����
        {
            start=1;
            j=temparr.length-1;
            flag=true;
        }
    else
        start=0;
    for(var i=start;i<temparr.length;i++)
        {
            if(temparr[i]>="a"&&temparr[i]<="z") return 0;
            result+=temparr[i]*Math.pow(10,j-1);
            j--;  
        }
    if(flag)
        result=(-1)*result;
    return result;
}
module.exports = {
    StrToInt : StrToInt
};