/*дһ������������������֮�ͣ�Ҫ���ں������ڲ���ʹ��+��-��*��/����������š�*/
function Add(num1, num2)
{
    // write code here
    var sum ;
    
    while(num2!=0){
        sum = num1^num2;
        num2 =  (num1&num2)<<1;
        num1 = sum;
        
    }
    return num1;
}
    /*

    var array=new Array();
    array[0]=num1;
    array[1]=num2;
    var s=eval(array.join('+')); //�õ��ַ����ġ�+��
    return s;
    */


module.exports = {
    Add : Add
};