
/*����һ������ͻ������ڵĴ�С���ҳ����л�����������ֵ�����ֵ�����磬�����������{2,3,4,2,6,2,5,1}���������ڵĴ�С3����ôһ������6���������ڣ����ǵ����ֵ�ֱ�Ϊ{4,4,6,6,6,5}�� �������{2,3,4,2,6,2,5,1}�Ļ�������������6���� {[2,3,4],2,6,2,5,1}�� {2,[3,4,2],6,2,5,1}�� {2,3,[4,2,6],2,5,1}�� {2,3,4,[2,6,2],5,1}�� {2,3,4,2,[6,2,5],1}�� {2,3,4,2,6,[2,5,1]}*/
function maxInWindows(num, size)
{
    // write code here
    var result=[];
    if(num==null||size==0){
        return result;
    }
    var left = 0;
    var right = size;
    while(right<=num.length){
        result.push(Math.max.apply(Math,(num.slice(left,right))));
        left++;
        right++;
    }
    return result;
}

module.exports = {
    maxInWindows : maxInWindows
};