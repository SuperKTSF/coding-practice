/*请实现一个函数，将一个字符串中的空格替换成“%20”。例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy。*/

function replaceSpace(str)
{
    /*最先想到的办法，字符串转换为数组，在转换为字符串，耗时30ms
    var array = [];
    array = str.split(" ");
    return array.join("%20"); 
    */
    // write code here
    
    /*这个方法是直接调用js中的字符串替换方法，有两个参数，第一个参数可以是子字符串，也可以是正则表达式，带式
    如果要替换所有的，只能使用正则表达式，并使用/g全局替换，第二个参数可以是子字符串也可以是函数*/
    return str.replace(/\s/g,"%20");
}
module.exports = {
    replaceSpace : replaceSpace
};