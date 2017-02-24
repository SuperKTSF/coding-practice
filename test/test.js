function printMatrix(matrix)
{
    // write code here
    //初步判断输入的matrix是二维数组
    
    if(matrix =null||matrix.length==0){
        return;
    }
    var rows = matrix.length;
    var cols = matrix[0].length;
    
    var result = [];
    
    var  start = 0;
    //每次打印一圈的起始位置都在(a,a)处
    while(rows>start*2&&cols>start*2){
        
        var temp = [];
        result=result.concat(PrintMatrix(temp,rows,cols,start,matrix));
        start++;
    }
    
   return result;
}

function PrintMatrix(res,rows,cols,start,matrix){
        var endX = rows -1 - start;
        var endY = cols -1 - start;
        //打印每一圈的第一行
        for(var i = start;i<=endY;i++){
            res.push(matrix[start][i]);
        };
    
    	if(start<endX){
            for(var j= start+1;j<=endX;j++){
                res.push(matrix[j][endY]);
           }
        }
        if(start<endX&&start<endY){
            for(var x =endY -1;x>=start;x--){
                res.push(matrix[endX][x]);
           }
        }
        if(start<endX-1&&start<endY){
           for(var y =endX-1;y>start;y--){
                res.push(matrix[y][start]);
           } 
        }    
    return res;
}
