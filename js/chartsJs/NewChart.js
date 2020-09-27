// echart图
var echartPic = document.getElementById('machart')
var echartPart = echarts.init(echartPic)

var madata = {
    title: ['总计', '12-01', '12-02', '12-03', '12-04', '12-05', '12-06', '12-07', '12-08'],
    plan_production: [500, 300, 490, 333, 346, 777, 888, 864, 789],
    actual_production: [300, 400, 500, 300, 400, 500, 300, 400, 500],
    attainment_rate: [60, 80, 90, 60, 70, 80, 90, 60, 70],
    productivity: [30, 45, 88, 100, 110, 70, 80, 90, 100]
};

for (var pr in madata) {
    madata[pr] = madata[pr].slice(1, -1);
}

function getTableLine(num) {
    var list = [];
    var bottom = 100;
    var height = 15;
    for (var i = 0; i < num; i++) {
        list.push({
            type: 'line',
            bottom: bottom - i * height,
            right: '10%',
            style: {
                fill: '#333'
            },
            shape: {
                x1: 0,
                y1: 0,
                x2: 3200,
                y2: 0
            }

        });
    }
    return list;
}
var lineList = getTableLine(5);


let maOption = {
    title: [{
        text: ' \n计划数量\n实际产出\n达成率\n生产效率',
        bottom: '14%',
        left: '1%',
        textStyle: {
            lineHeight: 15,
            fontSize: 13,
            fontWeight: 'normal',
            formatter: function(value) {
                return '{table|' + value + '}';
            },
            rich: {
                table: {
                    align: 'center'
                }
            }
        }
    }],
    color: colorList,
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
            label: {
                backgroundColor: '#283b56'
            }
        }
    },
    legend: {
        data: ['计划数量', '实际产出', '达成率', '生产效率'],
        itemWidth: 15,
        itemHeight: 10,
    },
    grid: {
        bottom: '48%',
        left: '15%',
        right: '10%',
        // containLabel: true,
    },

    dataZoom: {
        show: true,
        start: 0,
        end: 30,
        // maxSpan: 100,
        bottom: 0,
        // zoomLock: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: true,
        data: madata.title,
        axisTick: {
            length: 80
        },
        axisLabel: {
            formatter: function(value, index) {
                return '{table|' + value +
                    '}\n{table|' + madata.plan_production[index] +
                    '}\n{table|' + madata.actual_production[index] +
                    '}\n{table|' + madata.attainment_rate[index] +
                    '%}\n{table|' + madata.productivity[index] + '%}';
            },
            rich: {
                table: {
                    lineHeight: 15,
                    align: 'center'
                }
            }
        }
    }],
    yAxis: [{
        type: 'value',
        scale: true,
        minInterval: 1,
        name: '数量',
        splitLine: {
            show: false
        },
        min: function(v) {
            return Math.max((v.min - 10), 0);
        }
    }, {
        type: 'value',
        scale: true,
        name: '百分比',
        splitLine: {
            show: false
        },
        axisLabel: {
            formatter: '{value} %'
        }
    }],
    series: [{
        name: '计划数量',
        type: 'bar',
        label: {
            show: true,
            position: 'top'
        },
        yAxisIndex: 0,
        data: madata.plan_production
    }, {
        name: '实际产出',
        type: 'bar',
        label: {
            show: true,
            position: 'top'
        },
        yAxisIndex: 0,
        data: madata.actual_production
    }, {
        name: '达成率',
        type: 'line',
        label: {
            show: true,
            position: 'top',
            formatter: '{c} %'
        },
        yAxisIndex: 1,
        data: madata.attainment_rate
    }, {
        name: '生产效率',
        type: 'line',
        label: {
            show: true,
            position: 'top',
            formatter: '{c} %'
        },
        yAxisIndex: 1,
        data: madata.productivity
    }],
    graphic: lineList
};

echartPart.setOption(maOption, true)