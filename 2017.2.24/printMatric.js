/*输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字，例如，如果输入如下矩阵： 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 则依次打印出数字1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10.*/
function printMatrix(matrix)
{
    // write code here
    //初步判断输入的matrix是二维数组
    
    if(matrix ==null||matrix.length==0){
        return;
    }
    
    //js中矩阵都是通过二维数组表示的
    var rows = matrix.length;
    var cols = matrix[0].length;
    
    var result = [];
    
    var  start = 0; //代表矩阵的圈数，起始0为最外圈
    //每次打印一圈的起始位置都在(a,a)处
    while(rows>start*2&&cols>start*2){
        
        var temp = [];
        result=result.concat(pushNumber(temp,rows,cols,start,matrix));
        start++;
    }
    
   return result;
}

function pushNumber(res,rows,cols,start,matrix){
        var endX = rows -1 - start;  //每一圈右下角点的坐标，也代表剩下的行数和列数
        var endY = cols -1 - start;
        //打印每一圈的第一行
        for(var i = start;i<=endY;i++){
            res.push(matrix[start][i]);
        };
        
        //从上往下打印，需要判断行数够不够
    	if(start<endX){
            //j从start+1处是防止重复打印横向交叉点，打印到最下
            for(var j= start+1;j<=endX;j++){
                res.push(matrix[j][endY]);
           }
        }
       //从右往左打，同样要判断右侧还有没有点
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
module.exports = {
    printMatrix : printMatrix
};