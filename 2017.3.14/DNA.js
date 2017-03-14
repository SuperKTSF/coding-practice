process.stdin.resume();
process.stdin.setEncoding("utf-8");
process.stdin.on("data",function(chunk){
	var datas = chunk.trim().split("\n");
	var DNAs = datas[0].trim().split(" ");
	var dna1 = DNAs[0].split("");
	var dna2 = DNAs[1].split("");
	var count = 0;
	for(var i = 0;i<dna1.length;i++){
		if((dna1[i]=='A'&&dna2[i]=='T')||(dna1[i]=='T'&&dna2[i]=='A')||(dna1[i]=='G'&&dna2[i]=='C')||(dna1[i]=='C'&&dna2[i]=='G')){
			continue;
		}else{
			count++;
		}
	}
	console.log(count);
});