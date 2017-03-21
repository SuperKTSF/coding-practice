
function movingCount(threshold, rows, cols)
{
    // write code here
    //���Կ���matrix��һ����ά������ɵ�����
    if(threshold<0||rows<1||cols<1){
        return false;
    }
    //������Ҫ����һ��������飬Ȼ��ѭ����ֵ
    var visited =[];
    var count = 0;//���ڼ�¼�������Ŀ
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
        visited[m][n]=true;  //�ٲ����ߵ�����£�Ҳ���ðѸ��ӱ��false
        count = 1+movingCountAdd(threshold,rows,cols,m-1,n,visited)+
            movingCountAdd(threshold,rows,cols,m+1,n,visited)+
            movingCountAdd(threshold,rows,cols,m,n-1,visited)+
            movingCountAdd(threshold,rows,cols,m,n+1,visited)
    }
    return count;
    
}

function getSum(m,n){
    var str = [].concat(m,n).join('');//��i��j�ϲ���תΪ��Ӧ���ַ���
    var total=0;
    for(var i=0;i<str.length;i++){
        total +=Number(str[i]);
    }
    return total;
}

module.exports = {
    movingCount : movingCount
};