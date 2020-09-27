// 折线图模块
let linelegend = ["调用次数", "成功次数", "失败次数"];

let xData = ['2020-09-01', '2020-09-02', '2020-09-03', '2020-09-04'];

let line, lineChart;


let lineOption = {

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
            label: {
                backgroundColor: textColor
            }
        },
    },
    legend: {
        data: linelegend,
        textStyle: {
            fontWeight: 'normal',
            fontSize: 12,
            color: textColor
        }
    },
    grid: {
        top: '10%',
        left: '5%',
        bottom: '2%',
        containLabel: true
    },

    color: colorList,
    xAxis: {
        type: 'category',
        boundaryGap: true,
        data: xData,
        axisLine: {
            lineStyle: {
                color: 'rgba(0,0,0,0.5)',
            }
        },
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false
        },
        //轴线上的字
        axisLabel: {
            show: true,
            textStyle: {
                color: textColor,
                fontSize: '12'
            }
        },

    },
    yAxis: {
        type: 'value',
        splitNumber: 4,
        axisTick: {
            show: false
        },
        //轴线上的字
        axisLabel: {
            textStyle: {
                fontSize: '12',
                color: textColor
            }
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(0,0,0,0.5)',
            }
        },
        //网格线
        splitLine: {
            lineStyle: {
                // color: 'rgba(255,255,255,0.1)',
                color: 'rgba(0,0,0,0.1)',
            }
        }

    },
    series: [{
            name: '调用次数',
            type: 'line',
            label: {
                normal: {
                    show: true,
                    position: 'top',
                }
            },
            data: [120, 1000, 101, 500]
        },
        {
            name: '成功次数',
            type: 'line',
            label: {
                normal: {
                    show: true,
                    position: 'top',
                }
            },
            data: [220, 500, 191, 900]
        },
        {
            name: '失败次数',
            type: 'line',
            label: {
                normal: {
                    show: true,
                    position: 'top',
                }
            },
            data: [300, 232, 600, 400]
        },
    ],
    animationDuration: 2500, //控制渲染速度

};
line = document.getElementById('lines');
lineChart = echarts.init(line);
lineChart.setOption(lineOption);


let linelegend2 = ["入库数量", "出库数量", ];


//区域堆积图
areaLineOption = {
    title: {
        text: ''
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow', //cross
            label: {
                backgroundColor: textColor
            }
        },
    },
    color: colorList,
    legend: {
        data: linelegend2,
    },
    grid: {
        top: '10%',
        left: '5%',
        bottom: '2%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: true,
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        axisTick: {
            show: false
        },
    },
    yAxis: {
        type: 'value',
        axisTick: {
            show: false
        },

    },
    series: [{
            name: '入库数量',
            type: 'line',
            areaStyle: {},
            label: {
                normal: {
                    show: true,
                    position: 'top',
                }
            },
            data: [180, 160, 140, 88, 30, 75, 100, 86, 78, 28, 39, 67]
        },
        {
            name: '出库数量',
            type: 'line',
            areaStyle: {},
            label: {
                normal: {
                    show: true,
                    position: 'top',
                }
            },
            data: [150, 90, 30, 188, 99, 88, 40, 56, 45, 66, 78, 90]
        },
    ],

};


let areaLine = document.getElementById('areaLine');
let areaLineChart = echarts.init(areaLine);
areaLineChart.setOption(areaLineOption);


// 双Y轴折线

var legendData = [];
var xAxisData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
var seriesName1 = "机房温度";
var seriesName2 = "机房湿度";
var seriesData1 = [10, 10.9, 12.4, 13.6, '', '', 24.6, 18.5, 18.7, 19.9, 30.8, 15.4, 16.9];
var seriesData2 = [12.6, 13.6, 11.6, 15.7, 16.6, 17.6, 16.7, 15.1, 22.4, 23.5, 13.6, 16.6, 19.6];

let doubleLinesOption = {
    tooltip: { //提示框组件
        trigger: 'axis',
        formatter: function(params) {　　
            var result = ''　　
            params.forEach(function(item) {　
                // console.log(item);　　
                var unit = item.seriesName == '机房温度' ? '°C' : '%';
                result += `${item.marker}${item.seriesName}${item.data}${unit}</br>`
            })　　
            return result;
        },
        axisPointer: {
            type: 'shadow',
            label: {
                backgroundColor: textColor
            }
        },
    },
    grid: {
        left: '1%',
        right: '1%',
        bottom: '2%',
        top: '10%',
        padding: '0 0 0 0',
        containLabel: true,
    },
    legend: {
        top: 'top',
        textStyle: {
            color: textColor,
            fontStyle: 'normal',
            fontFamily: '微软雅黑',
            fontSize: 12,
        },
        data: name,
    },
    xAxis: {
        type: 'category',
        boundaryGap: true, //坐标轴两边留白
        data: xAxisData,
        axisLabel: { //坐标轴刻度标签的相关设置。
            interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
            // margin: 10,
            textStyle: {
                color: textColor,
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 12,
            }
        },
        axisTick: { //坐标轴刻度相关设置。
            show: false,
        },
        axisLine: { //坐标轴轴线相关设置
            lineStyle: {
                color: textColor,
            }
        },
        splitLine: { //坐标轴在 grid 区域中的分隔线。
            show: false,
        }
    },
    yAxis: [{
            type: 'value',
            splitNumber: 5,
            axisLabel: {
                formatter: '{value}°C',
                textStyle: {
                    color: textColor,
                    fontStyle: '{value}',
                    fontFamily: '微软雅黑',
                    fontSize: 12,
                }
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: textColor
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#000'],
                    opacity: 0.06
                }
            }

        },
        {
            type: 'value',
            splitNumber: 5,
            axisLabel: {
                formatter: '{value}%',
                textStyle: {
                    color: textColor,
                    fontStyle: '{value}',
                    fontFamily: '微软雅黑',
                    fontSize: 12,
                }
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: textColor
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: ['#000'],
                    opacity: 0.06
                }
            }

        }
    ],
    series: [{
            name: seriesName1,
            type: 'line',
            data: seriesData1,
            // symbolSize: 11,
            barWidth: 10,
            // connectNulls: true, //断点连接
            barGap: 0, //柱间距离
            label: {
                normal: {
                    show: true,
                    position: 'top',
                }
            },
            itemStyle: { //图形样式
                normal: {
                    barBorderRadius: 20,
                    color: '',
                },
            },
        },
        {
            name: seriesName2,
            type: 'line',
            data: seriesData2,
            // connectNulls: true, //断点连接
            // symbolSize: 11,
            yAxisIndex: 1,
            barWidth: 10,
            barGap: 1, //柱间距离
            label: {
                normal: {
                    show: true,
                    position: 'top',
                }
            },
            itemStyle: { //图形样式
                normal: {
                    barBorderRadius: 20,
                    color: '',
                },
            },
        },

    ]
};
// 动态设置颜色
setSeriesColor(doubleLinesOption.series);

let doubleLines = document.getElementById('doubleLines');
let doubleLinesChart = echarts.init(doubleLines);
doubleLinesChart.setOption(doubleLinesOption);


// 线柱混搭

var category = ['2019-12-01', '2019-12-02', '2019-12-03', '2019-12-04', '2019-12-05', '2019-12-06',
    '2019-12-07'
];
var dottedBase = [];
var lineData = [2869, 2657, 3288, 3698, 3878, 3554, 3605, ];
var barData = [460, 550, 750, 850, 800, 760, 650];
var barData1 = [320, 400, 250, 700, 700, 800, 600];

var rateData = [];
32808
for (var i = 0; i < 33; i++) {
    // var date = i+2001;
    // category.push(date)
    var rate = barData[i] / lineData[i] * 1000;
    rateData[i] = rate.toFixed(2);
}

lineBarOption = {
    backgroundColor: '',
    tooltip: {
        trigger: 'axis',
        backgroundColor: textColor,
        axisPointer: {
            type: 'shadow',
            label: {
                show: true,
                backgroundColor: textColor
            }
        }
    },
    legend: {
        data: ['实际用量', '占比', '预计用量'],
        textStyle: {
            color: textColor
        },
        itemWidth: 15,
        itemHeight: 10,
        // orient: 'vertical',
    },
    grid: {
        top: '10%',
        bottom: '10%',
    },
    xAxis: {
        data: category,
        axisLine: {
            lineStyle: {
                color: textColor
            }
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            textStyle: {
                color: textColor,
                fontSize: 12
            }
        }
    },
    yAxis: [{
            name: '', //单位：万m³
            splitLine: { show: true },
            axisLine: {
                lineStyle: {
                    color: textColor,
                }
            },
            axisTick: {
                show: false,
            },

            axisLabel: {
                formatter: '{value} ',
                textStyle: {
                    color: textColor,
                    fontSize: 12
                }
            }
        },
        {
            name: '', //同比
            splitLine: { show: false },
            axisLine: {
                lineStyle: {
                    color: textColor,
                }
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                formatter: '{value} ',
            }
        }
    ],

    series: [{
            name: '占比',
            type: 'line',
            smooth: true,
            showAllSymbol: true,
            symbol: 'emptyCircle',
            symbolSize: 8,
            yAxisIndex: 1,
            label: {
                normal: {
                    show: true,
                    position: 'top',
                }
            },
            itemStyle: {
                normal: {
                    color: ''
                },
            },
            data: rateData
        },
        {
            name: '占比',
            type: 'line',
            smooth: true,
            showAllSymbol: true,
            symbol: 'emptyCircle',
            symbolSize: 8,
            yAxisIndex: 1,
            itemStyle: {
                normal: {
                    color: ''
                },
            },
            data: rateData
        },
        {
            name: '实际用量',
            type: 'bar',
            barWidth: 16,
            label: {
                normal: {
                    show: true,
                    position: 'top',
                }
            },
            itemStyle: {
                normal: {
                    barBorderRadius: 12,
                    color: ''
                }
            },
            data: barData
        },
        {
            name: '预计用量',
            type: 'bar',
            barWidth: 16,
            label: {
                normal: {
                    show: true,
                    position: 'top',
                }
            },
            itemStyle: {
                normal: {
                    barBorderRadius: 12,
                    color: ''
                }
            },
            data: barData1
        }
    ]
};


// 动态设置颜色
setSeriesColor(lineBarOption.series);

let lineBar = document.getElementById('lineBar');
let lineBarChart = echarts.init(lineBar);
lineBarChart.setOption(lineBarOption);



// 折线图点击事件
lineChart.on('click', function(param) {
    console.log(param)
});
// 区域堆积图点击事件
areaLineChart.on('click', function(param) {
    console.log(param)
});
// 双Y轴折线点击事件
doubleLinesChart.on('click', function(param) {
    console.log(param)
});
// 线柱混搭点击事件
lineBarChart.on('click', function(param) {
    console.log(param)
});