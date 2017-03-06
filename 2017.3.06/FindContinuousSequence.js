/*现在把问题交给你,你能不能也很快的找出所有和为S的连续正数序列? Good Luck! */
function FindContinuousSequence(sum)
{
    // write code here
    //我觉得本质上利用了二分查找法的思路
    var res=[];
    if(sum<3){
        return [];
    }
    var small = 1;
    var big = 2;
    var middle = Math.floor((1+sum)/2);
    var cursum = small+big;
    while(small<middle){
        if(cursum==sum){
            res.push(putresult(small,big));
        }
        while(cursum>sum&&small<middle){
            cursum -=small;
            small++;
            if(cursum==sum){
                res.push(putresult(small,big));
            }
        }
        big++;
        cursum+=big;
    }
    return res;
}

function putresult(small,big){
    var arr=[];
    for(var i=small;i<=big;i++){
        
        arr.push(i)
    }
    return arr;
}
module.exports = {
    FindContinuousSequence : FindContinuousSequence
};