/*����һ��������ת�����������������Ԫ�ء�*/

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead)
{
    // ���ȸ�������ڵ�ı�ʾ�������ƶ�����һ����������write code here
    
    var current = pHead;
    var pReversedHead = null ;
    var previous = null;
    var pNext = null;
    

        while(current!=null){  //�����ת�������㹻��ָ��ָ��ÿһ���ڵ㣬����ӽ�β����ʼ���޷���ÿһ���ڵ㷭ת
            pNext =current.next;
            
            if(pNext==null){
                pReversedHead = current;
            };
            
            current.next = previous;
            previous = current; //����ĸ�ֵ������һ��ѭ���в�ʹ�õ�
            current = pNext;
        }
        
        return pReversedHead;

}
module.exports = {
    ReverseList : ReverseList
};