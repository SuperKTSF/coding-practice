/*把只包含因子2、3和5的数称作丑数（Ugly Number）。例如6、8都是丑数，但14不是，因为它包含因子7。 习惯上我们把1当做是第一个丑数。求按从小到大的顺序的第N个丑数。*/
function GetUglyNumber_Solution(index)
{
    /*最直观的方法不过复杂度太大
    var uglynum =0;
    var num=1;
    while(uglynum<index){
        if(isUglynum(num)){
           		uglynum++;
           }
           num++;
    }
           return num;
           */
    // write code here
    if(index<=0){
        return null;
    }
    var res = [];
    res[0]=1;
    var t2=0;
    var t3=0;
    var t5=0;
    for (var i=1;i<index;i++){
        res[i] = Math.min(res[t2]*2,res[t3]*3,res[t5]*5);
        if(res[i]==res[t2]*2){
            t2++;
        }
        if(res[i]==res[t3]*3){
            t3++;
        }
        if(res[i]==res[t5]*5){
            t5++;
        }
    }
    return res.pop();
}
/*
function isUglynum(n){
    while(n%2==0){
       n=Math.floor(n/2);
    }
    while(n%3==0){
       n=Math.floor(n/3);
    }
    while(n%5==0){
       n=Math.floor(n/5);
    }
    return (n==1)? true:false;
}
*/
module.exports = {
    GetUglyNumber_Solution : GetUglyNumber_Solution
};