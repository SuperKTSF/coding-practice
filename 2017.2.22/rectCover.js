/*我们可以用2*1的小矩形横着或者竖着去覆盖更大的矩形。请问用n个2*1的小矩形无重叠地覆盖一个2*n的大矩形，总共有多少种方法？*/
function rectCover(number)
{
    
    /*分析的思路依旧是递归推算，依旧是斐波那契数列，递归效率太低，还是采用循环*/
    if(number<=0){
        return null;
    }
    
    if(number==1||number==2){
        return number;
    }
    
    var arr = [0,1,2];
    
    for(var i = 3;i<=number;i++){
        arr[i]= arr[i-1]+arr[i-2];
    };
    
    return arr[number];
    
    
    // write code here
}
module.exports = {
    rectCover : rectCover
};