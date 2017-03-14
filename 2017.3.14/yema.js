process.stdin.resume();
process.stdin.setEncoding("utf8");
process.stdin.on("data", function(chunk) {
    var datas = chunk.trim().split("\n");//这里本身也是一行一行的读数据
    var n = parseInt(datas[0]); // 输入的页码数字
	var str="";
	for(var i =0;i<=9;i++){
		str += NumberOf1Between1AndN_Solution(n,i)+" ";
	}
	console.log(str.trim());
});

function NumberOf1Between1AndN_Solution(n,m)
{
    var temp=1;
    var nums=0;
    while(Math.floor(n/temp)){
		if(m!=0){
			var  ab = Math.floor(n/(temp*10));
			nums+=ab*temp;  //第一部分的次数
			var c = Math.floor(n%(temp*10)/temp);
			if(c>m){    //第二部分的次数
				nums+=temp;
			}else if(c==m){
            nums+=(n%temp+1);
			}
			temp*=10;			
		}else{
			var  ab = Math.floor(n/(temp*10));
			nums+=(ab-1)*temp;  //第一部分的次数
			var c = Math.floor(n%(temp*10)/temp);
			if(c>m){    //第二部分的次数
				nums+=temp;
			}else if(c==m){
            nums+=(n%temp+1);
			}
			temp*=10;
		}
    }
    return nums;   
}

