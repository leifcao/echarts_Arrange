// --------------------气泡图-------------

//---------传统气泡图-------------
var bubblesOne = document.getElementById('bubblesFirst')
var bubblesFirst = echarts.init(bubblesOne)


var bubblesOneData = [
    [
        [28604, 77, 17096869, 'Australia', 1990],
        [31163, 77.4, 27662440, 'Canada', 1990],
        [11516, 68, 1154605773, 'China', 1990],
        [13670, 74.7, 10582082, 'Cuba', 1990],
        [28599, 75, 4986705, 'Finland', 1990],
        [29476, 77.1, 56943299, 'France', 1990],
        [31476, 75.4, 78958237, 'Germany', 1990],
        [28666, 78.1, 254830, 'Iceland', 1990],
        [1777, 57.7, 27662440, 'India', 1990],
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
        [5903, 66.8, 13110505, 'India', 2015],
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
            color: colorList[0]
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
            color:colorList[1]

        }
    }]
};

bubblesFirst.setOption(bubblesOneOption);


//---------传统气泡图-------------
var bubbleTwo = document.getElementById('bubbleSecond')
var bubbleSecond = echarts.init(bubbleTwo);


let bubbleTwodatas = [{
    'name': '菜菜',
    'period': '9.10',
    'amount': 174600,
    'orderCount': 1670,
},
    {
        'name': '佛生',
        'period': '13.1',
        'amount': 97477,
        'orderCount': 436,
    },
    {
        'name': '我',
        'period': '7.5',
        'amount': 5997,
        'orderCount': 272,
    },
    {
        'name': 'Jiayin',
        'period': '10.0',
        'amount': 55796,
        'orderCount': 544,
    },
    {
        'name': '明坤',
        'period': '10.5',
        'amount': 210364,
        'orderCount': 979,
    },
    {
        'name': '首席',
        'period': '6.5',
        'amount': 7305,
        'orderCount': 185,
    },
    {
        'name': '小楠子+',
        'period': '9.1',
        'amount': 210284,
        'orderCount': 2224,
    },
    {
        'name': '康康',
        'period': '10.10',
        'amount': 41789,
        'orderCount': 257,
    },
    {
        'name': '书记',
        'period': '10.7',
        'amount': 36961,
        'orderCount': 452,
    },
    {
        'name': '书记夫人',
        'period': '9.0',
        'amount': 68088,
        'orderCount': 647,
    },
    {
        'name': 'vv',
        'period': '8.3',
        'amount': 72896,
        'orderCount': 1743,
    },
    {
        'name': 'qq',
        'period': '6.10',
        'amount': 52276,
        'orderCount': 627,
    },
];

let Bublle_min = 0;
let Bublle_max = 0;
let packedDatas = packDatas(bubbleTwodatas);

let bubblesTwoOption = {
    // title: {
    //     text: '某群淘宝人生账单分布',
    //     left: 'center',
    //     top: 0,
    // },
    grid: {
        left: '13%',
        top: '12%',
        bottom: '10%',
        right: '13%',
    },
    tooltip: {
        padding: 10,
        backgroundColor: '#222',
        borderColor: '#777',
        borderWidth: 1,
        formatter: function(obj) {
            var value = obj.value;
            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">' +
              value[2] +
              '（' + value[3] + '）' +
              '</div>' +
              '订单数：' + value[0] + '<br>' +
              '消费金额：' + value[1] + '<br>' +
              'AVT：' + value[4].toFixed(2) + '<br>';
        }
    },
    xAxis: {
        splitLine: {
            show: false,
        },
        scale: true,
        type: 'value',
        name: '订单数',
    },
    yAxis: {
        splitLine: {
            show: false,
        },
        scale: true,
        type: 'value',
        name: '消费金额',
    },

    visualMap: [{
        show: false,
        min: Bublle_min,
        max: Bublle_max,
        dimension: 5,
        inRange: {
            color: [
              colorList[0],
              colorList[colorList.length-1],
            ],
        }
    }, ],

    series: [{
        symbolSize: function(data) {
            return data[1] / (data[0] * 3);
        },
        label: {
            show: true,
            position: 'top',
            formatter: function(param) {
                return param.data[2];
            },
        },
        itemStyle: {
            normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(25, 100, 150, 0.5)',
                shadowOffsetY: 5,
            },
        },
        markLine: {
            itemStyle: {
                normal: {
                    lineStyle: {
                        type: 'solid',
                        color: '#000'
                    },
                    label: {
                        show: true,
                        position: 'left'
                    }
                }
            },
            large: true,
            effect: {
                show: true,
                loop: true,
                period: 0,
                scaleSize: 2,
                color: null,
                shadowColor: null,
                shadowBlur: null
            },
        },
        data: packedDatas,
        type: 'scatter',
    }, ]
};

function packDatas(datas) {

    let packedDatas = datas.map((data) => {
        let name = data['name'];
        let periods = data['period'].split('.');
        let period = periods[0] + ' 年 ' + periods[1] + ' 个月';
        let orderCount = data['orderCount'];
        let amount = data['amount'];
        let avt = amount / orderCount;
        let monthCount = Number.parseInt(periods[0]) * 12 + Number.parseInt(periods[1]);

        Bublle_min = Bublle_min > 0 ? Math.min(Bublle_min, monthCount) : monthCount;
        Bublle_max = Math.max(Bublle_max, monthCount);

        return [orderCount, amount, name, period, avt, monthCount];
    });

    return packedDatas;
}

bubbleSecond.setOption(bubblesTwoOption);






