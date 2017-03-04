/*在一个字符串(1<=字符串长度<=10000，全部由大写字母组成)中找到第一个只出现一次的字符,并返回它的位置*/
function FirstNotRepeatingChar(str)
{
    // write code here
    var arr = str.split("");
    var len = arr.length;
    if(len<1||len>10000){
        return -1;
    }
    var result = {};
    for(var i = 0;i<len;i++){
        if(result[arr[i]]){
            result[arr[i]]++;
        }else{
            result[arr[i]]=1;
        }
    }
    
    for(var item in result){
        if(result[item]==1){
            
            return arr.indexOf(item);
        }
    }
    return null;
    
}
module.exports = {
    FirstNotRepeatingChar : FirstNotRepeatingChar
};