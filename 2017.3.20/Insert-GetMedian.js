/*��εõ�һ���������е���λ����������������ж�����������ֵ����ô��λ������������ֵ����֮��λ���м����ֵ��������������ж���ż������ֵ����ô��λ������������ֵ����֮���м���������ƽ��ֵ*/
var arr = []; 
function Insert(num)
{
    // write code here
    arr.push(num);
    arr.sort(function(a,b){
        return a-b;
    });
}
function GetMedian(){
	// write code here
    var len = arr.length;
    if(len == 0){
        return 0;
    }
    if(len%2==1){
        return arr[(len-1)/2];
    }
    
    return (arr[len/2]+arr[len/2-1])/2;
}
module.exports = {
    Insert : Insert,
    GetMedian : GetMedian
};