
/*���������������������������������ϳɺ��������Ȼ������Ҫ�ϳɺ���������㵥����������*/
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function Merge(pHead1, pHead2)
{
    var MergeHead = null;  //������Ƿ��������ͷ��ѡ����Ͳ��ܸı䣬�ƶ��ڵ����ʹ�ø���ָ��
    
    var current =null;
    
    if(pHead1===null){
        return pHead2;
    };
    
    if(pHead2===null){
        return pHead1;
    };
    
    /*�ݹ�汾����ⷽ�㵫��ִ��Ч��̫�ͣ�Ҳ���Բ���ѭ��������
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
                 current.next = pHead1; //�����������һ��ֵ��Ϊĳ���������λ
                 current = current.next;  //�ϳɺ������ҲҪ�������ѭ����ֵ
            }
             pHead1 = pHead1.next; //��λ��ѡ�ߺ������ȥ����λ
           
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