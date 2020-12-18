// 仪表盘类，仅仅继承普通图表的方法
class DashboardEchart extends Echarts {
  constructor(opt, fn) {
    super(opt, fn);
    this.option = opt;
    this.setOption();
  }
}

//三色仪表盘
let dashboardOneOption = () => {
  const option = {
    tooltip: {
      formatter: "{a} <br/>{c}%"
    },
    series: [{
      name: '',
      type: 'gauge',
      // radius: '80%',
      min: 0, //最小值
      max: 100, //最大值
      splitNumber: 10, //分几段
      splitLine: {           // 分隔线
        show: true,
        length: 20,
        lineStyle: {
          width: 1,
        }
      },
      axisLine: {  // 盘轴线
        show: true,
        lineStyle: {
          width: 20,  //盘轴的宽度
          color: [  // 颜色比例
            [0.3, colorList[2]],
            [0.7, colorList[1]],
            [1, colorList[0]]
          ]
        }
      },
      axisLabel: {  // 轴文字
        textStyle: {
          fontSize: '12',
        }
      },
      axisTick: {   // 坐标轴小标记
        show: true,
        length: 8,
        lineStyle: {
          width: 1,
        }
      },
      pointer: {  // 指针默认
        // width:10,
        // length:'70%'
      },
      detail: {
        show: true,
        offsetCenter: [0, '70%'],
        textStyle: {
          fontSize: 20,
          fontWeight: 'bold'
        },
        formatter: [
          '{value} ' + '%',
          '{name|' + '完成率}'
        ].join('\n'),
        rich: {
          name: {
            fontSize: 14,
            lineHeight: 30,
            color: textColor,
          }
        },
      },
      data: [],
    }]
  };
  return option;
}

// --------------水环图--------------
let liquidFillOption = () => {
  let liquidFill = {
    color: ['#10B9FF', '#10B9FF', '#10B9FF'], //水波
    thin_Radius: ['74%', '74.5%'],  // 外层细环
    thick_Radius: ['72%', '76.5%'], // 外层粗环
    total_Value: 100,  // 总数
    value: 30  // 数值
  }

  const option = {
    series: [{
      type: 'liquidFill',
      radius: '68%',
      center: ['50%', '50%'],
      color: liquidFill.color,//水波
      data: [], // data个数代表波浪数
      backgroundStyle: {
        borderWidth: 1,
        color: 'transparent'
      },
      outline: {
        show: true,
        itemStyle: {
          borderColor: '#10B9FF',
          borderWidth: 2
        },
        borderDistance: 3
      },
      label: {
        normal: {
          textStyle: {
            fontSize: 12
          }
        }
      }
    },
      {
        name: '外层细环',
        type: 'pie',
        radius: liquidFill.thin_Radius,
        center: ["50%", "50%"],
        hoverAnimation: false,
        itemStyle: {
          normal: {
            label: {
              show: false,
            },
          }
        },
        data: []
      },
      {
        name: '外层粗环',
        type: 'pie',
        radius: liquidFill.thick_Radius,//使得细环位于粗环中间
        center: ["50%", "50%"],
        hoverAnimation: false,
        itemStyle: {
          normal: {
            label: {
              show: false,
            },
          }
        },
        data: []
      }
    ]
  }
  return option;
};

// 简约百分比
var dashboardTwoOption = () => {
  const option = {
    backgroundColor: '',
    angleAxis: {
      show: false,
      max: 100 * 360 / 270, //-45度到225度，二者偏移值是270度除360度
      type: 'value',
      startAngle: 225, //极坐标初始角度
      splitLine: {
        show: false
      }
    },
    barMaxWidth: 14, //圆环宽度
    radiusAxis: {
      show: false,
      type: 'category',
    },
    //圆环位置和大小
    polar: {
      center: ['50%', '50%'],
      radius: '140%'
    },
    series: [{
      name: '内环值',
      type: 'bar',
      data: [{ //上层圆环，显示数据
        value: 75,
        itemStyle: {
          color: { //图形渐变颜色方法，四个数字分别代表，右，下，左，上，offset表示0%到100%
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1, //从左到右 0-1
            y2: 0,
            colorStops: [{
              offset: 0,
              color: '#D1E4FE'
            }, {
              offset: 1,
              color: colorList[0]
            }],
          },
        },
      }],
      barGap: '-100%', //柱间距离,上下两层圆环重合
      coordinateSystem: 'polar',
      roundCap: true, //顶端圆角
      z: 2 //圆环层级，同zindex
    },
      { //下层圆环，显示最大值
        name: '外环最大值',
        type: 'bar',
        data: [{
          value: 100,
          itemStyle: {
            color: '#e9eeed'
          }
        }],
        barGap: '-100%',
        coordinateSystem: 'polar',
        roundCap: true,
        z: 1
      },
      //仪表盘
      {
        name: 'AQI',
        type: 'gauge',
        startAngle: 225, //起始角度，同极坐标
        endAngle: -45, //终止角度，同极坐标
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false
        },
        splitLabel: {
          show: false
        },
        pointer: {
          show: false
        },
        title: {
          offsetCenter: [-10, 0],
          color: textColor,
          fontSize: 30,
          fontWeight: 500,
          rich: {
            a: {
              fontWeight: 'normal',
              fontSize: 16,
              color: textColor,
              padding: [0, 0, 0, 25]
            }
          }
        },
        detail: {
          formatter: (e) => {
            return '良';
          },
          color: textColor,
          fontSize: 12,
          offsetCenter: [40, -20],
          backgroundColor: '#FCC841',
          borderRadius: 8,
          padding: [2, 8],
        },
        data: []
      }
    ]
  }
  return option;
}

/**
 * 多个仪表盘
 * */
let dashboardFourOption = () => {
  // 仪表盘默认配置提取
  let fourth = {
    axisLabel_font: 15,  //轴文本大小
    axisLine_width: 20,  //轴线宽度
    axisTick_len: 8,  // 刻度的长度
    axisTick_width: 2, // 刻度宽度
    pointer: 10,  //指针大小
    splitLine_len: 20,  //分割线长度
    splitLine_width: 2,  //分割线长度
    title_font: 20,  //标题文字大小
    detail_font: 15,  //标题文字大小

  }
  const option = {
    backgroundColor: '',
    series: [
      {
        name: '主仪表盘',
        type: 'gauge',
        z: 3,
        min: 0,
        max: 15,
        startAngle: 200,
        endAngle: -20,
        radius: '80%',
        axisLine: {            // 坐标轴线
          lineStyle: {       // 属性lineStyle控制线条样式
            width: fourth.axisLine_width,
            color: [[0.2, '#0092EE'], [1, '#BECAD8']],
          }
        },
        axisLabel: {
          show: false,
          fontSize: fourth.axisLabel_font,
        },
        axisTick: {            // 坐标轴小标记
          show: true,
          length: fourth.axisTick_len,
          lineStyle: {
            width: fourth.axisTick_width,
          }
        },
        pointer: {
          width: fourth.pointer,
          length: '70%'
        },
        splitLine: {           // 分隔线
          show: true,
          length: fourth.splitLine_len,
          lineStyle: {
            width: fourth.splitLine_width,
          }
        },
        title: {
          offsetCenter: [0, '-20%'],       // x, y，单位px
          fontSize: fourth.title_font,
          color: textColor,
        },
        detail: {
          fontSize: fourth.title_font,
          color: textColor,
          formatter: function (value) {
            return '{a|' + value + '}亿元';
          },
          rich: {
            a: {
              fontSize: fourth.title_font,
              color: '#0093EE'
            }
          }
        },
        data: []
      },
      {
        name: '左仪表盘',
        type: 'gauge',
        center: ['18%', '58%'],    // 默认全局居中
        radius: '55%',
        min: 0,
        max: 12,
        startAngle: 200,
        endAngle: 50,
        splitNumber: 8,
        axisLabel: {
          show: false,
          fontSize: fourth.axisLabel_font,
        },
        axisLine: {            // 坐标轴线
          lineStyle: {       // 属性lineStyle控制线条样式
            width: fourth.axisLine_width,
            color: [[0.2, '#0092EE'], [0.8, '#0092EE'], [1, '#BECAD8']],
          }
        },
        axisTick: {            // 坐标轴小标记
          show: true,
          length: fourth.axisTick_len,
          lineStyle: {
            width: fourth.axisTick_width,
          }
        },
        pointer: {
          width: fourth.pointer,
          length: '70%'
        },
        splitLine: {           // 分隔线
          show: true,
          length: fourth.splitLine_len,
          lineStyle: {
            width: fourth.splitLine_width,
          }
        },
        title: {
          offsetCenter: [0, '-20%'],       // x, y，单位px
          fontSize: fourth.detail_font,
          color: textColor,
        },
        detail: {
          fontSize: fourth.detail_font,
          color: textColor,
          formatter: function (value) {
            return '{a|' + value + '}亿元';
          },
          rich: {
            a: {
              fontSize: fourth.detail_font,
              color: '#0093EE'
            }
          }
        },
        data: []
      },
      {
        name: '右仪表盘',
        type: 'gauge',
        center: ['82%', '58%'],    // 默认全局居中
        radius: '55%',
        min: 0,
        max: 2,
        startAngle: 130,
        endAngle: -20,
        splitNumber: 4,
        axisLabel: {
          show: false,
          fontSize: 34,
        },
        axisLine: {            // 坐标轴线
          lineStyle: {       // 属性lineStyle控制线条样式
            width: fourth.axisLine_width,
            color: [[0.2, '#BECAD8'], [0.8, '#0092EE'], [1, '#25C0C8']],
          }
        },
        axisTick: {            // 坐标轴小标记
          show: true,
          length: fourth.axisTick_len,
          lineStyle: {
            width: fourth.axisTick_width,
          }
        },
        pointer: {
          width: fourth.pointer,
          length: '70%'
        },
        splitLine: {           // 分隔线
          show: true,
          length: fourth.splitLine_len,
          lineStyle: {
            width: fourth.splitLine_width,
          }
        },
        title: {
          offsetCenter: [0, '-20%'],       // x, y，单位px
          fontSize: fourth.detail_font,
          color: textColor,
        },
        detail: {
          fontSize: fourth.detail_font,
          color: textColor,
          formatter: function (value) {
            return '{a|' + value + '}亿元';
          },
          rich: {
            a: {
              fontSize: fourth.detail_font,
              color: '#0093EE'
            }
          }
        },
        data: []
      },
    ]
  };
  return option;
}


//仪表盘2
let dashboardFiveOption = () => {
  const option = {
    title: {
      text: '',
      textStyle: {
        color: '#34E3EA',
        fontSize: 18
      },
      subtext: '',
      subtextStyle: {
        color: textColor,
        fontSize: 14
      },
      itemGap: 10, // 主副标题距离
      left: 'center',
      top: '35%'
    },
    tooltip: {
      formatter: function (params) {
        return params.name + ':' + params.data.total + '人</span>';
      }
    },
    angleAxis: {
      max: 100,
      clockwise: true, // 逆时针
      // 隐藏刻度线
      show: false
    },
    radiusAxis: {
      type: 'category',
      show: true,
      axisLabel: {
        show: false,
      },
      axisLine: {
        show: false,

      },
      axisTick: {
        show: false
      },
    },
    polar: {
      center: ['50%', '50%'],
      radius: '130%' //图形大小
    },
    series: [{
      name: '',
      type: 'bar',
      data: [],
      showBackground: true,
      backgroundStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: 'rgba(14,116,255,.5)'
        }, {
          offset: 1,
          color: 'rgba(92,234,255,.5)'
        }])
      },
      coordinateSystem: 'polar',
      roundCap: true,
      barWidth: 20,
      itemStyle: {
        normal: {
          opacity: 1,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(14,116,255,1)'
          }, {
            offset: 1,
            color: 'rgba(92,234,255,1)'
          }]),
        }
      },
    }]
  };
  return option;
}


//三色仪表盘
let dashboardOneData = {
  id: 'dashboardFirst',
  seriesData: [{name: '业务指标', type: 'gauge', data: [{value: 60}]}]
}
let dashboardFirst = new DashboardEchart(GetOpiton(dashboardOneData, dashboardOneOption()));

//简约百分比
let dashboardTwoData = {
  id: 'dashboardSecond',
  seriesData: [{name: '内环值', type: 'bar', data: [{value: 75}]},
    {name: '外环最大值', type: 'bar', data: [{value: 100}]},
    {name: 'AQI', type: 'gauge', data: [{name: 75 + '\n' + '{a|' + '首要污染物：PM10' + '}', value: 75}]},]
}
let dashboardSecond = new DashboardEchart(GetOpiton(dashboardTwoData, dashboardTwoOption()));

//水环图
let liquidFillData = {
  id: 'dashboardThird',
  seriesData: [{name: '', type: 'liquidFill', data: [0.3, 0.3, 0.3]},
    {name: '外层细环', type: 'pie', data: [{value: 100}]},
    {name: '外层粗环', type: 'pie', data: [{value: 30}, {value: 100 - 30}]}]
}
let liquidFill_data = dataFormat(liquidFillData, 'liquid');
let dashboardThird = new DashboardEchart(GetOpiton(liquidFill_data, liquidFillOption()));

//多个仪表盘
let dashboardFourData = {
  // 第一个name不能更改，用作标识符
  id: 'dashboardFouth',
  seriesData: [{name: '主仪表盘', type: 'gauge', data: [{value: 3.15, name: '利润总额'}]},
    {name:'左仪表盘',type: 'gauge', data: [{value: 2.36, name: '母公司'}]},
    {name:'右仪表盘',type: 'gauge', data: [{value: 0.79, name: '子公司'}]}
  ]
}
let dashboardFourth = new DashboardEchart(GetOpiton(dashboardFourData, dashboardFourOption()));

//仪表盘2
let dashboardFiveData = {
  id: 'dashboardFifth',
  seriesData: [{name: '', type: 'bar', data: [{name: '女生比例', value: 62.35, total: 1265}]}]
}
let dashboardFive_data = dataFormat(dashboardFiveData, 'dashboard2');
let dashboardFifth = new DashboardEchart(GetOpiton(dashboardFive_data, dashboardFiveOption()));
