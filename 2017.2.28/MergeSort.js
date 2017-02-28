/*归并排序的宗旨是分治，将完整数组拆成单独的小数组直到每个小数组只有一位数，然后再将小数组归并，排序发生在归并的过程中*/
var mergeSort = function(array){
	var length = array.length;
	//拆数组的过程是递归函数，要确定递归停止的条件
	if(length==1){
		return array;
	}
	var mid = Math.floor(length/2);
	var left = array.slice(0,mid);
	var right = array.slice(mid);
	return merge(mergeSort(left),mergeSort(right));
}


function  merge(left,right){
	var result = [];
	var il = 0;
	var ir = 0;
	//接下来是循环归并部分
	while(il<left.length&&ir<right.length){
		if(left[il]<right[ir]){
			result.push(left[il++]);
		}else{
			result.push(right[ir++]);
		}
	}
	//左边的数组还有剩余的部分
	while(il<left.length){
		result.push(left[il++]);
	}
	
	//右边有剩余的部分
	while(ir<right.length){
		result.push(right[ir++]);
	}
	
	return result;
	
}

/*冒泡排序：遍历数组中的每一项，都与数组中的其他项比较，要是数组前面的值大于后面则交换两个数组项的位置*/
//冒泡和选择排序要用到的交换数组项
function swap(array,index1,index2){
	var temp = array[index1];
	array[index1] = array[index2];
	array[index2] = temp;
}

function bubblesort(array){
	var length = array.length;
	for(let i=0;i<length;i++){
		for(let j=0;i<length-1-i;j++){
			if(array[j]>array[j+1]){
				swap(array,j,j+1);
			}
		}
	}
}

/*选择排序：遍历数组将每一项定位最小值，然后分别与后面的其他数组位比较，找到最小值的索引并交换位置*/

function SelectSort(array){
	var length = array.length;
	var mindex;
	for(var i=0;i<length;i++){
		mindex=i;
		//从j=i也就是起始位置向后查找,找到最小值索引，并和i交换，也就是从前到后依次确认
		for(var j=i;j<length;j++){
			if(array[mindex]>array[j]){
				mindex =j;
			}
		}
		
		if(mindex!==i){
			swap(mindex,i);
		}
	}
}
/*插入排序：没有排序的数组项和已经排序好的数组项比较，并将其插入到排序好数组的相应位置*/
function insertionSort(array){
	var length = array.length;
	var temp;
	var j;//j是用来遍历前面已经排好序的数组的
	for(var i=1;i<length;i++){
		j=i;
		temp=array[i];//将带插入项保存在变量中，方便插入
		while(j>0&&array[j-1]>temp){
			array[j]=array[j-1]; //待插入项前移，数组往后挪一位
		}
		array[j]=temp;//跳出循环后，此时已经找到了要插入的位置
	}
}
/*快速排序：同样也是分治方法，每次把数组都分成较大数组和较小数组，分界标准就是所选取的中间值*/
//辅助方法，用来把每个数组分开
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

//quickSort(array,0,array.length-1);初次调用形式
function quickSort(array,left,right){
	var index;
	//数组若为1.则说明已经排序好了
	if(array.length>1){
		index = partition(array,left,right);
		
		if(left<index-1){
		    quickSort(array,left,index-1);
	    }
	    if(index<right){
		    quickSort(array,index,right);
	    }
	}
	
};









