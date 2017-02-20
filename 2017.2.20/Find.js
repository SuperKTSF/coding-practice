/* 在一个二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数 */


function Find(target, array)
{
    /*  这种方法充分利用了数组行列都进行了排序的条件，从左下角查找，最坏情况为O(M+N),耗时为50ms，属于最优情况 */
    var i = array.length - 1;
    var j=0;
    while(i>=0&&j<array[i].length){
        if(array[i][j]<target){
            j++;
        }else if(array[i][j]>target){
            i--;
        }else{
            return true;
        }
    }
    return false;
    
    
    
    /*因为数组的每一行都是经过排序后的数组，所以我们可以直接采用二分搜索方法，时间复杂度为O(MlogN),耗时60ms
    for(var i =0;i<array.length;i++){
        var low = 0,
            high=array[i].length-1,
            mid,element;
        while(low<=high){
            mid = Math.floor((low+high)/2);
            element = array[i][mid];
            if(element<target){
                low=mid+1;
            }else if(element>target){
                high= mid-1;
            }else{
                return true
            }
        }
        
    }
    return false;
    */
 
   /*这种方法是我最先想到的，不过没有利用题目给出的排序条件，时间复杂度为O(M*N),不是最优的，耗时70ms
   for(var i = 0;i<array.length;i++){
        for(var j=0;j<array[i].length;j++){
            if(array[i][j]==target)
                return true
        }
    };
    return false;// write code here
    */
    
}
module.exports = {
    Find : Find
};