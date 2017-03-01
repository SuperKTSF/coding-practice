/*输入一个正整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。例如输入数组{3，32，321}，则打印出这三个数字能排成的最小数字为321323。*/
function PrintMinNumber(numbers)
{
    // write code here
    /*首选方法是给数字排出所有可能的组合，然后求最小值,数组的排序方法和前面的字符串排序完全相同
    var len = numbers.length;
    if(numbers==null||len<=0){
        return "";
    } 
    var result = [];
    var str2=[];
    result=sortString(numbers,str2,[]);
    return Math.min.apply(Math,result);*/
    //方法二实际上就是对数组一种重新排序，我们可以创建自定义的排序方法
    var result = numbers.sort(compareTo);
    return result.join("");    
}
function compareTo(a,b){
    return Number([a,b].join(""))-Number([b,a].join(""));
}

 /*
function sortString(arr,str2,res){
    if(arr.length==0){
        res.push(str2.join(""));
    }else{
        var isUsed ={};
        for(var i =0;i<arr.length;i++){
            if(!isUsed[arr[i]]){
                var temp = arr.splice(i,1);//删除相应位置和数量的元素
                str2.push(temp);
                sortString(arr,str2,res);
                arr.splice(i,0,temp); //把刚才删除的元素补全，接着遍历字符数组的下一位
                str2.pop();  //把刚才添加的一位删掉
                isUsed[temp] =true;
            }
        }
    }
    return res;
}
 */
module.exports = {
    PrintMinNumber : PrintMinNumber
};