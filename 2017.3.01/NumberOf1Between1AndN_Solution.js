/*求出1~13的整数中1出现的次数,并算出100~1300的整数中1出现的次数？为此他特别数了一下1~13中包含1的数字有1、10、11、12、13因此共出现6次,但是对于后面问题他就没辙了。ACMer希望你们帮帮他,并把问题更加普遍化,可以很快的求出任意非负整数区间中1出现的次数*/
function NumberOf1Between1AndN_Solution(n)
{
    // write code here
    //还是应该从数的规律上做文章

??? /*?我们从低位到高位求每位1出现的次数，累加求和即可??? ? ? 
    例如：求0~abcde中1的个数，现在我们求c这一位中1出现的次数，其他位雷同??? ? ? 
    有两部分组成??? ? ? 
    第一部分：0~ab100，表示当ab这两位在0~ab-1范围内时，de可以从0~99取值?那么次数为ab00次;????????
    第二部分：ab100~ab1de 
    如果c>1时，de为任意值，1的个数为0~99? 100次?? ? ??????????? 
    如果c=1时，de为0~de，1的个数为de + 1??? ? ? ? ????? 
    如果c<0时，1的个数为0，当然这种情况不存在*/
    var temp=1;
    var nums=0;
    while(Math.floor(n/temp)){
        nums+=Math.floor(n/(temp*10))*temp;  //第一部分的次数
        
        if(Math.floor(n%(temp*10)/temp)>1){    //第二部门的次数
            nums+=temp;
        }else if(Math.floor(n%(temp*10)/temp)==1){
            nums+=(n%temp+1);
        }
        temp*=10;
    }
    return nums;
    
    
}

//直接的方法就是遍历1-n，然后判断这期间的每个数字都有几个1，判断方法如下

/*function Numberof1(n){
    let number = 0;
    while(n){
        if(n%10==1){
            number++;
        }
        n=Math.floor(n/10);
    }
    return number;
}*/
module.exports = {
    NumberOf1Between1AndN_Solution : NumberOf1Between1AndN_Solution
};