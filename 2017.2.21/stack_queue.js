/*������ջ��ʵ��һ�����У���ɶ��е�Push��Pop������ �����е�Ԫ��Ϊint���͡�*/
/*��Ϊ��javascript��û��ֱ��Stack֮�����ݽṹ������Ҫ�봴��������ջ���������������ģ�����ջ�Ĺ��캯����jsԭ��������û��Stack*/
function Stack(){
    
   var items = [];
    
   this.push = function (element){
       items.push(element);
   };
    
   this.pop = function(){
       return  items.pop();
   };
    /*���캯������ķ����ڵ���ʱҪ���ϣ���*/
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
    /*��������stack�����stack2Ϊ�գ����ڶ��׵�Ӧ����stack1��ջ�ף���ֱ�Ӱ�stack1�е�Ԫ�ش�ջ�����δ�ŵ�stack2�У�
    ��stack2��ջ����Ϊ����Ԫ�أ����stack2��Ϊ�գ���stack2��ջ��Ԫ�ؼ�Ϊ����Ԫ��*/
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