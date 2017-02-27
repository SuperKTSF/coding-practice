/*输入一颗二叉树和一个整数，打印出二叉树中结点值的和为输入整数的所有路径。路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。*/
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function FindPath(root, expectNumber)
{
    // write code here
    var result = [];
    if(root===null){
        return result;
    } 
    isPath(root,expectNumber,[],0,result);
    return result;//以数组的形式返回，数组中存储的为每次的路径数组
    
}
//递归函数处理的第一个参数是root本身，所有是典型的前序遍历
function isPath(root,expectNumber,path,currentSum,result){ 
    currentSum += root.val;
    
    path.push(root.val);
 
    if(currentSum==expectNumber&&root.left==null&&root.right==null){
        result.push(path.slice(0));//每次的结果都是当前path的副本，如果都为path，最后的结果都一样
    }
    if(root.left!=null){
        isPath(root.left,expectNumber,path,currentSum,result); 
    }
    
    if(root.right!=null){
        isPath(root.right,expectNumber,path,currentSum,result); 
    }
    
    path.pop();
    //currentSum -= root.val;这是多余的步骤，从父节点到子节点，带入的currentSum都不包含子节点的值
  
}
module.exports = {
    FindPath : FindPath
};