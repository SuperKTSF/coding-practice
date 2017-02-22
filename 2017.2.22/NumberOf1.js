function NumberOf1(n)
{
    /*两种思路，要么不断向右移动待比较数n>>1，但是如果为负的话补位均为1，会形成死循环，或者移动比较数flag<<1,不会出错
    var count = 0;
    var flag = 1;
    while(flag){
        if(n & flag){
            count++;
        };
        flag = flag<<1;
        
    }
    return count;
*/
    
    var count = 0;
    while(n){
        n= (n-1)&n;  //这一步的精髓就在与把一个整数减去1后在和原来的做&运算，会把整数的最后一个1变成0；
        count++;
    }
    
    return count;
}
module.exports = {
    NumberOf1 : NumberOf1
};