/*输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回。*/


/*解题思路：1、二叉树的前序遍历可以找到二叉树的root点，然后将该点带入到中序序列中，左边为左子树中序序列，右边为右子树中序序列
           2、将左右子树的中序序列分别带入到前序序列中，可以找到左右子树各自的前序序列
           3、左右子树的前序序列第一个元素分别是根节点的左右儿子
           4、然后进行递归运算，重复以上的步骤
           5、重建二叉树意思就是返回一个二叉树node首节点，并且该二叉树的所有指针结构均已构建完毕*/

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function reConstructBinaryTree(pre, vin){
    
    var array_length = pre.length;
    
    if(array_length==0){
        return null;
    }
    /*node对象的赋值最后一项不要加；不同属性之间用逗号隔开*/
    var node = {
        val : pre[0]
    }
   for(var i=0;i<array_length;i++){
       
       if(pre[0]==vin[i]){
           
           /*这种写法不是很直观，还可以在优化，优化后的算法要节约30ms的时间
           var pre_left =  pre.slice(1,i+1);
     
           var in_left = vin.slice(0,i);
     
           var pre_right = pre.slice(i+1);
     
           var in_right = vin.slice(i+1);
           
           node.left = reConstructBinaryTree(pre_left,in_left );
    
           node.right = reConstructBinaryTree(pre_right,in_right);
 
           */
           
           /*array.slice的用法包含前一个数组项，但是不包含后一个参数的数组项，只有一个参数时，则表示从该参数
           一直到数组的末尾*/
           node.left = reConstructBinaryTree(pre.slice(1,i+1),vin.slice(0,i));
    
           node.right = reConstructBinaryTree(pre.slice(i+1),vin.slice(i+1));
       }
   }
    return node;
    // write code here
}
module.exports = {
    reConstructBinaryTree : reConstructBinaryTree
};