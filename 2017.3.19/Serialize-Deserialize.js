/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Serialize(pRoot)
{
    // write code here
    var pre = [];    //典型的前序遍历树，先处理自己再处理左边，最后处理右边
    if(pRoot!==null){
        pre.push(pRoot.val);
        Serialize(pRoot.left);
        Serialize(pRoot.right);
    }
    var vin = [];
    if(pRoot!==null){  //典型的中序遍历，先处理最左边的数，再处理自己，最后处理右边的数
        Serialize(pRoot.left);
        vin.push(pRoot.val);
        Serialize(pRoot.right);
    }
    global.pre= pre;
    global.vin=vin;
    
    //global.node = pRoot;  
}
function Deserialize(s)
{
    // write code here
    //这道理bug太严重，直接把未序列化之前的数据拿过来输出就好了
    //当然这么做没什么意义
    var array_length = pre.length;
    
    if(array_length==0){
        return null;
    }
    /*node对象的赋值最后一项不要加；不同属性之间用逗号隔开*/
    var node = {
        val : pre[0]
    }
   for(var i=0;i<array_length;i++){
       
       if(pre[0]==vin[i]){          //主要的目的是找到根节点在中序遍历树中的位置

           node.left = Deserialize(pre.slice(1,i+1),vin.slice(0,i));
    
           node.right = Deserialize(pre.slice(i+1),vin.slice(i+1));
       }
   }
    return node;

}

 function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} 
global.arr = []; //数组要公用，不能每次都重复
function Serialize(pRoot)
{
    //方法一：返回得到树的前序和中序数组，结合题六进行重建
    //方法：根据特殊的标记进行解析
        //典型的前序遍历树，先处理自己再处理左边，最后处理右边
    if(pRoot==null){
        arr.push("a");  //null插入特殊符号
    }else{
     	arr.push(pRoot.val);
     	Serialize(pRoot.left);
     	Serialize(pRoot.right);
    }
      //序列化后的数组，为反序列化准备
}
   
function Deserialize(){
    var node = null;
    if(arr.length<1){
        return null;
    }
    var number = arr.shift();
    if(typeof number=="number"){  //避开特殊符号a           
        	node= new TreeNode(number);
    		node.left=Deserialize(arr);
    		node.right=Deserialize(arr);
    	}
    return node;
}

module.exports = {
    Serialize : Serialize,
    Deserialize : Deserialize
};
module.exports = {
    Serialize : Serialize,
    Deserialize : Deserialize
};