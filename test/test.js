function NumberOf1Between1AndN_Solution(n,m)
{
    var temp=1;
    var nums=0;
    while(Math.floor(n/temp)){
		if(m!=0){
			var  ab = Math.floor(n/(temp*10));
			nums+=ab*temp;  //��һ���ֵĴ���
			var c = Math.floor(n%(temp*10)/temp);
			if(c>m){    //�ڶ����ֵĴ���
				nums+=temp;
			}else if(c==m){
            nums+=(n%temp+1);
			}
			temp*=10;			
		}else{
			var  ab = Math.floor(n/(temp*10));
			nums+=(ab-1)*temp;  //��һ���ֵĴ���
			var c = Math.floor(n%(temp*10)/temp);
			if(c>m){    //�ڶ����ֵĴ���
				nums+=temp;
			}else if(c==m){
            nums+=(n%temp+1);
			}
			temp*=10;
		}
    }
    return nums;   
}