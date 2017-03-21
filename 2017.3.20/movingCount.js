
function movingCount(threshold, rows, cols)
{
    // write code here
    //可以看出matrix是一个二维数组组成的数组
    if(threshold<0||rows<1||cols<1){
        return false;
    }
    //接下来要创建一个标记数组，然后循环赋值
    var visited =[];
    var count = 0;//用于记录方格的数目
    for(var i=0;i<rows;i++){
        visited[i] = new Array();
        for(var j=0;j<cols;j++){
            visited[i][j]=false;
        }
    }
    count = movingCountAdd(threshold,rows,cols,0,0,visited);
    return count;
}

function movingCountAdd(threshold,rows,cols,m,n,visited){
    var count = 0;
    if(m>=0&&m<rows&&n>=0&&n<cols&&getSum(m,n)<=threshold&&!visited[m][n]){
        visited[m][n]=true;  //再不能走的情况下，也不用把格子变成false
        count = 1+movingCountAdd(threshold,rows,cols,m-1,n,visited)+
            movingCountAdd(threshold,rows,cols,m+1,n,visited)+
            movingCountAdd(threshold,rows,cols,m,n-1,visited)+
            movingCountAdd(threshold,rows,cols,m,n+1,visited)
    }
    return count;
    
}

function getSum(m,n){
    var str = [].concat(m,n).join('');//将i，j合并，转为对应的字符串
    var total=0;
    for(var i=0;i<str.length;i++){
        total +=Number(str[i]);
    }
    return total;
}

module.exports = {
    movingCount : movingCount
};