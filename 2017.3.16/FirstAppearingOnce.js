//Init module if you need
/*��ʵ��һ�����������ҳ��ַ����е�һ��ֻ����һ�ε��ַ������磬�����ַ�����ֻ����ǰ�����ַ�"go"ʱ����һ��ֻ����һ�ε��ַ���"g"��
*���Ӹ��ַ����ж���ǰ�����ַ���google"ʱ����һ��ֻ����һ�ε��ַ���"l"*/

function Init()
{
    // write code here
   var  result={};//Ŀ���ǽ����Ϊȫ�ֱ���
   global.result =result;  //�õ���node��ȫ�ֱ���
}
//Insert one char from stringstream
function Insert(ch)
{
    // write code here
    if(result[ch]){
        result[ch]++;
    }else{
        result[ch]=1;
    }
}
//return the first appearence once char in current stringstream
function FirstAppearingOnce()
{
    // write code here
    for(var item in result){
        if(result[item]==1){
            return item;
        }
    }
    return "#";
}

module.exports = {
	Init : Init,
    Insert : Insert,
    FirstAppearingOnce: FirstAppearingOnce
};