/*��һ������Ϊn����������������ֶ���0��n-1�ķ�Χ�ڡ� ������ĳЩ�������ظ��ģ�����֪���м����������ظ��ġ�Ҳ��֪��ÿ�������ظ����Ρ����ҳ�����������һ���ظ������֡� ���磬������볤��Ϊ7������{2,3,1,0,2,5,3}����ô��Ӧ��������ظ�������2����3��*/
function duplicate(numbers, duplication)
{
    // write code here
    //����Ҫ�ر�ע��~�ҵ������ظ���һ��ֵ����ֵ��duplication[0]
    //��������True/False
    if(numbers==null||numbers.length<=1){
        return false;
    }
    numbers.sort();
    for(var i=0;i<numbers.length-1;i++){
        if(numbers[i]==numbers[i+1]){
            duplication[0] = numbers[i];
            return true;
        }
    }
    return false;
}
module.exports = {
    duplicate : duplicate
};
};