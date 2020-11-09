/**
 * 词云图
 * @opt 图表的option
 * @fn  图表的点击方法
 **/
class wordCloudEcharts extends Echarts{
    constructor(opt,fn){
        super(opt,fn);//在this之前调用super，实际上就是调用父类的构造函数
        this.setOption();
    }
}

//词云图公用option
let wordCloudOption =()=> {
    const option = {
        tooltip: {
            show: true
        },
        series: [{
            name: '',
            type: 'wordCloud',
            gridSize: 5,  // 单词之间的间隔大小
            //size: ['9%', '99%'],
            sizeRange: [15, 60], //最小字体和最大字体
            //textRotation: [0, 45, 90, -45],
            rotationRange: [-45, 90],// 字体旋转角度的范围，这里是-45度到90度
            //shape: 'star', // 词云的形状，
            textPadding: 0,
            autoSize: {
                enable: true,
                minSize: 100
            },
            textStyle: {
                normal: {
                    color: function() {
                        return 'rgb(' + [
                            Math.round(Math.random() * 160),
                            Math.round(Math.random() * 160),
                            Math.round(Math.random() * 160)
                        ].join(',') + ')';
                    }
                },
                emphasis: {
                    shadowBlur: 5,
                    shadowColor: '#333'
                }
            },
            data: []
        }]
    };
    return option;
}


var JosnList = [];
JosnList.push({
    name: "数据可视化",
    value: 2000
}, {
    name: "商业智能",
    value: 520
}, {
    name: "报表系统",
    value: 666
}, {
    name: "数据报送",
    value: 788
}, {
    name: "数据采集",
    value: 777
}, {
    name: "管理看板",
    value: 688
}, {
    name: "移动报表",
    value: 588
}, {
    name: "数据分析",
    value: 516
}, {
    name: "区块链",
    value: 515
}, {
    name: "人工智能",
    value: 683
}, {
    name: "数据挖掘",
    value: 562
}, {
    name: "数据治理",
    value: 549
}, {
    name: "数据中心",
    value: 600
}, {
    name: "中国式报表",
    value: 700
},{
    name: "企业报表平台",
    value: 620
},{
    name: "自助分析平台",
    value: 650
},{
    name: "多维度分析",
    value: 550
},{
    name: "可视化仪表盘",
    value: 690
},{
    name: "office分析报告",
    value: 590
},{
    name: "移动报表",
    value: 490
},{
    name: "即席查询和分析",
    value: 690
}, );
let worlCloudOneData = {
    id:'wordCloud',
    seriesData:[{name:'热点分析',type:'wordCloud',data:JosnList}]
}
let wordCloud_chart = new wordCloudEcharts(GetOpiton(worlCloudOneData,wordCloudOption()));




