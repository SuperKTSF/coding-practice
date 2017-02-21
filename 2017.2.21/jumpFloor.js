/*一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法。*/
/*本题重在理解题目的含义，f(n)=f(n-1)+f(n-2)*/
function jumpFloor(number)
{
    if(number<0){
        return null;
    }
    
    if(number<=2){
        return number;
    }
    
     var arr = [0,1,2];
    for(var i =3;i<=number;i++){
       
        arr[i]= arr[i-1]+arr[i-2];
    }
    
    return arr[number];
    // write code here
}
module.exports = {
    jumpFloor : jumpFloor
};