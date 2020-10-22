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


var dashboardThreeValue = 0.49;
var dashboardThreeData = [dashboardThreeValue, dashboardThreeValue, dashboardThreeValue, dashboardThreeValue, dashboardThreeValue, ];
dashboardThreeOption = {

    series: [{
        type: 'liquidFill',
        radius: '70%',
        center: ['50%', '45%'],
        data: dashboardThreeData,
        // data: [],
        color: ['#2aaf66', '#38b470', '#49d088'],
        backgroundStyle: {
            borderWidth: 2,
            borderColor: 'rgb(214, 193, 0)',
            color: 'rgb(255,0,255,0.01)'
        },
        outline: { //外边
            // show: false
            borderDistance: 5,
            itemStyle: {
                borderWidth: 4,
                borderColor: 'rgb(25, 230, 117)',
            },
        },
        label: {
            normal: {
                // formatter: (utilizationValue * 100).toFixed(0) + '%',
                formatter: dashboardThreeValue * 100 + '%',
                textStyle: {
                    fontSize: 12
                }
            }
        }
    }],
};


dashboardThird.setOption(dashboardThreeOption);


// 简约百分比
var dashboardTwo = document.getElementById('dashboardSecond');
var dashboardSecond = echarts.init(dashboardTwo);

/*
 * 仪表盘所需数据
 */
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
