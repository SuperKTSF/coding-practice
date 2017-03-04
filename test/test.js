function FindFirstCommonNode(pHead1, pHead2)
{
    // write code here
    //方法一，先使用辅助栈从后往前选择
    if(pHead1==null||pHead2==null){
        return null;
    }
    var stack1=[];
    var stack2=[];
    var current1=pHead1;
    var current2=pHead2;
    var arr=[]; //用来存删掉的项
    var lastitem1;
    var lastitem2;
    while(current1.next!=null){
        stack1.push(current1.val);
        current1 = current1.next;
    }
    
    while(current2.next!=null){
        stack2.push(current2.val);
        current2 = current2.next;
    }
    
    lastitem1=stack1.pop();
    lastitem2=stack2.pop();
    
    if(lastitem1!=lastitem2){
        return null;
    }
    
    while(stack1!=null&&stack2!=null){
       lastitem1=stack1.pop();
       lastitem2=stack2.pop();
       if(lastitem1==lastitem2){
          arr.push(lastitem1);
          continue;
       }else{
          return arr.pop();
       }
       
    }
    return arr.pop();
}