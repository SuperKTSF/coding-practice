/*���1~13��������1���ֵĴ���,�����100~1300��������1���ֵĴ�����Ϊ�����ر�����һ��1~13�а���1��������1��10��11��12��13��˹�����6��,���Ƕ��ں�����������û���ˡ�ACMerϣ�����ǰ����,������������ձ黯,���Ժܿ���������Ǹ�����������1���ֵĴ���*/
function NumberOf1Between1AndN_Solution(n)
{
    // write code here
    //����Ӧ�ô����Ĺ�����������

??? /*?���Ǵӵ�λ����λ��ÿλ1���ֵĴ������ۼ���ͼ���??? ? ? 
    ���磺��0~abcde��1�ĸ���������������c��һλ��1���ֵĴ���������λ��ͬ??? ? ? 
    �����������??? ? ? 
    ��һ���֣�0~ab100����ʾ��ab����λ��0~ab-1��Χ��ʱ��de���Դ�0~99ȡֵ?��ô����Ϊab00��;????????
    �ڶ����֣�ab100~ab1de 
    ���c>1ʱ��deΪ����ֵ��1�ĸ���Ϊ0~99? 100��?? ? ??????????? 
    ���c=1ʱ��deΪ0~de��1�ĸ���Ϊde + 1??? ? ? ? ????? 
    ���c<0ʱ��1�ĸ���Ϊ0����Ȼ�������������*/
    var temp=1;
    var nums=0;
    while(Math.floor(n/temp)){
        nums+=Math.floor(n/(temp*10))*temp;  //��һ���ֵĴ���
        
        if(Math.floor(n%(temp*10)/temp)>1){    //�ڶ����ŵĴ���
            nums+=temp;
        }else if(Math.floor(n%(temp*10)/temp)==1){
            nums+=(n%temp+1);
        }
        temp*=10;
    }
    return nums;
    
    
}

//ֱ�ӵķ������Ǳ���1-n��Ȼ���ж����ڼ��ÿ�����ֶ��м���1���жϷ�������

/*function Numberof1(n){
    let number = 0;
    while(n){
        if(n%10==1){
            number++;
        }
        n=Math.floor(n/10);
    }
    return number;
}*/
module.exports = {
    NumberOf1Between1AndN_Solution : NumberOf1Between1AndN_Solution
};