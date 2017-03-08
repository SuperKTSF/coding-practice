function IsContinuous(numbers)
{
    // write code here
    var len = numbers.length;
    if(numbers==null||len<=0){
        return false;
    }
    numbers.sort();
    var king = 0;
    var differ= 0;
    for(var i=0;i<len;i++){
        if(numbers[i]==0){
            king++;
        }
    }
    var small = king;
    var big=small+1;
    while(big<len){
        if(numbers[small]==numbers[big]){
            return false;
        }
        differ += numbers[big]-numbers[small]-1;
        small = big;
        big++;
    }
    return (king>=differ)?true:false;
}
module.exports = {
    IsContinuous : IsContinuous
};