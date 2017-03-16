/*给定一个数组A[0,1,...,n-1],请构建一个数组B[0,1,...,n-1],其中B中的元素B[i]=A[0]*A[1]*...*A[i-1]*A[i+1]*...*A[n-1]。不能使用除法。*/
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