��Ҫ�Ǽ�¼һЩ�����в�̫������⣬�Լ����Եľ����Ŀ���
1��̸̸cookies������
�ŵ㣺 ���ߵ���չ�ԺͿ����� 
1) ���ݳ־��ԡ� 
2) ����Ҫ�κη�������Դ�� Cookie �洢�ڿͻ��˲��ڷ��ͺ��ɷ�������ȡ�� 
3) �����õ��ڹ��� ���� cookie �������ڣ�ʹ֮������Զ��Ч��͵���ߺܿ����õ�һ�����ڵ� cookie �� 
4) ���ԡ� �����ı��������ṹ�� 
5) ͨ�����õı�̣����Ʊ����� cookie �е� session ����Ĵ�С�� 
6) ͨ�����ܺͰ�ȫ���似���� SSL �������� cookie ���ƽ�Ŀ����ԡ� 
7) ֻ�� cookie �д�Ų��������ݣ���ʹ����Ҳ�������ش���ʧ�� 
ȱ�㣺 
1) Cookie �����ͳ��ȵ����� �� 
������ÿ����� cookie �������ޡ� 
a) IE6 ����Ͱ汾��� 20 �� cookie 
b) IE7 ��֮��İ汾�������� 50 �� cookie 
c) Firefox ��� 50 �� cookie 
d) chrome �� Safari û����Ӳ������ 
���ȣ�ÿ�� cookie ���Ȳ����� 4KB �� 4096B ��������ᱻ�ص��� 
2) Ǳ�ڵİ�ȫ���� �� Cookie ���ܱ����ء��۸ġ���� cookie �����أ����п���ȡ�����е� session ��Ϣ�� 
3) �û�����Ϊ���� ����Щ�û��������������ͻ����豸���� cookie �������������������һ���ܡ� 
4) ��Щ״̬�����ܱ����ڿͻ��� �����磬Ϊ�˷�ֹ�ظ��ύ����������Ҫ�ڷ������˱���һ����������������ǰ���������������ڿͻ��ˣ���ô���𲻵��κ����á�

2���¼�����
Btn.addEventListener(��click��,function(){},true/false),true�������¼�����׶ε����¼��������false��ʾ���¼���ð�ݽ׶ε����¼��������
Btn.addEventListener (��click��, handler, true/false)
Btn.removeEventListener(��click��, handler, true/false) ֻ�д���Ĳ���ȫ��һ���ſ��������¼�

IE����¼��ķ�ʽ���в�ͬ��
var btn = document.getElementById("myBtn");
btn.attachEvent("onclick",function(){})  ���õ�ͨ��detachEvent�Ƴ��¼�

�¼�����/ί�� ���ľ���event.target||event.srcElement  ֻ��Ҫ������Ԫ������¼���Ȼ��ͨ��target�ж����ĸ���Ԫ�ش������¼�

<div id="box">
    <input type="button" id="add" value="���" />
    <input type="button" id="remove" value="ɾ��" />
    <input type="button" id="move" value="�ƶ�" />
    <input type="button" id="select" value="ѡ��" />
</div>

window.onload = function(){
            var oBox = document.getElementById("box");
            oBox.onclick = function (ev) {
                var ev = ev || window.event;
                var target = ev.target || ev.srcElement;
                if(target.nodeName.toLocaleLowerCase() == 'input'){
                    switch(target.id){
                        case 'add' :
                            alert('���');
                            break;
                        case 'remove' :
                            alert('ɾ��');
                            break;
                        case 'move' :
                            alert('�ƶ�');
                            break;
                        case 'select' :
                            alert('ѡ��');
                            break;
                    }
                }
            }
            
        }
		//ͨ��ʱ��ί�У�����Ԫ������¼������ӵ���Ԫ��Ҳ���Զ����¼�
		window.onload = function(){
            var oBtn = document.getElementById("btn");
            var oUl = document.getElementById("ul1");
            var aLi = oUl.getElementsByTagName('li');
            var num = 4;
            
            //�¼�ί�У���ӵ���Ԫ��Ҳ���¼�
            oUl.onmouseover = function(ev){
                var ev = ev || window.event;
                var target = ev.target || ev.srcElement;
                if(target.nodeName.toLowerCase() == 'li'){
                    target.style.background = "red";
                }
                
            };
            oUl.onmouseout = function(ev){
                var ev = ev || window.event;
                var target = ev.target || ev.srcElement;
                if(target.nodeName.toLowerCase() == 'li'){
                    target.style.background = "#fff";
                }
                
            };
            
            //����½ڵ�
            oBtn.onclick = function(){
                num++;
                var oLi = document.createElement('li');
                oLi.innerHTML = 111*num;
                oUl.appendChild(oLi);
            };
        }
3����������밲ȫhttps
1)TLS/SSL(��ȫ�����Э��)����Կ��Կ�ṹ����һ�ַǶԳƵĽṹ���ͻ��˷��͸���������������Ҫͨ���������˵Ĺ�Կ���м��ܣ���֮��ˣ�
2)���ݴ����������Ҫ�Եõ��Ĺ�Կ������֤�������м���(αװ�ķ�������)�Ĺ�������ȷ����Կ������Ŀ�������
3)��������֤��ķ�ʽ�Թ�Կ������֤����������˷����������ƺ����������������Ĺ�Կ��ǩ���취���������ƣ��ڽ�������֮ǰ��ȷ����Կ����Ŀ����������Ӷ�����������ϵ��

4��http2.0
1)����������Ƶĸ�������������������ݣ�
2)�ṩ����ļ��ܼ�����
3)��·���ã�ֻ��һ��http���������ļ��������Ϳ��Բ�����ǰ�˽����ļ��ĺϲ�(������Ŀ���Ǽ���http���󣬵��Ƕ����ļ��Ļ��治��)
4)�ײ�ѹ��
//��·��������ͬʱͨ����һ�� HTTP/2 ���ӷ�����ص�����-��Ӧ��Ϣ����� HTTP/2 ���Ժ����׵�ȥʵ�ֶ������ж���������������� TCP ����

5��es6�ļ�ͷ������this����
var f = x=>x; ||()=>x;||(num1,num2)=>{statsment}
1)��ͷ�������ڵ�this������ǰ��˶���ʱ���ڵĶ���
2)��һ������������Ϊ�����һ������ʱ�����ǳ���Ϊһ��������������������ʱ(ͨ�� . ���ʽ�� [subscript] �±���ʽ)��this �󶨵��ö���
3)ͨ����������ģʽ���õĺ�����this ָ�� window��
4)�����һ������ǰ����� new �����ã���ô�����ｫ�ᴴ��һ�����ӵ��ú����� prototype ��Ա���¶���ͬʱ this ��󶨵��Ǹ��¶�����;
5)apply/call ��һ��������ҪҪ�󶨸�this��ֵ

6��AagularJS��˫�����ݰ󶨵����
��Ϊ���ĵ��ǣ�MVVM��ģ�黯���Զ���˫�����ݰ󶨡����廯��ǩ������ע��ȵ�
AngularJSʹ��$scope.$watch����ͼ��ģ�ͣ��Լ�$scope.$apply��ģ�͵���ͼ����ʵ��������ܡ�MVVM�ĺ���
��ͼview�����������������룬ʹ��ǰ��ˣ��ṩ��չʾ���ݣ�֮�����ӷǳ�����
һ�����ʽ�ǰ�����js������ַ�������AngularJS context������ִ�У�������������������������ִ��ng-controller�����µ������������ڴ����ģ�黯
Angularjs���޷�����window��ȫ�����ú��������ǿ��Է�װ����Ӧ�Ŀ������У������������ṩAPI
$watch,��ָ���ı��ʽ�ı�ʱ���ûص�������ÿ�������򶼻���һ���������б�
$apply֪ͨangularjsĳЩ���ʽ�ı���
$digest�ǽ�$watch��$apply����һ��ĺ���
���ϵ����ϣ�
1)     	���ǵ������һֱ�ڵȴ��¼��������û���������������һ����ť����������������붫�����¼��Ļص������ͻ���javascript��������ִ�У�Ȼ����Ϳ������κ�DOM�������Ȼص�����ִ�����ʱ��������ͻ���Ӧ�ض�DOM�����仯��Angular��չ������¼�ѭ��������һ����ʱ��Ϊangular context��ִ�л��������Ǹ���Ҫ�ĸ����
2)ÿ�����һЩ���������UI��ʱ��ͻ���$watch���������һ��$watch��
3)digest����������ǵ�watch��Ȼ��ѯ�����Ƿ������Ժ�ֵ�ı仯��ֱ$watch���ж�������
�������ν��dirtychecking����Ȼ���е�$watch��������ˣ��Ǿ�Ҫ���ˣ���û��$watch���¹������������һ�����¹������ѭ���ͻ��ٴδ�����ֱ�����е�$watch��û�б仯���������ܹ���֤ÿ��model���Ѿ������ٱ仯����ס���ѭ������10�εĻ����������׳�һ���쳣����ֹ����ѭ���� ��$digestѭ������ʱ��DOM��Ӧ�ر仯��
4)ͨ��$apply������angular context		

7����������һ�����ᵽ��
function.length��ָ����ϣ�����յ��ĺ����Ĳ�����function.arguments.length��ָʵ�ʽ��ܵ��Ĳ����ĸ���		

8��������������ǰ�����к��������У�����������е�����
һ��ĵ������Ǹ��ݸ����������������ٵĻ������������
���� ��3 5 6 7 8 9 10 11 12 13 14 15 18 20 25���͡�11 7 5 3 6 9 8 10 15 13 12 14 20 18 25��		
�Ժ��֪����������ôȥ����ˣ����Ժܿ�Ļ�����������Ȼ������д�������б�

9���������������⣬��ջ˳��Ϊ 1234567��Ȼ�����ջ˳��
����Ǽ򵥵��ж���ȽϺô���ֱ�Ӵ�ǰ�����Ƶ��Ϳ����ˣ�������������ܴ�������Ƚ��鷳
Ŀǰֻ������İ취�����12345��ȫ���У�Ȼ�������ж�ÿ��ȫ�����Ƿ�Ϊ���ʵ����
'12'=2 '123'=5,'1234' = 14 '12345' = 42 '123456' = 132
var readline = require("readline");
var rl = readline.createInterface(process.stdin, process.stdout); 
var args = [];

rl.on("line", function(str){
    args.push(str);
    rl.close();
});
rl.on("close", function(){
	var arr = args[0].trim().split("");//����һ���ַ���,����ַ�����
	var result = [];
	var str = "";
	result = sortString(arr,str,[]);   //result��'123456'��ȫ��
	var newarr =[];
	for(var i=0;i<result.length;i++){
		if(IsPopOrder(args[0].trim(),result[i])){
			newarr.push(result[i]);
		}
	}
	console.log(result);
	console.log(newarr);
	console.log(newarr.length);
});

function sortString(arr,str,res){
	if(arr.length == 0){
		res.push(str);
	}else{
		var isUsed = {};//����������ж��ַ��������Ƿ����ظ�Ԫ�ص�
		for(var i=0;i<arr.length;i++){
			if(!isUsed[arr[i]]){
				var temp  = arr.splice(i,1); //��ȡһ��Ԫ�أ�����������ɾ��
				str +=temp;
				sortString(arr,str,res);
				arr.splice(i,0,temp); 
				str = str.slice(0,str.length-1);
				isUsed[temp] = true;
			}
		}
	}
	return res;
}
function IsPopOrder(pushV, popV)
{

    if(pushV==null||popV==null){
        return false;
    }
    //�����ǳ���������ò���˳����룬���ó�ջ˳���ջ��������ȫ����ջΪ�գ���Ϊ��ȷ�ĳ�ջ˳��
    var stack = [];
    for(var i=0,j=0;i<pushV.length;i++){
        stack.push(pushV[i]);
        //whileѭ����Ŀ�������ж��ٲ���Ĺ����к�ʱ����ֳ�ջ
        while(j<popV.length&&stack[stack.length-1]==popV[j]){
            stack.pop();
            j++;
        }
    }
    
    return stack.length==0;
}

10������һ������0~999999�г���3�ĸ���
���е����ⶼ���й��ɿ�ѭ��
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
11���ͻ��˴洢
1)������cookie��Ȼ��html5�е�Web Storage���������ִ洢��ʽ��sessionStorage��localStorage���������Լ���API����Ҫ�����cookie�����Լ���װAPI
2)sessionStorage���ڱ��ش洢һ���Ự��session���е����ݣ���Щ����ֻ����ͬһ���Ự�е�ҳ����ܷ��ʲ��ҵ��Ự����������Ҳ��֮���١����sessionStorage����һ�ֳ־û��ı��ش洢�������ǻỰ����Ĵ洢��
3)��localStorage���ڳ־û��ı��ش洢����������ɾ�����ݣ�������������Զ������ڵġ�	

12��CSS�� link ��@import �������ǣ�
(1) link����HTML��ǩ����@import��CSS�ṩ��; 
(2) ҳ�汻���ص�ʱ��link��ͬʱ�����أ���@import���õ�CSS��ȵ�ҳ�汻�������ټ���;
(3) importֻ��IE5���ϲ���ʶ�𣬶�link��HTML��ǩ���޼�������; 
(4) link��ʽ����ʽ��Ȩ�� ����@import��Ȩ��.

13��position��absolute��fixed��ͬ���벻ͬ��
1)��ͬ�㣺���������ĵ�������ռ�ݿռ䣻
2)�ı�Ԫ�س��ַ�ʽ��display�ᱻ����Ϊblock��
3)Ĭ�ϻᱻ���ǵ��Ƕ�λԪ����
4)���õ������Ե�Ԫ�ز�ͬ

14������һ��CSS�ĺ���ģ�ͣ�
W3C��׼��ģ�ͣ�context��padding��border��margin
IE��ģ�ͣ�content���ְ�����padding��border
������css3�е�box-sizing���ԡ�content-box,padding-box,border-box,

15��cssѡ�������ȼ��㷨
���ȼ��㷨��
1)�����ȼ��ͽ�ԭ��ͬȨ���������ʽ���������Ϊ׼;
2)��������ʽ���������Ķ�λΪ׼;
3)��!important >  id > class > tag  
4)��!important �� �������ȼ���(style)���������� id Ҫ��

16��css3����Щ����
1. CSS3ʵ��Բ�ǣ�border-radius������Ӱ��box-shadow����
2. �����ּ���Ч��text-shadow���������Խ��䣨gradient������ת��transform��
3. transform:rotate(9deg) scale(0.85,0.90) translate(0px,-30px) skew(-9deg,0deg);// ��ת,����,��λ,��б
4. �����˸����CSSѡ����  �౳�� rgba 
5. ��CSS3��Ψһ�����αԪ���� ::selection.
6. ý���ѯ����������
7. border-image	
8. ���Ժ��ӣ�display��flex��

17��ΪʲôҪ��ʼ��CSS��ʽ
��Ϊ������ļ������⣬��ͬ���������Щ��ǩ��Ĭ��ֵ�ǲ�ͬ�ģ����û��CSS��ʼ����������������֮���ҳ����ʾ���졣

18���鼶��ʽ������
BFC���鼶��ʽ�������ģ�һ���������µ�BFC�ĺ����Ƕ������ֵģ���������Ԫ����ζ������ݽ��в��֣��Լ�������Ԫ�صĹ�ϵ���໥����

19��CSSSprites�����
CSS Sprites��ʵ���ǰ���ҳ��һЩ����ͼƬ���ϵ�һ��ͼƬ�ļ��У�������CSS�ġ�background-image������background- repeat������background-position������Ͻ��б�����λ
�õؼ�����ҳ��http���󣬴Ӷ��������ҳ������ܣ�
��������http2֮��Ͳ�����ô���ˣ���Ϊ���Ը���http����

20��̸̸���廯�����
1. ȥ�����߶�ʧ��ʽ��ʱ���ܹ���ҳ����ֳ������Ľṹ
2. ������SEO�����������潨�����ù�ͨ������������ץȡ�������Ч��Ϣ�����������ڱ�ǩ��ȷ�������ĺ͸����ؼ��ֵ�Ȩ�أ�
3. ���������豸����������Ļ�Ķ�����ä���Ķ������ƶ��豸��������ķ�ʽ����Ⱦ��ҳ��
4. �����Ŷӿ�����ά�������廯���߿ɶ���

21��html�����ļ���������
1)�����Ĭ�ϵ�margin��padding��ͬ
�����������һ��ȫ�ֵ� *{margin:0;padding:0;} ��ͳһ��
2)IE�£�event������ x��y ���ԣ�����û�� pageX��pageY����;

22������ԭ�����ļ̳�����
var F=function(){};
         Object.prototype.a=function(){};
         Function.prototype .b=function(){};
         var f=new F();
������f�ǹ��캯����ʵ�������캯��һ�㶼�̳�Object��������f.a���Է��ʵ�
����f��f.constructor(Function)û���κεĹ�ϵ�����Կ�ͨ��f.constructor.b������b

23��һԪ������
�ڶԷ���ֵӦ��һԪ������+ʱ��������ʹ��Number(),��������ת��

24������float�Լ����Ĺ���ԭ��
����Ԫ�������ĵ�������ռ�ݿռ䡣����Ԫ�������������ı߿���߸���Ԫ�صı߿�ͣ����
floatԪ�����������⣺��Ԫ���޷��ſ���ͬ�ȼ��ķǸ���Ԫ�ػ���渡��Ԫ�أ�����ص�
����������������⣺
1)������Ԫ�أ�
2)����Ԫ�����clearfix��ʽ
.clearfix:after{
	content:" ";
	height:0;
	clear:both;
	visibility:hidden;
	display:block;
}
3)�����ǩ��<div style="clear:both;"></div>(ȱ����������������ı�ǩ)

25��html5����Щ������
1)���廯�ı�ǩ
2)audio,video API
3)Canvas
4)Geolocation
5)localStorage,sessionStorage
6)WebSocket��webworker

26�����ʵ��������ڶ����ǩҳ֮���ͨ��?
����cookie����localStorage�ȱ��ش洢����

27����ζ���վ���ļ�����Դ�����Ż�
1)�����ܼ���http�����������css, js, ͼƬ���Ժϲ�,webpack���������飬��������http2����������û��������
2)ʹ��CDN(���ݷַ�ϵͳ)������ͨ�ž���
3)����ʵ���ǩETag,�������Expire/Cache-Controlͷ,����������ȷ�ĸ��߿ͻ��˶��ļ����л���
4)����Gzipѹ���ļ�(���������ļ�),�󻯴���,��С��css, js����С�ļ����
5)��css����ҳ�������� 
6)��script����ҳ��������
7)������css��ʹ�ñ��ʽ 
8)��css, js�������ⲿ�ļ��� 
9)����DNS��ѯ 
10)�����ض��� 

28������ҳ�����ʱ�䣬��ʵ����������������Ƶĵط�
����http����
�Ż�ͼƬ�ļ�������ߴ�
ѹ��js��css����
����������gzipѹ������
�����߶ȺͿ��

29��null��undefined������
1)null��ʾ����Ϊ��,�������Ϊָ��ն����ָ�룬��ֵת����Ϊ0����undifined��ʾ�������嵫δ��ʼ��
1. �����������ˣ���û�и�ֵʱ���͵��� undefined 
2. ���ú���ʱ��Ӧ���ṩ�Ĳ���û���ṩ���ò������� undefined 
3. ����û�и�ֵ�����ԣ������Ե�ֵΪ undefined 
4. ����û�з���ֵʱ��Ĭ�Ϸ��� undefined
undefined������null����undefined == null

30��js�ӳټ��صķ�ʽ����Щ��
1)��̬����DOM script��ǩ���ڸ�������
2)promise new promise(function(reject,resolved){})
3)generator�Ѿ�������������﷨��async
4)�����ط�ʽ

31����ν����������
1)��򵥵Ŀ�����Դ����CORS��http�ı���ͷ����ʹ����������������н���Origin Access-Control-Allow-Origin
2)jsonp.��̬����DOM������url��ָ��callback����
3)document.domain ��iframe
4)websocket

32���ڴ�й¶
�κζ�����������ӵ�л���Ҫ��֮����Ȼ����
1)��ҳ����Ԫ�ر��Ƴ����滻ʱ����Ԫ�ذ󶨵��¼���û���Ƴ�,���������������ڴ�й¶
2)����������˴������ұ˴˱���ʱ���ͻ����һ��ѭ��

33��node����ȱ��
1)��ΪNode�ǻ����¼��������������ģ����Էǳ��ʺϴ���������
2)ǰ���ͳһjs���ǳ������˷�
ȱ�㣺
1) Node��һ������µĿ�Դ��Ŀ�����Բ�̫�ȶ���������һֱ�ڱ䡣

34��ǰ�˹���ʦ�����
1)ʵ�ֽ��潻��
2) �����û�����
3) ����Node.js��ǰ�˿���ʵ�ַ���˵�һЩ����
ǰ����
1) ǰ�����������û��ĳ���Ա��ǰ�˵������������ò�Ʒ�� 90�ֽ����� 100 �֣���������
2) ������Ŀ�����ٸ��������ʵ��Ч��ͼ����ȷ��1px��
3) ���Ŷӳ�Ա��UI��ƣ���Ʒ����Ĺ�ͨ��
4) ���õ�ҳ��ṹ��ҳ���ع����û����飻
5) ����hack�����ݡ�д�������Ĵ����ʽ��
6) ��Է��������Ż���ӵ������ǰ�˼��������ݿ��ӻ���VR���������ȵ�

35��http״̬��
1)100��continue
2)200_����ɹ� 204_����ɹ�����û����Դ���Է���
3)301_�����ض��� 302_��ʱ�ض��� 303_��ʱ�ض��򣬵���ָ��get����������Դ 304_��������ԴΪ������ʹ�û���
4)400_�ͻ��˵������Ĵ��������� 401_��Ҫ��֤ 403_��ֹ���ʣ�û��Ȩ�� 404_notfound
5)500_�������޷����ʣ�������� 503_������ά��

36��һ��ҳ�������URL������ҳ����������ж�������ʲô
���紫�䲿�֣�
1)���������һ���̴߳���������󣬶�URL���з�����ͨ����httpЭ�飬����web�ķ�ʽ����
2)��Զ��DNS������������һ��DNS��ѯ������ʹ�������������Ӧ��IP��ַ����ͬʱ�������Ŀ��web�������HTTP������
3)�������Զ��Web������ͨ��TCP��������Э��������һ��TCP/IP���ӣ��������ķָ�ɱ��Ķν��д���
4)һ��TCP/IP���ӽ������������ͨ����������Զ�̷���������HTTP��GET����Զ�̷������ҵ���Դ��ʹ��HTTP��Ӧ���ظ���Դ��ֵΪ200��HTTP��Ӧ״̬��ʾһ����ȷ����Ӧ��
5)�ͻ��˿�ʼ������Դ��
�������Ⱦ����
ҳ�濪ʼ��ȾDOM��JS����DOM API����DOM,ִ���¼��󶨵ȣ�ҳ����ʾ���

37��ƽʱ��ι��������Ŀ��
1)��Ŀ�Ĺ��������ǵ����ڵ�ά���ԣ����Բ��÷ֹ���ģ����Ŀ
2)�����ȫ����ʽ
3)��ǰԼ���ñ�дϰ�ߣ���ҳ����б�ע
4)ͼƬ�������ش�Сͳһ����

38������ѧϰǰ�˵���վ
w3cfuns��Github��΢����nodejs��AngulaJS������w3cplus,�ٶ�ǰ��ѧԺ

39��javascript����ļ��ִ�����ʽ
1)����ģʽ
2)���캯��ģʽ
3)ԭ��ģʽ
4)��Ϲ��캯����ԭ��ģʽ
5)�������캯��ģʽ

40���̳е��ķ�ʽ
1)ԭ�����̳У���������дԭ�Ͷ���
2)���ù��캯���������๹�캯���У���Father.call(this),���ø��๹�캯��
3)��ϵķ�ʽ�̳�
4)��es6����������class���̳�ֱ�Ӳ���extends���м̳�

41��ajax�Ĺ���ԭ��
var xhr = new XMLHttpRequest();
xhr.open("get",url,false)
xhr.onreadystatechange = function (){  //����http����״̬�仯����
	if(xhr.readyState == 4){
		if(xhr.status >= 200&&xhr.status<300||xhr.status ==304){
			xhr.responseText //��ȡ�첽���÷��غ���
		}
	}
};
xhr.send(null); //����Ҫͨ���������巢������
�������js��DOM��ҳ��ֲ�ˢ��

42��WEB����
1)XSS:��վ�ű�������ʵ��׼���ö����URL�����û������ҳ������������������˻������Ѿ����������ߵķ���������ֹ����ű������߶Խű�����ת��
2)SQLע�룬�����ݿ���в���
3)��վ����α��

43��'usestrict'�ϸ�ģʽ����
����ģʽʹ��javascript�ڸ��ߵı�׼������
1)����javascriptһЩ�������Ͻ��ط�
2)���������ٶ�
3)Ϊ�Ժ�İ汾���̵�
ȱ�����ļ�ѹ����usestrict���ᱻ�ŵ��м�

44��get��post������
GET��һ��������Ϣ��ȡ��ʹ��URL���ݲ���������������Ϣ������Ҳ�����ƣ�һ����2000���ַ�������һ����get
POST��һ�������޸ķ������ϵ���Դ���������͵���Ϣû������
����������У���ʹ�� POST ����
1. �޷�ʹ�û����ļ������·������ϵ��ļ������ݿ⣩
2. ����������ʹ������ݣ�POST û�����������ƣ�
3. ���Ͱ���δ֪�ַ����û�����ʱ��POST �� GET ���ȶ�Ҳ���ɿ�

45��Javascript���������ؾ��巽ʽ��
1. ���ű����ڵײ���<link>���Ƿ���head�У����Ա�֤��js����ǰ���ܼ��س�������ʾ��ҳ�档<script>��ǩ����</body>ǰ��
2. �����ű�������ÿ��<script>��ǩ����ʱ����ҳ��������̣���������ҳ���<script>����Ҳ���Ը������ܡ������������ű����ⲿ�ű���
3. �������ű�����ҳ����ɼ��غ��ټ���js���롣Ҳ���ǣ��� window.onload �¼�������ʼ���ش��롣
4. script��ǩ��defer���ԣ��ӳټ��أ�֧��IE4��fierfox3.5���߰汾�����
5. ��̬�ű�Ԫ�أ��ĵ�����ģ�ͣ�DOM��������ʹ��js��̬����HTML�ļ���ȫ���ĵ����ݡ�

46��eval����ʲô�ģ�
1)���Ĺ����ǰѶ�Ӧ���ַ���������JS���벢����
2)Ӧ�ñ���ʹ��eval������ȫ���ǳ������ܣ�2�Σ�һ�ν�����js��䣬һ��ִ�У�

47��ͨ�õ�ʱ����������
��Ҫ������IE�����������
1)����¼� element.addEventListener(type,hander,false) false��ʾ�¼�ð�ݣ���ΪIE��֧��ʱ�䲶�� element.attachEvent('on'+type,function(handler.apply(this){})
2)�Ƴ��¼� element.removeEventListener(type,hander,false) element.detachEvent();
3)��ֹ�¼� event.stopPropagation() event.cancelBubble =true;
4)�����¼�Ĭ����Ϊ event.preventDefault()  event.returnValue = false;
5)��ȡ�¼�Ŀ�� event.target event.srcElement
6)��ȡevent���������  event = event || window.event;

48��ԭ����
ԭ��������һЩ�����̳к͹������ԵĶ�����ɵģ����޵ģ���������
���ʶ��������ʱ����ԭ����һ�����ϲ���

49��cookies�Ĳ�����û��ԭ��API
function setCookie(name, value, expires, path, domain, secure) {
    var cookieText = encodeURIComponent(name) + '=' + encodeURIComponent(value);
    if (expires instanceof Date) {
        cookieText += '; expires=' + expires;
    }
    if (path) {
        cookieText += '; expires=' + expires;
    }
    if (domain) {
        cookieText += '; domain=' + domain;
    }
    if (secure) {
        cookieText += '; secure';
    }
    document.cookie = cookieText;
}
// ��ȡcookie
function getCookie(name) {
    var cookieName = encodeURIComponent(name) + '=';
    var cookieStart = document.cookie.indexOf(cookieName);
    var cookieValue = null;
    if (cookieStart > -1) {
        var cookieEnd = document.cookie.indexOf(';', cookieStart);
        if (cookieEnd == -1) {
            cookieEnd = document.cookie.length;
        }
        cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
    }
    return cookieValue;
}
// ɾ��cookie
function unsetCookie(name) {
    document.cookie = name + "= ; expires=" + new Date(0);
}
50��link��script
<link> ��href��� ����css��hypertext reference���ı����ã�ҳ����ص�hrefʱ����ͣ����
<script>��src��� ����script�ļ���source��Դ��ҳ���ͣ�����ȴ���Դ������ϣ���ִ���꣩������һ��js����body��������

51��Generator
����Generator����������һ�����������󣬴���Generator�������ڲ�ָ�룬�Ժ�ÿ�ε���generator�����next�������ͻ᷵��һ������value��done���ԵĶ���
�������ṩ��һ��������ִͣ�еĺ�����yield��������ͣ��־
yield�����ͬ�����еģ������첽���У�ʵ�ʲ�����һ����yield��䷵��promis����
���������԰�˳��һ��һ����ִ��

52��promis����
������״̬����������Ӱ�죬ֻ���첽�����Ľ�����Ծ�����ǰ����һ��״̬������һ��״̬�ı�Ͳ����ٱ仯
����promise���󣬾Ϳ��Խ��첽������ͬ���Ĳ��������̱�����

53���첽
js�ǵ��߳����ԣ����û���첽��̣�����û��ʹ��
ES6֮ǰ���첽��̷���:
1���ص�����
2���¼�����
3����������
4��promise
�ص���������������ڶ���ص�������Ƕ�ף��ҳ�һ�ţ�promise���Ƚ���������
Ȼ�����Generator������yield��������첽�����׶εķֽ��ߣ�Generator���������첽���������
ES7�������async��������ʵ����Generator�������﷨�� *�����asyne��yield�����await

54��class
�µ�classд��ֻ���﷨�ǣ����ӽ���ͳ���Ե�д�����ö���ԭ�͵�д����������

55��BFC�鼶��ʽ��������
��ЩԪ�ػ�����BFC
1����Ԫ��HTML
2��float���Բ�Ϊnone
3��positionΪabsolute��fixed
4��displayΪinline-block, table-cell, table-caption, flex, inline-flex
5��overflow��Ϊvisible
�ڲ���Box���ڴ�ֱ����һ����һ���ط��á�
Box��ֱ����ľ�����margin����������ͬһ��BFC����������Box��margin�ᷢ���ص�
ÿ��Ԫ�ص�margin box����ߣ� �������border box�������Ӵ�(���ڴ������ҵĸ�ʽ���������෴)����ʹ���ڸ���Ҳ����ˡ�
BFC�����򲻻���float box�ص���
BFC����ҳ���ϵ�һ������Ķ��������������������Ԫ�ز���Ӱ�쵽�����Ԫ�ء���֮Ҳ��ˡ�
����BFC�ĸ߶�ʱ������Ԫ��Ҳ������㣬��ֹ���и���Ԫ�صĸ�Ԫ�صĸ߶����ݣ�����취���Ǵ�������Ԫ�ص�BFC
Ӧ�ã�
BFC�����򲻻���float box�ص�-��Ӧ�������֣������Ϊ����Ԫ��
����ڲ���������Ԫ�ش���BFC��������Ԫ�صĸ߶�Ҳ��������
��ֹ��ֱ margin �ص�-��ͬһ��BFC��������ģ���е�һ����һ�����������Ҵ���BFC�������ͱ��������BFC����ֱ��߾�Ͳ������

56������jQueryԴ�������Щ�ŵ㣿
1��jQuery �����ʵ�֣�������������һ������ִ�к�������ıհ����棬Ϊ�˲���Ⱦȫ��������ֻ�ں��汩¶ $ �� jQuery �� 2 ����������磬�����ıܿ�������ͻ
2��jQuery Դ���ɬ�Ѷ�����һ��ԭ���ǣ�ʹ���˴����ķ������أ�����������ȴ�ܷ��㣺
3��
1��jQuery.extend(object) Ϊ��չ jQuery �౾��Ϊ������µľ�̬������

2��jQuery.fn.extend(object) �� jQuery �������ʵ��������Ҳ����ͨ����� extend ��ӵ��·�����ʵ������ jQuery ������ʹ�ã���Ϊ���ǹ����� jQuery.fn �ϵķ������������ᵽ��jQuery.fn = jQuery.prototype ���� 
1��jQuery.extend(): ���������߸���Ķ���ϲ�����һ�����У�

2��jQuery.fn.extend()���Ѷ�����ص� jQuery �� prototype ���ԣ�����չһ���µ� jQuery ʵ��������

Ҳ����˵��ʹ�� jQuery.extend() ��չ�ľ�̬���������ǿ���ֱ��ʹ�� $.xxx ���е��ã�xxx����չ�ķ���������

��ʹ�� jQuery.fn.extend() ��չ��ʵ����������Ҫʹ�� $().xxx ���á�
4����ʽ�ص�
��һ���ô��ϲ��ʹ�� jQuery ��ԭ����������ʽ���ã���һ���ʵ����ʵ�ܼ򵥣�ֻ��Ҫ��Ҫʵ����ʽ���õķ����ķ��ؽ������� this �����ܹ�ʵ����ʽ�����ˡ�




























		
		
		
		
		