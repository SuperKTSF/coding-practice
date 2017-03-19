/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

function Print(root)
{
    var queue = [];
    var result= [];
    
    if(root==null){
        return result ;
    }
    var nextLevel = 0;//���ڿ�����һ��ĸ���
    queue.push(root);//���ĵ�˼·����tree�ı����󽫽ڵ��������С���������ĵ���ڶ��п�ǰ��λ��
	var toBePrinted = 1;//���ڿ��Ʊ��㻹ʣ�����Ŀ
	var level = 0;  //���ڿ���������һ��
    var arr = [];  //���ڼ�¼ÿһ�������
    
    while(queue.length){
        
        
        var temp =queue.shift();  //��ӡ����ĵ�ᱻ�Ӷ������Ƴ�
		toBePrinted--;   
        arr.push(temp.val);
        
        
        if(temp.left){
            queue.push(temp.left);
			nextLevel++;
        }
        if(temp.right){
            queue.push(temp.right);
			nextLevel++;
        }
		if(toBePrinted==0){//���Ͻ�����һ��
            
            
			toBePrinted=nextLevel;
			nextLevel=0;
			level++;
			if(level%2==0){
				arr.reverse();   //��ż���е�ʱ���ÿ�е����ݷ�ת˳��
			}	
            result.push(arr);
            arr=[];  //ÿ�λ��й����ٰ�����������
		}		
    }    
    return result;
    // write code here
}
module.exports = {
    Print : Print
};