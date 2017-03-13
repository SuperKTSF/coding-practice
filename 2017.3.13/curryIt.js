/*��֪ fn Ϊһ��Ԥ���庯����ʵ�ֺ��� curryIt������֮����������������
1������һ������ a��a �� length ����ֵΪ 1������ʽ���� a ����һ��������
2������ a ֮�󣬷���һ������ b, b �� length ����ֵΪ 1
3������ b ֮�󣬷���һ������ c, c �� length ����ֵΪ 1
4������ c ֮�󣬷��صĽ������� fn �ķ���ֵһ��
5��fn �Ĳ�������Ϊ���� a, b, c �ĵ��ò��� */
function curryIt(fn) {
    /*���ַ�����һ�������ص����⣬�������ÿ�η��صĺ������࣬����100�Σ��ܲ���д100��return����
    return function (arg1){
        return function (arg2){
            return function(arg3){
                return fn.call(null,arg1,arg2,arg3);
            };
        };
    };*/
    //��������ĺô����ڵݹ��ʹ�ã������࣬����û��ʹ��arguments.callee
    var args = [];
    var length = fn.length;//fn�����õ��Ĳ���
    var result = function(arg){
        args.push(arg);
        length--;
        if(length<=0){
            return fn.apply(null,args);
        }else{
            return result;
        }
    }
    return result;
    
    

}