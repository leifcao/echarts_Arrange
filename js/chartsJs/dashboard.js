// -------------------仪表盘-----------------
var dashboardOne = document.getElementById('dashboardFirst')
var dashboardFirst = echarts.init(dashboardOne)

let dashboardOneOption = {
    tooltip: {
        formatter: "{a} <br/>{c}%"
    },
    series: [{
        name: '业务指标',
        type: 'gauge',
        // radius: '80%',
        min: 0, //最小值
        max: 100, //最大值
        splitNumber: 10, //分几段
        splitLine: {           // 分隔线
            show:true,
            length:20,
            lineStyle:{
                width:1,
            }
        },
        axisLine: {  // 盘轴线
            show: true,
            lineStyle: {
                width: 20,  //盘轴的宽度
                color: [  // 颜色比例
                    [0.3, colorList[2]],
                    [0.7, colorList[1]],
                    [1, colorList[0]]
                ]
            }
        },
        axisLabel: {  // 轴文字
            textStyle: {
                fontSize: '12',
            }
        },
        axisTick: {   // 坐标轴小标记
            show:true,
            length:8,
            lineStyle:{
                width:1,
            }
        },
        pointer: {  // 指针默认
            // width:10,
            // length:'70%'
        },
        detail: {
            show: true,
            offsetCenter: [0, '70%'],
            textStyle: {
                fontSize: 20,
                fontWeight: 'bold'
            },
            formatter: [
                '{value} ' + '%',
                '{name|' + '完成率}'
            ].join('\n'),
            rich: {
                name: {
                    fontSize: 14,
                    lineHeight: 30,
                    color: textColor,
                }
            },
        },
        data: [{
            value: 60,
        }],

    }]
};
dashboardFirst.setOption(dashboardOneOption);





// --------------水环图--------------
var dashboardThree = document.getElementById('dashboardThird')
var dashboardThird = echarts.init(dashboardThree);

let liquidFill = {
    color:['#10B9FF', '#10B9FF', '#10B9FF'], //水波
    thin_Radius:['84%', '84.5%'],  // 外层细环
    thick_Radius:['82%', '86.5%'], // 外层粗环
    total_Value:100,  // 总数
    value:30  // 数值
}

let dashboardThreeOption = {

    series: [{
        type: 'liquidFill',
        radius: '78%',
        center: ['50%', '50%'],
        color: liquidFill.color,//水波
        data: [0.5, 0.5, 0.5], // data个数代表波浪数
        backgroundStyle: {
            borderWidth: 1,
            color: 'transparent'
        },
        outline: {
            show: true,
            itemStyle: {
                borderColor: '#10B9FF',
                borderWidth: 2
            },
            borderDistance: 3
        },
        label: {
            normal: {
                // formatter: (utilizationValue * 100).toFixed(0) + '%',
                formatter: (liquidFill.value /liquidFill.total_Value)*100 + '%',
                textStyle: {
                    fontSize: 12
                }
            }
        }
    },
        {
            name: '外层细环',
            type: 'pie',
            radius: liquidFill.thin_Radius,
            center: ["50%", "50%"],
            hoverAnimation: false,
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                    },
                }
            },
            data: [{
                value: liquidFill.total_Value,
                itemStyle: {
                    normal: {
                        color: "#10B9FF",
                    }
                }
            }]
        },
        {
            name: '外层粗环',
            type: 'pie',
            radius: liquidFill.thick_Radius,//使得细环位于粗环中间
            center: ["50%", "50%"],
            hoverAnimation: false,
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                    },
                }
            },
            data: [{
                value: liquidFill.value,
                itemStyle: {
                    normal: {
                        color: "#10B9FF"
                    }
                }
            },
                {
                    value: liquidFill.total_Value-liquidFill.value,
                    itemStyle: {
                        normal: {
                            color: 'transparent',
                        }
                    }
                }
            ]
        }

    ]
};


dashboardThird.setOption(dashboardThreeOption);


// 简约百分比
var dashboardTwo = document.getElementById('dashboardSecond');
var dashboardSecond = echarts.init(dashboardTwo);

/**
 * 仪表盘所需数据
 * */
var gaugeData = {
    value: 0.90,
    total: 125000
}

var dashboardTwoOption = {
    backgroundColor: '#fff',
    series: [{
        name: "仪表盘",
        type: "gauge",
        splitNumber: 10,
        axisLine: {
            lineStyle: {
                color: [
                    [gaugeData.value, colorList[0]], //外环基础色
                    [1, "#f7f9fc"]
                ],
                width: 10
            }
        },
        axisLabel: {
            show: false,
        },
        axisTick: {
            show: false,

        },
        splitLine: {
            show: false,
        },
        itemStyle: {
            show: false,
        },
        detail: {
            formatter: function(value) {
                return `${value*100}%`
            },
            offsetCenter: [0, 0],
            textStyle: {
                fontSize: '32',
                fontWeight: '600',
                color: textColor
            }
        },
        title: {
            // offsetCenter: [0, "100%"],
            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                // fontWeight: 'bolder',
                // fontSize: 10,
                color:textColor
            }
        },

        pointer: {
            show: false,
            length: '65%',
            width: 10, //指针粗细
        },
        data: [{
            "name": "水资源",
            "value": gaugeData.value,
        }],
    }]
}

dashboardSecond.setOption(dashboardTwoOption);



/**
 * 多个仪表盘
 * */



let dashboardFourOption = {
    backgroundColor:'',
    series : [
        {
            type: 'gauge',
            z: 3,
            min: 0,
            max: 15,
            startAngle:200,
            endAngle:-20,
            radius: '70%',
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    width: 25,
                    shadowColor:'#0092EE',
                    shadowBlur:50,
                    color:[[0.2, '#0092EE'], [1, '#BECAD8']],
                }
            },
            axisLabel:{
                show:false,
                fontSize: 34,

            },
            axisTick: {            // 坐标轴小标记
                show:true,
                length:10,
                lineStyle:{
                    width:3,
                }
            },
            pointer: {
                width:20,
                length:'70%'
            },
            splitLine: {           // 分隔线
                show:true,
                length:30,
                lineStyle:{
                    width:3,
                }
            },
            title: {
                offsetCenter: [0, '-20%'],       // x, y，单位px
                fontSize:45,
                color:'#fff',
            },
            detail: {
                fontSize:40,
                color:'#fff',
                formatter: function (value) {
                    return '{a|'+value+'}亿元';
                },
                rich:{
                    a:{
                        fontSize:45,
                        color:'#0093EE'
                    }
                }
            },
            data:[{value:3.15, name: '利润总额'}]
        },
        {
            type: 'gauge',
            center: ['18%', '58%'],    // 默认全局居中
            radius: '55%',
            min:0,
            max:12,
            startAngle:200,
            endAngle:50,
            splitNumber:8,
            axisLabel:{
                show:false,
                fontSize:34,
            },
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    width: 18,
                    shadowColor:'#0092EE',
                    shadowBlur:50,
                    color:[[0.2, '#0092EE'], [0.8, '#0092EE'], [1, '#BECAD8']],
                }
            },
            axisTick: {            // 坐标轴小标记
                show:true,
                length:7,
                lineStyle:{
                    width:3,
                }
            },
            pointer: {
                width:13,
                length:'70%'
            },
            splitLine: {           // 分隔线
                show:true,
                length:23,
                lineStyle:{
                    width:3,
                }
            },
            title: {
                offsetCenter: [0, '-20%'],       // x, y，单位px
                fontSize:45,
                color:'#fff',
            },
            detail: {
                fontSize:40,
                color:'#fff',
                formatter: function (value) {
                    return '{a|'+value+'}亿元';
                },
                rich:{
                    a:{
                        fontSize:45,
                        color:'#0093EE'
                    }
                }
            },
            data:[{value: 2.36, name: '母公司'}]
        },
        {
            type: 'gauge',
            center: ['82%', '58%'],    // 默认全局居中
            radius: '55%',
            min:0,
            max:2,
            startAngle:130,
            endAngle:-20,
            splitNumber:4,
            axisLabel:{
                show:false,
                fontSize:34,
            },
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    width: 18,
                    shadowColor:'#0092EE',
                    shadowBlur:50,
                    color:[[0.2, '#BECAD8'], [0.8, '#0092EE'], [1, '#25C0C8']],
                }
            },
            axisTick: {            // 坐标轴小标记
                show:true,
                length:7,
                lineStyle:{
                    width:3,
                }
            },
            pointer: {
                width:13,
                length:'70%'
            },
            splitLine: {           // 分隔线
                show:true,
                length:23,
                lineStyle:{
                    width:3,
                }
            },
            title: {
                offsetCenter: [0, '-20%'],       // x, y，单位px
                fontSize:45,
                color:'#fff',
            },
            detail: {
                fontSize:40,
                color:'#fff',
                formatter: function (value) {
                    return '{a|'+value+'}亿元';
                },
                rich:{
                    a:{
                        fontSize:45,
                        color:'#0093EE'
                    }
                }
            },
            data:[{value: 0.79, name: '子公司'}]
        },

    ]
};

var dashboardFourth = initEcharts('dashboardFouth',)
dashboardFourth.setOption(dashboardFourOption);
