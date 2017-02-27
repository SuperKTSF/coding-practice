/*����һ�ö��������������ö���������ת����һ�������˫������Ҫ���ܴ����κ��µĽ�㣬ֻ�ܵ������н��ָ���ָ��*/
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

function Convert(pRootOfTree)
{
    // write code here
    //���������Ŀ��������js�в�û���������tree����ԭ�����ݽṹ�������ɶ���ģ��ģ�����Ҫ
    //����ֻ��Ҫ����һ��ָ�������׽ڵ��ָ�뼴��,������������洢ָ�����ָ��ָ��Ľڵ����
    var tail = null;
    if(pRootOfTree===null){
        return null;
    }
    tail = ConvertNode(pRootOfTree,tail);
    var head = tail;    
    while(head&&head.left){
        head = head.left;
    }
    return head;   
}
//�������ı�����ʵ���Ͼ��Ƕ�tree��ÿ���ڵ�����Ӧ�Ĵ������ǰ���ӽڵ�֮���й���������һ���м�ָ����нڵ㱣��
    
function ConvertNode(node,tail){
    
    if(node.left!=null){
       tail = ConvertNode(node.left,tail); 
    }
    
    node.left = tail;
    if(tail){
        tail.right = node; //����˫������
    }
    
    tail = node; //������β����ָ�볯ǰ�ƶ�һλ
    
    if(node.right!=null){
       tail=ConvertNode(node.right,tail); 
    }
    
    return tail;
}
module.exports = {
    Convert : Convert
};