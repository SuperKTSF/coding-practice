/*给定一颗二叉搜索树，请找出其中的第k大的结点。例如， 5 / \ 3 7 /\ /\ 2 4 6 8 中，按结点数值大小顺序第三个结点的值为4。*/
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

function KthNode(pRoot, k)
{
    // write code here
    if(pRoot==null||k==0){
        return null;
    }
    var arr=[];
    search(arr,pRoot,k); //闭包的使用
    return arr[k-1];
    
    function search(arr,node,k){
        if(node == null){
            return;
        }
        search(arr,node.left,k);
        
        arr.push(node);
        
        if(arr.length>=k){
            return; 
        }
        
        search(arr,node.right,k);       	
    }   
}

module.exports = {
    KthNode : KthNode
};