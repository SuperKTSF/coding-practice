/*һֻ����һ�ο�������1��̨�ף�Ҳ��������2��������Ҳ��������n���������������һ��n����̨���ܹ��ж���������*/
function jumpFloorII(number)
{
    
    /*����˼·�Ǿ�������n��̨�׵�����λ�ö�������һ���ϵ�̨��n�����Ե���n����֮ǰ���з������ܺ�
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
    
    /*��Ȼ����һ��˼·������ѧ���ɷ���ֱ�ӵó�f(n)= 2��(n-1)���ݣ���ѧ�����ǣ�
    ÿ��̨�׶������벻������������������һ��̨�ף������һ��̨�ױ����������Թ���2^(n-1)�����*/
    
    if(number==0){
        return 1;
    }
    
    return Math.pow(2,number-1);
    
   
    // write code here
}
module.exports = {
    jumpFloorII : jumpFloorII
};