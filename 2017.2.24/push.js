/*����ջ�����ݽṹ�����ڸ�������ʵ��һ���ܹ��õ�ջ��СԪ�ص�min������*/
var stack=[];
var helper=[];
function push(node)
{
    // write code here
    //ʹ��һ�����������飬���԰�ÿ�ε���СԪ�ض������������
    stack.push(node);
    if(helper.length==0){
        helper.push(node);
    }else if(helper[helper.length-1]>node){
        helper.push(node);
    }else{
        helper.push(helper[helper.length-1]);
    }
}
function pop()
{
    // write code here
    helper.pop();
    return stack.pop();
}
function top()
{
    // write code here
    return stack[0];
}
function min()
{
    // write code here
    //�о����ַ����е��ˣ��Ƥ��,Math�����Դ��Ķ����������ֵ����Сֵ
    //return Math.min.apply(this,stack);
    return helper[helper.length-1];
}

module.exports = {
    push : push,
    pop : pop,
    top : top,
    min : min
};