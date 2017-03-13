/*实现函数 partialUsingArguments，调用之后满足如下条件：
1、返回一个函数 result
2、调用 result 之后，返回的结果与调用函数 fn 的结果一致
3、fn 的调用参数为 partialUsingArguments 的第一个参数之后的全部参数以及 result 的调用参数 */
function partialUsingArguments(fn) {
    //首先找到fn参数,argument,保存的是传入函数的所有参数，将其转换为数组后才可以使用slice方法
    var args =  Array.prototype.slice.call(arguments,1);
    //调用 result 之后，返回的结果与调用函数 fn 的结果一致说明result实质上是对fn函数的二次封装
    var result = function(){
        return fn.apply(this,args.concat([].slice.apply(arguments)));
    };
    return result;
    

}