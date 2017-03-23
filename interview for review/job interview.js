主要是记录一些面试中不太会的问题，以及面试的经常的考点
1、谈谈cookies的利弊
优点： 极高的扩展性和可用性 
1) 数据持久性。 
2) 不需要任何服务器资源。 Cookie 存储在客户端并在发送后由服务器读取。 
3) 可配置到期规则。 控制 cookie 的生命期，使之不会永远有效。偷盗者很可能拿到一个过期的 cookie 。 
4) 简单性。 基于文本的轻量结构。 
5) 通过良好的编程，控制保存在 cookie 中的 session 对象的大小。 
6) 通过加密和安全传输技术（ SSL ），减少 cookie 被破解的可能性。 
7) 只在 cookie 中存放不敏感数据，即使被盗也不会有重大损失。 
缺点： 
1) Cookie 数量和长度的限制 。 
数量：每个域的 cookie 总数有限。 
a) IE6 或更低版本最多 20 个 cookie 
b) IE7 和之后的版本最后可以有 50 个 cookie 
c) Firefox 最多 50 个 cookie 
d) chrome 和 Safari 没有做硬性限制 
长度：每个 cookie 长度不超过 4KB （ 4096B ），否则会被截掉。 
2) 潜在的安全风险 。 Cookie 可能被拦截、篡改。如果 cookie 被拦截，就有可能取得所有的 session 信息。 
3) 用户配置为禁用 。有些用户禁用了浏览器或客户端设备接受 cookie 的能力，因此限制了这一功能。 
4) 有些状态不可能保存在客户端 。例如，为了防止重复提交表单，我们需要在服务器端保存一个计数器。如果我们把这个计数器保存在客户端，那么它起不到任何作用。

2、事件代理
Btn.addEventListener(“click”,function(){},true/false),true代表在事件捕获阶段调用事件处理程序，false表示在事件的冒泡阶段调用事件处理程序
Btn.addEventListener (“click”, handler, true/false)
Btn.removeEventListener(“click”, handler, true/false) 只有传入的参数全部一样才可以消除事件

IE添加事件的方式略有不同，
var btn = document.getElementById("myBtn");
btn.attachEvent("onclick",function(){})  对用的通过detachEvent移除事件

事件代理/委托 核心就是event.target||event.srcElement  只需要给父级元素添加事件，然后通过target判断是哪个子元素触发的事件

<div id="box">
    <input type="button" id="add" value="添加" />
    <input type="button" id="remove" value="删除" />
    <input type="button" id="move" value="移动" />
    <input type="button" id="select" value="选择" />
</div>

window.onload = function(){
            var oBox = document.getElementById("box");
            oBox.onclick = function (ev) {
                var ev = ev || window.event;
                var target = ev.target || ev.srcElement;
                if(target.nodeName.toLocaleLowerCase() == 'input'){
                    switch(target.id){
                        case 'add' :
                            alert('添加');
                            break;
                        case 'remove' :
                            alert('删除');
                            break;
                        case 'move' :
                            alert('移动');
                            break;
                        case 'select' :
                            alert('选择');
                            break;
                    }
                }
            }
            
        }
		//通过时间委托，给父元素添加事件，增加的子元素也会自动绑定事件
		window.onload = function(){
            var oBtn = document.getElementById("btn");
            var oUl = document.getElementById("ul1");
            var aLi = oUl.getElementsByTagName('li');
            var num = 4;
            
            //事件委托，添加的子元素也有事件
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
            
            //添加新节点
            oBtn.onclick = function(){
                num++;
                var oLi = document.createElement('li');
                oLi.innerHTML = 111*num;
                oUl.appendChild(oLi);
            };
        }
3、网络服务与安全https
1)TLS/SSL(安全传输层协议)：公钥秘钥结构，是一种非对称的结构，客户端发送给服务器的数据需要通过服务器端的公钥进行加密，反之如此；
2)数据传输过程中需要对得到的公钥进行认证，避免中间人(伪装的服务器端)的攻击，以确保公钥来自于目标服务器
3)采用数字证书的方式对公钥进行认证，里面包含了服务器的名称和主机名，服务器的公钥，签名办法机构的名称，在建立连接之前会确保公钥来自目标服务器，从而建立信赖关系。

4、http2.0
1)引入服务器推的概念，服务器主动发送数据；
2)提供更多的加密技术；
3)多路复用，只用一个http请求传输多个文件，这样就可以不用在前端进行文件的合并(本来的目的是减少http请求，但是对于文件的缓存不利)
4)首部压缩
//多路复用允许同时通过单一的 HTTP/2 连接发起多重的请求-响应消息，因此 HTTP/2 可以很容易的去实现多流并行而不用依赖建立多个 TCP 连接

5、es6的箭头函数和this对象
var f = x=>x; ||()=>x;||(num1,num2)=>{statsment}
1)箭头函数体内的this对象就是绑定了定义时所在的对象
2)当一个函数被保存为对象的一个属性时，我们称它为一个方法。当方法被调用时(通过 . 表达式或 [subscript] 下标表达式)，this 绑定到该对象。
3)通过函数调用模式调用的函数，this 指向 window。
4)如果在一个函数前面带上 new 来调用，那么背地里将会创建一个连接到该函数的 prototype 成员的新对象，同时 this 会绑定到那个新对象上;
5)apply/call 第一个参数是要要绑定给this的值

6、AagularJS的双向数据绑定的理解
最为核心的是：MVVM、模块化、自动化双向数据绑定、语义化标签、依赖注入等等
AngularJS使用$scope.$watch（视图到模型）以及$scope.$apply（模型到视图）来实现这个功能。MVVM的含义
视图view到控制器的清晰分离，使得前后端（提供和展示数据）之间连接非常方便
一个表达式是包含了js代码的字符串，在AngularJS context环境下执行，解析并在所关联的作用域下执行ng-controller创建新的作用域，有利于代码的模块化
Angularjs中无法访问window的全局作用函数，但是可以封装到对应的控制器中，控制器负责提供API
$watch,在指定的表达式改变时调用回调函数，每个作用域都会有一个监视器列表
$apply通知angularjs某些表达式改变了
$digest是将$watch和$apply绑定在一起的函数
网上的资料：
1)     	我们的浏览器一直在等待事件，比如用户交互。假如你点击一个按钮或者在输入框里输入东西，事件的回调函数就会在javascript解释器里执行，然后你就可以做任何DOM操作，等回调函数执行完毕时，浏览器就会相应地对DOM做出变化。Angular拓展了这个事件循环，生成一个有时成为angular context的执行环境（这是个重要的概念）。
2)每次你绑定一些东西到你的UI上时你就会往$watch队列里插入一条$watch。
3)digest将会遍历我们的watch，然后询问它是否有属性和值的变化，直$watch队列都检查过。
这就是所谓的dirtychecking。既然所有的$watch都检查完了，那就要问了：有没有$watch更新过？如果有至少一个更新过，这个循环就会再次触发，直到所有的$watch都没有变化。这样就能够保证每个model都已经不会再变化。记住如果循环超过10次的话，它将会抛出一个异常，防止无限循环。 当$digest循环结束时，DOM相应地变化。
4)通过$apply来进入angular context		
		
		
		
		
		
		
		
		