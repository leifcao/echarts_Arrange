// ----柱状图----------
var histogramOne = document.getElementById('histogramFirst')
var histogramFirst = echarts.init(histogramOne)


let histogramOneOption = {
    backgroundColor: '',
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '2%',
        right: '4%',
        bottom: '2%',
        top: '10%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: ['制造业', '建筑业', '农林牧渔', '房地产', '金融业'],
        axisLine: {
            lineStyle: {
                color: textColor
            }
        },
        axisLabel: {
            // interval: 0,
            // rotate: 40,
            textStyle: {
                fontFamily: 'Microsoft YaHei'
            }
        },
    },

    yAxis: {
        name: '', //单位：万元
        type: 'value',
        // max: '1200',
        axisLine: {
            show: true,
            lineStyle: {
                color: textColor,
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(111,111,111,0.3)'
            }
        },
        axisLabel: {}
    },
    series: [{
        name: '2019',
        type: 'bar',
        barWidth: '15%',
        label: {
            normal: {
                show: true,
                position: 'top',
            }
        },
        itemStyle: {
            normal: {
                color: '',
                barBorderRadius: 12,
            },
        },
        data: [5000, 2600, 1300, 1300, 1250],
        animationDelay: function(idx) {
            return idx * 600;
        }
    }, ]
};
setSeriesColor(histogramOneOption.series);

histogramFirst.setOption(histogramOneOption)


// ------多系列柱图------------
var histogramTwo = document.getElementById('histogramSecond')
var histogramSecond = echarts.init(histogramTwo)


histogramTwoOption = {
    backgroundColor: '',
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '2%',
        right: '4%',
        bottom: '2%',
        top: '10%',
        containLabel: true
    },
    legend: {
        data: ['健康度', '可用度'],
        left: 'center',
        textStyle: {
            color: textColor,
        },
        itemWidth: 12,
        itemHeight: 10,
        // itemGap: 35
    },
    xAxis: {
        type: 'category',
        data: ['22:18', '22:23', '22:25', '22:28', '22:30', '22:33', '22:35'],
        axisLine: {
            lineStyle: {
                color: textColor
            }
        },
        axisLabel: {
            interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
            // rotate: 40,
            textStyle: {
                fontFamily: 'Microsoft YaHei'
            }
        },
    },

    yAxis: {
        type: 'value',
        max: '80',
        axisLine: {
            show: true,
            lineStyle: {
                color: textColor,
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(111,111,111,0.3)'
            }
        },
        axisLabel: {}
    },
    series: [{
            name: '健康度',
            type: 'bar',
            barWidth: '20%',
            itemStyle: {
                normal: {
                    color: '',
                    barBorderRadius: 12,
                },
            },
            label: {
                normal: {
                    show: true,
                    position: 'top',
                }
            },
            data: [10, 15, 30, 45, 55, 60, 62],
            animationDelay: function(idx) {
                return idx * 600;
            }
        },
        {
            name: '可用度',
            type: 'bar',
            barWidth: '20%',
            label: {
                normal: {
                    show: true,
                    position: 'top',
                }
            },
            itemStyle: {
                normal: {
                    color: '',
                    barBorderRadius: 11,
                }

            },
            data: [8, 10, 25, 30, 35, 55, 62],
            animationDelay: function(idx) {
                return idx * 600;
            }
        },
    ]
};
// 颜色设置
setSeriesColor(histogramTwoOption.series);
histogramSecond.setOption(histogramTwoOption)


// -----------堆积柱图------------
var histogramThree = document.getElementById('histogramThird');
var histogramThird = echarts.init(histogramThree);

var histogramThreeData = {
    area: ['新荣区', '平城区', '云冈区', '云州区'],
    legend: ['因病', '因残', '因学', '因灾', '缺土地', '缺水', '缺技术', ],
    data: [
        [1320, 1302, 901, 634, 1390, 1330, 1320, 1000, 500],
        [320, 302, 301, 334, 390, 330, 320, 100, 50],
        [320, 302, 301, 334, 390, 330, 320, 100, 50],
        [320, 302, 301, 334, 390, 330, 320, 100, 50],
        [320, 302, 301, 334, 390, 330, 320, 100, 50],
        [320, 302, 301, 334, 390, 330, 320, 100, 50],
        [320, 302, 301, 334, 390, 330, 320, 100, 50],
    ]
}

histogramThreeOption = {
    backgroundColor: '',
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "shadow",
            textStyle: {
                color: textColor
            }

        },
    },
    grid: {
        right: '3%',
        left: '10%',
        bottom: '10%',
        top: '11%',
    },
    legend: {
        x: 'center',
        y: '2',
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
            color: textColor,
            fontSize: 12
        },

    },
    calculable: true,
    xAxis: {
        type: "category",
        // name: '设备名称',
        axisLine: { //X轴线的宽度及颜色
            show: true,
            lineStyle: {
                color: textColor,
            }
        },
        splitLine: {
            show: false,
        },
        splitArea: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: textColor,
                fontSize: 12
            },
            // rotate: 40,
            // interval: 0,
        },
        data: histogramThreeData.area,
    },
    yAxis: {
        type: "value",
        name: "", //数量
        nameTextStyle: {
            color: textColor,
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(111,111,111,0.3)'
            }
        },
        axisLine: { //Y轴线的颜色
            show: true,
            lineStyle: {
                color: textColor,
            }
        },
        axisTick: {
            show: false,
            lineStyle: {
                color: 'rgba(255,255,255,1)'
            }
        },
        axisLabel: {
            textStyle: {
                color: textColor,
                fontSize: 12
            }
        },
        splitArea: {
            show: false
        },

    },
    series: [],
    animationEasing: 'elasticOut',
}


for (var i = 0; i < histogramThreeData.legend.length; i++) {
    // 开头和结尾圆滑柱形
    let barRadius = i == 0 ? [0, 0, 8, 8] : i == histogramThreeData.legend.length - 1 ? [8, 8, 0, 0] : 0;
    histogramThreeOption.series.push({
        name: histogramThreeData.legend[i],
        type: 'bar',
        stack: '总量',
        barWidth: '20%',
        label: {
            show: true,
            fontSize: 10,
            position: 'inside'
        },
        itemStyle: {
            normal: {
                color: '',
                barBorderRadius: barRadius, //柱状图圆角设置
            }
        },
        animationDelay: function(idx) {
            return idx * 600;
        },
        data: histogramThreeData.data[i],
    })
}
// 设置主题颜色
setSeriesColor(histogramThreeOption.series);

histogramThird.setOption(histogramThreeOption);



//阶梯瀑布图
var histogramFour = document.getElementById('histogramFourth');
var histogramFourth = echarts.init(histogramFour);
let histogramFourthOption = {
    color:colorList,
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function (params) {
            var tar;
            if (params[1].value !== '-') {
                tar = params[1];
            }
            else {
                tar = params[2];
            }
            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
        }
    },
    legend: {
        data: ['支出', '收入'],
        itemWidth:10,
        itemHeight:10,
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top: '11%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        splitLine: {show: false},
        // axisLabel: {
        //     interval: 1, //设置为 1，表示『隔一个标签显示一个标签』
        // },
        boundaryGap:true,
        data: function () {
            var list = [];
            for (var i = 1; i <= 11; i++) {
                list.push('11月' + i + '日');
            }
            return list;
        }()
    },
    yAxis: {
        type: 'value',
    },
    series: [
        {
            name: '辅助',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                barBorderColor: 'rgba(0,0,0,0)',
                color: 'rgba(0,0,0,0)'
            },
            emphasis: {
                itemStyle: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                }
            },
            data: [0, 900, 1245, 1530, 1376, 1376, 1511, 1689, 1856, 1495, 1292]
        },
        {
            name: '收入',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'top'
            },
            barWidth: '10',
            itemStyle: {
                normal: {
                    color: '',
                    barBorderRadius: 12,
                },
            },
            data: [900, 345, 393, '-', '-', 135, 178, 286, '-', '-', '-']
        },
        {
            name: '支出',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'bottom'
            },
            barWidth: '10',
            itemStyle: {
                normal: {
                    color: '',
                    barBorderRadius: 12,
                },
            },
            data: ['-', '-', '-', 108, 154, '-', '-', '-', 119, 361, 203]
        }
    ]
};

histogramFourth.setOption(histogramFourthOption);


// 柱状图点击事件
histogramFirst.on('click', function(param) {
    console.log(param)
});
// 多系列柱图点击事件
histogramSecond.on('click', function(param) {
    console.log(param)
});
// 堆积柱图点击事件
histogramThird.on('click', function(param) {
    console.log(param)
});
