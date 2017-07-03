class ServiceList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            //����ʹ��state�����services���������е�service
            //�տ�ʼ��ʱ������Ϊ�� 
            services:[],
            //�����view����������Ҫ��ʾ��Щservice
            view:"type_a"
        }
    }
    
    render(){
        //��react�����е�render������ʱ��,�ͻ��������state��service����Ŀ
        const serviceShows = this.state.services.map((service,index)=>{
            //������service��type�͵�ǰview������Ͱ�����ӵ�����ʾ���ݵ�array��ȥ
            if(service.type === this.state.view){
                return <div className="one-service" key={index}>{service}</div>
                //������˵��index��Ϊkey��anti-pattern�������Ҳû�й����о�
                //���õķ����϶�����һЩ��ȷ�ܴ������ݵ�ֵ������service.id���������
                
                //������ʱ��ͨ����ͬ��index����ƭreact������������element��ͬһ��element���ֻ���һЩ����
                //�����������ÿ��service����ʾһ��������Ҫ���Ȳ�ͬ��label��css������һ��transitionЧ��
                //Ȼ��services��������ʾ������������2��ÿ����ʾһ��
                //���ʹ�ò�ͬ��key������service.id����ô��ῴ��element��ͬ��ʱ������ֻ�Ǽ򵥵ı��滻��
                //���������ʹ��ÿһ����index����ô��ῴ��label��һ����̬�ĳ��ȱ任Ч��
                //��Ϊreact��������ƭ�ˣ�labelû�б��滻��ֻ�ǳ��ȱ仯������css����Ч������Ч��

            }
        })
        return(
            <div>
                {//������ǰѴ���ʾ������ʾ����}
                {serviceShows}
            </div>
        )
    }
    
    //���Կ��������ǵ��౻�����ʱ�����Դ���state��services�Ǹ������飬������Ҫ�����������
    //�鿴react���ĵ��ġ�����������ڡ���һҳ����һҳ����Ҫ��һ��Ҫ���׸���������ʲô����»ᱻ������������������������ÿ�������ʾ���
    //֮��ʹ��componentDidMount��������ȡ��Ҫ�����ݣ��Ǿ�����
    componentDidMount(){
        //����Ȱ���servicesΪ����Ⱦһ�飬��������Ϊ�Ȱ���ҳ�����Ⱦ����
        //��Ⱦ���֮��͵��������������������ajax����ȥ������ȡ����
        const xhr = new XMLHttpRequest()
        //����������ϲ�����������php��Ҳ������node��ֻҪʵ���˱�׼��GET��������
        //����post��put��delete�ȷ���ͬ��
        //������Ȼ�������������û�б�Ҫ�����ݿ�����ȡ�����߳��ڲ��䣬Ҳ����й��
        //������ȫ�����ڴ�����һ��json�ļ�
        xhr.open("GET", "http://your.server.com/api/services", true)
        //�������ѡ���Ƿ�Ҫ��get���������������֤����Ϣ
        xhr.withCredentials = true
        xhr.send()

        xhr.onreadystatechange = () =>{
            if(xhr.readyState == XMLHttpRequest.DONE){
                if(xhr.status == 200){
                    //�㵱Ȼ��������������������ķ�����Ϣ�����Ƕ���js��������˵������ʲô��json�������أ�
                    let gotServices = JSON.parse(xhr.responseText)
                    //���ˣ����ǻ����service�б�ʹ��setState�������ǵ�ǰԪ�ص�services����
                    this.setState({
                        services : gotServices
                    })
                }
            }else{
                alert("ajaxʧ����")
            }
        }
    }
    
    //��ô�����Ѿ���Ⱦ��ҳ�棬Ҳ�ӷ�������������ݣ��������ݷŵ���Ӧ�÷ŵ�λ�ã�
    //��Ҫ��ʲô����������д�����component����������ʾ�����أ�
    //���õ��ģ�react���������е�setState������
    //�������������ĳ��component�������µ�state֮�����ͻ�����Ǹ�componentȥ�ٴ�ִ��render������
    //Ȼ������ȥ��render�������������Ϊthis.state.services�����ݲ�һ������Ȼ�ͻ���Ⱦ����һ����������
    //��ô���������Եĸ��ܵ���һǰһ��������Ⱦ�Ĵ����أ�
    //����ķ������˰Ѹղ�ajax����Ľӿ�����5���ӵ��ӳ٣�
    //��ͻ����Կ�����÷��ؽ������һ˲�������ݱ�ˢ������
}


//���ε���Ŀ��ʹ�õĵ�React���������fetch����������Ⱦ
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
        //����д���Զ����������url
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
            }).then((res)=>console.log("�ɹ�"));
        }
        if(ip == "http://172.20.34.98"){
            let url1 = `/controlled2/control/kill?pid=${id}`;
            fetch(url1, {
                method: "post",
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((res)=>console.log("�ɹ�"));
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
                                                <span>{caculate.energyE}</span><span className="unit-fontsize">��</span>
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
                                                                            <Popconfirm title={`�Ƿ�ɱ���������${f.processid}��`} onConfirm={(e)=>this.clickalert(e,f.id,f.ip,f.processid)} onCancel={this.cancel} okText="Yes" cancelText="No">
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