/*写一个函数，求两个整数之和，要求在函数体内不得使用+、-、*、/四则运算符号。*/
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
    var s=eval(array.join('+')); //用到字符串的“+”
    return s;
    */


module.exports = {
    Add : Add
};