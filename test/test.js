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