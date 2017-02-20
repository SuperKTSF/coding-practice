/* ��һ����ά�����У�ÿһ�ж����մ����ҵ�����˳������ÿһ�ж����մ��ϵ��µ�����˳�����������һ������������������һ����ά�����һ���������ж��������Ƿ��и����� */


function Find(target, array)
{
    /*  ���ַ�������������������ж�����������������������½ǲ��ң�����ΪO(M+N),��ʱΪ50ms������������� */
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
    
    
    
    /*��Ϊ�����ÿһ�ж��Ǿ������������飬�������ǿ���ֱ�Ӳ��ö�������������ʱ�临�Ӷ�ΪO(MlogN),��ʱ60ms
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
 
   /*���ַ������������뵽�ģ�����û��������Ŀ����������������ʱ�临�Ӷ�ΪO(M*N),�������ŵģ���ʱ70ms
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