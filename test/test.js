function aLinkcolor(arr){

var result = {};
			var resultStr = [];
			for(var i=0;i<arr.length;i++){
				var newArr = arr[i].split(" ");
				var date = (newArr[0].slice(0,2)+newArr[0].slice(3)).slice(1);
				var time = newArr[1].split(":");
				var second = parseInt(time[0])*3600+parseInt(time[1])*60+parseInt(time[2]);
				if(second<=10799){
					second+=24*3600;
					date  -=1	
				}
				if(!result[date]){
					result[date] = [second];
				}else{
					result[date].push(second);
				}
			}
			for(var item in result){
				if(result[item].length<2){
					continue;
				}
				var workTimeMax = Math.max.apply(this,result[item]);
				var workTimeMin = Math.min.apply(this,result[item]);
				var workTime = 0;
				if((45000<workTimeMin && workTimeMin<50400) && (45000<workTimeMax && workTimeMax<50400)){
					continue;
				}
				if(workTimeMax<=45000||workTimeMin>=50400){
					workTime = workTimeMax - workTimeMin
				}
				
				if(workTimeMax>=50400 && workTimeMin<=45000){
					workTime = workTimeMax - workTimeMin - 5400;
				}
				
				if(45000<workTimeMax && workTimeMax<50400){
					workTime = 45000 - workTimeMin
				}
				
				if(45000<workTimeMin && workTimeMin<50400){
					workTime = workTimeMax - 50400
				}
				if(workTime ==0){
					continue;
				}
				var str = "0"+item.slice(0,1)+"."+item.slice(1)+" "+workTime;
				resultStr.push(str);
			}
			
			if(resultStr.length == 0){
				console.log("-1");
			}else{
				resultStr.forEach(function(x) {
					console.log(x);
				})
			}
}

