  //����һ����ʹ�ø���ջ�Ӻ���ǰѡ��
    /*������һ�������Ƿ��ص��Ƕ�Ӧ�ڵ��ֵ�����޷�����ָ�룬�޷�ͨ����֤
    if(pHead1==null||pHead2==null){
        return null;
    }
    if(pHead1==pHead2){
        return pHead1;
    }
    var stack1=[];
    var stack2=[];
    var current1=pHead1;
    var current2=pHead2;
    var arr=[]; //������ɾ������
    var lastitem1;
    var lastitem2;
    while(current1.next!=null){
        stack1.push(current1.val);
        current1 = current1.next;
    }
    
    while(current2.next!=null){
        stack2.push(current2.val);
        current2 = current2.next;
    }
    
    lastitem1=stack1.pop();
    lastitem2=stack2.pop();
    
    if(lastitem1!=lastitem2){
        return null;
    }
    
    while(stack1!=null&&stack2!=null){
       lastitem1=stack1.pop();
       lastitem2=stack2.pop();
       if(lastitem1==lastitem2){
          arr.push(lastitem1);
          continue;
       }else{
          return arr.pop();
       }
       
    }
    return arr.pop();*/
    //�����������ø���ջ��ǰ�������
var walkNStep = function walkNStep(node, n) {
  while (n > 0) {
    node = node.next;
    n--;
  }
 
  return node;
};
 
var getLength = function getLength(node) {
  var length = 0;
  while (node) {
    length++;
    node = node.next;
  }
 
  return length;
};
 
function FindFirstCommonNode(p1, p2) {
  if (p1 === p2) return p1;
 
  var length1 = getLength(p1);
  var length2 = getLength(p2);
 
  p1 = walkNStep(p1, length1 - length2);
  p2 = walkNStep(p2, length2 - length1);
 
  while (p1 !== p2) {
    p1 = p1.next;
    p2 = p2.next;
  }
 
  return p1;
};
module.exports = {
    FindFirstCommonNode : FindFirstCommonNode
};