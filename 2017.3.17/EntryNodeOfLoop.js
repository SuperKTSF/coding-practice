/*一个链表中包含环，请找出该链表的环的入口结点。*/
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function EntryNodeOfLoop(pHead)
{
    // write code here
    //从链表的结构来看，应该是单向链表
    if(pHead==null){
        return null;
    }
    var current = pHead;
    /*方法一：
    var arr=[]; //想法是利用数组存储链表的访问记录
    while(current.next!=null){
        arr.push(current);
        if(arr.indexOf(current.next)!=-1){
            return current.next;
        }
        current = current.next;
    }
    return null;*/
    //方法二：利用flag标记访问过的node节点
    while(current.next!=null){
        current.flag = true;
        if(current.next.flag==true){
            return current.next;
        }
        current = current.next;
    }
    return null;
}
module.exports = {
    EntryNodeOfLoop : EntryNodeOfLoop
};