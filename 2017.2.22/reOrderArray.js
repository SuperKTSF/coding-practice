/*����һ���������飬ʵ��һ�����������������������ֵ�˳��ʹ�����е�����λ�������ǰ�벿�֣����е�ż��λ��λ������ĺ�벿�֣�����֤������������ż����ż��֮������λ�ò��䡣*/
function reOrderArray(array)
{
    /*��Ŀ�����壬����λ�����Ǹ���Ϊ������Ҳ�����������е�λ��Ϊ����
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
    
    /*�ڶ��ַ���ֱ��ʹ��jsԭ���﷨filter�����ԭ���������λ��ż��λ���ú����������  */
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
  
    
    /*��������ָ��Ľⷨ���������λ������
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