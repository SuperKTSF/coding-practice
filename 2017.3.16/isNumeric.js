/*��ʵ��һ�����������ж��ַ����Ƿ��ʾ��ֵ������������С���������磬�ַ���"+100","5e2","-123","3.1416"��"-1E-16"����ʾ��ֵ�� ����"12e","1a3.14","1.2.3","+-5"��"12e+4.3"�����ǡ�*/
//s�ַ���
function isNumeric(s)
{
    // write code here
	//return Boolean(parseFloat(s));
    //�ж�ĳ���ַ����Ƿ����ĳ��Ҫ����������ʽ����ǲ�Ҫ̫��
    var pattern = /^([\+\-])?(\d*)(\.\d+)?([eE][\+\-]?[1-9]\d*)?$/;
    return pattern.test(s);
}
module.exports = {
    isNumeric : isNumeric
};