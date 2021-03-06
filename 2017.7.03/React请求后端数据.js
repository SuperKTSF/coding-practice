class ServiceList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            //我们使用state里面的services来保存所有的service
            //刚开始的时候，内容为空 
            services:[],
            //这里的view决定了我们要显示哪些service
            view:"type_a"
        }
    }
    
    render(){
        //当react库运行到render方法的时候,就会遍历所有state中service的项目
        const serviceShows = this.state.services.map((service,index)=>{
            //如果这个service的type和当前view相符，就把他添加到待显示内容的array中去
            if(service.type === this.state.view){
                return <div className="one-service" key={index}>{service}</div>
                //看到有说用index做为key是anti-pattern，这个我也没有过多研究
                //更好的方法肯定是用一些明确能代表数据的值，比如service.id这样会更好
                
                //但是有时候通过相同的index来欺骗react让他相信两个element是同一个element，又会有一些妙用
                //比如假如这里每个service会显示一个根据需要长度不同的label，css上面做一个transition效果
                //然后services分两批显示，即数量除以2，每次显示一半
                //如果使用不同的key，比如service.id，那么你会看到element不同的时候它们只是简单的被替换了
                //而如果总是使用每一批的index，那么你会看到label有一个动态的长度变换效果
                //因为react被我们欺骗了，label没有被替换，只是长度变化，所以css动画效果就生效了

            }
        })
        return(
            <div>
                {//这里，我们把待显示内容显示出来}
                {serviceShows}
            </div>
        )
    }
    
    //可以看到，我们的类被构造的时候本身自带的state中services是个空数组，我们需要用内容填充他
    //查看react的文档的《组件生命周期》这一页（这一页很重要，一定要明白各个函数在什么情况下会被触发），发现它建议我们在每个组件显示完毕
    //之后使用componentDidMount函数来获取需要的数据，那就照做
    componentDidMount(){
        //组件先按照services为空渲染一遍，你可以理解为先把网页框架渲染出来
        //渲染完毕之后就调用我们这里这个函数用ajax方法去服务器取数据
        const xhr = new XMLHttpRequest()
        //服务器随你喜欢，你可以用php，也可以用node，只要实现了标准的GET方法即可
        //对于post，put，delete等方法同理
        //而很显然，假如你的数据没有必要从数据库中提取，或者长期不变，也不怕泄密
        //那你完全可以在此请求一个json文件
        xhr.open("GET", "http://your.server.com/api/services", true)
        //根据情况选择是否要随get请求发送用于身份认证的信息
        xhr.withCredentials = true
        xhr.send()

        xhr.onreadystatechange = () =>{
            if(xhr.readyState == XMLHttpRequest.DONE){
                if(xhr.status == 200){
                    //你当然可以用其他方法编码你的返回信息，但是对于js的世界来说，还有什么比json更方便呢？
                    let gotServices = JSON.parse(xhr.responseText)
                    //好了，我们获得了service列表，使用setState方法覆盖当前元素的services数据
                    this.setState({
                        services : gotServices
                    })
                }
            }else{
                alert("ajax失败了")
            }
        }
    }
    
    //那么我们已经渲染了页面，也从服务器获得了数据，还把数据放到了应该放的位置，
    //还要做什么才能让我们写的这个component把新数据显示出来呢？
    //不用担心，react控制着所有的setState方法，
    //当他发现你对于某个component设置了新的state之后，他就会告诉那个component去再次执行render方法，
    //然后你再去看render方法，这次他因为this.state.services的内容不一样了自然就会渲染出不一样的内容啦
    //怎么样才能明显的感受到这一前一后两次渲染的存在呢？
    //在你的服务器端把刚才ajax请求的接口做个5秒钟的延迟，
    //你就会明显看到获得返回结果的那一瞬间新内容被刷出来啦
}


//金梦的项目中使用的的React组件与后端用fetch请求数据渲染
import ReactDOM from 'react-dom';
import NovaUtil from 'util';
import { Router, Route, hashHistory } from 'react-router';
import fetch from 'isomorphic-fetch'
import { Steps, Button, message, Row, Col, Card, Slider, Popconfirm, Progress, Icon, Carousel  } from 'antd';
import 'antd/dist/antd.min.css';
import './index.css';

import EchartsHistory from 'echarts-history';
import EchartsTempcpu from 'echarts-tempcpu';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            datasource:[],
            caculate:{
                energyM:null,
                energyE:null,
                healthy:null
            },
            curId: null,
            curShow: false,
            historyData: {
                lineDataX: [],
                lineDataY1: [],
                lineDataY2: []
            },
            machineLearningData:{
                lineDataY1: [],
                lineDataY2: []
            },
            showprocessid:false,
            showitem:null,
            flag:false,
        };
    }
    getTime(){
        let myDate = new Date();
        let time = `${myDate.getFullYear()}-${myDate.getMonth()+1}-${myDate.getDate()} ${myDate.getHours()}:${myDate.getMinutes()}:${myDate.getSeconds()}`;
        return time;
    }
    componentWillMount(){
        let url = "/universer/metrics/total";
        fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((res)=>res.json()).then((value)=>this.handletotle(value));
        let url2 = "/universer/metrics/realtime";
        fetch(url2, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((res)=>res.json()).then((value)=>this.handlerealtime(value));
    }
    handletotle(value){
        this.setState({
            caculate:{
                energyM:value.totalEnergy,
                energyE:value.totalPrice,
                healthy:value.totalHealth
            }
        })
    }
    handlerealtime(value){
        let tempdata = [];
        let length = value.length;
        for(let i=0;i<length;i++){
                tempdata[i] = {};
                tempdata[i].showhealthup = false;
                tempdata[i].showhealthdown = false;
                tempdata[i].showcpuup = false;
                tempdata[i].showcpudown = false;
                tempdata[i].showmemoryup = false;
                tempdata[i].showmemorydown = false;
                tempdata[i].id = i+1;
                tempdata[i].ip = value[i].ip;
                tempdata[i].state = value[i].alertFlag;
                tempdata[i].health = value[i].healthMetric;
                tempdata[i].cpu = value[i].cpuUtilization;
                tempdata[i].memory = value[i].memUtilization;
                tempdata[i].processid = value[i].cpuPid;
        }
        this.setState({
            datasource:tempdata,
            data:tempdata
        })
    }
    handlerealtimechange(value){
        let tempdata = [];
        let length = value.length;
        let datasource = this.state.datasource;
        for(let i=0;i<length;i++){
            tempdata[i] = {};
            tempdata[i].showhealthup = false;
            tempdata[i].showhealthdown = false;
            tempdata[i].showcpuup = false;
            tempdata[i].showcpudown = false;
            tempdata[i].showmemoryup = false;
            tempdata[i].showmemorydown = false;
            tempdata[i].id = i+1;
            tempdata[i].ip = value[i].ip;
            tempdata[i].state = value[i].alertFlag;
            tempdata[i].health = value[i].healthMetric;
            tempdata[i].cpu = value[i].cpuUtilization;
            tempdata[i].memory = value[i].memUtilization;
            tempdata[i].processid = value[i].cpuPid;
        }

        for(let j=0;j<length;j++){
            let health = parseInt(tempdata[j].health);
            let oldhealth = parseInt(datasource[j].health);
            if(health != oldhealth ){
                if(health > oldhealth)
                    tempdata[j].showhealthup =true;
                else if(health < oldhealth)
                    tempdata[j].showhealthdown =true;
            }
            let cpu = parseInt(tempdata[j].cpu);
            let oldcpu = parseInt(datasource[j].cpu);
            if(cpu != oldcpu ){
                if(cpu > oldcpu)
                    tempdata[j].showcpuup =true;
                else if(cpu < oldcpu)
                    tempdata[j].showcpudown =true;
            }
            let memory = parseInt(tempdata[j].memory);
            let oldmemory = parseInt(datasource[j].memory);
            if(memory != oldmemory ){
                if(memory > oldmemory)
                    tempdata[j].showmemoryup =true;
                else if(memory < oldmemory)
                    tempdata[j].showmemorydown =true;
            }
        }
        this.setState({
            datasource:tempdata,
            data:tempdata
        })
    }
    componentDidUpdate(){
        //这里写的自动发送请求的url
        let data = this.state.data;
        let length = data.length;
        let time = this.getTime();
        if(data[length-2] != null)
            if(data[length-2].state == 1 && data[length-2].ip == "http://172.20.34.98"){
                let url2 = `/controlled2/control/notify`;
                fetch(url2, {
                    method: "post",
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then((res)=>console.log(time));
            }
        if(data[length-1] != null)
            if(data[length-1].state == 1 && data[length-1].ip == "http://172.20.34.78"){
                let url2 = `/controlled/control/notify`;
                fetch(url2, {
                    method: "post",
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then((res)=>console.log(time));
            }
    }
    componentDidMount(){
        let urltotal = "/universer/metrics/total";
        setInterval(()=>{
                this.fetchTotal(urltotal);
            },1000*60*60)
        let urldata = "/universer/metrics/realtime";
        setInterval(()=>{
            this.fetchData(urldata);
        },1000*10)
    }
    fetchData(url){
        fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((res)=>res.json()).then((value)=>this.handlerealtimechange(value))
    }
    fetchTotal(url){
        fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((res)=>res.json()).then((value)=>this.handletotle(value))
    }
    handlemachineLearning(value,curId,curShow){
        let Yr1 = [];
        let Yr2 = [];
        for(let i=0;i<value.length;i++){
            if(value[i].tag==1){
                let length = Yr1.length;
                let a = value[i].cpuTemperature;
                let b = value[i].cpuUtilization ;
                let c = [b,a];
                Yr1[length] =c;
            }else if(value[i].tag==0){
                let length = Yr2.length;
                let a = value[i].cpuTemperature;
                let b = value[i].cpuUtilization ;
                let c = [b,a];
                Yr2[length] =c;
            }
        }
        this.setState({
            curId:curId,
            curShow:curShow,
            machineLearningData:{
                lineDataY1:Yr1,
                lineDataY2:Yr2
            }

        })
    }
    handlehistoryData(value,curId,curShow){
        let X = [];
        let Y1 = [];
        let Y2 = [];
        for(let i=0;i<value.length;i++){
            Y1[i]=value[i].cpuUtilization;
            Y2[i]=value[i].memUtilization;
            X[i]=value[i].time;
        }
        this.setState({
            curId:curId,
            curShow:curShow,
            historyData:{
                lineDataX:X,
                lineDataY1:Y1,
                lineDataY2:Y2
            },
        });

    }
    formatter(value) {
        return `${value}%`;
    }
    switchShow(curId, curShow ,ipaddress) {
        let url1 =  `/universer/metrics/offline?ip=${ipaddress}`;
        let url2 = `/universer/metrics/health?ip=${ipaddress}`;
        fetch(url1, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((res)=>res.json()).then((value)=>this.handlehistoryData(value,curId,curShow));

        fetch(url2, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((res)=>res.json()).then((value)=>this.handlemachineLearning(value,curId,curShow));
    }

    clickalert(e,item,ip,id){
        e.stopPropagation();
        this.setState({
            showprocessid:true,
            showitem:item
        })
        if(ip =="http://172.20.34.78"){
            let url2 = `/controlled/control/kill?pid=${id}`;
            fetch(url2, {
                method: "post",
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((res)=>console.log("成功"));
        }
        if(ip == "http://172.20.34.98"){
            let url1 = `/controlled2/control/kill?pid=${id}`;
            fetch(url1, {
                method: "post",
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((res)=>console.log("成功"));
        }
    }
    cancel(e) {
        e.stopPropagation();
        message.error('Click on No');
    }
    stopClick(e){
        e.stopPropagation();
    }

    render() {
        const { current, caculate } = this.state;
        let data = this.state.data;
        let num = 100/data.length;
        let length = 0;
            return (
                    <div className="box">
                        <div className="datashow">
                                <table className = "table-table">
                                    <tbody>
                                        <tr className="station-top-tr">
                                            <td className="station-td">
                                                <img src={require('./energy.png')} className="img-money"></img>
                                            </td>
                                            <td className="station-td">
                                                <img src={require('./money.png')} className="img-money"></img>
                                            </td>
                                            <td className="station-td" >
                                                <img src={require('./health.png')} className="img-money"></img>
                                            </td>
                                        </tr>
                                        <tr className="station-bottom-tr">
                                            <td className="station-td">
                                                <span>{caculate.energyM}</span><span className="unit-fontsize">KWh</span>
                                            </td>
                                            <td className="station-td">
                                                <span>{caculate.energyE}</span><span className="unit-fontsize">￥</span>
                                            </td>
                                            <td className="station-td">
                                                <span>{caculate.healthy}</span><span className="unit-fontsize">%</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            <div className="module-box">
                                        {
                                            data.map(f => {
                                                return(
                                                    <div
                                                        style={{width:`calc(${num}%)`}}
                                                        key={f.id}
                                                        className={f.id == this.state.curId ? "module-show-active" : "module-show"}
                                                        onClick={_=>this.switchShow(f.id,"true",f.ip)}>
                                                        <div className="module-title">
                                                            <span className="module-ip">{f.ip}</span>
                                                        </div>
                                                        <Row>
                                                            <Col span={18}>
                                                                <div className="module-item">
                                                                    <table>
                                                                        <tbody>
                                                                        <tr>
                                                                            <td>
                                                                                <img src={require('./health.png')} className="img-item"></img>
                                                                            </td>
                                                                            <td>
                                                                                <span className="text-item">{`${f.health}%`}</span>
                                                                            </td>
                                                                            <td>
                                                                                {f.showhealthup ? <img src={require('./arrowup.png')} className="img-arrow"></img> : null}
                                                                                {f.showhealthdown ? <img src={require('./arrowdown.png')} className="img-arrow"></img> : null}
                                                                            </td>
                                                                        </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                                <div className="module-item">
                                                                    <table>
                                                                        <tbody>
                                                                        <tr>
                                                                            <td>
                                                                                <img src={require('./cpu.png')} className="img-item"></img>
                                                                            </td>
                                                                            <td>
                                                                                <span className="text-item">{f.cpu}</span>
                                                                            </td>
                                                                            <td>
                                                                                {f.showcpuup ? <img src={require('./arrowup.png')} className="img-arrow"></img> : null}
                                                                                {f.showcpudown ? <img src={require('./arrowdown.png')} className="img-arrow"></img> : null}
                                                                            </td>
                                                                        </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                                <div className="module-item">
                                                                    <table>
                                                                        <tbody>
                                                                        <tr>
                                                                            <td>
                                                                                <img src={require('./memory.png')} className="img-item"></img>
                                                                            </td>
                                                                            <td>
                                                                                <span className="text-item">{f.memory}</span>
                                                                            </td>
                                                                            <td>
                                                                                {f.showmemoryup ? <img src={require('./arrowup.png')} className="img-arrow"></img> : null}
                                                                                {f.showmemorydown ? <img src={require('./arrowdown.png')} className="img-arrow"></img> : null}
                                                                            </td>
                                                                        </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </Col>
                                                            <Col span={6}>
                                                                <div className = "module-alert-box">

                                                                    {   (! f.state ) ?
                                                                        null :
                                                                        <div className="module-unsafe">
                                                                            <Popconfirm title={`是否杀死这个进程${f.processid}？`} onConfirm={(e)=>this.clickalert(e,f.id,f.ip,f.processid)} onCancel={this.cancel} okText="Yes" cancelText="No">
                                                                                <a href="#" onClick={(e)=>this.stopClick(e)} className="module-unsafe-a"><img src={require('./alarm.png')} className="alert-img"/></a>
                                                                            </Popconfirm>
                                                                        </div>}

                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                )})
                                        }

                            </div>
                        </div>
                        {
                            this.state.curShow ?
                                <Row className="bottom-box">
                                    <Col span={12}>
                                        <div style = {{ width: "90%", height: "400px" }}>
                                            <EchartsHistory
                                                lineDataX={this.state.historyData.lineDataX}
                                                lineDataY1={this.state.historyData.lineDataY1}
                                                lineDataY2={this.state.historyData.lineDataY2}
                                                />
                                        </div>
                                    </Col>
                                    <Col span={12}>
                                        <div style = {{ width: "90%", height: "400px" }}>
                                            <EchartsTempcpu
                                                lineDataY1={this.state.machineLearningData.lineDataY1}
                                                lineDataY2={this.state.machineLearningData.lineDataY2}
                                                />
                                        </div>
                                    </Col>
                                </Row>
                                : null
                        }
                    </div>
                )
    }
}

ReactDOM.render(<App />, document.getElementById('container'));