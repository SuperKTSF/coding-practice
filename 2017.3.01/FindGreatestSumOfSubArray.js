function FindGreatestSumOfSubArray(array)
{
    // write code here
    /*����һ����ֱ�۵�˼·���Ǳ��������е�����Ŀ����ԣ�Ȼ��ͳ����ֵ
    var len=array.length;
    var result=[];
    if(len<=0||array==null){
        return null;
    }
    for(let i=0;i<len;i++){
        for(let j=i;j<len;j++){
            result.push(add(array.slice(i,j+1)));
        }
    }
    return Math.max.apply(Math,result);*/
    //�������ĺô�����ֻ�ô�ǰ�������һ��
    var len=array.length;
    var currentmax=0;
    if(len<=0||array==null){
        return null;
    }
    var max=array[0];
    for(var i=0;i<len;i++){
        if(currentmax<=0){
            currentmax=array[i];
        }else{
            currentmax+=array[i];
        }
        if(currentmax>max){
            max =currentmax;
        }

    }
    return max;
}
/*        
function add(array){
   return array.reduce(function(curr,prev,index,array){
        return curr+prev;
    });
}*/
module.exports = {
    FindGreatestSumOfSubArray : FindGreatestSumOfSubArray
};