/*��װ���� f��ʹ f �� this ָ��ָ���Ķ��� ,apply��call��ֱ�ӵ��ú�������bind�Ƿ��ذ�this������ʵ������*/
function bindThis(f, oTarget) {
    return f.bind(oTarget);
}

function bindThis(f, oTarget) {
    return function(){
      return  f.apply(oTarget,arguments); 
    }
}

function getSearchString(key) {
     // ��ȡURL��?֮����ַ�
     var str = location.search; //BOM�����ǶԵ�ǰ���ڵ�url�����Ľ���
     str = str.substring(1,str.length);
      
      // ��&�ָ��ַ������������name=xiaoli������Ԫ������
     var arr = str.split("&");
     var obj = new Object();
      
     // ��ÿһ������Ԫ����=�ָ�������obj����    
     for(var i = 0; i < arr.length; i++) {        
     var tmp_arr = arr[i].split("=");   //"key=1$key2=2"����ʽ�����ַ���
       obj[decodeURIComponent(tmp_arr[0])] = decodeURIComponent(tmp_arr[1]); //decodeURIComponent() �����ɶ� encodeURIComponent() ��������� URI ���н��롣
     }
     return obj[key];
 }
 //�ַ��� stringObject �� replace() ����ִ�е��ǲ��Ҳ��滻�Ĳ�����
 //replace() �����Ĳ��� replacement �����Ǻ����������ַ���������������£�ÿ��ƥ�䶼���øú����������ص��ַ�������Ϊ�滻�ı�ʹ�á�
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
test.js:6 4               //������ÿ�δ�ӡ����match,key,value��ֵ�����԰������Ǹ��õ����ÿ��replace�Ĳ���������ʲô

//�ж�Dom�ڵ��Ƿ������һ���ӽڵ㣬��contains()����
function commonParentNode(oNode1, oNode2) {
    while(oNode1!==null){
        if(oNode1.contains(oNode2)){
            return oNode1;
        }else{
            oNode1 = oNode1.parentNode;
        }
    }    
}

//�о����������岻����ָ���Ŀռ��д�������
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
//����ȥ�����⣬��򵥵ľͻ�es6,��set����

Array.from(new Set(arr));
[...new Set(arr)];
//�ö���
Array.prototype.uniq = function () {
    var arr = this;//������ú�����thisָ�����ĵ��÷�;
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
//������ ��Ҫ�ѵ����ڿ���NaN
Array.prototype.uniq = function () {
    var arr = this;//������ú�����thisָ�����ĵ��÷�;
  	var arrnew =[];
    var flag = true;//ר�����ڶԸ�NaN;
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

// ʵ��쳲��������к���,�ݹ�ͱ���
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

























