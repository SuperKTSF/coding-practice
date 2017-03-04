/*统计一个数字在排序数组中出现的次数。*/
function GetNumberOfK(data, k)
{
    // write code here
    /*简单暴力粗糙的方法

    if(data.indexOf(k)==-1){
        return 0;
    }
    return data.lastIndexOf(k)-data.indexOf(k)+1;
    */
    
    if(data==null){
        return 0;
    }
    var left = getfirstk(data,k,0,data.length);
    
    var right = getlastk(data,k,0,data.length);
    
    if(right>=0&&left>=0){
        return right-left+1;
    }else{
        return 0;
    }
}

function getfirstk(data,k,left,right){
    if(left>right){
        return -1;
    }
    var mid = Math.floor((left+right)/2);
    var element = data[mid];
        if(k==element){
            if((mid>0&&data[mid-1]!==k)||mid==0){
                return mid;
            }else{
                right = mid-1;
            }
        }else if(k>element){
            left=mid+1;
        }else{
            right=mid-1;
        }
    return getfirstk(data,k,left,right);    
}
function getlastk(data,k,left,right){
    if(left>right){
        return -1;
    }
    var len = data.length - 1;
    var mid = Math.floor((left+right)/2);
    var element = data[mid];
        if(k==element){
            if((mid<len&&data[mid+1]!=k)||mid==len){
                return mid;
            }else{
                left = mid+1;
            }
        }else if(k>element){
            left=mid+1;
        }else{
            right=mid-1;
        }
    return getlastk(data,k,left,right);
    
}
module.exports = {
    GetNumberOfK : GetNumberOfK
};