/*输入一个链表，输出该链表中倒数第k个结点。*/
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
/*本题的思路是正确的，用两个相差k-1的指针，当后者移动到最后一位时，前者刚好移动到倒数第K位
但是必须考虑到程序的鲁棒性，也就是对于输入的检查，对于各种输入都不会导致程序的崩溃才是最好的，
但是尝试了很多当输入为空链表时，输出总是不符合条件*/
function LinkedList(){
   function ListNode(x){
   this.val = x;
   this.next = null;
  };
  var head = null;  
};

var list = new LinkedList();

var empty = {};

function FindKthToTail(head, k)
{
    if(head===null){
        return head;
    };
    
    if(k<=0){
        return null;
    };
    
    var cur1 = head;
    var cur2 = head;
    
    for(var i =0; i<k-1;i++){
        
        if(cur1.next!=null){
           cur1 = cur1.next; 
        }else{
            return null;
        }
      
    };
    
    while(cur1.next !=null){
        cur1 = cur1.next;
        cur2 = cur2.next;
    }
    
    return cur2;
    // write code here
}
module.exports = {
    FindKthToTail : FindKthToTail
};