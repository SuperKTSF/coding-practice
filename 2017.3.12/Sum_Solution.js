/*��1+2+3+...+n��Ҫ����ʹ�ó˳�����for��while��if��else��switch��case�ȹؼ��ּ������ж���䣨A?B:C����*/
function Sum_Solution(n)
{
    // write code here
    var arr = [];
    for(var i=0;i<n;i++){
        arr[i] = i+1;
    }
    return arr.reduce(function(prev,cur,index,array){
        return prev+cur;
    });
}
module.exports = {
    Sum_Solution : Sum_Solution
};