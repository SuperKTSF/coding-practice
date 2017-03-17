/*在一个排序的链表中，存在重复的结点，请删除该链表中重复的结点，重复的结点不保留，返回链表头指针。 例如，链表1->2->3->3->4->4->5 处理后为 1->2->5*/
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function deleteDuplication(pHead)
{
    // write code here
    //这里重复的节点指的是节点的val相同
    //删除节点并不难，难得是判断哪些节点要删除
    /* 第一个想法是删除重复的node节点，并没有完全删除
    var arr=[];
    while(current.next!=null){
        arr.push(current.val);
        previous = current;
        current = current.next;
        if(arr.indexOf(current.val)!=-1){
            previous.next = current.next;
        }
    }
    return pHead;*/
     if(!pHead){
       return null;
      } 
    if(pHead !== null && pHead.next == null) {
        return pHead;
    }
    var current = pHead;
    var previous =null;    
    var a=[];
    var b=[]; //记录哪些节点应该被删除
    while(current.next!==null){
        a.push(current.val);
        current = current.next;
        if((a.indexOf(current.val)!=-1)&&b.indexOf(current.val)==-1){
            b.push(current.val);
        }
    }
    while(pHead!==null&&(b.indexOf(pHead.val)!=-1)){  //这里要特别注意，得先判断pHead是否为空
        pHead = pHead.next;
    }
    var newCurrent = pHead;
    if(newCurrent!==null){  	
    	while(newCurrent.next!==null){         //再遍历一次
			previous = newCurrent;
        	newCurrent =newCurrent.next;
        	if(b.indexOf(newCurrent.val)!=-1){
            	previous.next = newCurrent.next;
            	newCurrent = previous;
        	}
    	}
    }
    return pHead;
}

module.exports = {
    deleteDuplication : deleteDuplication
};