/*�������ľ����壺Դ������ 
    	    8
    	   /  \
    	  6   10
    	 / \  / \
    	5  7 9 11
    	���������
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
        Mirror(root.right);  //���ǵ��͵����������˼�룬���Լ�Ȼ������ת�ƣ����ת��������ʱ�ת�ƣ���ÿ����Ĵ��������ǽ�������ָ���ָ��
    }   
}


module.exports = {
    Mirror : Mirror
};