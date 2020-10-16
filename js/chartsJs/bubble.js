// --------------------气泡图-------------

//---------传统气泡图-------------
var bubblesOne = document.getElementById('bubblesFirst')
var bubblesFirst = echarts.init(bubblesOne)


var getname = ['SCI', 'SSCI','EI','ISTP','AHCI','ISSHP','其他'];
var getamount = [60.3,40,75.4,65.5,22.3,15.6,75.4];
var getorderCount = [4500,5000,11000,14000,15000,20000,20121];

var getname2 = ['SCI', 'SSCI','EI','ISTP','AHCI','ISSHP','其他'];
var getamount2 = [65.3,35,82.4,72.5,45.3,20.6,80.4];
var getorderCount2 = [5000,6000,12000,16000,18000,23000,27121];


//数据数组封装
function packList(name,params,secondParams){
    let list = [];

    list = name.map((data,index)=>{
        let value = params[index] /  secondParams[index] ;
        return [params[index],secondParams[index],data,value]
    })

    return list;
}
bubble_datas = packList(getname,getorderCount,getamount)
bubble_datas2 = packList(getname2,getorderCount2,getamount2)


let bubblesOneOption= {
    grid: {
        left: '13%',
        top: '12%',
        bottom: '10%',
        right: '10%',
    },
    legend: {
        data: ['2010','2020'],
        type: "scroll",
        itemGap: 25,
        itemWidth: 15,
        itemHeight: 15,
        textStyle: {
            fontSize: '13',
            color: textColor,
        },

    },
    tooltip: {
        extraCssText: 'padding-right:8px;padding-left:8px;line-height:30px;background:rgba(255,255,255,1);box-shadow:1px 5px 20px 0px rgba(1,11,19,0.2);border-radius:6px;',
        textStyle: {
            fontSize: '13',
            color: textColor,
        },
        formatter: function(obj) {
            var value = obj.value;
            return '<div style="padding-bottom: 0px;margin-bottom: 0px">' +
              '年份：' + obj.seriesName +
              '</div>' +
              '收录期刊：' + value[2] + '<br/>' +
              '总被引用次数：' + value[3].toFixed(2) + '<br/>' +
              '人均发表篇次：' + value[1].toFixed(1) + '<br/>' +
              '发表论文总数：' + value[0] + '<br/>';
        }
    },
    xAxis: {
        splitLine: {
            show: false,
        },
        scale: true,
        type: 'value',
        name: '人均发表篇次',
        nameTextStyle: {
            color: textColor,
            fontSize: 13,
            padding: [0, 0, 30, -80]
        },
        axisLabel: {
            formatter: function(value) {
                num = value
                if (num && num != 'undefined' && num != 'null') {
                    let numS = num;
                    numS = numS.toString();
                    numS = numS.replace(/,/gi, '');
                    return numS;
                } else {
                    return num;
                }
            },
            color: textColor,
            textStyle: {
                fontSize: 13
            },
        },
        axisLine: {
            lineStyle: {
                color: textColor,
            }
        },
        axisTick: {
            show: true
        },
    },
    yAxis: {
        name: '人均发表篇次',
        nameTextStyle: {
            color: textColor,
            fontSize: 13,
            // padding: [0, 0, 0, 70]
        },
        axisLabel: {
            formatter: function(value) {
                num = value
                if (num && num != 'undefined' && num != 'null') {
                    let numS = num;
                    numS = numS.toString();
                    numS = numS.replace(/,/gi, '');
                    return numS;
                } else {
                    return num;
                }
            },
            color: textColor,
            textStyle: {
                fontSize: 13
            },
        },
        axisLine: {
            lineStyle: {
                color: textColor,
            }
        },
        axisTick: {
            show: true
        },
        splitLine: {
            show:false
        }
    },

    series: [{
        name: '2010',
        symbolSize: function(data) {
            return data[1]/1.2;
        },
        itemStyle: {
            normal: {
                color: '',
                shadowBlur: 10,
                shadowColor: 'rgba(25, 100, 150, 0.5)',
                shadowOffsetY: 5,
            }

        },
        label: {
            show: true,
            position: 'top',
            formatter: function(param) {
                return param.data[2];
            },
        },
        data: bubble_datas,
        type: 'scatter',
    }, {
        name: '2020',
        symbolSize: function(data) {
            return data[1]/1.2;
        },
        itemStyle: {
            normal: {
                color: '',
                shadowBlur: 10,
                shadowColor: 'rgba(25, 100, 150, 0.5)',
                shadowOffsetY: 5,
            }
        },
        label: {
            show: true,
            position: 'top',
            formatter: function(param) {
                return param.data[2];
            },
        },
        data: bubble_datas2,
        type: 'scatter',
    }]
};

setSeriesColor(bubblesOneOption.series)

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
              '</div>' +
              '订单数：' + value[0] + '<br>' +
              '消费金额：' + value[1] + '<br>' +
              'AVT：' + value[3].toFixed(2) + '<br>';
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
              colorList[1],
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
        data: packedDatas,
        type: 'scatter',
    }, ]
};

function packDatas(datas) {

    let packedDatas = datas.map((data) => {
        let name = data['name'];
        let orderCount = data['orderCount'];
        let amount = data['amount'];
        //计算avt
        let avt = amount / orderCount;

        return [orderCount, amount, name, avt];
    });

    return packedDatas;
}

bubbleSecond.setOption(bubblesTwoOption);






