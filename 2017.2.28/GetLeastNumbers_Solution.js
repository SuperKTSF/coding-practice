function GetLeastNumbers_Solution(input, k)
{
    // write code here
    if(input.length==0||k==0){
        return [];
    }
    
    if(k>input.length){
        return [];
    }   
    input.sort();
    //数组自带的排序方法，是完全排序后的结构，google采用的是快速排序O(nlogn),也可以考虑部分排序
    //首先考虑快速排序的方式，因为预期的目标是返回的i值刚好为k，那么左边k个数就是最小值
    /*方法二：快排
    var left=0;
    var right = input.length-1;
    var index = partition(input,left,right);
    while(index!=k){
        if(index>k){
            right=index-1;
            index=partition(input,left,right);
        }else{
            left=index+1;
            index=partition(input,left,right)
        }
    }*/
    return input.slice(0,k);   //快速排序已经修改了input数组
}

function partition(array,left,right){
	var mid =array[Math.floor((left+right)/2)]; 
	var i = left;
	var j = right;//变量ij指向数组的首尾和末尾,array长度没变，变得只是指针的位置
	while(i<=j){
		while(array[i]<mid){
			i++;
		}
		while(array[j]>mid){
			j--;
		}
		//跳出循环后左右指针依然没有交叉，则交换对应值得位置
		if(i<=j){
			swap(array,i,j);
			i++;
			j--;
		}
	}
	return i;//此时的array已经根据mid的值划分成了小值数组和大值数组，i表示大值数组的首位位置
};

function swap(array,index1,index2){
	var temp = array[index1];
	array[index1] = array[index2];
	array[index2] = temp;
}

module.exports = {
    GetLeastNumbers_Solution : GetLeastNumbers_Solution
};