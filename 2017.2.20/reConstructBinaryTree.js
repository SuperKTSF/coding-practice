/*����ĳ��������ǰ���������������Ľ�������ؽ����ö����������������ǰ���������������Ľ���ж������ظ������֡�
��������ǰ���������{1,2,4,7,3,5,6,8}�������������{4,7,2,1,5,3,8,6}�����ؽ������������ء�*/


/*����˼·��1����������ǰ����������ҵ���������root�㣬Ȼ�󽫸õ���뵽���������У����Ϊ�������������У��ұ�Ϊ��������������
           2���������������������зֱ���뵽ǰ�������У������ҵ������������Ե�ǰ������
           3������������ǰ�����е�һ��Ԫ�طֱ��Ǹ��ڵ�����Ҷ���
           4��Ȼ����еݹ����㣬�ظ����ϵĲ���
           5���ؽ���������˼���Ƿ���һ��������node�׽ڵ㣬���Ҹö�����������ָ��ṹ���ѹ������*/

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
    /*node����ĸ�ֵ���һ�Ҫ�ӣ���ͬ����֮���ö��Ÿ���*/
    var node = {
        val : pre[0]
    }
   for(var i=0;i<array_length;i++){
       
       if(pre[0]==vin[i]){
           
           /*����д�����Ǻ�ֱ�ۣ����������Ż����Ż�����㷨Ҫ��Լ30ms��ʱ��
           var pre_left =  pre.slice(1,i+1);
     
           var in_left = vin.slice(0,i);
     
           var pre_right = pre.slice(i+1);
     
           var in_right = vin.slice(i+1);
           
           node.left = reConstructBinaryTree(pre_left,in_left );
    
           node.right = reConstructBinaryTree(pre_right,in_right);
 
           */
           
           /*array.slice���÷�����ǰһ����������ǲ�������һ�������������ֻ��һ������ʱ�����ʾ�Ӹò���
           һֱ�������ĩβ*/
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