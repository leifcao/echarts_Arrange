// 折线图模板Option {折线图，区域折线图}
let lineOption = function (id, type) {
  const option = {
    id: id,
    legend: {
      data: [],
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
      right: '4%',
    },
    xAxis: {
      type: 'category',
      boundaryGap: true,
      data: [],
      splitLine: {
        show: false,
      },
      axisTick: {
        show: false
      },
    },
    yAxis: {
      type: 'value',
      splitNumber: 4,
      axisTick: {
        show: false
      },
    },
    series: [{
      name: '',
      type: 'line',
      label: {
        normal: {
          show: true,
          position: 'top',
        }
      },
      data: []
    },
    ],
    animationDuration: 2500, //控制渲染速度
  };
  if (type === '区域折线') {
    option.series[0].areaStyle = {};
  }
  return option;
}

// 线柱混搭option模板
let lineBarOption = function (id) {
  const option = {
    id: id,
    legend: {
      data: [],
    },
    grid: {
      top: '12%',
      bottom: '2%',
    },
    xAxis: {
      data: [],
      splitLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
    },
    yAxis: [{
      name: '', //单位：万m³
      splitLine: {show: true},
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
        splitLine: {show: false},
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
      name: '',
      type: 'line',
      smooth: true,
      showAllSymbol: true,
      symbol: 'emptyCircle', //标记的图形为空心圆
      symbolSize: 8,//标记的大小
      yAxisIndex: 1,//使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
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
      data: []
    },
      {
        name: '',
        type: 'bar',
        barWidth: 13,
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
        data: [],
      },
    ]
  };
  return option;
}

// 折线图数据
let lineData = {
  legend: ["调用次数", "成功次数", "失败次数"],
  xAxis: ['2020-09-01', '2020-09-02', '2020-09-03', '2020-09-04'],
  seriesData: [{name: '调用次数', type: 'line', data: [120, 1000, 101, 500]},
    {name: '成功次数', type: 'line', data: [220, 500, 191, 900]},
    {name: '失败次数', type: 'line', data: [300, 232, 600, 400]}],
}
//区域堆积图数据
let areaData = {
  legend: ["入库数量", "出库数量",],
  xAxis: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  seriesData: [{name: '入库数量', type: 'line', data: [180, 160, 140, 88, 30, 75, 100, 86, 78, 28, 39, 67]},
    {name: '出库数量', type: 'line', data: [150, 90, 30, 188, 99, 88, 40, 56, 45, 66, 78, 90]}]
}
// 双Y轴折线数据
let doubleLinesData = {
  legend: ["机房温度", "机房湿度"],
  xAxis: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  seriesData: [{
    name: '机房温度',
    type: 'line',
    data: [10, 10.9, 12.4, 13.6, '', '', 24.6, 18.5, 18.7, 19.9, 30.8, 15.4],
    yAxisIndex: 0,
  },
    {
      name: '机房湿度',
      type: 'line',
      data: [12.6, 13.6, 11.6, 15.7, 16.6, 17.6, 16.7, 15.1, 22.4, 23.5, 13.6, 16.6],
      yAxisIndex: 1,
    }
  ]
}
// 线柱混搭数据
let lineBarData = {
  legend: ['实际用量', '占比', '预计用量'],
  xAxis: ['12-01', '12-02', '12-03', '12-04', '12-05', '12-06'],
  seriesData: [{name: '占比', type: 'line', data: [160, 207, 220, 229, 206, 203]},
    {name: '实际用量', type: 'bar', data: [460, 550, 750, 850, 800, 760]},
    {name: '预计用量', type: 'bar', data: [320, 400, 250, 700, 700, 800]}]
}
// 线柱混搭数据 正负
let lineBarData2 = {
  legend: ["总变化", "群转变化", "单独成交变化", "转介绍变化", "环比增长率"],
  xAxis: ["3月第4期", "3月第5期", "4月第1期", "4月第2期", "4月第3期"],
  seriesData: [{name: '总变化', type: 'bar', data: [700, -300, 600, -200, 400]},
    {name: '群转变化', type: 'bar', data: [400, -200, 400, -250, 250]},
    {name: '单独成交变化', type: 'bar', data: [-250, 250, 200, 350, 250]},
    {name: '转介绍变化', type: 'bar', data: [350, 250, 200, -200, 200]},
    {name: '环比增长率', type: 'line', data: [6, -2.99, 4.67, -1.92, 3.58]},
  ]
}


/**
 * 折线图和柱形图可共用类
 * */
// 折线图
let lineChart = new BarEchart(GetOpiton(lineData, lineOption('lines')));
// 区域折线图
let areaLineChart = new BarEchart(GetOpiton(areaData, lineOption('areaLine', '区域折线')));
// 双Y折线图
// let doubleLinesChart = new BarEchart(GetOpiton(doubleLinesData,doubleLinesOption()));
let doubleLinesChart = new BarEchart(GetOpiton(doubleLinesData, lineBarOption('doubleLines')));
// 线柱混搭
let lineBarChart = new BarEchart(GetOpiton(lineBarData, lineBarOption('lineBar')));
// 线柱混搭2
let lineBarChart2 = new BarEchart(GetOpiton(lineBarData2, lineBarOption('lineBar2')));


