function Fibonacci(n)
{
    
    /*最先想到的是递归方法，但是递归方法的效率非常低，时间太长，就采用循环的方式
    if(n==0){
       return 0;  
    }
     
    if(n==1){
       return 1;  
    }

    var n1=0;
    var n2=1;
    var num=0;
    
    for(var i=2;i<=n;i++){
        num = n1 + n2;
        n1= n2;
        n2= num;
    };
    
    return num;
    */
    
    var array = [0,1];
    if(n<2){
        return n;
    }
    
    for(var i =2;i<=n;i++){
        array[i]= array[i-1]+array[i-2];
    }
    return array[n];
}
module.exports = {
    Fibonacci : Fibonacci
};
