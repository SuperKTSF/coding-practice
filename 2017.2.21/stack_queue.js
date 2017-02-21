/*用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型。*/
/*因为在javascript中没有直接Stack之中数据结构，所以要想创建两个堆栈，则必须先用数组模拟出堆栈的构造函数，js原生代码中没有Stack*/
function Stack(){
    
   var items = [];
    
   this.push = function (element){
       items.push(element);
   };
    
   this.pop = function(){
       return  items.pop();
   };
    /*构造函数定义的方法在调用时要加上（）*/
   this.isEmpty = function(){
     return items.length==0;  
   };
}

var stack1 = new Stack();
var stack2 = new Stack();


function push(node)
{
    stack1.push(node);
    // write code here
}
function pop()
{
    /*构造两个stack，如果stack2为空，排在队首的应该是stack1的栈底，则直接把stack1中的元素从栈顶依次存放到stack2中，
    则stack2的栈顶即为队首元素，如果stack2不为空，则stack2的栈顶元素即为队首元素*/
    if(stack1.isEmpty()&&stack2.isEmpty()){
        return null;
    };
    
    if(stack2.isEmpty()){
        
        while(!stack1.isEmpty()){
            stack2.push(stack1.pop());
        }
    };
        
        return stack2.pop();
   
    

    // write code here
}
module.exports = {
    push : push,
    pop : pop
};