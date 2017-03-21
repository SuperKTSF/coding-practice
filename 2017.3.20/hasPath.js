function hasPath(matrix, rows, cols, path)
{
    // write code here
    //可以看出matrix是一个二维数组组成的数组
    if(matrix==null||rows<1||cols<1){
        return false;
    }
    //接下来要创建一个标记数组，然后循环赋值
    var visited =[];
    for(var i=0;i<rows;i++){
        visited[i] = new Array();
        for(var j=0;j<cols;j++){
            visited[i][j]=false;
        }
    }
    for(var m=0;m<rows;m++){
        for(var n=0;n<cols;n++){
            if(hasPathCore(matrix,m,n,rows,cols,path,visited)){     //从矩阵的第一个点开始遍历
                return true;
            }
        }
    }
    return false;
}
function hasPathCore(matrix,m,n,rows,cols,path,visited){
    if(m>=0&&m<rows&&n>=0&&n<cols&&!visited[m][n]&&matrix[m*cols+n]==path.charAt(0)){ //每次找点的判断条件
        visited[m][n] =true;
        if(path.length==1||hasPathCore(matrix,m,n-1,rows,cols,path.slice(1),visited)){return true};
        if(path.length==1||hasPathCore(matrix,m-1,n,rows,cols,path.slice(1),visited)){return true};
        if(path.length==1||hasPathCore(matrix,m,n+1,rows,cols,path.slice(1),visited)){return true};
        if(path.length==1||hasPathCore(matrix,m+1,n,rows,cols,path.slice(1),visited)){return true};
        visited[m][n]=false; //执行到这里说明这个点走不通重新变为false;
    }
    return false;
}
module.exports = {
    hasPath : hasPath
};