/*���������������У���һ�����б�ʾջ��ѹ��˳�����жϵڶ��������Ƿ�Ϊ��ջ�ĵ���˳�򡣼���ѹ��ջ���������־�����ȡ���������1,2,3,4,5��ĳջ��ѹ��˳������4��5,3,2,1�Ǹ�ѹջ���ж�Ӧ��һ���������У���4,3,5,1,2�Ͳ������Ǹ�ѹջ���еĵ������С���ע�⣺���������еĳ�������ȵģ�*/
function IsPopOrder(pushV, popV)
{
    // write code here
    /*��һ���뷨̫�����ˣ���Ϊ��Ŀ��û��˵ѹ��͵�������ȫ�ֿ���
    if(pushV==null||popV==null){
        return false;
    }
    if(pushV==popV.reverse()){
        return true;
    }else{
        return false;
    }*/
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
module.exports = {
    IsPopOrder : IsPopOrder
};