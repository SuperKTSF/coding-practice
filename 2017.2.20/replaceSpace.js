/*��ʵ��һ����������һ���ַ����еĿո��滻�ɡ�%20�������磬���ַ���ΪWe Are Happy.�򾭹��滻֮����ַ���ΪWe%20Are%20Happy��*/

function replaceSpace(str)
{
    /*�����뵽�İ취���ַ���ת��Ϊ���飬��ת��Ϊ�ַ�������ʱ30ms
    var array = [];
    array = str.split(" ");
    return array.join("%20"); 
    */
    // write code here
    
    /*���������ֱ�ӵ���js�е��ַ����滻��������������������һ���������������ַ�����Ҳ������������ʽ����ʽ
    ���Ҫ�滻���еģ�ֻ��ʹ��������ʽ����ʹ��/gȫ���滻���ڶ����������������ַ���Ҳ�����Ǻ���*/
    return str.replace(/\s/g,"%20");
}
module.exports = {
    replaceSpace : replaceSpace
};