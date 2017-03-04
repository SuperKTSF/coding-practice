function InversePairs(data)
{
    if(!data || data.length < 2){
        return 0;
    }
    var copy = data.concat(), count = 0;
    count = MergeSort(data, copy, 0, data.length-1);
    return count % 1000000007;
}
function MergeSort(data, copy, start, end){
    if(end === start){
        return 0;
    }
    var len = Math.floor((end - start) / 2);
    var left = MergeSort(copy, data, start, start+len);
    var right = MergeSort(copy, data, start+len+1, end);
    var count = 0;
    var p = start+len, q = end, copyIndex = end;
    while(p >= start && q >= start+len+1){
        if(data[p] > data[q]){
            count += q - start - len;
            copy[copyIndex--] = data[p--];
        }else{
            copy[copyIndex--] = data[q--];
        }
    }
    while(p >= start){
        copy[copyIndex--] = data[p--];
    }
    while(q >= (start+len+1)){
        copy[copyIndex--] = data[q--];
    }
    return left + right + count;
}
module.exports = {
    InversePairs : InversePairs
};
//先练习一下归并排序
/*
function Mergesort(array){
    var len = array.length;
    if(len==1){
        return array;
    }
    var mid = Math.floor((len/2));
    var left=array.slice(0,mid);
    var right=array.slice(mid,len);
    return Merge(Mergesort(left),Mergesort(right));
}

function Merge(left,right){
    var result=[];
    var ir=0;
    var il=0;
    while(il<left.length&&ir<right.length){
        if(left[il]>right[ir]){
            result.push(right[ir++]);
        }else{
            result.push(left[il++]); 
        }
    }
    while(il<left.length){
        result.push(left[il++]); 
    }
    while(ir<right.length){
        result.push(right[ir++]); 
    }
    return result;
    
}*/
module.exports = {
    InversePairs : InversePairs
};