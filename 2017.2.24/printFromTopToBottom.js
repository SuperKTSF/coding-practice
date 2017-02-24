/*从上往下打印出二叉树的每个节点，同层节点从左至右打印*/
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function PrintFromTopToBottom(root)
{

    var queue = [];
    var result= [];
    
    if(root==null){
        return result ;
    }
    
    queue.push(root);//核心的思路就是tree的遍历后将节点放入队列中。所以上面的点会在队列靠前的位置
    
    while(queue.length){
        
        var temp =queue.shift();  //打印过后的点会被从队列中移除
        
        result.push(temp.val);
        
        if(temp.left){
            queue.push(temp.left);
        }
        if(temp.right){
            queue.push(temp.right);
        }
    }
    
    return result;
    // write code here
}
module.exports = {
    PrintFromTopToBottom : PrintFromTopToBottom
};