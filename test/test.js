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
    return result;
    
}
//递归函数处理的第一个参数是root本身，所有是典型的前序遍历
function isPath(root,expectNumber,path,currentSum,result){ 
    currentSum += root.val;
    
    path.push(root.val);
 
    if(currentSum==expectNumber&&root.left==null&&root.right==null){
        result.push(path.slice(0));
    }
    if(root.left!=null){
        isPath(root.left,expectNumber,path,currentSum,result); 
    }
    
    if(root.right!=null){
        isPath(root.right,expectNumber,path,currentSum,result); 
    }
    
    path.pop();
    currentSum -= root.val;   
}