/*һ�����������������������֮�⣬���������ֶ����������Ρ���д�����ҳ�������ֻ����һ�ε����֡�*/
function FindNumsAppearOnce(array)
{
    // write code here
    // return list, ����[a,b]������ab�ǳ���һ�ε���������
    //����һ��es6�����·��� return Array.from(new Set(array));
    var res = [];
    for(var i = 0;i<array.length;i++){
        var item = array[i];
        var index = res.indexOf(array[i]);
        if(index==-1){
            res.push(item);
        }else{
            res.splice(index,1);
        }
    }
    return res;
    
}
module.exports = {
    FindNumsAppearOnce : FindNumsAppearOnce
};