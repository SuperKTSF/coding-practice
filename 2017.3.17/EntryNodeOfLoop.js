/*һ�������а����������ҳ�������Ļ�����ڽ�㡣*/
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function EntryNodeOfLoop(pHead)
{
    // write code here
    //������Ľṹ������Ӧ���ǵ�������
    if(pHead==null){
        return null;
    }
    var current = pHead;
    /*����һ��
    var arr=[]; //�뷨����������洢����ķ��ʼ�¼
    while(current.next!=null){
        arr.push(current);
        if(arr.indexOf(current.next)!=-1){
            return current.next;
        }
        current = current.next;
    }
    return null;*/
    //������������flag��Ƿ��ʹ���node�ڵ�
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