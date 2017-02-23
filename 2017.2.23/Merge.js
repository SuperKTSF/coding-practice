
/*输入两个单调递增的链表，输出两个链表合成后的链表，当然我们需要合成后的链表满足单调不减规则。*/
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function Merge(pHead1, pHead2)
{
    var MergeHead = null;  //定义的是返回链表的头，选定后就不能改变，移动节点可以使用辅助指针
    
    var current =null;
    
    if(pHead1===null){
        return pHead2;
    };
    
    if(pHead2===null){
        return pHead1;
    };
    
    /*递归版本，理解方便但是执行效率太低，也可以采用循环来代替
    if(pHead1.val<pHead2.val){
        MergeHead = pHead1;
        MergeHead.next = Merge(pHead1.next,pHead2);
    }else{
        MergeHead = pHead2;
        MergeHead.next = Merge(pHead1,pHead2.next);
    };
    
    return MergeHead;
    
    */
    // write code here
    
    
    while(pHead1!=null&&pHead2!=null){
        
        if(pHead1.val<pHead2.val){
            if(MergeHead==null){
                 MergeHead =current =pHead1;
            }else{
                 current.next = pHead1; //返回链表的下一个值即为某个链表的首位
                 current = current.next;  //合成后的链表也要进行向后循环赋值
            }
             pHead1 = pHead1.next; //首位被选走后，链表的去掉首位
           
        }else{
             if(MergeHead==null){
                 MergeHead =current =pHead2;
            }else{
                 current.next = pHead2;
                 current = current.next;  
            }
            pHead2 = pHead2.next;

        }
    }
    
    if(pHead1!=null){
        current.next = pHead1;
    }
    
    if(pHead2!=null){
        current.next = pHead2;
    }
    
    return  MergeHead;
}
module.exports = {
    Merge : Merge
};