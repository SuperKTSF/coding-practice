/*输入一个递增排序的数组和一个数字S，在数组中查找两个数，是的他们的和正好是S，如果有多对数字的和等于S，输出两个数的乘积最小的。*/
function FindNumbersWithSum(array, sum)
{
    // write code here
    //两个数和一定，差的越多乘积越小，也就是输出
    if(array.length<=0||sum<2){
       return []; 
    }
    var res = [];
    var left=0;
    var right = array.length -1;
    var cursum;
    while(left<right){
        cursum = array[left]+array[right];
        if(cursum==sum){
            res.push(array[left],array[right])
            break;
        }else if(cursum<sum){
            left++;
        }else{
            right--;
        }
    }
    return res;

}
module.exports = {
    FindNumbersWithSum : FindNumbersWithSum
};