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
    //�����Դ������򷽷�������ȫ�����Ľṹ��google���õ��ǿ�������O(nlogn),Ҳ���Կ��ǲ�������
    //���ȿ��ǿ�������ķ�ʽ����ΪԤ�ڵ�Ŀ���Ƿ��ص�iֵ�պ�Ϊk����ô���k����������Сֵ
    /*������������
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
    return input.slice(0,k);   //���������Ѿ��޸���input����
}

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

function swap(array,index1,index2){
	var temp = array[index1];
	array[index1] = array[index2];
	array[index2] = temp;
}

module.exports = {
    GetLeastNumbers_Solution : GetLeastNumbers_Solution
};