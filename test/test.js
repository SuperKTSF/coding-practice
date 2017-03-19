function KthNode(pRoot, k)
{
    // write code here
    var arr=[];
    search(arr,k,pRoot); //闭包的使用
    return arr[k-1];
    
    function search(arr,k,pRoot){
        if(pRoot!=null){
        	search(arr,pRoot.left,k);
        	arr.push(pRoot.val);
        	if(arr.length>=k){
            	return; 
        	}
        	search(arr,pRoot.right,k);      
    	}
    }

    
}

