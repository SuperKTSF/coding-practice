/*
��һ�������ʼ�����ɸ�Ԫ�ذᵽ�����ĩβ�����ǳ�֮Ϊ�������ת��
����һ���ǵݼ�����������һ����ת�������ת�������СԪ�ء�
��������{3,4,5,1,2}Ϊ{1,2,3,4,5}��һ����ת�����������СֵΪ1��
NOTE������������Ԫ�ض�����0���������СΪ0���뷵��0��*/

function minNumberInRotateArray(rotateArray)
{
    
   /*���⿼������ݽṹ�Ĳ��������㷨����һ��Ӧ����˳����ң�����Ч�ʷǳ��ͣ���ʱ100ms
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
    
    /*���ڻ�һ�ֲ��ҷ��������������������Ҫ����������Ϊǰ������������Ŀ�������ķ�������*/
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
            
            high = high - 1;   /*���˵��low��high���ڣ�����5+6/2ȡ����Ϊ5��high-1������whileѭ��*/
            
        }else{
            
            high = mid;
        }
    }
    
    return rotateArray[high];
}
module.exports = {
    minNumberInRotateArray : minNumberInRotateArray
};