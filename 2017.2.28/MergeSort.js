/*�鲢�������ּ�Ƿ��Σ������������ɵ�����С����ֱ��ÿ��С����ֻ��һλ����Ȼ���ٽ�С����鲢���������ڹ鲢�Ĺ�����*/
var mergeSort = function(array){
	var length = array.length;
	//������Ĺ����ǵݹ麯����Ҫȷ���ݹ�ֹͣ������
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
	//��������ѭ���鲢����
	while(il<left.length&&ir<right.length){
		if(left[il]<right[ir]){
			result.push(left[il++]);
		}else{
			result.push(right[ir++]);
		}
	}
	//��ߵ����黹��ʣ��Ĳ���
	while(il<left.length){
		result.push(left[il++]);
	}
	
	//�ұ���ʣ��Ĳ���
	while(ir<right.length){
		result.push(right[ir++]);
	}
	
	return result;
	
}

/*ð�����򣺱��������е�ÿһ����������е�������Ƚϣ�Ҫ������ǰ���ֵ���ں����򽻻������������λ��*/
//ð�ݺ�ѡ������Ҫ�õ��Ľ���������
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

/*ѡ�����򣺱������齫ÿһ�λ��Сֵ��Ȼ��ֱ���������������λ�Ƚϣ��ҵ���Сֵ������������λ��*/

function SelectSort(array){
	var length = array.length;
	var mindex;
	for(var i=0;i<length;i++){
		mindex=i;
		//��j=iҲ������ʼλ��������,�ҵ���Сֵ����������i������Ҳ���Ǵ�ǰ��������ȷ��
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
/*��������û���������������Ѿ�����õ�������Ƚϣ���������뵽������������Ӧλ��*/
function insertionSort(array){
	var length = array.length;
	var temp;
	var j;//j����������ǰ���Ѿ��ź���������
	for(var i=1;i<length;i++){
		j=i;
		temp=array[i];//������������ڱ����У��������
		while(j>0&&array[j-1]>temp){
			array[j]=array[j-1]; //��������ǰ�ƣ���������Ųһλ
		}
		array[j]=temp;//����ѭ���󣬴�ʱ�Ѿ��ҵ���Ҫ�����λ��
	}
}
/*��������ͬ��Ҳ�Ƿ��η�����ÿ�ΰ����鶼�ֳɽϴ�����ͽ�С���飬�ֽ��׼������ѡȡ���м�ֵ*/
//����������������ÿ������ֿ�
function partition(array,left,right){
	var mid =array[Math.floor((left+right)/2)]; 
	var i = left;
	var j = right;//����ijָ���������β��ĩβ,array����û�䣬���ֻ��ָ���λ��
	while(i<=j){
		while(array[i]<mid){
			i++;
		}
		while(array[j]>mid){
			j--;
		}
		//����ѭ��������ָ����Ȼû�н��棬�򽻻���Ӧֵ��λ��
		if(i<=j){
			swap(array,i,j);
			i++;
			j--;
		}
	}
	return i;//��ʱ��array�Ѿ�����mid��ֵ���ֳ���Сֵ����ʹ�ֵ���飬i��ʾ��ֵ�������λλ��
};

//quickSort(array,0,array.length-1);���ε�����ʽ
function quickSort(array,left,right){
	var index;
	//������Ϊ1.��˵���Ѿ��������
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









