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