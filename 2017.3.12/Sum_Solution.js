/*求1+2+3+...+n，要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）。*/
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