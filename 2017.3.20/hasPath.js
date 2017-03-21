function hasPath(matrix, rows, cols, path)
{
    // write code here
    //���Կ���matrix��һ����ά������ɵ�����
    if(matrix==null||rows<1||cols<1){
        return false;
    }
    //������Ҫ����һ��������飬Ȼ��ѭ����ֵ
    var visited =[];
    for(var i=0;i<rows;i++){
        visited[i] = new Array();
        for(var j=0;j<cols;j++){
            visited[i][j]=false;
        }
    }
    for(var m=0;m<rows;m++){
        for(var n=0;n<cols;n++){
            if(hasPathCore(matrix,m,n,rows,cols,path,visited)){     //�Ӿ���ĵ�һ���㿪ʼ����
                return true;
            }
        }
    }
    return false;
}
function hasPathCore(matrix,m,n,rows,cols,path,visited){
    if(m>=0&&m<rows&&n>=0&&n<cols&&!visited[m][n]&&matrix[m*cols+n]==path.charAt(0)){ //ÿ���ҵ���ж�����
        visited[m][n] =true;
        if(path.length==1||hasPathCore(matrix,m,n-1,rows,cols,path.slice(1),visited)){return true};
        if(path.length==1||hasPathCore(matrix,m-1,n,rows,cols,path.slice(1),visited)){return true};
        if(path.length==1||hasPathCore(matrix,m,n+1,rows,cols,path.slice(1),visited)){return true};
        if(path.length==1||hasPathCore(matrix,m+1,n,rows,cols,path.slice(1),visited)){return true};
        visited[m][n]=false; //ִ�е�����˵��������߲�ͨ���±�Ϊfalse;
    }
    return false;
}
module.exports = {
    hasPath : hasPath
};