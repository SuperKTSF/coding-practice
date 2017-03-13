process.stdin.resume();
process.stdin.setEncoding("utf8");
process.stdin.on("data", function(chunk) {
    var datas = chunk.trim().split("\n");
    for(var i = 0; i < datas.length; i++) {    
        var ab = datas[i].trim().split(" ");
        var a = parseInt(ab[0]);
        var b = parseInt(ab[1]);
        var N = a;
        var L = b;
        var m = 0;
    for(var i=L;i<=100;i++){
        var k = N - i*(i-1)/2;
        if(k%i==0){
            m=i;
            break;
        }
    }
    if(m==0){
        console.log("No");
    }else{
        var a1 = k/m;
        var res ="";
        for(var j=1;j<=m;j++,a1++){
            res +=a1 +" ";
        }
        console.log(res.trim());
    }
       
    }
});