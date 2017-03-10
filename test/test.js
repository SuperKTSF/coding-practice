 function A(str){
  

    var arr = str.split('');
    var len = arr.length;//输入的字符的个数
    if((len-2)%3==0){
                switch(len){
            case 2:
                if(arr[0]==arr[1]){
                   console.log("yes"); 
                }else{
                   console.log("no");
                }
                break;
            case 5:
                for(var i=0;i<arr.length;i++){
                    if(arr[i]==arr[i+1]){
                        var arr1=arr.splice(i,2);
                        break;
                    }
				}
                if(arr.length==5){
					console.log("no"); 
					break;
				}
                if((arr[0]==arr[1]&&arr[1]==arr[2])||(arr[0]==(arr[1]-1)&&(arr[1]-1)==(arr[2]-2))||(arr[0]==arr1[0]&&arr[1]==arr[2])){
                    console.log("yes");
                }else{
                   console.log("no"); 
                } 
                break;
            case 8:
                console.log("yes"); 
                break;
            case 11:
                console.log("yes"); 
                break;
            case 14:
                console.log("yes"); 
                break;
        }
    }else{
        console.log("no");
    }
};