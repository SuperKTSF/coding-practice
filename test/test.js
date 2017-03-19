 function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} 
function Deserialize(arr){
    var node = null;
    if(arr.length<1){
        return null;
    }
    var number = arr.shift();
    if(typeof number=="number"){  //±Ü¿ªÌØÊâ·ûºÅa           
        	node= new TreeNode(number);
    		node.left=Deserialize(arr);
    		node.right=Deserialize(arr);
    	}
    return node;
}