/*给定一个二叉树和其中的一个结点，请找出中序遍历顺序的下一个结点并且返回。注意，树中的结点不仅包含左右子结点，同时包含指向父结点的指针。*/
/*function TreeLinkNode(x){
    this.val = x;
    this.left = null;
    this.right = null;
    this.next = null;
}*/
function GetNext(pNode)
{
    // write code here
    //首先应该找到父节点
    /*方法一：通俗易懂，但是有点儿蠢
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
        pNode = pNode.right;//右子树的首节点
        while(pNode.left!==null){
            pNode = pNode.left;
        }
        return pNode;
    }
    while(pNode.next!==null){
        if(pNode.next.left==pNode){ //没有右子树的节点，也分为两类，通过向上父节点遍历
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