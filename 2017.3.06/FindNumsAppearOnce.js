/*一个整型数组里除了两个数字之外，其他的数字都出现了两次。请写程序找出这两个只出现一次的数字。*/
function FindNumsAppearOnce(array)
{
    // write code here
    // return list, 比如[a,b]，其中ab是出现一次的两个数字
    //方法一：es6的最新方法 return Array.from(new Set(array));
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