/*����һ����������������е�����k����㡣*/
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
/*�����˼·����ȷ�ģ����������k-1��ָ�룬�������ƶ������һλʱ��ǰ�߸պ��ƶ���������Kλ
���Ǳ��뿼�ǵ������³���ԣ�Ҳ���Ƕ�������ļ�飬���ڸ������붼���ᵼ�³���ı���������õģ�
���ǳ����˺ܶ൱����Ϊ������ʱ��������ǲ���������*/
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