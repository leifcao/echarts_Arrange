// 折线图模块
let lineData = {
  legend: ["调用次数", "成功次数", "失败次数"],
  xAxis: ['2020-09-01', '2020-09-02', '2020-09-03', '2020-09-04'],
  seriesData: [{name: '调用次数', type: 'line', data: [120, 1000, 101, 500]},
    {name: '成功次数', type: 'line', data: [220, 500, 191, 900]},
    {name: '失败次数', type: 'line', data: [300, 232, 600, 400]}],
}
let lineOption = {
  id: 'lines',
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


//区域堆积图
let areaData = {
  legend: ["入库数量", "出库数量",],
  xAxis: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  seriesData: [{name: '入库数量', type: 'line', data: [180, 160, 140, 88, 30, 75, 100, 86, 78, 28, 39, 67]},
    {name: '出库数量', type: 'line', data: [150, 90, 30, 188, 99, 88, 40, 56, 45, 66, 78, 90]}]
}
let areaLineOption = {
  id: 'areaLine',
  legend: {
    data:[],
  },
  grid: {
    top: '10%',
    left: '5%',
    bottom: '2%',
    right: '5%',
  },
  xAxis: {
    type: 'category',
    boundaryGap: true,
    data:[],
    axisTick: {
      show: false
    },
    splitLine: {
      show: false,
    }
  },
  yAxis: {
    type: 'value',
    axisTick: {
      show: false
    },

  },
  series: [{
    name: '',
    type: 'line',
    areaStyle: {},
    label: {
      normal: {
        show: true,
        position: 'top',
      }
    },
    data: []
  },
  ],
};


// 双Y轴折线
let doubleLinesData = {
  legend: ["机房温度", "机房湿度"],
  xAxis: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  seriesData: [{name: '机房温度', type: 'line', data: [10, 10.9, 12.4, 13.6, '', '', 24.6, 18.5, 18.7, 19.9, 30.8, 15.4]},
    {name: '机房湿度', type: 'line', data: [12.6, 13.6, 11.6, 15.7, 16.6, 17.6, 16.7, 15.1, 22.4, 23.5, 13.6, 16.6],yAxisIndex: 1,}
    ]
}
let doubleLinesOption = {
  id:'doubleLines',
  tooltip: { //提示框组件
    formatter: function (params) {
      var result = ''
      params.forEach(function (item) {
        var unit = item.seriesName == '机房温度' ? '°C' : '%';
        result += `${item.marker}${item.seriesName}${item.data}${unit}</br>`
      })
      return result;
    },
  },
  grid: {
    left: '1%',
    right: '1%',
    bottom: '2%',
    top: '10%',
  },
  legend: {
    top: 'top',
    data: [],
  },
  xAxis: {
    type: 'category',
    boundaryGap: true, //坐标轴两边留白
    data: [],
    axisLabel: { //坐标轴刻度标签的相关设置。
      interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
    },
    axisTick: { //坐标轴刻度相关设置。
      show: false,
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
    name: '',
    type: 'line',
    data: [],
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
      name: '',
      type: 'line',
      data: [],
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

// 线柱混搭
let lineBarData = {
  legend: ['实际用量', '占比', '预计用量'],
  xAxis: ['12-01', '12-02', '12-03', '12-04', '12-05', '12-06'],
  seriesData: [{name: '占比', type: 'line', data: [160,207,220,229,206,203]},
    {name: '实际用量', type: 'bar', data: [460, 550, 750, 850, 800, 760]},
    {name: '预计用量', type: 'bar', data: [320, 400, 250, 700, 700, 800]}]
}
let lineBarOption = {
  id: 'lineBar',
  legend: {
    data: lineBarData.legend,
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
    smooth: true,//平滑曲线显示
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
      data: []
    },
  ]
};


// 线柱混搭 正负
let lineBarData2 ={
  legend: ["总变化", "群转变化", "单独成交变化", "转介绍变化", "环比增长率"],
  xAxis:["3月第4期","3月第5期","4月第1期", "4月第2期", "4月第3期"],
  seriesData: [{name: '总变化', type: 'bar', data:[700, -300, 600, -200, 400]},
    {name: '群转变化', type: 'bar', data: [400, -200, 400, -250, 250]},
    {name: '单独成交变化', type: 'bar', data: [-250, 250, 200, 350, 250]},
    {name: '转介绍变化', type: 'bar', data: [350, 250, 200, -200, 200]},
    {name: '环比增长率', type: 'line', data: [6, -2.99, 4.67, -1.92, 3.58]},
  ]
}
let lineBarOption2 = {
  id: 'lineBar2',
  legend: {
    data: lineBarData.legend,
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
      data: []
    },

  ]
};


/**
 * 折线图和柱形图可共用类
 * */
// 折线图
let lineChart = new BarEchart(GetOpiton(lineData,lineOption));
// 区域折线图
let areaLineChart = new BarEchart(GetOpiton(areaData,areaLineOption));
// 双Y折线图
let doubleLinesChart = new BarEchart(GetOpiton(doubleLinesData,doubleLinesOption));
// 线柱混搭
let lineBarChart = new BarEchart(GetOpiton(lineBarData,lineBarOption));
// 线柱混搭2
let lineBarChart2 = new BarEchart(GetOpiton(lineBarData2,lineBarOption2));



