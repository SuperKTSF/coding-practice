/*����һ���������飬�жϸ������ǲ���ĳ�����������ĺ�������Ľ��������������Yes,�������No���������������������������ֶ�������ͬ��*/
function VerifySquenceOfBST(sequence)
{
    // write code here
    //tree�ĺ��������ǰ������������ƵĽṹ����ѡ����������������ʱ����Ҫ���ٽ��еݹ�
    var length = sequence.length;
    
    if(sequence==null||length==0){
        return false;
    }
    var root = sequence[length-1];
    
    //�ҵ��ֽ�������ѭ��
    for(var i= 0 ;i<length-1;i++){
        if(sequence[i]>root){
            break;
        }
    };
    var j=i;
    for(;j<length;j++){
        if(sequence[j]<root){
            return false;
        }
    };
    
    var left =true; //����ж�ֻҪ��һ��Ԫ�صĳ�ʼֵ����ȻΪtrue
    if(i>0){
        left = VerifySquenceOfBST(sequence.slice(0,i));
    }
    var right =true;
    if(i<length-1){
        right = VerifySquenceOfBST(sequence.slice(i,length-1));
    }
    return left&&right;
    
}
module.exports = {
    VerifySquenceOfBST : VerifySquenceOfBST
};