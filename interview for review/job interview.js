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
		
		
		
		
		
		
		
		