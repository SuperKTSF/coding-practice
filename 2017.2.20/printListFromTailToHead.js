/*����һ��������β��ͷ��ӡ����ÿ���ڵ��ֵ��

function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function printListFromTailToHead(head)
{
    // �Ҿ������������Ŀ����˼�ǳ���Ҫ����Ŀ�и����Ĳ�����head��Ҳ����ָ�������еĵ�һ���ڵ�
    //��������Ӧ�ò���Ҫ��ȥ������������ݽṹ�������и�ֵ
    
    
    /*�ؼ���head= head.next,����Ҳ���Ը���array.reverse��������˳��*/
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