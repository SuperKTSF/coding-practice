/*封装函数 f，使 f 的 this 指向指定的对象 ,apply和call是直接调用函数，而bind是返回绑定this后函数的实例对象*/
function bindThis(f, oTarget) {
    return f.bind(oTarget);
}

function bindThis(f, oTarget) {
    return function(){
      return  f.apply(oTarget,arguments); 
    }
}

function getSearchString(key) {
     // 获取URL中?之后的字符
     var str = location.search; //BOM对象是对当前窗口的url参数的解析
     str = str.substring(1,str.length);
      
      // 以&分隔字符串，获得类似name=xiaoli这样的元素数组
     var arr = str.split("&");
     var obj = new Object();
      
     // 将每一个数组元素以=分隔并赋给obj对象    
     for(var i = 0; i < arr.length; i++) {        
     var tmp_arr = arr[i].split("=");   //"key=1$key2=2"的形式保存字符串
       obj[decodeURIComponent(tmp_arr[0])] = decodeURIComponent(tmp_arr[1]); //decodeURIComponent() 函数可对 encodeURIComponent() 函数编码的 URI 进行解码。
     }
     return obj[key];
 }
 //字符串 stringObject 的 replace() 方法执行的是查找并替换的操作。
 //replace() 方法的参数 replacement 可以是函数而不是字符串。在这种情况下，每个匹配都调用该函数，它返回的字符串将作为替换文本使用。
 function getUrlParam(sUrl, sKey) {
    var result ={};
    sUrl.replace(/\??(\w+)=(\w+)&?/g,function(match,key,value){
		console.log(match);
		console.log(key);
		console.log(value);
       if(result[key]!=null){
           var temp = result[key];
           result[key] = [].concat(temp,value);
       } else{
           result[key] = value;
       }
    });
    
    if(sKey == undefined){
        return result;
    }else{
        return result[sKey]||'';
    } 
}
//etUrlParam('http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe','key')
test.js:4 ?key=1&
test.js:5 key
test.js:6 1
test.js:4 key=2&
test.js:5 key
test.js:6 2
test.js:4 key=3&
test.js:5 key
test.js:6 3
test.js:4 test=4
test.js:5 test
test.js:6 4               //这里是每次打印出的match,key,value的值，可以帮助我们更好的理解每次replace的参数究竟是什么

//判断Dom节点是否包含另一个子节点，用contains()方法
function commonParentNode(oNode1, oNode2) {
    while(oNode1!==null){
        if(oNode1.contains(oNode2)){
            return oNode1;
        }else{
            oNode1 = oNode1.parentNode;
        }
    }    
}

//感觉第四题意义不大，在指定的空间中创建对象
function namespace(oNamespace, sPackage) {
    var arr = sPackage.split(".");
    var curObject = oNamespace;
    for(var i = 0;i<arr.length;i++){
        if(curObject.hasOwnProperty(arr[i])&&typeof curObject[arr[i]] =='object'){
            curObject = curObject[arr[i]];
        }else{
            curObject[arr[i]]={};
            curObject = curObject[arr[i]];
        }
    }
    return oNamespace;
}
//数组去重问题，最简单的就会es6,用set类型

Array.from(new Set(arr));
[...new Set(arr)];
//用对象
Array.prototype.uniq = function () {
    var arr = this;//对象调用函数，this指向函数的调用方;
    var result = {};
  	var arrnew =[];
    for(var i=0;i<arr.length;i++){
        if(!result.hasOwnProperty(arr[i])){
            result[arr[i]] = arr[i];
        }
    }
    for(var item in result){
        arrnew.push(result[item]);
    }
    return arrnew;
}
//用数组 主要难点在于控制NaN
Array.prototype.uniq = function () {
    var arr = this;//对象调用函数，this指向函数的调用方;
  	var arrnew =[];
    var flag = true;//专门用于对付NaN;
    for(var i=0;i<arr.length;i++){
        if((arr[i]!=arr[i]) && (typeof arr[i]==="number")){
			if(flag){
            	arrnew.push(arr[i]);
               	flag = !flag;
           }
        }else if(arrnew.indexOf(arr[i])==-1){
            arrnew.push(arr[i]);
        }
    }
    return arrnew;
}

// 实现斐波那契数列函数,递归和遍历
function fibonacci(n) {
    if(n<1){
        return null;
    }
    if(n<=2){
        return 1;
    }
   	return fibonacci(n-1)+fibonacci(n-2);
}

function fibonacci(n) {
    if(n<1){
        return null;
    }
    if(n<=2){
        return 1;
    }
   	var x=1;
    var y=1;
    var sum =0;
    for(var i=3;i<=n;i++){
        sum = x+y;
        x= y;
        y = sum;
    }
    return y;
}

























