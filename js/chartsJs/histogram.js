
/*柱状图模板Option
* @{柱状图, 多柱图 ,堆积柱图}
* */
let histogramOption = (id, type) => {
  const option = {
    id: id,
    legend: {
      data: [],
    },
    grid: {
      left: '2%',
      right: '4%',
      bottom: '2%',
      top: '10%',
    },
    xAxis: {
      type: 'category',
      data: [],
      splitLine: {
        show: false,
      },
    },
    yAxis: {
      name: '', //单位：万元
      type: 'value',
      axisTick: {
        show: false
      },
    },
    series: [{
      name: '',
      type: 'bar',
      barWidth: '15',
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
      data: [],
      animationDelay: function (idx) {
        return idx * 600;
      }
    }]
  };
  if (type === '堆积') {
    option.series[0].label.normal.position = 'inside';
    option.series[0].stack = '总量';
  }
  return option;
}

// 阶梯瀑布图 模板
let histogramLadderOption = (id) => {
  const option = {
    id: id,
    tooltip: {},
    legend: {
      data: [],
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
      data: []
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: '',
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
        data: []
      },
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
        data: []
      },
    ]
  }
  return option;
};

// 多系列柱图 模板
let histogramFiveOption = (id) => {
  const option = {
    id: id,
    legend: {
      right: 'center',
      data: []
    },
    grid: [
      {
        top: '10%',
        bottom: '15%',
        right: '5%',
      },
      {
        height: '15%',
        right: '5%',
        bottom: '0%'
      }
    ],
    xAxis: [{
      type: 'category',
      data: [],
      gridIndex: 0,
      axisLabel: {
        color: textColor,
        margin: 2,
        interval:0,
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
      name: '',
      data: [],
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
            let len = colorList.length;
            let colors = params.seriesIndex === 0 ? colorList.slice(0, 3) : colorList.slice(len - 3, len)
            return colors[params.dataIndex % colors.length]
          },
          barBorderRadius: 10,
        }
      },
      xAxisIndex: 0,
      yAxisIndex: 0
    }, {
      name: '电脑',
      data: [],
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
          color: (params => {return colorList[params.seriesIndex % colorList.length]})
        }
      },
      xAxisIndex: 1,
      yAxisIndex: 1
    }]
  }
  return option;
};

// ----柱状图数据----------
let histogramOneData = {
  xAxis: ['制造业', '建筑业', '农林牧渔', '房地产', '金融业'],
  seriesData: [{name: '2019', type: 'bar', data: [5000, 2600, 1300, 1300, 1250]}]
}

// ------多系列柱图数据------------
let histogramTwoData = {
  legend: ['健康度', '可用度'],
  xAxis: ['22:18', '22:23', '22:25', '22:28', '22:30', '22:33', '22:35'],
  seriesData: [{name: '健康度', type: 'bar', data: [20, 25, 40, 55, 65, 70, 80]},
    {name: '可用度', type: 'bar', data: [18, 20, 35, 40, 55, 65, 72]}]
}

// ------堆积柱图数据------------
var histogramThreeData = {
  legend: ['因病', '因残', '因学', '因灾', '缺水',],
  xAxis: ['新荣区', '平城区', '云冈区', '云州区'],
  seriesData: [
    {name: '因病', type: 'bar', data: [520, 502, 601, 534]},
    {name: '因残', type: 'bar', data: [520, 602, 701, 434]},
    {name: '因学', type: 'bar', data: [601, 402, 501, 500]},
    {name: '因灾', type: 'bar', data: [601, 702, 401, 634]},
    {name: '缺水', type: 'bar', data: [520, 601, 601, 434]},
  ]
}

// 阶梯瀑布图
let hisogramFourData = {
  legend: ['支出', '收入'],
  xAxis: ["11月1日", "11月2日", "11月3日", "11月4日", "11月5日", "11月6日", "11月7日", "11月8日", "11月9日", "11月10日", "11月11日"],
  seriesData: [
    {name: '辅助', type: 'bar', data: [0, 900, 1245, 1530, 1376, 1376, 1511, 1689, 1856, 1495, 1292]},
    {name: '收入', type: 'bar', data: [900, 345, 393, '', '', 500, 400, 286, '', '', '']},
    {name: '支出', type: 'bar', data: ['', '', '', 300, 400, '', '', '', 550, 361, 503]},
  ]
}

// 多系列柱图
let histogramFiveData = {
  legend: ['均值', '峰值'],
  xAxis: [['cpu', '内存', '磁盘', 'cpu', '内存', '磁盘', 'cpu', '内存', '磁盘', 'cpu', '内存', '磁盘']],
  seriesData: [
    {name: '均值', type: 'bar', data: [10, 15, 18, 25, 23, 32, 33, 36, 57, 72, 45, 45]},
    {name: '峰值', type: 'bar', data: [20, 50, 80, 50, 30, 50, 60, 60, 70, 90, 50, 50]},
    {name: '电脑', type: 'bar', data: [{name: '联想', value: 1}]},
    {name: '电脑', type: 'bar', data: [{name: '华为', value: 1}]},
    {name: '电脑', type: 'bar', data: [{name: '华硕', value: 1}]},
    {name: '电脑', type: 'bar', data: [{name: '苹果', value: 1}]},
  ]
}

// 柱状图
var histogramFirst = new BarEchart(GetOpiton(histogramOneData, histogramOption('histogramFirst')));
// 多柱图
var histogramSecond = new BarEchart(GetOpiton(histogramTwoData, histogramOption('histogramSecond')));
// 堆积柱图
var histogramThird = new BarEchart(GetOpiton(histogramThreeData, histogramOption('histogramThird', '堆积')));
// 阶梯瀑布图
var histogramFourth = new BarEchart(GetOpiton(hisogramFourData, histogramLadderOption('histogramFourth')));
// 多系列柱图
var histogramFifth = new BarEchart(GetOpiton(histogramFiveData, histogramFiveOption('histogramFifth')));
