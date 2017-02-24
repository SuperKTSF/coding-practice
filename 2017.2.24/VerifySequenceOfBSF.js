/*输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。如果是则输出Yes,否则输出No。假设输入的数组的任意两个数字都互不相同。*/
function VerifySquenceOfBST(sequence)
{
    // write code here
    //tree的后序遍历和前序遍历都有类似的结构，在选择左右子树的数组时很重要，再进行递归
    var length = sequence.length;
    
    if(sequence==null||length==0){
        return false;
    }
    var root = sequence[length-1];
    
    //找到分界点后跳出循环
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
    
    var left =true; //最后判断只要有一个元素的初始值，必然为true
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