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
    var bottom = 65;
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
        bottom: '0%',
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
        left: '15%',
        // containLabel: true,
        bottom: '35%',
    },

    xAxis: [{
        type: 'category',
        boundaryGap: true,
        data: madata.title,
        axisTick: {
            length: 80
        },
        axisLabel: {
            interval:0,
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
        min: function(v) {
            return Math.max((v.min - 10), 0);
        },
        splitLine: {
            show: true,
            color:'#333'
        },
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

echartPart.setOption(maOption, true);

//数据图表堆积
var datachart = document.getElementById('datachart')
var datacharts = echarts.init(datachart)



var datachartData = {
    title: ['总计', '北京', '上海', '浙江', '深圳', '广东', '宁波', '其他'],
    plan_production: [100, 150, 390, 333, 346, 300, 400,30],
    actual_production: [100, 100, 60, 300, 400, 300, 300,30],
    attainment_rate: [60, 80, 90, 60, 70, 80, 90, 90],
    productivity_1: [30, 45, 88, 100, 110, 70, 80, 100],
};

for (var pr in datachartData) {
    datachartData[pr] = datachartData[pr].slice(1, -1);
}

function getTableLine2(num) {
    var list = [];
    //控制线的位置
    var bottom = 65;
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
                y2: 0,
            }

        });
    }
    return list;
}
var lineList2 = getTableLine2(5);


let datachartOption = {
    color: colorList,
    title: [{
        text: ' \n其他\n停业转型\n立案侦查\n失联跑路',
        bottom: '0%', //控制表格Y轴方向
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
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#283b56'
            }
        }
    },
    legend: {
        data: ['其他', '停业转型', '立案侦查', '失联跑路'],
        itemWidth:15,
        itemHeight: 10,
    },
    grid: {
        top:'10%',
        bottom: '35%',
        left: '15%',
    },
    xAxis: [{
        type: 'category',
        boundaryGap: true,
        data: datachartData.title,
        axisTick: {
            length: 82//竖线的长度
        },
        axisLabel: {
            interval: 0,
            formatter: function(value, index) {
                var indexNum = 0;
                for(var i = 0; i < datachartData.title.length; i++){
                    if(value == datachartData.title[i]){
                        indexNum = i;
                    }
                }
                return '{table|' + value +
                  '}\n{table|' + datachartData.plan_production[indexNum] +
                  '}\n{table|' + datachartData.actual_production[indexNum] +
                  '}\n{table|' + datachartData.attainment_rate[indexNum] +
                  '}\n{table|' + datachartData.productivity_1[indexNum] +'}';
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
        axisLine: {
            show:false
        },
        splitLine: {
            show: true,
            color:'#333'
        },
    }],
    series: [{
        name: '其他',
        stack:'aa',
        type: 'bar',
        barWidth: '20px',
        label: {
            show: true,
            position: 'inside'
        },
        yAxisIndex: 0,
        data: datachartData.plan_production
    }, {
        name: '停业转型',
        stack:'aa',
        type: 'bar',
        label: {
            show: true,
            position: 'inside'
        },
        yAxisIndex: 0,
        data: datachartData.actual_production
    }, {
        name: '立案侦查',
        stack:'aa',
        type: 'bar',
        label: {
            show: true,
            position: 'inside',

        },
        yAxisIndex: 0,
        data: datachartData.attainment_rate
    }, {
        name: '失联跑路',
        type: 'bar',
        stack:'aa',
        label: {
            show: true,
            position: 'inside',

        },
        yAxisIndex: 0,
        data: datachartData.productivity_1
    }
    ],
    graphic: lineList2
};

datacharts.setOption(datachartOption, true);
