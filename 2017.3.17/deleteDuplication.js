/*��һ������������У������ظ��Ľ�㣬��ɾ�����������ظ��Ľ�㣬�ظ��Ľ�㲻��������������ͷָ�롣 ���磬����1->2->3->3->4->4->5 �����Ϊ 1->2->5*/
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function deleteDuplication(pHead)
{
    // write code here
    //�����ظ��Ľڵ�ָ���ǽڵ��val��ͬ
    //ɾ���ڵ㲢���ѣ��ѵ����ж���Щ�ڵ�Ҫɾ��
    /* ��һ���뷨��ɾ���ظ���node�ڵ㣬��û����ȫɾ��
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
    var b=[]; //��¼��Щ�ڵ�Ӧ�ñ�ɾ��
    while(current.next!==null){
        a.push(current.val);
        current = current.next;
        if((a.indexOf(current.val)!=-1)&&b.indexOf(current.val)==-1){
            b.push(current.val);
        }
    }
    while(pHead!==null&&(b.indexOf(pHead.val)!=-1)){  //����Ҫ�ر�ע�⣬�����ж�pHead�Ƿ�Ϊ��
        pHead = pHead.next;
    }
    var newCurrent = pHead;
    if(newCurrent!==null){  	
    	while(newCurrent.next!==null){         //�ٱ���һ��
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