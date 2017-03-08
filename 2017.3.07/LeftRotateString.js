function LeftRotateString(str, n)
{
    // write code here
    
    if(str==null||n<0){
        return "" ;
    }
    var len = str.length;

    var num = n%len;
     
    return  (str.slice(num)).concat(str.slice(0,num));
}
module.exports = {
    LeftRotateString : LeftRotateString
};