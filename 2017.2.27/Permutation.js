/*输入一个字符串,按字典序打印出该字符串中字符的所有排列。例如输入字符串abc,则打印出由字符a,b,c所能排列出来的所有字符串abc,acb,bac,bca,cab和cba。 */
function Permutation(str)
{
    // write code here
    var result = [];
    if(str.length<=0){
        return [];
    }
    var str2="";
    var arr = str.split("");
    result=sortString(arr,str2,[]);
    return result;
}

function sortString(arr,str2,res){
    if(arr.length==0){
        res.push(str2);
    }else{
        var isUsed ={};
        for(var i =0;i<arr.length;i++){
            if(!isUsed[arr[i]]){
                var temp = arr.splice(i,1);//删除相应位置和数量的元素
                str2 +=temp;
                sortString(arr,str2,res);
                arr.splice(i,0,temp); //把刚才删除的元素补全，接着遍历字符数组的下一位
                str2 = str2.slice(0,str2.length-1);
                isUsed[temp] =true;
            }
        }
    }
    return res;
}
module.exports = {
    Permutation : Permutation
};