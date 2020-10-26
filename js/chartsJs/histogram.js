// ----柱状图----------
let histogramOneOption = {
  id: 'histogramFirst',
  grid: {
    left: '2%',
    right: '4%',
    bottom: '2%',
    top: '10%',
  },
  xAxis: {
    type: 'category',
    data: ['制造业', '建筑业', '农林牧渔', '房地产', '金融业'],
    splitLine: {
      show: false,
    },
  },
  yAxis: {
    name: '', //单位：万元
    type: 'value',
    // max: '1200',
    axisTick: {
      show: false
    },
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
    animationDelay: function (idx) {
      return idx * 600;
    }
  }]
};
setSeriesColor(histogramOneOption.series);

// ------多系列柱图------------
let histogramTwoOption = {
  id: 'histogramSecond',
  grid: {
    left: '2%',
    right: '4%',
    bottom: '2%',
    top: '10%',
  },
  legend: {
    data: ['健康度', '可用度'],
    left: 'center',
  },
  xAxis: {
    type: 'category',
    data: ['22:18', '22:23', '22:25', '22:28', '22:30', '22:33', '22:35'],
    axisLabel: {
      interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
      // rotate: 40,
    },
    splitLine: {
      show: false,
    }
  },

  yAxis: {
    type: 'value',
    max: '80',
    axisTick: {
      show: false
    },
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
    data: [20, 25, 40, 55, 65, 70, 80],
    animationDelay: function (idx) {
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
      data: [18, 20, 35, 40, 55, 65, 72],
      animationDelay: function (idx) {
        return idx * 600;
      }
    },
  ]
};
// 颜色设置
setSeriesColor(histogramTwoOption.series);

// -----------堆积柱图------------
var histogramThreeData = {
  area: ['新荣区', '平城区', '云冈区', '云州区'],
  legend: ['因病', '因残', '因学', '因灾', '缺土地', '缺水', '缺技术',],
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
let histogramThreeOption = {
  id: 'histogramThird',
  grid: {
    right: '3%',
    left: '3%',
    bottom: '0%',
    top: '15%',
  },
  legend: {
    x: 'center',
    y: '2',
    data: histogramThreeData.legend,

  },
  calculable: true,
  xAxis: {
    type: "category",
    // name: '设备名称',
    splitLine: {
      show: false,
    },
    splitArea: {
      show: false
    },
    data: histogramThreeData.area,
  },
  yAxis: {
    type: "value",
    name: "", //数量
    nameTextStyle: {
      color: textColor,
    },
    axisTick: {
      show: false,
      lineStyle: {
        color: 'rgba(255,255,255,1)'
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
    animationDelay: function (idx) {
      return idx * 600;
    },
    data: histogramThreeData.data[i],
  })
}
// 设置主题颜色
setSeriesColor(histogramThreeOption.series);

// 阶梯瀑布图
let histogramFourOption = {
  id: 'histogramFourth',
  tooltip: {
    formatter: function (params) {
      var tar;
      if (params[1].value !== '-') {
        tar = params[1];
      } else {
        tar = params[2];
      }
      return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
    }
  },
  legend: {
    data: ['支出', '收入'],
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    top: '11%',
  },
  xAxis: {
    type: 'category',
    splitLine: {show: false},
    boundaryGap: true,
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
      data: [900, 345, 393, '-', '-', 500, 400, 286, '-', '-', '-']
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
      data: ['-', '-', '-', 300, 400, '-', '-', '-', 550, 361, 503]
    }
  ]
};

// 多柱图
let histogramFifth_data = {
  xData: ['cpu', '内存', '磁盘', 'cpu', '内存', '磁盘', 'cpu', '内存', '磁盘', 'cpu', '内存', '磁盘',],
  yData: [20, 25, 28, 35, 23, 32, 33, 36, 57, 72, 45, 45],
  y1Data: [30, 60, 88, 50, 30, 50, 60, 60, 70, 85, 50, 50]
}
let histogramFiveOption = {
  id: 'histogramFifth',
  legend: {
    right: 'center',
    data: ['均值', '峰值']
  },
  grid: [
    {
      top: '10%',
      bottom: '15%',
      right:'5%',
    },
    {
      height: '15%',
      right:'5%',
      bottom: '0%'
    }
  ],
  xAxis: [{
    type: 'category',
    data: histogramFifth_data.xData,
    gridIndex: 0,
    axisLabel: {
      color: '#333',
      margin: 2
    },
    axisLine: {
      lineStyle: {
        color: textColor
      }
    },
    axisTick: {
      lineStyle: {
        color: textColor
      }
    },
    zlevel: 2
  }, {
    type: 'category',
    gridIndex: 1,
    axisLine: {
      show: false
    },
    zlevel: 1
  }],
  yAxis: [{
    type: 'value',
    gridIndex: 0,
    axisLabel: {
      color: '#333'
    },
    splitLine: {
      lineStyle: {
        type: 'dashed'
      }
    },
    axisLine: {
      lineStyle: {
        color: textColor
      }
    },
    axisTick: {
      lineStyle: {
        color: textColor
      }
    }
  }, {
    type: 'value',
    gridIndex: 1,
    axisLabel: {
      show: false
    },
    axisLine: {
      show: false
    },
    splitLine: {
      show: false
    },
    axisTick: {
      show: false
    }
  }],
  series: [{
    name: '均值',
    data: histogramFifth_data.yData,
    type: 'bar',
    label: {
      show: true,
      position: 'top',
      textStyle: {
        color: textColor
      }
    },
    itemStyle: {
      normal: {
        color: (params) => {
          let colors = colorList.slice(0, 3);
          return colors[params.dataIndex % colors.length]
        },
        barBorderRadius: 10,
      }
    },
    xAxisIndex: 0,
    yAxisIndex: 0
  }, {
    name: '峰值',
    data: histogramFifth_data.y1Data,
    type: 'bar',
    label: {
      show: true,
      position: 'top',
      textStyle: {
        color: textColor
      }
    },
    itemStyle: {
      normal: {
        color: (params) => {
          let colors = colorList.slice(colorList.length - 4, colorList.length - 1);
          return colors[params.dataIndex % colors.length]
        },
        barBorderRadius: 10,
      }
    },
    xAxisIndex: 0,
    yAxisIndex: 0
  }, {
    data: [{
      name: '联想',
      value: 1
    }],
    label: {
      show: true,
      position: 'inside',
      formatter: '{b}',
      offset: [0, 10],
      textStyle: {
        color: '#777'
      }
    },
    type: 'bar',
    barGap: 0,
    barWidth: '25%',
    itemStyle: {
      normal: {
        color: 'rgba(134,176,237, .5)'
      }
    },
    xAxisIndex: 1,
    yAxisIndex: 1
  }, {
    data: [{
      name: '华为',
      value: 1
    }],
    label: {
      show: true,
      position: 'inside',
      formatter: '{b}',
      offset: [0, 10],
      textStyle: {
        color: '#777'
      }
    },
    type: 'bar',
    barGap: 0,
    barWidth: '25%',
    itemStyle: {
      normal: {
        color: 'rgba(40,191,126, .5)'
      }
    },
    xAxisIndex: 1,
    yAxisIndex: 1
  }, {
    data: [{
      name: '华硕',
      value: 1
    }],
    label: {
      show: true,
      position: 'inside',
      formatter: '{b}',
      offset: [0, 10],
      textStyle: {
        color: '#777'
      }
    },
    type: 'bar',
    barGap: 0,
    barWidth: '25%',
    itemStyle: {
      normal: {
        color: 'rgba(237,124,47, .5)'
      }
    },
    xAxisIndex: 1,
    yAxisIndex: 1
  }, {
    data: [{
      name: '苹果',
      value: 1
    }],
    label: {
      show: true,
      position: 'inside',
      formatter: '{b}',
      offset: [0, 10],
      textStyle: {
        color: '#777'
      }
    },
    type: 'bar',
    barGap: 0,
    barWidth: '25%',
    itemStyle: {
      normal: {
        color: 'rgba(242,169,59, .5)'
      }
    },
    xAxisIndex: 1,
    yAxisIndex: 1
  }]
};

// 柱状图
var histogramFirst = new BarEchart(histogramOneOption);
// 多系列柱图
var histogramSecond = new BarEchart(histogramTwoOption);
// 堆积柱图
var histogramThird = new BarEchart(histogramThreeOption);
// 阶梯瀑布图
var histogramFourth = new BarEchart(histogramFourOption);
// 多柱图
var histogramFifth = new BarEchart(histogramFiveOption);
