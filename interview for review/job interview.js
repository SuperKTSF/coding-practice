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

7、网易中有一道题提到了
function.length是指函数希望接收到的函数的参数，function.arguments.length是指实际接受到的参数的个数		

8、给出二叉树的前序排列和中序排列，求出后序排列的例子
一般的的做法是根据给出的两个条件快速的画出这个二叉树
例如 “3 5 6 7 8 9 10 11 12 13 14 15 18 20 25”和“11 7 5 3 6 9 8 10 15 13 12 14 20 18 25”		
以后就知道这种题怎么去解决了，可以很快的画出二叉树，然后桉树写出后序列表

9、经常遇到的问题，入栈顺序为 1234567，然后求出栈顺序
如果是简单的判断则比较好处理，直接从前往后推导就可以了，但是如果是求总次数，则比较麻烦
目前只会最蠢的办法，求出12345的全排列，然后依次判断每个全排列是否为合适的情况
'12'=2 '123'=5,'1234' = 14 '12345' = 42 '123456' = 132
var readline = require("readline");
var rl = readline.createInterface(process.stdin, process.stdout); 
var args = [];

rl.on("line", function(str){
    args.push(str);
    rl.close();
});
rl.on("close", function(){
	var arr = args[0].trim().split("");//输入一个字符串,变成字符数组
	var result = [];
	var str = "";
	result = sortString(arr,str,[]);   //result是'123456'的全排
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
		var isUsed = {};//这个是用来判断字符数组中是否有重复元素的
		for(var i=0;i<arr.length;i++){
			if(!isUsed[arr[i]]){
				var temp  = arr.splice(i,1); //获取一个元素，并从数组中删除
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
    //方法非常的巧妙，利用插入顺序插入，利用出栈顺序出栈，如果最后全部出栈为空，则为正确的出栈顺序
    var stack = [];
    for(var i=0,j=0;i<pushV.length;i++){
        stack.push(pushV[i]);
        //while循环的目的在于判断再插入的过程中何时会出现出栈
        while(j<popV.length&&stack[stack.length-1]==popV[j]){
            stack.pop();
            j++;
        }
    }
    
    return stack.length==0;
}

10、还有一道题是0~999999中出现3的个数
所有的问题都是有规律可循的
function NumberOf1Between1AndN_Solution(n,m)
{
    var temp=1;
    var nums=0;
    while(Math.floor(n/temp)){
		if(m!=0){
			var  ab = Math.floor(n/(temp*10));
			nums+=ab*temp;  //第一部分的次数
			var c = Math.floor(n%(temp*10)/temp);
			if(c>m){    //第二部分的次数
				nums+=temp;
			}else if(c==m){
            nums+=(n%temp+1);
			}
			temp*=10;			
		}else{
			var  ab = Math.floor(n/(temp*10));
			nums+=(ab-1)*temp;  //第一部分的次数
			var c = Math.floor(n%(temp*10)/temp);
			if(c>m){    //第二部分的次数
				nums+=temp;
			}else if(c==m){
            nums+=(n%temp+1);
			}
			temp*=10;
		}
    }
    return nums;   
}
11、客户端存储
1)本来有cookie，然后html5中的Web Storage包括了两种存储方式：sessionStorage和localStorage，并且有自己的API，不要像操作cookie那样自己封装API
2)sessionStorage用于本地存储一个会话（session）中的数据，这些数据只有在同一个会话中的页面才能访问并且当会话结束后数据也随之销毁。因此sessionStorage不是一种持久化的本地存储，仅仅是会话级别的存储。
3)而localStorage用于持久化的本地存储，除非主动删除数据，否则数据是永远不会过期的。	

12、CSS中 link 和@import 的区别是？
(1) link属于HTML标签，而@import是CSS提供的; 
(2) 页面被加载的时，link会同时被加载，而@import引用的CSS会等到页面被加载完再加载;
(3) import只在IE5以上才能识别，而link是HTML标签，无兼容问题; 
(4) link方式的样式的权重 高于@import的权重.

13、position的absolute与fixed共同点与不同点
1)相同点：都会脱离文档流，不占据空间；
2)改变元素呈现方式，display会被设置为block；
3)默认会被覆盖到非定位元素上
4)不用点就是相对的元素不同

14、介绍一下CSS的盒子模型？
W3C标准盒模型，context、padding、border、margin
IE盒模型，content部分包含了padding和border
对用与css3中的box-sizing属性。content-box,padding-box,border-box,

15、css选择器优先级算法
优先级算法：
1)、优先级就近原则，同权重情况下样式定义最近者为准;
2)、载入样式以最后载入的定位为准;
3)、!important >  id > class > tag  
4)、!important 比 内联优先级高(style)，但内联比 id 要高

16、css3有哪些特性
1. CSS3实现圆角（border-radius），阴影（box-shadow），
2. 对文字加特效（text-shadow、），线性渐变（gradient），旋转（transform）
3. transform:rotate(9deg) scale(0.85,0.90) translate(0px,-30px) skew(-9deg,0deg);// 旋转,缩放,定位,倾斜
4. 增加了更多的CSS选择器  多背景 rgba 
5. 在CSS3中唯一引入的伪元素是 ::selection.
6. 媒体查询，多栏布局
7. border-image	
8. 弹性盒子，display：flex；

17、为什么要初始化CSS样式
因为浏览器的兼容问题，不同浏览器对有些标签的默认值是不同的，如果没对CSS初始化往往会出现浏览器之间的页面显示差异。

18、块级格式上下文
BFC，块级格式化上下文，一个创建了新的BFC的盒子是独立布局的，它决定了元素如何对其内容进行布局，以及与其他元素的关系和相互作用

19、CSSSprites的理解
CSS Sprites其实就是把网页中一些背景图片整合到一张图片文件中，再利用CSS的“background-image”，“background- repeat”，“background-position”的组合进行背景定位
好地减少网页的http请求，从而大大的提高页面的性能，
但是有了http2之后就不用这么做了，因为可以复用http请求

20、谈谈语义化的理解
1. 去掉或者丢失样式的时候能够让页面呈现出清晰的结构
2. 有利于SEO：和搜索引擎建立良好沟通，有助于爬虫抓取更多的有效信息：爬虫依赖于标签来确定上下文和各个关键字的权重；
3. 方便其他设备解析（如屏幕阅读器、盲人阅读器、移动设备）以意义的方式来渲染网页；
4. 便于团队开发和维护，语义化更具可读性

21、html常见的兼容性问题
1)浏览器默认的margin和padding不同
解决方案：加一个全局的 *{margin:0;padding:0;} 来统一。
2)IE下，event对象有 x、y 属性，但是没有 pageX、pageY属性;

22、考察原型链的继承问题
var F=function(){};
         Object.prototype.a=function(){};
         Function.prototype .b=function(){};
         var f=new F();
分析：f是构造函数的实例，构造函数一般都继承Object对象，所以f.a可以访问到
但是f和f.constructor(Function)没有任何的关系，所以可通过f.constructor.b来访问b

23、一元操作符
在对非数值应用一元操作符+时，会类似使用Number(),进行类型转换

24、浮动float以及他的工作原理
浮动元素脱离文档流，不占据空间。浮动元素碰到包含它的边框或者浮动元素的边框停留。
float元素引发的问题：父元素无法撑开，同等级的非浮动元素会紧随浮动元素，造成重叠
解决浮动带来的问题：
1)浮动父元素；
2)给父元素添加clearfix样式
.clearfix:after{
	content:" ";
	height:0;
	clear:both;
	visibility:hidden;
	display:block;
}
3)额外标签法<div style="clear:both;"></div>(缺点是增加了无意义的标签)

25、html5有哪些新特性
1)语义化的标签
2)audio,video API
3)Canvas
4)Geolocation
5)localStorage,sessionStorage
6)WebSocket、webworker

26、如何实现浏览器内多个标签页之间的通信?
利用cookie或者localStorage等本地存储对象

27、如何对网站的文件和资源进行优化
1)尽可能减少http请求次数，将css, js, 图片各自合并,webpack所做的事情，但是有了http2后这样做就没有意义了
2)使用CDN(内容分发系统)，降低通信距离
3)配置实体标签ETag,或者添加Expire/Cache-Control头,服务器端明确的告诉客户端对文件进行缓存
4)启用Gzip压缩文件(服务器端文件),丑化处理,最小化css, js，减小文件体积
5)将css放在页面最上面 
6)将script放在页面最下面
7)避免在css中使用表达式 
8)将css, js都放在外部文件中 
9)减少DNS查询 
10)避免重定向 

28、减少页面加载时间，其实和上面的问题有相似的地方
减少http请求
优化图片文件减少其尺寸
压缩js、css代码
服务器启用gzip压缩功能
标明高度和宽度

29、null和undefined的区别
1)null表示对象为空,可以理解为指向空对象的指针，数值转换后为0，而undifined表示变量定义但未初始化
1. 变量被声明了，但没有赋值时，就等于 undefined 
2. 调用函数时，应该提供的参数没有提供，该参数等于 undefined 
3. 对象没有赋值的属性，该属性的值为 undefined 
4. 函数没有返回值时，默认返回 undefined
undefined派生自null所以undefined == null

30、js延迟加载的方式有哪些？
1)动态创建DOM script标签，在附上属性
2)promise new promise(function(reject,resolved){})
3)generator已经他升级过后的语法糖async
4)懒加载方式

31、如何解决跨域问题
1)最简单的跨域资源共享CORS，http的报文头，促使服务器和浏览器进行交流Origin Access-Control-Allow-Origin
2)jsonp.动态创建DOM，并在url中指定callback函数
3)document.domain 和iframe
4)websocket

32、内存泄露
任何对象在您不再拥有或需要它之后仍然存在
1)当页面中元素被移除或替换时，若元素绑定的事件仍没被移除,若不处理则会造成内存泄露
2)在两个对象彼此引用且彼此保留时，就会产生一个循环

33、node的优缺点
1)因为Node是基于事件驱动和无阻塞的，所以非常适合处理并发请求
2)前后端统一js，非常让人兴奋
缺点：
1) Node是一个相对新的开源项目，所以不太稳定，它总是一直在变。

34、前端工程师的理解
1)实现界面交互
2) 提升用户体验
3) 有了Node.js，前端可以实现服务端的一些事情
前景：
1) 前端是最贴近用户的程序员，前端的能力就是能让产品从 90分进化到 100 分，甚至更好
2) 参与项目，快速高质量完成实现效果图，精确到1px；
3) 与团队成员，UI设计，产品经理的沟通；
4) 做好的页面结构，页面重构和用户体验；
5) 处理hack，兼容、写出优美的代码格式；
6) 针对服务器的优化、拥抱最新前端技术。数据可视化，VR，物联网等等

35、http状态码
1)100：continue
2)200_请求成功 204_请求成功但是没有资源可以返回
3)301_永久重定向 302_临时重定向 303_临时重定向，但是指定get方法请求资源 304_服务器资源为更新请使用缓存
4)400_客户端的请求报文代码有问题 401_需要认证 403_禁止访问，没有权限 404_notfound
5)500_服务器无法访问，比如崩溃 503_服务器维修

36、一个页面从输入URL到出现页面这个过程中都发生了什么
网络传输部分：
1)浏览器开启一个线程处理这个请求，对URL进行分析，通常是http协议，按照web的方式处理
2)在远程DNS服务器上启动一个DNS查询。这能使浏览器获得请求对应的IP地址。并同时生成针对目标web浏览器的HTTP请求报文
3)浏览器与远程Web服务器通过TCP三次握手协商来建立一个TCP/IP连接，并将报文分割成报文段进行传输
4)一旦TCP/IP连接建立，浏览器会通过该连接向远程服务器发送HTTP的GET请求。远程服务器找到资源并使用HTTP响应返回该资源，值为200的HTTP响应状态表示一个正确的响应。
5)客户端开始下载资源。
浏览器渲染部分
页面开始渲染DOM，JS根据DOM API操作DOM,执行事件绑定等，页面显示完成

37、平时如何管理你的项目？
1)项目的构建，考虑到后期的维护性，所以采用分功能模块搭建项目
2)定义好全局样式
3)提前约定好编写习惯，对页面进行标注
4)图片都已像素大小统一命名

38、经常学习前端的网站
w3cfuns、Github、微博、nodejs、AngulaJS社区，w3cplus,百度前端学院

39、javascript对象的几种创建方式
1)工厂模式
2)构造函数模式
3)原型模式
4)混合构造函数和原型模式
5)寄生构造函数模式

40、继承党的方式
1)原型链继承，本质是重写原型对象
2)借用构造函数，在子类构造函数中，用Father.call(this),调用父类构造函数
3)组合的方式继承
4)在es6中由于有了class，继承直接采用extends进行继承

41、ajax的工作原理
var xhr = new XMLHttpRequest();
xhr.open("get",url,false)
xhr.onreadystatechange = function (){  //设置http请求状态变化函数
	if(xhr.readyState == 4){
		if(xhr.status >= 200&&xhr.status<300||xhr.status ==304){
			xhr.responseText //获取异步调用返回函数
		}
	}
};
xhr.send(null); //不需要通过请求主体发送数据
最后利用js和DOM对页面局部刷新

42、WEB攻击
1)XSS:跨站脚本攻击，实现准备好恶意的URL，等用户点击后，页面正常，但是输入的账户密码已经发到攻击者的服务器，禁止输入脚本，或者对脚本进行转义
2)SQL注入，对数据库进行操作
3)跨站请求伪造

43、'usestrict'严格模式解析
这种模式使得javascript在更高的标准下运行
1)消除javascript一些不合理不严谨地方
2)增加运行速度
3)为以后的版本做铺垫
缺点是文件压缩后“usestrict”会被放到中间

44、get和post的区别
GET：一般用于信息获取，使用URL传递参数，对所发送信息的数量也有限制，一般在2000个字符，缓存一般用get
POST：一般用于修改服务器上的资源，对所发送的信息没有限制
在以下情况中，请使用 POST 请求：
1. 无法使用缓存文件（更新服务器上的文件或数据库）
2. 向服务器发送大量数据（POST 没有数据量限制）
3. 发送包含未知字符的用户输入时，POST 比 GET 更稳定也更可靠

45、Javascript无阻塞加载具体方式：
1. 将脚本放在底部。<link>还是放在head中，用以保证在js加载前，能加载出正常显示的页面。<script>标签放在</body>前。
2. 阻塞脚本：由于每个<script>标签下载时阻塞页面解析过程，所以限制页面的<script>总数也可以改善性能。适用于内联脚本和外部脚本。
3. 非阻塞脚本：等页面完成加载后，再加载js代码。也就是，在 window.onload 事件发出后开始下载代码。
4. script标签的defer属性，延迟加载：支持IE4和fierfox3.5更高版本浏览器
5. 动态脚本元素：文档对象模型（DOM）允许你使用js动态创建HTML的几乎全部文档内容。

46、eval是做什么的？
1)它的功能是把对应的字符串解析成JS代码并运行
2)应该避免使用eval，不安全，非常耗性能（2次，一次解析成js语句，一次执行）

47、通用的时间侦听函数
主要是区分IE和其他浏览区
1)添加事件 element.addEventListener(type,hander,false) false表示事件冒泡，因为IE不支持时间捕获 element.attachEvent('on'+type,function(handler.apply(this){})
2)移除事件 element.removeEventListener(type,hander,false) element.detachEvent();
3)阻止事件 event.stopPropagation() event.cancelBubble =true;
4)消除事件默认行为 event.preventDefault()  event.returnValue = false;
5)获取事件目标 event.target event.srcElement
6)获取event对象的引用  event = event || window.event;

48、原型链
原型链是由一些用来继承和共享属性的对象组成的（有限的）对象链，
访问对象的属性时，从原型链一次向上查找

49、cookies的操作，没有原生API
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
// 获取cookie
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
// 删除cookie
function unsetCookie(name) {
    document.cookie = name + "= ; expires=" + new Date(0);
}
50、link和script
<link> 和href配合 加载css，hypertext reference超文本引用，页面加载到href时不会停下来
<script>和src配合 加载script文件，source资源，页面会停下来等待资源加载完毕（并执行完），所以一般js放在body的最下面

51、Generator
调用Generator函数，返回一个遍历器对象，代表Generator函数的内部指针，以后每次调用generator对象的next方法，就会返回一个有着value和done属性的对象
本质是提供了一个可以暂停执行的函数，yield语句就是暂停标志
yield语句是同步运行的，不是异步运行，实际操作中一般让yield语句返回promis对象
多个任务可以按顺序一个一个的执行

52、promis对象
有三个状态，不受外界的影响，只有异步操作的结果可以决定当前是哪一种状态，并且一旦状态改变就不会再变化
有了promise对象，就可以将异步操作以同步的操作的流程表达出来

53、异步
js是单线程语言，如果没有异步编程，基本没法使用
ES6之前的异步编程方法:
1、回调函数
2、事件监听
3、发布订阅
4、promise
回调函数的问题就在于多个回调函数的嵌套，乱成一团，promise最先解决这个问题
然后就是Generator函数，yield命令就是异步两个阶段的分界线，Generator函数就是异步任务的容器
ES7提出的了async函数，其实就是Generator函数的语法糖 *变成了asyne，yield变成了await

54、class
新的class写法只是语法糖，更接近传统语言的写法，让对象原型的写法更加清晰

55、BFC块级格式化上下文
哪些元素会生成BFC
1、根元素HTML
2、float属性不为none
3、position为absolute或fixed
4、display为inline-block, table-cell, table-caption, flex, inline-flex
5、overflow不为visible
内部的Box会在垂直方向，一个接一个地放置。
Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠
每个元素的margin box的左边， 与包含块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。
BFC的区域不会与float box重叠。
BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。
计算BFC的高度时，浮动元素也参与计算，防止具有浮动元素的父元素的高度塌陷，解决办法就是触发父级元素的BFC
应用：
BFC的区域不会与float box重叠-对应两栏布局，左侧栏为浮动元素
清除内部浮动，父元素触发BFC，将浮动元素的高度也计算在内
防止垂直 margin 重叠-将同一个BFC的两个盒模型中的一个套一层容器，并且触发BFC条件，就变成了两个BFC，垂直外边距就不会叠加

56、看过jQuery源码后有哪些优点？
1、jQuery 具体的实现，都被包含在了一个立即执行函数构造的闭包里面，为了不污染全局作用域，只在后面暴露 $ 和 jQuery 这 2 个变量给外界，尽量的避开变量冲突
2、jQuery 源码晦涩难读的另一个原因是，使用了大量的方法重载，但是用起来却很方便：
3、
1）jQuery.extend(object) 为扩展 jQuery 类本身，为类添加新的静态方法；

2）jQuery.fn.extend(object) 给 jQuery 对象添加实例方法，也就是通过这个 extend 添加的新方法，实例化的 jQuery 对象都能使用，因为它是挂载在 jQuery.fn 上的方法（上文有提到，jQuery.fn = jQuery.prototype ）。 
1）jQuery.extend(): 把两个或者更多的对象合并到第一个当中，

2）jQuery.fn.extend()：把对象挂载到 jQuery 的 prototype 属性，来扩展一个新的 jQuery 实例方法。

也就是说，使用 jQuery.extend() 拓展的静态方法，我们可以直接使用 $.xxx 进行调用（xxx是拓展的方法名），

而使用 jQuery.fn.extend() 拓展的实例方法，需要使用 $().xxx 调用。
4、链式回调
另一个让大家喜爱使用 jQuery 的原因是它的链式调用，这一点的实现其实很简单，只需要在要实现链式调用的方法的返回结果里，返回 this ，就能够实现链式调用了。




























		
		
		
		
		