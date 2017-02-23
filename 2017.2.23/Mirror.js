/*二叉树的镜像定义：源二叉树 
    	    8
    	   /  \
    	  6   10
    	 / \  / \
    	5  7 9 11
    	镜像二叉树
    	    8
    	   /  \
    	  10   6
    	 / \  / \
    	11 9 7  5*/
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Mirror(root)
{
    // write code here   
    var temp;
    
    if(root==null){
        return ;
    }
    
    if(root.left==null&&root.right==null){
       return ; 
    }
    
    temp = root.left;
    root.left = root.right;
    root.right = temp;
    
    if(root.left){
        Mirror(root.left);
    }
    
     if(root.right){
        Mirror(root.right);  //这是典型的先序遍历的思想，先自己然后向左转移，左边转移完后再邮编转移，对每个点的处理函数就是交换左右指针的指向
    }   
}


module.exports = {
    Mirror : Mirror
};