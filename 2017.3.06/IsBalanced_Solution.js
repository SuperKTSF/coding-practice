/*输入一棵二叉树，判断该二叉树是否是平衡二叉树*/
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function IsBalanced_Solution(pRoot)
{
    // write code here
    if(pRoot==null){
        return true;    
    }
    
    var left = TreeDepth(pRoot.left);
    var right = TreeDepth(pRoot.right);
    var differ=right-left;
    if(differ>1||differ<-1){
        return false;
    }
    return IsBalanced_Solution(pRoot.left)&&IsBalanced_Solution(pRoot.right);
    
    
}

function TreeDepth(pRoot)
{
    // write code here
    if(pRoot==null){
        return 0;
    }
    var nleft = TreeDepth(pRoot.left);
    var nright = TreeDepth(pRoot.right);
    
    return (nleft>nright)?(nleft+1):(nright+1);
}
module.exports = {
    IsBalanced_Solution : IsBalanced_Solution
};