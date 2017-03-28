var readline = require("readline");
var rl = readline.createInterface(process.stdin, process.stdout); 
var args = [];
rl.on("line", function(str){
    args.push(str);
    if(args.length==2){
         rl.close();
    }
});
rl.on("close", function(){
    var str1 = args[0].trim(); //输入的要加密字符串
    var str2 = args[1].trim(); //输入的要解密字符串
    var letterCase = /[a-zA-Z]/g;
    var numCase =/[0-9]/g;
    
   //加密过程 
	var str1 = str1.replace(letterCase,function(match){
		if(match<='z'&&match>='a'){
			var Unicode = match.toUpperCase().charCodeAt();
			if(Unicode==90){
				return 'A';
			}else{
				return String.fromCharCode(Unicode+1);
			}
		}else{
			var Unicode = match.toLowerCase().charCodeAt();
			if(Unicode==122){
				return 'a';
			}else{
				return String.fromCharCode(Unicode+1);
			}
		}
    });
       
    var str1 = str1.replace(numCase,function(match){
		if(match=='9'){
			return '0';
		}else{
			return parseInt(match) + 1;
		}
    });
	//解密过程
	
	var str2 = str2.replace(letterCase,function(match){
		if(match<='z'&&match>='a'){
			var Unicode = match.toUpperCase().charCodeAt();
			if(Unicode==65){
				return 'Z';
			}else{
				return String.fromCharCode(Unicode-1);
			}
		}else{
			var Unicode = match.toLowerCase().charCodeAt();
			if(Unicode==97){
				return 'z';
			}else{
				return String.fromCharCode(Unicode-1);
			}
		}
    });
       
    var str2 = str2.replace(numCase,function(match){
		if(match=='0'){
			return '9';
		}else{
			return parseInt(match) - 1;
		}
    });
    
    console.log(str1);
	console.log(str2);
});