/*����һ����������������һ������S���������в������������ǵ����ǵĺ�������S������ж�����ֵĺ͵���S������������ĳ˻���С�ġ�*/
function FindNumbersWithSum(array, sum)
{
    // write code here
    //��������һ�������Խ��˻�ԽС��Ҳ�������
    if(array.length<=0||sum<2){
       return []; 
    }
    var res = [];
    var left=0;
    var right = array.length -1;
    var cursum;
    while(left<right){
        cursum = array[left]+array[right];
        if(cursum==sum){
            res.push(array[left],array[right])
            break;
        }else if(cursum<sum){
            left++;
        }else{
            right--;
        }
    }
    return res;

}
module.exports = {
    FindNumbersWithSum : FindNumbersWithSum
};