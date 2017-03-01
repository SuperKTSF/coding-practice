function PrintMinNumber(numbers)
{
    // write code here
    /*首选方法是给数字排出所有可能的组合，然后求最小值*/
    var len = numbers.length;
    if(numbers==null||len<=0){
        return null;
    }
    var result = [];
    var str2=[];
    result=sortString(numbers,str2,[]);
    return Math.min.apply(Math,result);
    
}


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
