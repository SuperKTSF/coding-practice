function Fibonacci(n)
{
    
    /*�����뵽���ǵݹ鷽�������ǵݹ鷽����Ч�ʷǳ��ͣ�ʱ��̫�����Ͳ���ѭ���ķ�ʽ
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
