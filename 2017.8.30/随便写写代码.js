//冒泡排序就是每次向上选出一个最大的数值，需要共冒泡n次才有结果
var length = array.length
for(var i=0;i<length;i++){
	for(var j=0;j<length-1;j++){
		if(arr[j]<arr[j++]){
			[arr[j],arr[j+1]]=[arr[j+1],arr[j]]
		}
	}
}
//优化后的冒泡，最后一位已经选出来就不需要再加入比较
var length = array.length
for(var i=0;i<length;i++){
	for(var j=0;j<length-1-i;j++){
		if(arr[j]<arr[j++]){
			[arr[j],arr[j+1]]=[arr[j+1],arr[j]]
		}
	}
}
//冒泡最好为O（n），最差为0（n2）

//选择排序，就是每次选出最小的值，并放在第i位
var length  =array.length;
var indexMin;
for(var i= 0;i<length-1;i++){
	indexMin = i;
	for(var j=i;j<length;j++){
		if(array[indexMin]>array[j]){
			indexMin=j;
		}
	}
	if(indexMin!=i){
		[arr[i],arr[indexMin]]=[arr[indexMin],arr[i]]
	}
}
//选择排序的复杂度为0（n2）


//插入排序，就是讲一个数据往已经排序的子数据里面插入
var length = array.length;
var  j,temp;
for(var i = 1;i<length;i++){
	j =i; //将要排序元素的初始位置
	temp = array[i]; //待排序目标元素
	while(j>0 && array[j-1]>temp){
		array[j] = array[j-1];
		j--;//找到合适的位置
	}
	array[j] = temp; //合适的位置的插入操作
}
//冒泡最好为O（n），最差为0（n2）

//归并排序主要是一种分治的思想，就是先将数组拆分成最小长度为1的数组，然后再将这些数组合并
//首先是拆分过程
function mergeSort(array){
	var lenght = array.length;
	if(length===1){
		return array;
	}
	var mid = Math.floor(length/2);
	var left = array.slice(0,mid);
	var right = array.slice(mid);
	return merge(mergeSort(left),mergeSort(right)); 
}
//然后是合并过程
function Merge(left,right){
	var il = 0;
	var ir = 0;
	var resule = []; //合并之后返回的新数组
	
	while(il<left.length&&ir<right.length){
		if(left[il]<right[ir]){
			result.push(left[il]);
			il++;
		}else{
			result.push(right[ir]);
			ir++
		}
	}
	while(il<left.lenght){
		result.push(left[il++]);
	}	
	
	while(ir<right.lenght){
		result.push(right[ir++]);
	}
	return result;
}
//归并排序的复杂度比冒泡、选择和插入都要好，复杂度为nlog(n)

//快速排序的也是基于分治的思想，但是并没有真正的将数组分开，每次随机选择一个数组中的元素，执行一次遍历后，该元素左边的都比他小，右边都比他大
function quickSort(arr){
	if(arr.length<=1){
		return arr;
	}
	var mid = Math.floor(arr.length/2);  //随机找到一个中间值的序列
	var value = arr.splice(mid,1);	  //找到序列对应的值，并且把它从数组中剥离出来
	var left =[];
	var right =[];
	for(var i=0;i<arr.length;i++){
		if(arr[i]<value){
			left.push(value);
		}else{
			right.push(value);
		}
	}
	return quickSort(left).concat([value],quickSort(right));
}

//归并排序最好为O（nlog(n)），最差为0（n2）


//还有一个二分搜索法，比遍历搜索效率要高
function binarySearch(array,item){
	array.sort(function(a,b){return a-b});  //前提是排序
	var low =0;
	var height = array.length;
	var mid;
	var element;
	while(low<=height){
		mid = Math.floor((low+height)/2);
		element = array[mid];
		if(element>item){
			right = mid -1;
		}else if(element<mid){
			left = mid+1 
		}else{
			return mid;
		}
	}
}




















