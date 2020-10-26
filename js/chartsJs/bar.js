// 条形图1
var chartData = [120, 150, 180, 200, 220, 250, 300];
var chartName = ['角鲨烷', '水解胶原', '羟苯甲酯', '羊毛脂', '咪唑烷基脲', '泛醇', '矿油'];
let barChartOneOption = {
  id: 'barChartFirst',
  grid: {
    left: '1%',
    right: '8%',
    bottom: '5%',
    top: '5%',
    containLabel: true
  },
  xAxis: {
    type: 'value',
    axisLabel: {
      show: false
    },
    axisTick: {
      show: false //取消坐标轴刻度线
    },
  },
  yAxis: {
    type: 'category',
    // inverse:true,
    data: chartName,
    axisTick: {
      show: false
    },
  },
  series: [{ //百分比
    show: true,
    type: 'bar',
    barWidth: '50%',
    itemStyle: { //柱子颜色
      normal: {
        color: function (data) {
          return colorList[data.dataIndex];
        },
        barBorderRadius: [0, 8, 8, 0],
      }
    },
    label: {
      normal: {
        show: true,
        textAlign: 'center',
        textStyle: {
          //color:'#4d9dff',
          fontSize: 12,
          fontWeight: 'normal',
        },
        position: 'right',
        formatter: function (data) {
          var sum = 0;
          for (i = 0; i < chartData.length; i++) {
            sum += chartData[i];
          }
          return '' + ((chartData[data.dataIndex] / sum) * 100).toFixed(0) + '%';
        },
        rich: {
          a: {
            //color:'#9ea8bc', //字体统一颜色
            fontSize: 12
          }
        }
      }
    },
    data: chartData
  },]
};

// 条形图2
var barChartTwo_data = [70, 34, 60, 78, 69]
var title_name = ['太原市残联', '太原市报社', '太原市民政局', '太原市运输局', '太原市司法局'];
var barChartTwo_valdata = [683, 234, 234, 523, 345]
let barChartTwoOption = {
  id: 'barChartSecond',
  tooltip: {
    show: false
  },
  grid: {
    top: '6%',
    left: '5%',
    right: '5%',
    bottom: '0%'
  },
  xAxis: {
    show: false
  },
  yAxis: [{
    show: true,
    data: title_name,
    inverse: true,
    axisLine: {
      show: false
    },
    splitLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      color: textColor,
      formatter: function (value, index) {
        return [
          '{lg|' + (index + 1) + '}' + '{title|' + value + '} '
        ].join('\n')
      },
      rich: {
        lg: {
          backgroundColor: '#339911',
          color: textColor,
          borderRadius: 15,
          // padding: 5,
          align: 'center',
          width: 15,
          height: 15
        },
      }
    },
  }, {
    show: true,
    inverse: true,
    data: barChartTwo_valdata,
    axisLabel: {
      textStyle: {
        fontSize: 12,
        color: textColor,
      },
    },
    axisLine: {
      show: false
    },
    splitLine: {
      show: false
    },
    axisTick: {
      show: false
    },

  }],
  series: [{
    name: '条',
    type: 'bar',
    yAxisIndex: 0,
    data: barChartTwo_data,
    barWidth: 20,
    itemStyle: {
      normal: {
        barBorderRadius: 30,
        color: function (params) {
          var num = colorList.length;
          return colorList[params.dataIndex % num]
        },
      }
    },
    label: {
      normal: {
        show: true,
        position: 'inside',
        formatter: '{c}%'
      }
    },
  }, {
    name: '框',
    type: 'bar',
    yAxisIndex: 1,
    barGap: '-100%',
    data: [100, 100, 100, 100, 100],
    barWidth: 20,
    itemStyle: {
      normal: {
        color: 'none',
        borderColor: '#00c1de',
        borderWidth: 3,
        barBorderRadius: 15,
      }
    }
  },]
};

// 条形图3
let barChartThree_yAxis1 = ['物理', '生物', '化学', '英语', '数学', '语文'];
let barChartThree_yAxis2 = ['9', '7', '6', '4', '2', '1'];
let barChartThreeOption = {
  id: 'barChartThird',
  grid: {
    left: '8%',
    top: '5%',
    right: '5%',
  },
  xAxis: [{
    show: false,
  }],
  yAxis: [{
    axisTick: 'none',
    axisLine: 'none',
    offset: '27',
    axisLabel: {
      textStyle: {
        color: textColor,
        fontSize: '12',
      }
    },
    data: barChartThree_yAxis1
  }, {
    axisTick: 'none',
    axisLine: 'none',
    axisLabel: {
      textStyle: {
        color: textColor,
        fontSize: '12',
      }
    },
    data: barChartThree_yAxis2
  }, {
    name: '高一(一)班张三偏科情况',
    nameGap: '50',
    nameTextStyle: {
      color: textColor,
      fontSize: '13',
    },
    axisLine: {
      lineStyle: {
        color: 'rgba(0,0,0,0)'
      }
    },
    data: [],
  }],
  series: [{
    name: '条',
    type: 'bar',
    yAxisIndex: 0,
    data: [74, 79, 85, 90, 92, 95],
    label: {
      normal: {
        show: true,
        position: 'right',
        textStyle: {
          color: textColor,
          fontSize: '13',
        }
      }
    },
    barWidth: 15,
    itemStyle: {
      normal: {
        color: function (params) {
          var num = colorList.length;
          return colorList[params.dataIndex % num]
        },
      }
    },
    z: 2
  }, {
    name: '白框',
    type: 'bar',
    yAxisIndex: 1,
    barGap: '-100%',
    data: [99, 99.5, 99.5, 99.5, 99.5, 99.5],
    barWidth: 20,
    itemStyle: {
      normal: {
        // color: '#0e2147',
        color: '#fff',
        barBorderRadius: 15,
      }
    },
    z: 1
  }, {
    name: '外框',
    type: 'bar',
    yAxisIndex: 2,
    barGap: '-100%',
    data: [100, 100, 100, 100, 100, 100],
    barWidth: 23,
    itemStyle: {
      normal: {
        color: function (params) {
          var num = colorList.length;
          return colorList[params.dataIndex % num]
        },
        barBorderRadius: 10,
      }
    },
    z: 0
  },
    {
      name: '外圆',
      type: 'scatter',
      hoverAnimation: false,
      data: [0, 0, 0, 0, 0, 0],
      yAxisIndex: 2,
      symbolSize: 30,
      itemStyle: {
        normal: {
          color: function (params) {
            var num = colorList.length;
            return colorList[params.dataIndex % num]
          },
          opacity: 1,
        }
      },
      z: 2
    }
  ]
};

// 条形多柱图
let barChartFourOption = {
  id: 'barChartFourth',
  legend: {
    data: ['2019年', '2020年'],
  },
  grid: {
    left: '3%',
    right: '6%',
    top: '10%',
    bottom: '3%',
  },
  xAxis: {
    type: 'value',
    name: '万人',
    boundaryGap: [0, 0.02]
  },
  yAxis: {
    type: 'category',
    data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口'],
  },
  series: [
    {
      name: '2019年',
      type: 'bar',
      itemStyle: {
        normal: {
          barBorderRadius: [0, 8, 8, 0],
        }
      },
      label: {
        normal: {
          show: true,
          position: 'right',
          formatter: function (params) {
            return params.value + '万'
          }
        }
      },
      data: [18203, 23489, 29034, 104970, 131744, 630230]
    },
    {
      name: '2020年',
      type: 'bar',
      itemStyle: {
        normal: {
          barBorderRadius: [0, 8, 8, 0],
        }
      },
      label: {
        normal: {
          position: 'right',
          show: true,
          formatter: function (params) {
            return params.value + '万'
          }
        }
      },
      data: [19325, 23438, 31000, 121594, 134141, 681807]
    }
  ]
};

// 条形堆积图
let barChartFive_legend = ['猪肉类', '牛羊肉类', '鸡鸭类', '三文鱼及产品', '其他水产品'];
let barChartFive_yAxis = ['陕西', '山西', '四川', '北京', '河北', '甘肃', '内蒙']
let barChartFiveOption = {
  id: 'barChartFifth',
  legend: {
    data: barChartFive_legend,
  },
  grid: {
    left: '3%',
    right: '5%',
    bottom: '2%',
    top: '10%',
  },
  xAxis: {
    type: 'value',
    axisTick: {
      show: false
    }
  },
  yAxis: {
    type: 'category',
    data: barChartFive_yAxis,
  },
  series: [{
    name: '猪肉类',
    type: 'bar',
    stack: '总量',
    barWidth: '60%',
    itemStyle: {
      normal: {
        color: '',
        // barBorderRadius: [8, 0, 0, 8],
      }
    },
    label: {
      show: true,
      fontSize: 10,
      position: 'insideRight'
    },
    data: [320, 302, 301, 334, 390, 330, 120]
  },
    {
      name: '牛羊肉类',
      type: 'bar',
      stack: '总量',
      itemStyle: {
        normal: {
          color: '',
        }
      },
      label: {
        show: true,
        fontSize: 10,
        position: 'insideRight'
      },
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: '鸡鸭类',
      type: 'bar',
      stack: '总量',
      itemStyle: {
        normal: {
          color: '',
        }
      },
      label: {
        show: true,
        fontSize: 10,
        position: 'insideRight'
      },
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: '三文鱼及产品',
      type: 'bar',
      stack: '总量',
      itemStyle: {
        normal: {
          color: '',
        }
      },
      label: {
        show: true,
        fontSize: 10,
        position: 'insideRight'
      },
      data: [150, 212, 201, 154, 190, 330, 410]
    },
    {
      name: '其他水产品',
      type: 'bar',
      stack: '总量',
      itemStyle: {
        normal: {
          color: '',
          barBorderRadius: [0, 8, 8, 0],
        }
      },
      label: {
        show: true,
        fontSize: 10,
        position: 'insideRight'
      },
      data: [320, 432, 201, 234, 290, 330, 120]
    }
  ]
};

// 双向条形图
/**
 * 照着一个案例改的
 * 增加下面的数值显示
 * */
var myData = ['一审服', '撤诉率', '调解率', '实际', '裁判率', '执行标', '再审']
var barChartSixData = [100, 100, 100, 100, 100, 100, 100]
var lastYearData = {
  1: [3, 20, 62, 34, 55, 65, 33]
}
var thisYearData = {
  1: [11, 38, 23, 39, 66, 66, 79]
}
var timeLineData = [1]

let barChartSixOption = {
  id: 'barChartSixth',
  baseOption: {
    timeline: {
      show: false,
      top: 0,
      data: []
    },
    legend: {
      left: "center",
      itemWidth: 15,
      itemHeight: 10,
      // icon: 'horizontal',
      data: ['2017', '2018']
    },
    grid: [{
      show: false,
      left: '3%',
      bottom: '2%',
      top: '10%',
      containLabel: true,
      width: '37%'
    }, {
      show: false,
      left: '51%',
      bottom: '5%',
      top: '10%',
      width: '0%'
    }, {
      show: false,
      right: '3%',
      bottom: '2%',
      top: '10%',
      containLabel: true,
      width: '37%'
    }],
    xAxis: [{
      type: 'value',
      inverse: true,
      axisLine: {
        show: true
      },
      axisTick: {
        show: false
      },
      position: 'bottom',
      axisLabel: {
        show: true,
        textStyle: {
          color: textColor, //X轴左侧字体设置
          fontSize: 12,
        }
      },
      splitLine: {
        show: true
      }
    }, {
      gridIndex: 1,
      show: false,
    }, {
      gridIndex: 2,
      axisLine: {
        show: true
      },
      axisTick: {
        show: false
      },
      position: 'bottom',
      axisLabel: {
        show: true,
        interval: 0,
        textStyle: {
          color: textColor, //X轴右侧字体设置
          fontSize: 12,
        }
      },
      splitLine: {
        show: true
      }
    }],
    yAxis: [{
      type: 'category',
      inverse: true,
      position: 'right',
      axisLine: {
        show: true
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false
      },
      data: myData
    }, {
      gridIndex: 1,
      type: 'category',
      inverse: true,
      position: 'left',
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: textColor, //中间字体设置
          fontSize: 12,
        },
      },
      splitNumber: 8,
      data: myData.map(function (value) {
        return {
          value: value,
          textStyle: {
            align: 'center',
          }
        }
      })
    }, {
      gridIndex: 2,
      type: 'category',
      inverse: true,
      position: 'left',
      axisLine: {
        show: true
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false
      },
      data: myData
    }],
    series: []
  },
  options: []
}

barChartSixOption.baseOption.timeline.data.push(timeLineData[0])
barChartSixOption.options.push({
  series: [{
    type: 'pictorialBar',
    xAxisIndex: 0,
    yAxisIndex: 0,
    itemStyle: {
      normal: {
        color: 'rgba(0,0,0,0)'
      }
    },
    barWidth: 10,
    data: barChartSixData,
    barGap: '-100%',
    barCategoryGap: 0,
    label: {
      normal: {
        show: true,
        formatter: (series) => {
          return lastYearData[timeLineData[0]][series.dataIndex] + '%'
        },
        position: 'insideTopLeft',
        textStyle: {
          color: textColor, //左侧字体设置
          fontSize: 12,
        },
        offset: [0, -5],
      }
    },
    z: -100,
    animationEasing: 'elasticOut',
    animationDelay: function (idx) {
      return idx * 600;
    }
  }, {
    name: '2017',
    type: 'bar',
    xAxisIndex: 0,
    yAxisIndex: 0,
    //  symbol: 'rect',
    barWidth: 10,
    itemStyle: {
      normal: {
        barBorderRadius: 5,
        color: colorList[0]
      }
    },
    // symbolRepeat: true,
    // symbolSize: 14,
    data: lastYearData[timeLineData[0]],
    animationEasing: 'elasticOut',
    animationDelay: function (idx) {
      return idx * 600;
    }
  },
    {
      type: 'pictorialBar',
      xAxisIndex: 2,
      yAxisIndex: 2,
      symbol: 'rect',
      itemStyle: {
        normal: {
          color: 'rgba(0,0,0,0)'
        }
      },
      barWidth: 10,
      symbolRepeat: true,
      symbolSize: 14,
      data: barChartSixData,
      barGap: '-100%',
      barCategoryGap: 0,
      label: {
        normal: {
          show: true,
          formatter: (series) => {
            return thisYearData[timeLineData[0]][series.dataIndex] + '%'
          },
          position: 'insideTopRight',
          textStyle: {
            color: textColor, //右侧字体设置
            fontSize: 12,
          },
          offset: [0, -5],
        }
      },
      z: -100,
      animationEasing: 'elasticOut',
      animationDelay: function (idx) {
        return idx * 600;
      }
    }, {
      name: '2018',
      type: 'bar',
      xAxisIndex: 2,
      yAxisIndex: 2,
      //   symbol: 'rect',
      barWidth: 10,
      itemStyle: {
        normal: {
          barBorderRadius: 5,
          color: colorList[1]
        }
      },
      // symbolRepeat: true,
      // symbolSize: 14,
      data: thisYearData[timeLineData[0]],
      animationEasing: 'elasticOut',
      animationDelay: function (idx) {
        return idx * 600;
      }
    }
  ]
});


// 正负条形图
let barChartSeven_legend = ['等待中', '生产中'];
let barChartSeven_yAxis = ['分拣', '清洗', '抛光', '研磨', '脱膜', '切割', '压膜', '压膜分配', '光固化后处理', '光固化'];
let barChartSevenOption = {
  id: 'barChartSeventh',
  tooltip: {
    formatter: function (params) {
      return params[0].name +
        "<br>生产中：" + params[0].value +
        "<br>等待中：" + -params[1].value;
    }
  },
  legend: {
    data: barChartSeven_legend,
    left: "center",
  },
  grid: {
    left: '2%',
    right: '4%',
    bottom: '2%',
    top: '10%',
  },
  xAxis: {
    type: 'value'
  },
  yAxis: {
    type: 'category',
    axisTick: {show: false},
    data: barChartSeven_yAxis,
  },
  series: [{
    name: '等待中',
    type: 'bar',
    stack: '总量',
    itemStyle: {
      normal: {
        barBorderRadius: [0, 8, 8, 0],
      }
    },
    label: {
      normal: {
        show: true,
        barBorderRadius: 10
      }
    },
    data: [400, 241, 360, 320, 302, 341, 374, 390, 450, 420]
  },
    {
      name: '生产中',
      type: 'bar',
      stack: '总量',
      itemStyle: {
        normal: {
          barBorderRadius: [8, 0, 0, 8],
        }
      },
      label: {
        normal: {
          show: true,
          formatter: function (params) {
            return -params.value
          }
        }
      },
      data: [-120, -180, -120, -120, -132, -101, -134, -190, -230, -210]
    },
  ]
};




/**
 * 条形图类 && 柱状图类
 * @opt 图表的option
 * @fn  图表的点击方法
 **/
class BarEchart extends Echarts {
  constructor(opt, fn) {
    super(opt, fn); //在this之前调用super，实际上就是调用父类的构造函数
    this.defaultBar = {
      grid: {
        left: '0%',
        right: '0%',
        bottom: '0%',
        top: '0%',
        containLabel: true
      },
      xAxis: {
        name: '',
        axisLabel: {
          show: true,
          textStyle: {
            fontFamily: 'Microsoft YaHei'
          }
        },
        axisTick: {
          show: true //取消坐标轴刻度线
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: textColor,
          }
        },
        splitLine: {
          show: true,
        },
      },
      yAxis: {
        name: '', //排名
        // inverse:true,
        axisLabel: {
          // interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
          // rotate: 40,
          show: true,
          textStyle: {
            color: textColor,
            fontFamily: 'Microsoft YaHei'
          }
        },
        data: [],
        axisTick: {
          show: true
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: textColor,
          }
        },
      },

    }
    // 初始化图表
    this.option = $.extend(true, this.defaultBar, this.option);
    // 渲染图表
    this.setOption();

    // 图表窗口自适应
    /* window.onresize = () => {
       this.chart.resize();
       console.log(this.option.id)
     }*/

  }

  handleData() {
    const {id, background, legend} = this.option;
    console.log(this.option);
  }

}

// 测试点击方法
function fn_test() {
  console.log(params, '--0--');
}

// 条形图
var barChartFirst = new BarEchart(barChartOneOption, fn_test);
// 条形图2
var barChartSecond = new BarEchart(barChartTwoOption);
// 条形图3
var barChartThird = new BarEchart(barChartThreeOption);
// 条形多柱图
var barChartFourth = new BarEchart(barChartFourOption);
// 条形堆积图
var barChartFifth = new BarEchart(barChartFiveOption);
// 双向条形图
var barChartSixth = new BarEchart(barChartSixOption);
// 正负条形图
let barChartSeventh = new BarEchart(barChartSevenOption);

