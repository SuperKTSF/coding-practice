function NumberOf1(n)
{
    /*����˼·��Ҫô���������ƶ����Ƚ���n>>1���������Ϊ���Ļ���λ��Ϊ1�����γ���ѭ���������ƶ��Ƚ���flag<<1,�������
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
        n= (n-1)&n;  //��һ���ľ���������һ��������ȥ1���ں�ԭ������&���㣬������������һ��1���0��
        count++;
    }
    
    return count;
}
module.exports = {
    NumberOf1 : NumberOf1
};