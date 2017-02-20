/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function reConstructBinaryTree(pre, vin)
{
    
    var array_length = pre.length;
    if(array_length==0){
        return null
    }
    var val = pre[0];
    
    var node = new TreeNode(val);
    
    vai index_root_in = vin.indexOf(val); 
    
    var pre_left =  pre.slice(1,index_root_in);
    
    var in_left = vin.slice(0,index_root_in-1);
    
    var pre_right = pre.slice(index_root_in+1,array.length-1);
    
    var in_left = vin.slice(index_root_in+1,array.length-1);
    
    node.left = reConstructBinaryTree(pre_left,in_left );
    node.right = reConstructBinaryTree(pre_right,in_left);
    
    return node;
    
    
    // write code here
}
module.exports = {
    reConstructBinaryTree : reConstructBinaryTree
};