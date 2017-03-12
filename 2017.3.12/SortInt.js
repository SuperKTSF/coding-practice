/*将一个字符串转换成一个整数，要求不能使用字符串转换整数的库函数。 数值为0或者字符串不是一个合法的数值则返回0 */
function StrToInt(str)
{
    // write code here
    //基本思想：将str转换为数组 遍历数组 将其转化为数字
    var result=0;
    var start=0;
    var temparr=str.split("");
    var len=temparr.length;
    var j=temparr.length;//指数
    var flag=false;
    if(temparr[0]=="+")//正数
        {
            start=1;
            j=temparr.length-1;
        } 
    else if(temparr[0]=="-")//负数
        {
            start=1;
            j=temparr.length-1;
            flag=true;
        }
    else
        start=0;
    for(var i=start;i<temparr.length;i++)
        {
            if(temparr[i]>="a"&&temparr[i]<="z") return 0;
            result+=temparr[i]*Math.pow(10,j-1);
            j--;  
        }
    if(flag)
        result=(-1)*result;
    return result;
}
module.exports = {
    StrToInt : StrToInt
};