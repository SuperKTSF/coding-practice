/*����һ������A[0,1,...,n-1],�빹��һ������B[0,1,...,n-1],����B�е�Ԫ��B[i]=A[0]*A[1]*...*A[i-1]*A[i+1]*...*A[n-1]������ʹ�ó�����*/
function multiply(array)
{
    // write code here
    if(array==null||array.length<=1){
        return null;
    }
    var result=[];
    for(var i = 0;i<array.length;i++){
        var arr1=array.slice(0);
        arr1.splice(i,1);
        result.push(arr1.reduce(function(curr,piou){
            return curr*piou;
        }));
    }
    return result;
}
module.exports = {
    multiply : multiply
};