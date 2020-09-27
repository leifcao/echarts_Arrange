// let colorList = ['#5a6cec', '#168efe', '#2cd1c0', '#ffa06c', '#fedb65', '#8882f7', ] //圆饼的颜色
// 饼图
var pieChirtOne = document.getElementById('pieChirtFirst');
var pieChirtFirst = echarts.init(pieChirtOne);

pieChirtOneOption = {

    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        top: 'center',
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
        textStyle: {
            fontWeight: 'normal',
            fontSize: 12,
            color: textColor
        },
        itemWidth: 10,
        itemHeight: 10
    },
    color: colorList,
    series: [{
        name: '访问来源',
        type: 'pie',
        radius: '55%',
        // color: colorList,
        center: ['50%', '50%'],
        data: [
            { value: 335, name: '直接访问', },
            { value: 310, name: '邮件营销' },
            { value: 135, name: '联盟广告' },
            { value: 800, name: '视频广告' },
            { value: 238, name: '搜索引擎' }
        ],
        emphasis: {
            itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        },
        label: {
            normal: {
                formatter: '{b} : {d}%'
            }
        },
        animationType: 'scale',
        animationEasing: 'elasticOut',
        animationDelay: function(idx) {
            return Math.random() * 2000;
        }
    }],
    // animationDuration: 3000, //控制渲染速度
};
pieChirtFirst.setOption(pieChirtOneOption);






// 环形饼图
var pieChirtTwo = document.getElementById('pieChirtSecond')
var pieChirtSecond = echarts.init(pieChirtTwo)

let data = [{
        "name": "华为",
        "value": 10
    }, {
        "name": "中兴",
        "value": 15
    }, {
        "name": "爱立信",
        "value": 15
    },
    {
        "name": "索尼",
        "value": 25
    },
    {
        "name": "联想",
        "value": 10
    },
    {
        "name": "小米",
        "value": 25
    },
];

// 这步主要是为了让小圆点的颜色和饼状图的块对应，如果圆点的颜色是统一的，只需要把itemStyle写在series里面
let setLabel = (data) => {
    let opts = [];
    for (let i = 0; i < data.length; i++) {
        let item = {};
        item.name = data[i].name;
        item.value = data[i].value;
        item.label = {
            normal: {
                //控制引导线上文字颜色和位置,此处a是显示文字区域，b做一个小圆圈在引导线尾部显示
                show: true,
                //a和b来识别不同的文字区域
                formatter: '{b} : {d}%', //引导线上面文字
            }
        }

        opts.push(item)
    }
    return opts;
}
pieChirtTwoOption = {
    backgroundColor: '',
    animation: true,
    tooltip: {
        formatter: "{b} : {d}%"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        top: 'center',
        data: ['华为', '中兴', '爱立信', '索尼', '联想', '小米'],
        textStyle: {
            fontWeight: 'normal',
            fontSize: 12,
            color: textColor
        },
        itemWidth: 10,
        itemHeight: 10
    },
    series: [{
        color: colorList,
        name: '饼图圆点',
        type: 'pie',
        radius: ['40%', '55%'],
        avoidLabelOverlap: false,
        data: setLabel(data),
        animationType: 'scale',
        animationEasing: 'elasticOut',
        animationDelay: function(idx) {
            return Math.random() * 2000;
        }
    }],
    // animationDuration: 3000, //控制渲染速度
}
pieChirtSecond.setOption(pieChirtTwoOption);



// 玫瑰饼图
var pieChirtThree = document.getElementById('pieChirtThird')
var pieChirtThird = echarts.init(pieChirtThree)

var difData = [
    { value: 10, name: '南京' },
    { value: 5, name: '海外' },
    { value: 15, name: '广州' },
    { value: 25, name: '上海' },
    { value: 20, name: '北京' },
    { value: 35, name: '深圳' },
    { value: 30, name: '长沙' },
]
pieChirtThreeOption = {

    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        x: '10',
        orient: 'vertical',
        y: 'center',
        data: ['北京', '广州', '上海', '南京', '深圳', '海外', '长沙'],
        textStyle: {
            color: textColor
        },
        itemWidth: 10,
        itemHeight: 8,
    },
    //设置饼状图每个颜色块的颜色
    color: colorList,
    calculable: true,
    series: [{
            name: '上传率',
            type: 'pie',
            radius: ['20%', '65%'],
            center: ['50%', '50%'],
            roseType: 'area',
            labelLine: { //折线问题
                normal: {
                    length: 5,
                    length2: 6,
                    lineStyle: {
                        type: 'solid'
                    }
                }
            },
            label: {
                normal: {
                    //饼形图显示格式
                    formatter: '{b} : {d}%',
                    // rich: {
                    //     //设置百分比数字颜色
                    //     per: {
                    //         color: textColor,
                    //         fontSize: 10,
                    //         padding: [2, 4],
                    //         borderRadius: 2
                    //     }
                    // }
                }
            },
            data: difData,
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function(idx) {
                return Math.random() * 2000;
            }
        },

    ],
    // animationDuration: 9000, //控制渲染速度

};

pieChirtThird.setOption(pieChirtThreeOption);




//轮播饼图
var pieChirtFour = document.getElementById('pieChirtFourth')
var pieChirtFourth = echarts.init(pieChirtFour)

pieChirtFourOption = {
    backgroundColor: '',
    animation: true,
    tooltip: {
        formatter: "{b} : {d}%"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        top: 'center',
        data: ['北京', '广州', '上海', '南京', '深圳', '海外'],
        textStyle: {
            fontWeight: 'normal',
            fontSize: 12,
            color: textColor
        },
        itemWidth: 10,
        itemHeight: 10
    },
    series: [{
        color: colorList,
        name: '饼图圆点',
        type: 'pie',
        radius: ['40%', '55%'],
        avoidLabelOverlap: false,
        data: setLabel(data),
        animationType: 'scale',
        animationEasing: 'elasticOut',
        animationDelay: function(idx) {
            return Math.random() * 2000;
        }
    }],
    // animationDuration: 3000, //控制渲染速度
}
pieChirtFourth.setOption(pieChirtFourOption);
// 点击事件
pieChirtFourth.on('click', function(param) {
    console.log(param)
});


let currentIndex = -1;

setInterval(function() {
    var dataLen = pieChirtFourOption.series[0].data.length;
    // 取消之前高亮的图形
    pieChirtFourth.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: currentIndex
    });
    currentIndex = (currentIndex + 1) % dataLen;
    // 高亮当前图形
    pieChirtFourth.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: currentIndex
    });
    // 显示 tooltip
    pieChirtFourth.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: currentIndex
    });
}, 1000);


// 嵌套饼图
var pieChirtFive = document.getElementById('pieChirtFifth')
var pieChirtFifth = echarts.init(pieChirtFive)


var through = ['直达'];
var SE = ['百度', '谷歌', '必应'];
var marketing = ['邮件营销', '联盟广告', '视频广告'];
pieChirtFiveOption = {
    backgroundColor: '',
    tooltip: {
        formatter: function(param) {
            // console.log(param);
            return `${param.name}_${param.data.type} : ${param.value}（${param.percent}%）`
        }
    },
    legend: {
        textStyle: {
            color: textColor
        },
        orient: 'vertical',
        top: 'center',
        left: 'left',
        itemWidth: 10,
        itemHeight: 10,
        data: ['直达', '营销广告', '搜索引擎'],
    },
    color: colorList,
    series: [{
            name: '访问来源',
            type: 'pie',
            radius: [0, '30%'],
            label: {
                position: 'inner'
            },
            selectedMode: 'single',
            data: [
                { value: 335, name: '直达', },
                { value: 679, name: '营销广告', },
                { value: 1548, name: '搜索引擎', },

            ],
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function(idx) {
                return Math.random() * 2000;
            }
        },
        {
            name: '访问来源',
            type: 'pie',
            radius: ['42%', '55%'],
            label: {
                normal: {
                    formatter: function(param) {
                        // console.log(param);
                        var str = `${param.data.type}${param.percent}%`;
                        return str;
                    }
                }
            },
            data: [{
                    value: 335,
                    name: '直达',
                    type: through[0],
                    itemStyle: {
                        normal: {
                            color: ""

                        }
                    }
                }, {
                    value: 310,
                    name: '营销广告',
                    type: marketing[0],
                    itemStyle: {
                        normal: {
                            color: ""

                        }
                    }
                },
                {
                    value: 234,
                    name: '营销广告',
                    type: marketing[1],
                    itemStyle: {
                        normal: {
                            color: ""

                        }
                    }
                },
                {
                    value: 135,
                    name: '营销广告',
                    type: marketing[2],
                    itemStyle: {
                        normal: {
                            color: ""

                        }
                    }
                },

                {
                    value: 1048,
                    name: '搜索引擎',
                    type: SE[0],
                    itemStyle: {
                        normal: {
                            color: ""

                        }
                    }
                },
                {
                    value: 251,
                    name: '搜索引擎',
                    type: SE[1],
                    itemStyle: {
                        normal: {
                            color: ""

                        }
                    }
                },
                {
                    value: 147,
                    name: '搜索引擎',
                    type: SE[2],
                    itemStyle: {
                        normal: {
                            color: ""

                        }
                    }
                },

            ],
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function(idx) {
                return Math.random() * 2000;
            }
        }
    ]
};
setSeriesColor(pieChirtFiveOption.series[1].data);
pieChirtFifth.setOption(pieChirtFiveOption);


// 环形图
var pieChirtSix = document.getElementById('pieChirtSixth')
var pieChirtSixth = echarts.init(pieChirtSix)

var dataStyle = {
    normal: {
        label: {
            show: true,
            position: 'inside'
        },
        labelLine: {
            show: false
        }
    }
};
var placeHolderStyle = {
    normal: {
        color: 'rgba(0,0,0,0)',
        label: {
            show: false,
        },
        labelLine: {
            show: false
        }
    },
    emphasis: {
        color: 'rgba(0,0,0,0)'
    }
};
var pieChirtSixOption = {
    color: colorList,
    tooltip: {
        show: true,
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        itemGap: 12,
        itemWidth:10,
        itemHeight:10,
        textStyle: {
            color: textColor,
        },
        data: ["其他", "资源加工工业", "轻纺工业", "机械电子制造业"],
    },

    series: [{
            name: '机械电子制造业',
            type: 'pie',
            clockWise: true,
            radius: ['70%', '80%'],
            itemStyle: dataStyle,

            hoverAnimation: false,
            data: [{
                    value: 300,
                    name: '机械电子制造业',
                },
                {
                    value: 50,
                    name: '',
                    itemStyle: placeHolderStyle
                }

            ]
        },
        {
            name: '轻纺工业',
            type: 'pie',
            clockWise: true,
            radius: ['60%', '70%'],
            hoverAnimation: false,
            itemStyle: dataStyle,
            data: [{
                    value: 250,
                    name: '轻纺工业',
                },
                {
                    value: 50,
                    name: '',
                    itemStyle: placeHolderStyle
                }
            ]
        },
        {
            name: '资源加工工业',
            type: 'pie',
            clockWise: true,
            hoverAnimation: false,
            radius: ['50%', '60%'],
            itemStyle: dataStyle,
            data: [{
                    value: 160,
                    name: '资源加工工业',
                },
                {
                    value: 50,
                    name: '',
                    itemStyle: placeHolderStyle
                }
            ]
        },
        {
            name: '其他',
            type: 'pie',
            clockWise: true,
            hoverAnimation: false,
            radius: ['40%', '50%'],
            itemStyle: dataStyle,
            data: [{
                    value: 120,
                    name: '其他',
                },
                {
                    value: 50,
                    name: '',
                    itemStyle: placeHolderStyle
                }
            ]
        },



    ]
};

pieChirtSixth.setOption(pieChirtSixOption);



// 饼图点击事件
pieChirtFirst.on('click', function(param) {
    console.log(param)
});

// 环形饼图点击事件
pieChirtSecond.on('click', function(param) {
    console.log(param)
});

// 玫瑰饼图点击事件
pieChirtThird.on('click', function(param) {
    console.log(param)
});
// 嵌套饼图点击事件
pieChirtFifth.on('click', function(param) {
    console.log(param)
});