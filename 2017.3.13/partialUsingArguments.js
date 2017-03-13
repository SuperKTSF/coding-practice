/*ʵ�ֺ��� partialUsingArguments������֮����������������
1������һ������ result
2������ result ֮�󣬷��صĽ������ú��� fn �Ľ��һ��
3��fn �ĵ��ò���Ϊ partialUsingArguments �ĵ�һ������֮���ȫ�������Լ� result �ĵ��ò��� */
function partialUsingArguments(fn) {
    //�����ҵ�fn����,argument,������Ǵ��뺯�������в���������ת��Ϊ�����ſ���ʹ��slice����
    var args =  Array.prototype.slice.call(arguments,1);
    //���� result ֮�󣬷��صĽ������ú��� fn �Ľ��һ��˵��resultʵ�����Ƕ�fn�����Ķ��η�װ
    var result = function(){
        return fn.apply(this,args.concat([].slice.apply(arguments)));
    };
    return result;
    

}