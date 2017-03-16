var  result={};//目的是将其变为全局变量

//Insert one char from stringstream
function Insert(ch)
{
    // write code here
    if(result[ch]){
        result[ch]++;
    }else{
        result[ch]=1;
    }
}
//return the first appearence once char in current stringstream
function FirstAppearingOnce()
{
    // write code here
    for(var item in result){
        if(result[item]==1){
            return item;
        }
    }
    return "#";
}

module.exports = {
    result : result,
    Insert : Insert,
    FirstAppearingOnce: FirstAppearingOnce
};