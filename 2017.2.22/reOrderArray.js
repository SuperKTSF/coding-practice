/*输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前半部分，所有的偶数位于位于数组的后半部分，并保证奇数和奇数，偶数和偶数之间的相对位置不变。*/
function reOrderArray(array)
{
    /*题目有歧义，奇数位可以是该数为奇数，也可以是数组中的位置为奇数
    var arr1= [];
    var arr2= [];
    
    for(var i=0;i<array.length;i=i+2){
        arr1.push(array[i]);
    };
    
    for(var j=1;j<array.length;j=j+2){
        arr2.push(array[j]);
    };
    
    return  arr1.concat(arr2);*/
    // write code here
    
    /*第二种方法直接使用js原生语法filter分离出原数组的奇数位和偶数位，让后再组合数组  */
    if(array.length==0){
        return [];
    }
    
    var arr1=array.filter(function(item,index,array){
        return (item%2==0);
    });
    
    var arr2=array.filter(function(item,index,array){
        return (item%2==1);
    });
    
    return arr2.concat(arr1);
  
    
    /*这种利用指针的解法不满足相对位置条件
    var cur;
    if(array.length==0){
        return [];
    }
    
    var  low = 0;
    var high = array.length -1;
    while(low<high){
        while((array[low]%2)!=0){
            low++;
        };
        while((array[high]%2)==0){
            high--;
        };
        
        if(low<high){
            cur =array[low];
            array[low] =array[high];
            array[high] = cur;
        }
        
    }
    return array;
    
    */
    
    
}
module.exports = {
    reOrderArray : reOrderArray
};