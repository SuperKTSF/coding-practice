/*����һ�������������е�һ����㣬���ҳ��������˳�����һ����㲢�ҷ��ء�ע�⣬���еĽ�㲻�����������ӽ�㣬ͬʱ����ָ�򸸽���ָ�롣*/
/*function TreeLinkNode(x){
    this.val = x;
    this.left = null;
    this.right = null;
    this.next = null;
}*/
function GetNext(pNode)
{
    // write code here
    //����Ӧ���ҵ����ڵ�
    /*����һ��ͨ���׶��������е����
    if(pNode==null){
        return null
    }
    var root;
    var current = pNode;
    var arr=[];
    while(current.next!==null){
        current = current.next;
    }
    root = current;
    return getnextway(arr,root,pNode);*/
    if(pNode==null){
        return null;
    }
    if(pNode.right!==null){
        pNode = pNode.right;//���������׽ڵ�
        while(pNode.left!==null){
            pNode = pNode.left;
        }
        return pNode;
    }
    while(pNode.next!==null){
        if(pNode.next.left==pNode){ //û���������Ľڵ㣬Ҳ��Ϊ���࣬ͨ�����ϸ��ڵ����
             return pNode.next;
        }
        pNode = pNode.next;
    }
    return null;
    
}
/*
function getnextway(arr,node,pNode){
    if(node!=null){
        getnextway(arr,node.left,pNode);
        arr.push(node);
        getnextway(arr,node.right,pNode);
    }
    return arr[arr.indexOf(pNode)+1]; 
}*/
module.exports = {
    GetNext : GetNext
};