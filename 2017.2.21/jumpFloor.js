/*һֻ����һ�ο�������1��̨�ף�Ҳ��������2���������������һ��n����̨���ܹ��ж�����������*/
/*�������������Ŀ�ĺ��壬f(n)=f(n-1)+f(n-2)*/
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