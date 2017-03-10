/*如果一个单词通过循环右移获得的单词，我们称这些单词都为一种循环单词。 例如：picture 和 turepic 就是属于同一种循环单词。 现在给出n个单词，需要统计这个n个单词中有多少种循环单词。 */

var rl = require("readline").createInterface(process.stdin, process.stdout);
var args = [];

rl.on('line', function(data){
    args.push(data);
    if(args.length >= parseInt(args[0] + 1)){
        rl.close();
    }
});

rl.on('close', function(){
    var arr = args.slice(1);
    var res = 0;
    for(var i = 0 ; i < arr.length; i ++){
        for(var j = i + 1; j < arr.length; j ++){
            if(judge(arr[i], arr[j])){
                // 如果两个是循环单词，就把arr[j]移除数组
                arr.splice(j, 1);
                j--;
            }
        }
    }
    res = arr.length;
    console.log(res);
});
// 判断是否互为循环单词
function judge(str1, str2){
    if(str1.split('').sort().join('') == str2.split('').sort().join('')){
        var temp1, temp2;
        for(var i = 0 ; i < str1.length; i ++){
            temp1 = str1.slice(0, i);
            temp2 = str1.slice(i);
            if(str2 == temp2 + temp1){
                return true;
            }
        }
    }
    return false;
}