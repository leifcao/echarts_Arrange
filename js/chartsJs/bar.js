/**
 * 条形图类 && 柱状图类 && 折线图
 * @opt 图表的option
 * @fn  图表的点击方法
 **/
class BarEchart extends Echarts {
  constructor(opt, fn) {
    super(opt, fn); //在this之前调用super，实际上就是调用父类的构造函数
    this.defaultBar = {
      grid: {
        containLabel: true
      },
      tooltip:{
        trigger: 'axis', // 坐标轴指示器，坐标轴触发有效
        axisPointer: {
          type: 'shadow',  // 默认为直线，可选为：'line' | 'shadow'
          textStyle: {
            color: textColor
          }
        },
      },
      xAxis: {
        name: '',
        axisLabel: {
          show: true,
          interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
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
          lineStyle:{
            color:textColor,
          }
        },
      },
      yAxis: {
        name: '', //排名
        // inverse:true,
        axisLabel: {
          interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
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
      /*toolbox: {
        feature: {
          magicType: {
            type: ["line", "bar", 'stack']
          },
        }
      }*/
    }
    // 初始化图表
    this.option = $.extend(true, this.defaultBar, this.option);
    // 渲染图表
    this.setOption();
  }

  handleData(data) {
    const {id, background, legend} = this.option;
    console.log(this.option);
  }

}

// 测试点击方法
function fn_test() {
  console.log(params, '--0--');
}

// 条形图通用模板option {条形多柱图，条形堆积图，政府条形图}
let barChartOption = () => {
  const option = {
    legend: {
      data: [],
    },
    grid: {
      left: '3%',
      right: '6%',
      top: '10%',
      bottom: '3%',
    },
    xAxis: {
      type: 'value',
      name: '',
      boundaryGap: [0, 0.02]
    },
    yAxis: {
      type: 'category',
      data: [],
    },
    series: [
      {
        name: '',
        type: 'bar',
        barWidth: '15',
        itemStyle: {
          normal: {
            barBorderRadius: 8,
          }
        },
        label: {
          normal: {
            show: true,
            position: 'right',
            formatter: function (params) {
              return params.value;
            }
          }
        },
        data: []
      },
    ]
  }
  return option
};

// 胶囊条形图
let barChartTwoOption = (id) => {
  const option = {
    id: id,
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
      // data: title_name,
      data: [],
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
      data: [],
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
      name: '',
      type: 'bar',
      yAxisIndex: 0,
      data: [],
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
      data: [],
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
  return option;
}
// 温度条形图
let barChartThreeOption = (id) => {
  const option = {
    id: id,
    grid: {
      left: '8%',
      top: '5%',
      right: '5%',
      bottom:'0%',
    },
    xAxis: {
      show: false,
    },
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
      data: []
    }, {
      axisTick: 'none',
      axisLine: 'none',
      axisLabel: {
        textStyle: {
          color: textColor,
          fontSize: '12',
        }
      },
      data: [],
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
      name: '',
      type: 'bar',
      yAxisIndex: 0,
      data: [],
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
      data: [],
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
      data: [],
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
        data: [],
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
  return option;
}

// 特殊条形图1数据
let barChartOneData = {
  id: 'barChartFirst',
  yAxis: ['角鲨烷', '水解胶原', '羟苯甲酯', '羊毛脂', '咪唑烷基脲', '泛醇', '矿油'],
  seriesData: [{name: '', type: 'bar', data: [120, 150, 180, 200, 220, 250, 300]}]
}

// 胶囊条形图数据
let barChartTwoData = {
  id: 'barChartSecond',
  yAxis: [['交通局', '保安局', '民政局', '运输局', '司法局'], [683, 234, 234, 523, 345]],
  seriesData: [{name: '条', type: 'bar', data: [70, 34, 60, 78, 69]},
    {name: '框', type: 'bar', data: [100, 100, 100, 100, 100]}]
}

// 温度条形图数据
let barChartThreeData = {
  id: 'barChartThird',
  yAxis: [['物理', '生物', '化学', '英语', '数学', '语文'], ['6', '5', '4', '3', '2', '1']],
  seriesData: [{name: '条', type: 'bar', data: [74, 79, 85, 90, 92, 95]},
    {name: '白框', type: 'bar', data: [99, 99.5, 99.5, 99.5, 99.5, 99.5]},
    {name: '外框', type: 'bar', data: [100, 100, 100, 100, 100, 100]},
    {name: '外圆', type: 'scatter', data: [0, 0, 0, 0, 0, 0]},
  ]
}


// 条形多柱图数据
let barChartFourData = {
  id: 'barChartFourth',
  legend: ['2019年', '2020年'],
  yAxis: ['巴西', '印尼', '美国', '印度', '中国',],
  seriesData: [{name: '2019年', type: 'bar', data: [18203, 23489, 29034, 104970, 131744]},
    {name: '2020年', type: 'bar', data: [19325, 23438, 31000, 121594, 134141]},
  ]
}

// 条形堆积图数据
let barChartFiveData = {
  id: 'barChartFifth',
  legend: ['猪肉类', '牛羊肉类', '鸡鸭类'],
  yAxis: ['陕西', '山西', '四川', '北京', '河北', '甘肃', '内蒙'],
  seriesData: [{name: '猪肉类', type: 'bar', data: [320, 302, 301, 334, 390, 330, 120]},
    {name: '牛羊肉类', type: 'bar', data: [120, 132, 101, 134, 90, 230, 210]},
    {name: '鸡鸭类', type: 'bar', data: [220, 182, 191, 234, 290, 330, 310]},
  ]
}

// 正负条形图数据
let barChartSevenData = {
  id: 'barChartSeventh',
  legend: ['等待中', '生产中'],
  yAxis: ['分拣', '清洗', '抛光', '研磨', '脱膜', '切割', '压膜', '压膜分配',],
  seriesData: [{name: '等待中', type: 'bar', data: [400, 241, 360, 320, 302, 341, 374, 390]},
    {name: '生产中', type: 'bar', data: [-120, -180, -120, -120, -132, -101, -134, -190]},
  ]
}



// 条形图
let barOneData = dataFormat(barChartOneData, 'bar1');
var barChartFirst = new BarEchart(GetOpiton(barOneData, barChartOption()));

// 条形图2
var barChartSecond = new BarEchart(GetOpiton(barChartTwoData, barChartTwoOption()));
// 温度条形图
var barChartThird = new BarEchart(GetOpiton(barChartThreeData, barChartThreeOption()));
// 条形多柱图
let barFourData = dataFormat(barChartFourData, 'bar');
var barChartFourth = new BarEchart(GetOpiton(barFourData, barChartOption()));

// 条形堆积图
let barFiveData = dataFormat(barChartFiveData, 'barStack');
var barChartFifth = new BarEchart(GetOpiton(barFiveData, barChartOption()));

// 正负条形图
let barSevenData = dataFormat(barChartSevenData, 'barPlusMinus');
var barChartSeventh = new BarEchart(GetOpiton(barSevenData, barChartOption()));


