//��Ҫ��Date���͵�ʹ�ã����о�Ҫstring.replace()������ķǳ�ǿ��
function formatDate(oDate, sFormation) {
    //new Date();����������Ǻ���������1970��һ��һ�տ�ʼ
    //����Ҫ�õ�Date�����һЩ����
    var object = {
        yyyy:oDate.getFullYear(),
        yy:oDate.getFullYear().toString().slice(-2),//ȡ�ַ����ĺ�����
        M:oDate.getMonth()+1,
        MM:("0"+(oDate.getMonth()+1)).slice(-2),
        d:oDate.getDate(),
        dd:("0" + oDate.getDate()).slice(-2),
        H:oDate.getHours(),
        HH:("0" + oDate.getHours()).slice(-2),
        h:oDate.getHours() % 12,
        hh:("0"+oDate.getHours() % 12).slice(-2),
        m:oDate.getMinutes(),
        mm:("0" + oDate.getMinutes()).slice(-2),
        s:oDate.getSeconds(),
        ss:("0" + oDate.getSeconds()).slice(-2),
        w:['��', 'һ', '��', '��', '��', '��', '��'][oDate.getDay()] //getday()����ֵΪ0-6
    };
    return sFormation.replace(/([a-z]+)/ig,function(match){
        return object[match];
    });
}

function strLength(s, bUnicode255For1) {
    if(bUnicode255For1===true){
        return s.length;
    }
    var count = 0;
    for(var i = 0;i<s.length;i++){
        if(s.charCodeAt(i)>255){
            count+=2;
        }else{
            count+=1;
        }
    }
    return count;
    
}
//��Ҫ�ǿ������������ʽ
function isAvailableEmail(sEmail) {
    var reg = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
    return reg.test(sEmail);
}

function count(str) {
    var result= {};
    for(var i=0;i<str.length;i++){
        if(str[i]!=null){
            if(result[str[i]]){
                result[str[i]]++;
            }else{
                result[str[i]]=1;
            }
        }
    }
    return result;
}

function cssStyle2DomStyle(sName) {
	var match = sName.match(/(\w)+/g);
    for(var i=1;i<match.length;i++){
        match[i]=match[i].charAt(0).toUpperCase()+match[i].slice(1);
		console.log(match[i]);
    }
    return match.join("");
}