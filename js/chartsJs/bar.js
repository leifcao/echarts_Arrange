// 条形图
var barChartOne = document.getElementById('barChartFirst');
var barChartFirst = echarts.init(barChartOne);

var chartData = [120, 150, 180, 200, 220, 250, 300];

var chartName = ['角鲨烷', '水解胶原', '羟苯甲酯', '羊毛脂', '咪唑烷基脲', '泛醇', '矿油'];

let barChartOneOption = {
    backgroundColor: '',
    grid: {
        left: '1%',
        right: '8%',
        bottom: '5%',
        top: '5%',
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
    },
    xAxis: {
        type: 'value',
        name: '',
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false //取消坐标轴刻度线
        },
        axisLine: {
            lineStyle: {
                color: textColor,
            }
        },
        splitLine: {
            show: true,
        },
    },
    yAxis: {
        type: 'category',
        name: '', //排名
        // inverse:true,
        axisLabel: {
            textStyle: {
                color: textColor
            }
        },
        data: chartName,
        axisLabel: {
            show: true,
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: textColor,
            }
        },
    },
    series: [{ //百分比
        show: true,
        type: 'bar',
        barWidth: '50%',
        itemStyle: { //柱子颜色
            normal: {
                color: function(data) {
                    return colorList[data.dataIndex];
                },
                barBorderRadius: [0, 8, 8, 0],
            }
        },
        label: {
            normal: {
                show: true,
                textAlign: 'center',
                textStyle: {
                    //color:'#4d9dff',
                    fontSize: 12,
                    fontWeight: 'normal',
                },
                position: 'right',
                formatter: function(data) {
                    var sum = 0;
                    for (i = 0; i < chartData.length; i++) {
                        sum += chartData[i];
                    }
                    return '' + ((chartData[data.dataIndex] / sum) * 100).toFixed(0) + '%';
                },
                rich: {
                    a: {
                        //color:'#9ea8bc', //字体统一颜色
                        fontSize: 12
                    }
                }
            }
        },
        data: chartData
    }, ]
};

barChartFirst.setOption(barChartOneOption);



// 条形堆积图
var barChartTwo = document.getElementById('barChartSecond')
var barChartSecond = echarts.init(barChartTwo)


barChartTwoOption = {
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['猪肉类', '牛羊肉类', '鸡鸭类', '三文鱼及产品', '其他水产品'],
        itemWidth: 10,
        itemHeight: 10,
    },
    grid: {
        left: '3%',
        right: '5%',
        bottom: '2%',
        top: '10%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        axisTick: {
            show: false
        }
    },
    yAxis: {
        type: 'category',
        data: ['陕西', '山西', '四川', '北京', '河北', '甘肃', '内蒙']
    },
    series: [{
            name: '猪肉类',
            type: 'bar',
            stack: '总量',
            barWidth: '60%',
            itemStyle: {
                normal: {
                    color: '',
                    // barBorderRadius: [8, 0, 0, 8],
                }
            },
            label: {
                show: true,
                fontSize: 10,
                position: 'insideRight'
            },
            data: [320, 302, 301, 334, 390, 330, 120]
        },
        {
            name: '牛羊肉类',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                normal: {
                    color: '',
                }
            },
            label: {
                show: true,
                fontSize: 10,
                position: 'insideRight'
            },
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '鸡鸭类',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                normal: {
                    color: '',
                }
            },
            label: {
                show: true,
                fontSize: 10,
                position: 'insideRight'
            },
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '三文鱼及产品',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                normal: {
                    color: '',
                }
            },
            label: {
                show: true,
                fontSize: 10,
                position: 'insideRight'
            },
            data: [150, 212, 201, 154, 190, 330, 410]
        },
        {
            name: '其他水产品',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                normal: {
                    color: '',
                    barBorderRadius: [0, 8, 8, 0],
                }
            },
            label: {
                show: true,
                fontSize: 10,
                position: 'insideRight'
            },
            data: [320, 432, 201, 234, 290, 330, 120]
        }
    ]
};
// 设置颜色
setSeriesColor(barChartTwoOption.series)
barChartSecond.setOption(barChartTwoOption)


// 双向条形图
var barChartThree = document.getElementById('barChartThird')
var barChartThird = echarts.init(barChartThree)

/**
 * 照着一个案例改的
 * 增加下面的数值显示
 * */
var myData = ['一审服', '撤诉率', '调解率', '实际', '裁判率', '执行标', '再审']
var lineData = [100, 100, 100, 100, 100, 100, 100]
var lastYearData = {
    1: [3, 20, 62, 34, 55, 65, 33]
}
var thisYearData = {
    1: [11, 38, 23, 39, 66, 66, 79]
}
var timeLineData = [1]

barChartThreeoption = {
    baseOption: {
        backgroundColor: '',
        timeline: {
            show: false,
            top: 0,
            data: []
        },
        legend: {
            // top: '5%',
            // left: '40%',
            x: 'center',
            y: '2',
            itemWidth: 10,
            itemHeight: 6,
            // itemGap: 160,
            icon: 'horizontal',
            textStyle: {
                color: textColor,
                fontSize: 12,
            },
            data: ['2017', '2018']
        },
        grid: [{
            show: false,
            left: '3%',
            bottom: '2%',
            top: '10%',
            containLabel: true,
            width: '37%'
        }, {
            show: false,
            left: '51%',
            bottom: '5%',
            top: '10%',
            width: '0%'
        }, {
            show: false,
            right: '3%',
            bottom: '2%',
            top: '10%',
            containLabel: true,
            width: '37%'
        }],
        xAxis: [{
            type: 'value',
            inverse: true,
            axisLine: {
                show: true
            },
            axisTick: {
                show: false
            },
            position: 'bottom',
            axisLabel: {
                show: true,
                textStyle: {
                    color: textColor, //X轴左侧字体设置
                    fontSize: 12,
                }
            },
            splitLine: {
                show: true
            }
        }, {
            gridIndex: 1,
            show: false,
        }, {
            gridIndex: 2,
            axisLine: {
                show: true
            },
            axisTick: {
                show: false
            },
            position: 'bottom',
            axisLabel: {
                show: true,
                interval: 0,
                textStyle: {
                    color: textColor, //X轴右侧字体设置
                    fontSize: 12,
                }
            },
            splitLine: {
                show: true
            }
        }],
        yAxis: [{
            type: 'category',
            inverse: true,
            position: 'right',
            axisLine: {
                show: true
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            data: myData
        }, {
            gridIndex: 1,
            type: 'category',
            inverse: true,
            position: 'left',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: textColor, //中间字体设置
                    fontSize: 12,
                },
            },
            splitNumber: 8,
            data: myData.map(function(value) {
                return {
                    value: value,
                    textStyle: {
                        align: 'center',
                    }
                }
            })
        }, {
            gridIndex: 2,
            type: 'category',
            inverse: true,
            position: 'left',
            axisLine: {
                show: true
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            data: myData
        }],
        series: []

    },
    options: []
}

barChartThreeoption.baseOption.timeline.data.push(timeLineData[0])
barChartThreeoption.options.push({
    series: [{
            type: 'pictorialBar',
            xAxisIndex: 0,
            yAxisIndex: 0,
            itemStyle: {
                normal: {
                    color: 'rgba(0,0,0,0)'
                }
            },
            barWidth: 10,
            data: lineData,
            barGap: '-100%',
            barCategoryGap: 0,
            label: {
                normal: {
                    show: true,
                    formatter: (series) => {
                        return lastYearData[timeLineData[0]][series.dataIndex] + '%'
                    },
                    position: 'insideTopLeft',
                    textStyle: {
                        color: textColor, //左侧字体设置
                        fontSize: 12,
                    },
                    offset: [0, -5],
                }
            },
            z: -100,
            animationEasing: 'elasticOut',
            animationDelay: function(idx) {
                return idx * 600;
            }
        }, {
            name: '2017',
            type: 'bar',
            xAxisIndex: 0,
            yAxisIndex: 0,
            //  symbol: 'rect',
            barWidth: 10,
            itemStyle: {
                normal: {
                    barBorderRadius: 5,
                    color: colorList[0]
                }
            },
            // symbolRepeat: true,
            // symbolSize: 14,
            data: lastYearData[timeLineData[0]],
            animationEasing: 'elasticOut',
            animationDelay: function(idx) {
                return idx * 600;
            }
        },
        {
            type: 'pictorialBar',
            xAxisIndex: 2,
            yAxisIndex: 2,
            symbol: 'rect',
            itemStyle: {
                normal: {
                    color: 'rgba(0,0,0,0)'
                }
            },
            barWidth: 10,
            symbolRepeat: true,
            symbolSize: 14,
            data: lineData,
            barGap: '-100%',
            barCategoryGap: 0,
            label: {
                normal: {
                    show: true,
                    formatter: (series) => {
                        return thisYearData[timeLineData[0]][series.dataIndex] + '%'
                    },
                    position: 'insideTopRight',
                    textStyle: {
                        color: textColor, //右侧字体设置
                        fontSize: 12,
                    },
                    offset: [0, -5],
                }
            },
            z: -100,
            animationEasing: 'elasticOut',
            animationDelay: function(idx) {
                return idx * 600;
            }
        }, {
            name: '2018',
            type: 'bar',
            xAxisIndex: 2,
            yAxisIndex: 2,
            //   symbol: 'rect',
            barWidth: 10,
            itemStyle: {
                normal: {
                    barBorderRadius: 5,
                    color: colorList[1]
                }
            },
            // symbolRepeat: true,
            // symbolSize: 14,
            data: thisYearData[timeLineData[0]],
            animationEasing: 'elasticOut',
            animationDelay: function(idx) {
                return idx * 600;
            }
        }
    ]
});


barChartThird.setOption(barChartThreeoption);


// 正负条形图
let barChartFour = document.getElementById('barChartFourth');
let barChartFourth = echarts.init(barChartFour);

let barChartFourOption = {
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function(params) {
            return params[0].name +
                "<br>生产中：" + params[0].value +
                "<br>等待中：" + -params[1].value;
        }
    },
    legend: {
        data: ['等待中', '生产中'],
        left: "center",
        itemWidth: 10,
        itemHeight: 10,
    },
    grid: {
        left: '2%',
        right: '4%',
        bottom: '2%',
        top: '10%',
        containLabel: true
    },
    color: colorList,
    xAxis: {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        axisTick: { show: false },
        data: ['分拣', '清洗', '抛光', '研磨', '脱膜', '切割', '压膜', '压膜分配', '光固化后处理', '光固化']
    },
    series: [{
            name: '等待中',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                normal: {
                    barBorderRadius: [0, 8, 8, 0],
                }
            },
            label: {
                normal: {
                    show: true,
                    barBorderRadius: 10
                }
            },
            data: [400, 241, 360, 320, 302, 341, 374, 390, 450, 420]
        },
        {
            name: '生产中',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                normal: {
                    barBorderRadius: [8, 0, 0, 8],
                }
            },
            label: {
                normal: {
                    show: true,
                    formatter: function(params) { return -params.value }
                }
            },
            data: [-120, -180, -120, -120, -132, -101, -134, -190, -230, -210]
        },

    ]
};

barChartFourth.setOption(barChartFourOption);


// 条形多柱图

// 正负条形图
let barChartFive = document.getElementById('barChartFifth');
let barChartFifth = echarts.init(barChartFive);

let barChartfiveOption = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
    },
    legend: {
        data: ['2019年', '2020年'],
        itemWidth: 10,
        itemHeight: 10,
    },
    color:colorList,
    grid: {
        left: '3%',
        right: '6%',
        top: '10%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        name:'万人',
        boundaryGap: [0, 0.02]
    },
    yAxis: {
        type: 'category',
        data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口']
    },
    series: [
        {
            name: '2019年',
            type: 'bar',
            itemStyle: {
                normal: {
                    barBorderRadius: [0, 8, 8, 0],
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: function(params) { return params.value+'万' }
                }
            },
            data: [18203, 23489, 29034, 104970, 131744, 630230]
        },
        {
            name: '2020年',
            type: 'bar',
            itemStyle: {
                normal: {
                    barBorderRadius: [0, 8, 8, 0],
                }
            },

            label: {
                normal: {
                    position: 'right',
                    show: true,
                    formatter: function(params) { return params.value+'万' }
                }
            },
            data: [19325, 23438, 31000, 121594, 134141, 681807]
        }
    ]
};


barChartFifth.setOption(barChartfiveOption);


// 条形图点击事件
barChartFirst.on('click', function(param) {
    console.log(param)
});
// 条形堆积图点击事件
barChartSecond.on('click', function(param) {
    console.log(param)
});
// 双向条形图点击事件
barChartThird.on('click', function(param) {
    console.log(param)
});
// 正负条形图点击事件
barChartFourth.on('click', function(param) {
    console.log(param)
});
