/*输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的双向链表。要求不能创建任何新的结点，只能调整树中结点指针的指向。*/
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

function Convert(pRootOfTree)
{
    // write code here
    //首先理解题目，由于在js中并没有链表或者tree这种原生数据结构，都是由对象模拟的，我们要
    //做的只需要返回一个指向链表首节点的指针即可,可用任意变量存储指针对象，指针指向的节点对象
    var tail = null;
    if(pRootOfTree===null){
        return null;
    }
    tail = ConvertNode(pRootOfTree,tail);
    var head = tail;    
    while(head&&head.left){
        head = head.left;
    }
    return head;   
}
//考察数的遍历，实质上就是对tree中每个节点做相应的处理，如果前后父子节点之间有关联，则用一个中间指针进行节点保存
    
function ConvertNode(node,tail){
    
    if(node.left!=null){
       tail = ConvertNode(node.left,tail); 
    }
    
    node.left = tail;
    if(tail){
        tail.right = node; //构建双向链表
    }
    
    tail = node; //把链表尾部的指针朝前移动一位
    
    if(node.right!=null){
       tail=ConvertNode(node.right,tail); 
    }
    
    return tail;
}
module.exports = {
    Convert : Convert
};