function func(num,arr){
	var left = 0;
	var right = 0;
	var resultlength = [];
	var xiabiao = [];
	var lowToHigh =false;
	var highToLow = false;
	while(right<num){
		while(right<num&&arr[right]<arr[right+1]){
			right++;
			lowToHigh =true;
		}
		while(right<num&&arr[right]>arr[right+1]){
			right++;
			highToLow =true;
		}
		resultlength.push(right-left+1);
		xiabiao.push(left);
		xiabiao.push(right);
		left = right;
		right++;
		
	}
	if(!lowToHigh||!highToLow||resultlength.length==0){
		return "-1 -1";
	}
	var maxlength = Math.max.apply(Math,resultlength);
	var index = resultlength.indexOf(maxlength);
	var str = xiabiao[2*index]+" "+xiabiao[2*index+1];
	return str;
}