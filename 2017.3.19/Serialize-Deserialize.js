/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Serialize(pRoot)
{
    // write code here
    var pre = [];    //���͵�ǰ����������ȴ����Լ��ٴ�����ߣ�������ұ�
    if(pRoot!==null){
        pre.push(pRoot.val);
        Serialize(pRoot.left);
        Serialize(pRoot.right);
    }
    var vin = [];
    if(pRoot!==null){  //���͵�����������ȴ�������ߵ������ٴ����Լ���������ұߵ���
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
    //�����bug̫���أ�ֱ�Ӱ�δ���л�֮ǰ�������ù�������ͺ���
    //��Ȼ��ô��ûʲô����
    var array_length = pre.length;
    
    if(array_length==0){
        return null;
    }
    /*node����ĸ�ֵ���һ�Ҫ�ӣ���ͬ����֮���ö��Ÿ���*/
    var node = {
        val : pre[0]
    }
   for(var i=0;i<array_length;i++){
       
       if(pre[0]==vin[i]){          //��Ҫ��Ŀ�����ҵ����ڵ�������������е�λ��

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
global.arr = []; //����Ҫ���ã�����ÿ�ζ��ظ�
function Serialize(pRoot)
{
    //����һ�����صõ�����ǰ����������飬������������ؽ�
    //��������������ı�ǽ��н���
        //���͵�ǰ����������ȴ����Լ��ٴ�����ߣ�������ұ�
    if(pRoot==null){
        arr.push("a");  //null�����������
    }else{
     	arr.push(pRoot.val);
     	Serialize(pRoot.left);
     	Serialize(pRoot.right);
    }
      //���л�������飬Ϊ�����л�׼��
}
   
function Deserialize(){
    var node = null;
    if(arr.length<1){
        return null;
    }
    var number = arr.shift();
    if(typeof number=="number"){  //�ܿ��������a           
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