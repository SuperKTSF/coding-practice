/*����һ�����󣬰��մ���������˳ʱ���˳�����δ�ӡ��ÿһ�����֣����磬����������¾��� 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 �����δ�ӡ������1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10.*/
function printMatrix(matrix)
{
    // write code here
    //�����ж������matrix�Ƕ�ά����
    
    if(matrix ==null||matrix.length==0){
        return;
    }
    
    //js�о�����ͨ����ά�����ʾ��
    var rows = matrix.length;
    var cols = matrix[0].length;
    
    var result = [];
    
    var  start = 0; //��������Ȧ������ʼ0Ϊ����Ȧ
    //ÿ�δ�ӡһȦ����ʼλ�ö���(a,a)��
    while(rows>start*2&&cols>start*2){
        
        var temp = [];
        result=result.concat(pushNumber(temp,rows,cols,start,matrix));
        start++;
    }
    
   return result;
}

function pushNumber(res,rows,cols,start,matrix){
        var endX = rows -1 - start;  //ÿһȦ���½ǵ�����꣬Ҳ����ʣ�µ�����������
        var endY = cols -1 - start;
        //��ӡÿһȦ�ĵ�һ��
        for(var i = start;i<=endY;i++){
            res.push(matrix[start][i]);
        };
        
        //�������´�ӡ����Ҫ�ж�����������
    	if(start<endX){
            //j��start+1���Ƿ�ֹ�ظ���ӡ���򽻲�㣬��ӡ������
            for(var j= start+1;j<=endX;j++){
                res.push(matrix[j][endY]);
           }
        }
       //���������ͬ��Ҫ�ж��Ҳ໹��û�е�
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