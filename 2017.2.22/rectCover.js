/*���ǿ�����2*1��С���κ��Ż�������ȥ���Ǹ���ľ��Ρ�������n��2*1��С�������ص��ظ���һ��2*n�Ĵ���Σ��ܹ��ж����ַ�����*/
function rectCover(number)
{
    
    /*������˼·�����ǵݹ����㣬������쳲��������У��ݹ�Ч��̫�ͣ����ǲ���ѭ��*/
    if(number<=0){
        return null;
    }
    
    if(number==1||number==2){
        return number;
    }
    
    var arr = [0,1,2];
    
    for(var i = 3;i<=number;i++){
        arr[i]= arr[i-1]+arr[i-2];
    };
    
    return arr[number];
    
    
    // write code here
}
module.exports = {
    rectCover : rectCover
};