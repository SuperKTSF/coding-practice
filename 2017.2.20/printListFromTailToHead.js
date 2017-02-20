/*输入一个链表，从尾到头打印链表每个节点的值。

function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function printListFromTailToHead(head)
{
    // 我觉得首先理解题目的意思非常重要，题目中给出的参数是head，也就是指向链表中的第一个节点
    //所以我们应该不需要再去创建链表的数据结构，并自行赋值
    
    
    /*关键是head= head.next,而且也可以根据array.reverse调换数组顺序*/
    var array = [] ;
    
    while(head){
        array.unshift(head.val);
        head = head.next;
    };
    
    return array;
    
}
module.exports = {
    printListFromTailToHead : printListFromTailToHead
};