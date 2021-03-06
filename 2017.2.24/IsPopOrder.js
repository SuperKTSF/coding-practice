/*输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否为该栈的弹出顺序。假设压入栈的所有数字均不相等。例如序列1,2,3,4,5是某栈的压入顺序，序列4，5,3,2,1是该压栈序列对应的一个弹出序列，但4,3,5,1,2就不可能是该压栈序列的弹出序列。（注意：这两个序列的长度是相等的）*/
function IsPopOrder(pushV, popV)
{
    // write code here
    /*第一个想法太天真了，因为题目并没有说压入和弹出是完全分开的
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
    //方法非常的巧妙，利用插入顺序插入，利用出栈顺序出栈，如果最后全部出栈为空，则为正确的出栈顺序
    var stack = [];
    for(var i=0,j=0;i<pushV.length;i++){
        stack.push(pushV[i]);
        //while循环的目的在于判断再插入的过程中何时会出现出栈
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