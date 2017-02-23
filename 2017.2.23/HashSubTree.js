
/*输入两棵二叉树A，B，判断B是不是A的子结构。（ps：我们约定空树不是任意一个树的子结构）
树结构一定要理解递归遍历，在遍历的过程中对节点进行处理*/
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */



function HasSubtree(pRoot1, pRoot2){
    // write code here
        var result = false;  //只有在满足相应的条件下才会允许进入程序的主结构，否则其他情况直接返回false
    
        if(pRoot1==null || pRoot2==null){
            return false;
        }
        /* 下面的简写形式直接利用了或的短路形式
        if(pRoot1.val==pRoot2.val){
            result = DoseTree1HasTree2(pRoot1,pRoot2);
        }
        
        if(!result){
            result = HasSubtree(pRoot1.left,pRoot2);
        }
        
        if(!result){
            result = HasSubtree(pRoot1.right,pRoot2);
        }
        return result;*/
  return DoseTree1HasTree2(pRoot1, pRoot2) || HasSubtree(pRoot1.left, pRoot2) ||HasSubtree(pRoot1.right, pRoot2); //其实非常类似tree的先序遍历方法  
}

 
function DoseTree1HasTree2(pRoot1, pRoot2){
    if(!pRoot2){
        return true;
    }
    if(!pRoot1){
        return false;
    }
    if(pRoot1.val !== pRoot2.val){
        return false;
    }else{
        return DoseTree1HasTree2(pRoot1.left, pRoot2.left) && DoseTree1HasTree2(pRoot1.right, pRoot2.right);
    }
}
module.exports = {
    HasSubtree : HasSubtree
};
