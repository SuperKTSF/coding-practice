/*����һ�Ŷ��������������ҳ����еĵ�k��Ľ�㡣���磬 5 / \ 3 7 /\ /\ 2 4 6 8 �У��������ֵ��С˳�����������ֵΪ4��*/
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

function KthNode(pRoot, k)
{
    // write code here
    if(pRoot==null||k==0){
        return null;
    }
    var arr=[];
    search(arr,pRoot,k); //�հ���ʹ��
    return arr[k-1];
    
    function search(arr,node,k){
        if(node == null){
            return;
        }
        search(arr,node.left,k);
        
        arr.push(node);
        
        if(arr.length>=k){
            return; 
        }
        
        search(arr,node.right,k);       	
    }   
}

module.exports = {
    KthNode : KthNode
};