/*�������´�ӡ����������ÿ���ڵ㣬ͬ��ڵ�������Ҵ�ӡ*/
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
    
    queue.push(root);//���ĵ�˼·����tree�ı����󽫽ڵ��������С���������ĵ���ڶ��п�ǰ��λ��
    
    while(queue.length){
        
        var temp =queue.shift();  //��ӡ����ĵ�ᱻ�Ӷ������Ƴ�
        
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