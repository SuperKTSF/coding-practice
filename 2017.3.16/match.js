/*��ʵ��һ����������ƥ�����'.'��'*'��������ʽ��ģʽ�е��ַ�'.'��ʾ����һ���ַ�����'*'��ʾ��ǰ����ַ����Գ�������Σ�����0�Σ��� �ڱ����У�ƥ����ָ�ַ����������ַ�ƥ������ģʽ�����磬�ַ���"aaa"��ģʽ"a.a"��"ab*ac*a"ƥ�䣬������"aa.a"��"ab*a"����ƥ��*/
//s, pattern�����ַ���
function match(s, pattern)
{
    // write code here

	var pattern = "^" +pattern+"$"	/*
    var arr = pattern.split("");
    for(var i= 0;i<arr.length;i++){
        if(arr[i]=="."||arr[i]=="*"){
            arr.splice(i,0,"\\");
			i++;
        }
    }*/
    var newpattern = new RegExp(pattern,"g");
    
    return newpattern.test(s);
}
module.exports = {
    match : match
};