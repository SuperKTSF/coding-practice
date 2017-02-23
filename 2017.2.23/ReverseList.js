/*输入一个链表，反转链表后，输出链表的所有元素。*/

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead)
{
    // 首先根据链表节点的表示方法，推断这是一个单向链表write code here
    
    var current = pHead;
    var pReversedHead = null ;
    var previous = null;
    var pNext = null;
    

        while(current!=null){  //逐个翻转才能有足够的指针指向每一个节点，如果从结尾处开始则无法对每一个节点翻转
            pNext =current.next;
            
            if(pNext==null){
                pReversedHead = current;
            };
            
            current.next = previous;
            previous = current; //这里的赋值是在下一次循环中才使用的
            current = pNext;
        }
        
        return pReversedHead;

}
module.exports = {
    ReverseList : ReverseList
};