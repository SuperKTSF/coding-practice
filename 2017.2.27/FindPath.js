/*����һ�Ŷ�������һ����������ӡ���������н��ֵ�ĺ�Ϊ��������������·����·������Ϊ�����ĸ���㿪ʼ����һֱ��Ҷ����������Ľ���γ�һ��·����*/
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
    return result;//���������ʽ���أ������д洢��Ϊÿ�ε�·������
    
}
//�ݹ麯������ĵ�һ��������root���������ǵ��͵�ǰ�����
function isPath(root,expectNumber,path,currentSum,result){ 
    currentSum += root.val;
    
    path.push(root.val);
 
    if(currentSum==expectNumber&&root.left==null&&root.right==null){
        result.push(path.slice(0));//ÿ�εĽ�����ǵ�ǰpath�ĸ����������Ϊpath�����Ľ����һ��
    }
    if(root.left!=null){
        isPath(root.left,expectNumber,path,currentSum,result); 
    }
    
    if(root.right!=null){
        isPath(root.right,expectNumber,path,currentSum,result); 
    }
    
    path.pop();
    //currentSum -= root.val;���Ƕ���Ĳ��裬�Ӹ��ڵ㵽�ӽڵ㣬�����currentSum���������ӽڵ��ֵ
  
}
module.exports = {
    FindPath : FindPath
};