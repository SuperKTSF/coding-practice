/*圆圈中最后剩下的数字*/
function LastRemaining_Solution(n, m)
{
    // write code here
    if(n<=0||m<=0){
        return -1;
    }
    var arr=[];
    for(var i = 0;i<n;i++){
        arr[i] = i;
    }
    var choose=0;
    /*这是比较蠢的做法
    while(arr.length>1){
        for(var j=0;j<m-1;j++){
            choose++;
            if(choose==arr.length){
                choose=0;
            }
        }
        arr.splice(choose,1);
		if(choose==arr.length){
                choose=0;
            }
		
    }*/
    
    
    while(arr.length>1){
        choose = (choose+m-1)%arr.length;
        arr.splice(choose,1)
    }
    
    return arr[0];
}
module.exports = {
    LastRemaining_Solution : LastRemaining_Solution
};