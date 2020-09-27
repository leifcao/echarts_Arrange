// --------------------气泡图-------------

//---------传统气泡图-------------
var bubblesOne = document.getElementById('bubblesFirst')
var bubblesFirst = echarts.init(bubblesOne)


var bubblesOneData = [
    [
        [28604, 77, 17096869, 'Australia', 1990],
        [31163, 77.4, 27662440, 'Canada', 1990],
        [1516, 68, 1154605773, 'China', 1990],
        [13670, 74.7, 10582082, 'Cuba', 1990],
        [28599, 75, 4986705, 'Finland', 1990],
        [29476, 77.1, 56943299, 'France', 1990],
        [31476, 75.4, 78958237, 'Germany', 1990],
        [28666, 78.1, 254830, 'Iceland', 1990],
        [1777, 57.7, 870601776, 'India', 1990],
        [29550, 79.1, 122249285, 'Japan', 1990],
        [2076, 67.9, 20194354, 'North Korea', 1990],
        [12087, 72, 42972254, 'South Korea', 1990],
        [24021, 75.4, 3397534, 'New Zealand', 1990],
        [43296, 76.8, 4240375, 'Norway', 1990],
        [10088, 70.8, 38195258, 'Poland', 1990],
        [19349, 69.6, 147568552, 'Russia', 1990],
        [10670, 67.3, 53994605, 'Turkey', 1990],
        [26424, 75.7, 57110117, 'United Kingdom', 1990],
        [37062, 75.4, 252847810, 'United States', 1990]
    ],
    [
        [44056, 81.8, 23968973, 'Australia', 2015],
        [43294, 81.7, 35939927, 'Canada', 2015],
        [13334, 76.9, 1376048943, 'China', 2015],
        [21291, 78.5, 11389562, 'Cuba', 2015],
        [38923, 80.8, 5503457, 'Finland', 2015],
        [37599, 81.9, 64395345, 'France', 2015],
        [44053, 81.1, 80688545, 'Germany', 2015],
        [42182, 82.8, 329425, 'Iceland', 2015],
        [5903, 66.8, 1311050527, 'India', 2015],
        [36162, 83.5, 126573481, 'Japan', 2015],
        [1390, 71.4, 25155317, 'North Korea', 2015],
        [34644, 80.7, 50293439, 'South Korea', 2015],
        [34186, 80.6, 4528526, 'New Zealand', 2015],
        [64304, 81.6, 5210967, 'Norway', 2015],
        [24787, 77.3, 38611794, 'Poland', 2015],
        [23038, 73.13, 143456918, 'Russia', 2015],
        [19360, 76.5, 78665830, 'Turkey', 2015],
        [38225, 81.4, 64715810, 'United Kingdom', 2015],
        [53354, 79.1, 321773631, 'United States', 2015]
    ]
];

bubblesOneOption = {
    backgroundColor: '',
    title: {
        text: ''
    },
    tooltip: {
        textStyle: {
            color: '#ffffff'
        }
    },
    grid: {
        left: '10%',
        top: '10%',
        bottom: '10%',
        right: '10%',
    },
    legend: {
        right: 'center',
        data: ['1990', '2015'],
        textStyle: {
            color: textColor
        },
    },
    xAxis: {
        splitLine: {
            lineStyle: {
                type: 'dashed',
                color: 'rgba(201, 201, 201,0.4)'
            }
        },
        axisLine: {
            lineStyle: {
                color: textColor
            }
        },
        axisLabel: {
            color: textColor,
            textStyle: {
                fontSize: 12
            },

        },
    },
    yAxis: {
        splitLine: {
            lineStyle: {
                type: 'dashed',
                color: 'rgba(201, 201, 201,0.4)'

            }
        },
        axisLine: {
            lineStyle: {
                color: textColor
            }
        },
        axisLabel: {
            color: textColor,
            textStyle: {
                fontSize: 12
            },

        },
        scale: true
    },
    series: [{
        name: '1990',
        data: bubblesOneData[0],
        type: 'scatter',
        symbolSize: function(bubblesOneData) {
            return Math.sqrt(bubblesOneData[2]) / 5e2;
        },
        emphasis: {
            label: {
                show: true,
                formatter: function(param) {
                    return param.data[3];
                },
                position: 'top'
            }
        },
        itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(120, 36, 50, 0.5)',
            shadowOffsetY: 5,
            color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                offset: 0,
                color: 'rgb(67, 200, 162)'
            }, {
                offset: 1,
                color: 'rgb(56, 195, 132)'
            }])
        }
    }, {
        name: '2015',
        data: bubblesOneData[1],
        type: 'scatter',
        symbolSize: function(bubblesOneData) {
            return Math.sqrt(bubblesOneData[2]) / 5e2;
        },
        emphasis: {
            label: {
                show: true,
                formatter: function(param) {
                    return param.data[3];
                },
                position: 'top'
            }
        },
        itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(25, 100, 150, 0.5)',
            shadowOffsetY: 5,
            color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                offset: 0,
                color: 'rgb(129, 227, 238)'
            }, {
                offset: 1,
                color: 'rgb(25, 183, 207)'
            }])
        }
    }]
};

bubblesFirst.setOption(bubblesOneOption);






// 散点气泡涟漪图

var bubblesTwo = document.getElementById('bubblesSecond')
var bubblesSecond = echarts.init(bubblesTwo);

var plantCap = [{
    name: '歌舞表演',
    value: 'perform'
}, {
    name: '特色餐厅',
    value: 'restaurant '
}, {
    name: '八景',
    value: 'scenery '
}, {
    name: '红嘴鸥',
    value: 'gull'
}, {
    name: '酒吧',
    value: 'bar '
}, {
    name: '花',
    value: 'flower'
}, {
    name: '商业街',
    value: 'street'
}];

var datalist = [{
    offset: [50, 60],
    symbolSize: 40,
    opacity: .95,
    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0,
        color: '#29c0fb'
    }, {
        offset: 1,
        color: '#2dc5b9'
    }]),
}, {
    offset: [38, 80],
    symbolSize: 35,
    opacity: .95,
    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0,
        color: '#35d17e'
    }, {
        offset: 1,
        color: '#49ddb2'
    }]),
}, {
    offset: [23, 53],
    symbolSize: 34,
    opacity: .95,
    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0,
        color: '#e5d273'
    }, {
        offset: 1,
        color: '#e4a37f'
    }]),
}, {
    offset: [68, 50],
    symbolSize: 30,
    opacity: .95,
    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0,
        color: '#277aec'
    }, {
        offset: 1,
        color: '#57c5ec'
    }]),
}, {
    offset: [38, 30],
    symbolSize: 32,
    opacity: .95,
    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0,
        color: '#e54948'
    }, {
        offset: 1,
        color: '#f08456'
    }]),
}, {
    offset: [56, 30],
    symbolSize: 28,
    opacity: .7,
    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0,
        color: '#11c46e'
    }, {
        offset: 1,
        color: '#f08456'
    }]),
}, {
    offset: [65, 85],
    symbolSize: 25,
    opacity: .68,
    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0,
        color: '#ff4141'
    }, {
        offset: 1,
        color: '#ff8989'
    }]),
}];
var datas = [];
for (var i = 0; i < plantCap.length; i++) {
    var item = plantCap[i];
    var itemToStyle = datalist[i];
    datas.push({
        name: item.name + '\n' + item.value,
        value: itemToStyle.offset,
        symbolSize: itemToStyle.symbolSize,
        label: {
            normal: {
                textStyle: {
                    fontSize: 13,
                    lineHeight: 17,
                }
            }
        },
        itemStyle: {
            normal: {
                color: itemToStyle.color,
                opacity: itemToStyle.opacity
            }
        },
    })
}
bubblesSecondOption = {
    backgroundColor: '',
    grid: {
        show: false,
        top: 10,
        bottom: 10
    },
    xAxis: [{
        gridIndex: 0,
        type: 'value',
        show: false,
        min: 0,
        max: 100,
        nameLocation: 'middle',
        nameGap: 5
    }],
    yAxis: [{
        gridIndex: 0,
        min: 0,
        show: false,
        max: 100,
        nameLocation: 'middle',
        nameGap: 30
    }],
    series: [{
        type: 'effectScatter',
        // symbol: 'circle',
        // symbolSize: 120,
        symbolSize: function(val) {
            return Math.max(val[2] / 100, 8);
        },
        showEffectOn: 'render',
        rippleEffect: {
            brushType: 'stroke'
        },
        hoverAnimation: true,
        label: {
            normal: {
                show: true,
                formatter: '{b}',
                color: '#fff',
                textStyle: {
                    fontSize: '20'
                }
            },
        },
        itemStyle: {
            normal: {
                color: '#00acea'
            }
        },
        data: datas
    }, {
        // name: 'pm2.5',
        type: 'effectScatter',
        data: datas,
        symbolSize: function(val) {
            return Math.max(val[2] / 200, 8);
        },
        label: {
            normal: {
                show: true,
                formatter: '{b}',
                color: '#fff',
                textStyle: {
                    fontSize: '20'
                }
            },
        },
        itemStyle: {
            normal: {
                color: '#FF8C00',
                position: 'right',
                show: true
            }
        }
    }]
};

bubblesSecond.setOption(bubblesSecondOption);