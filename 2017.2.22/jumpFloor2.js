/*一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶总共有多少种跳法*/
function jumpFloorII(number)
{
    
    /*这种思路是就是你在n阶台阶的任意位置都可以再一步上到台阶n，所以到达n阶是之前所有方法的总和
    if(number==0||number==1){
        return 1;
    };
    

   
    var arr = [1,1];
   
    for(var i=2;i<=number;i++){
        arr[i] =  arr.reduce(function(prev,cur,index,array){
                 return prev+cur;
                  });
    };
    
    return arr[number];*/
    
    /*当然还有一种思路就是数学归纳法，直接得出f(n)= 2的(n-1)次幂，数学理解就是：
    每个台阶都有跳与不跳两种情况（除了最后一个台阶），最后一个台阶必须跳。所以共用2^(n-1)中情况*/
    
    if(number==0){
        return 1;
    }
    
    return Math.pow(2,number-1);
    
   
    // write code here
}
module.exports = {
    jumpFloorII : jumpFloorII
};