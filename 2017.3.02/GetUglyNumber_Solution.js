/*��ֻ��������2��3��5��������������Ugly Number��������6��8���ǳ�������14���ǣ���Ϊ����������7�� ϰ�������ǰ�1�����ǵ�һ���������󰴴�С�����˳��ĵ�N��������*/
function GetUglyNumber_Solution(index)
{
    /*��ֱ�۵ķ����������Ӷ�̫��
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