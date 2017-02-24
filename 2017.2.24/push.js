/*定义栈的数据结构，请在该类型中实现一个能够得到栈最小元素的min函数。*/
var stack=[];
var helper=[];
function push(node)
{
    // write code here
    //使用一个辅助的数组，可以把每次的最小元素都存放在数组中
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
    //感觉这种方法有点儿耍赖皮了,Math对象自带的对数组求最大值和最小值
    //return Math.min.apply(this,stack);
    return helper[helper.length-1];
}

module.exports = {
    push : push,
    pop : pop,
    top : top,
    min : min
};