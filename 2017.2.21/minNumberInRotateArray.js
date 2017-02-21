/*
把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
输入一个非递减排序的数组的一个旋转，输出旋转数组的最小元素。
例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为1。
NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。*/

function minNumberInRotateArray(rotateArray)
{
    
   /*本题考察的数据结构的查找搜索算法，第一反应就是顺序查找，但是效率非常低，耗时100ms
    if(rotateArray.length==0){
        return 0;
    }else{
        for(var i = 0;i<rotateArray.length-1;i++){
            if(rotateArray[i]>rotateArray[i+1]){
                return rotateArray[i+1];
                // write code here 
            }
   
        }
    }
    
    */
    
    /*现在换一种查找方法，二分搜索，这个需要以数组排序为前提条件，但题目所给出的符合条件*/
   if(rotateArray.length==0){
        return 0;
    };
    var low= 0;
    var high = rotateArray.length-1;
    var mid,element;
    
    while(low<high){
 
        mid = Math.floor((low+high)/2);
        
        element = rotateArray[mid];
        
        if(element>rotateArray[high]){
            
            low = mid+1;
            
        }else if(element==rotateArray[low]){
            
            high = high - 1;   /*相等说明low和high相邻，比如5+6/2取整就为5，high-1后不满足while循环*/
            
        }else{
            
            high = mid;
        }
    }
    
    return rotateArray[high];
}
module.exports = {
    minNumberInRotateArray : minNumberInRotateArray
};