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






















		
		
		
		
		