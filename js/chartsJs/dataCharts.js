/**
 * 数据图表类
 **/

// 图表表格划线 @num 传入需划线条数量
function getTableLine(num) {
  var list = [];
  var bottom = 5;   // 线条初始距离底部位置
  var height = 20;  // 行高
  for (var i = 0; i < num; i++) {
    list.unshift({
      type: 'line',
      bottom: bottom + i * height,
      right: 50,
      style: {
        fill: '#333'
      },
      shape: {
        x1: 0,
        y1: 0,
        x2: 3200,
        y2: 0
      }

    });
  }
  return list;
}

// 数据图表线柱  --Option
let dataChartLBOption = () => {
  let line_height = 20;  // 行高
  const option = {
    title: {
      bottom: 0,
      left: 20,
      textStyle: {
        lineHeight: line_height,
        fontSize: 13,
        fontWeight: 'normal',
        formatter: function (value) {
          return '{table|' + value + '}';
        },
        rich: {
          table: {
            align: 'center'
          }
        }
      }
    },
    legend: {
      data: [],
    },
    grid: {
      top: '15%',
      left: 80,
      right: 50,
      bottom: 85,
      containLabel: false,
    },
    xAxis: {
      type: 'category',
      boundaryGap: true,
      data: [],
      axisTick: {
        length: 80
      },
      splitLine: {
        show: false,
      },
      axisLabel: {
        interval: 0,
        // formatter: ()=>{},
        rich: {
          table: {
            lineHeight: line_height,
            align: 'center'
          }
        }
      }
    },
    yAxis: [{
      type: 'value',
      scale: true,
      minInterval: 1,
      name: '',
      nameTextStyle: {
        align: 'left',
        padding: [0, 0, -10, 0]
      },
      min: function (v) {
        return Math.max((v.min - 10), 0);
      },
      splitLine: {
        show: true,
        color: textColor
      },
    }, {
      type: 'value',
      scale: true,
      name: '',
      nameTextStyle: {
        align: 'left',
        padding: [0, 0, -10, 0]
      },
      splitLine: {
        show: false
      },
      axisLabel: {
        formatter: '{value} %'
      }
    }],
    series: [{
      name: '',
      type: 'bar',
      label: {
        show: true,
        position: 'top'
      },
      yAxisIndex: 0,
      data: []
    }, {
      name: '',
      type: 'line',
      label: {
        show: true,
        position: 'top',
        formatter: '{c} %'
      },
      yAxisIndex: 1,
      data: []
    }],
    graphic: []
  };
  return option;
}

//数据图表堆积  --Option
let datachartBOption = () => {
  let line_height = 20;  // 行高

  const option = {
    title: {
      // text: ' \n其他\n停业转型\n立案侦查\n失联跑路',
      bottom: 0, //控制表格Y轴方向
      left: 20,
      textStyle: {
        lineHeight: line_height,
        fontSize: 13,
        fontWeight: 'normal',
        formatter: function (value) {
          return '{table|' + value + '}';
        },
        rich: {
          table: {
            align: 'center'
          }
        }
      }
    },
    tooltip: {

    },
    legend: {
      data:[],
    },
    grid: {
      top: '15%',
      right: 50,
      bottom: 88,
      left: 80,
      containLabel: false,
    },
    xAxis: {
      type: 'category',
      boundaryGap: true,
      data: [],
      splitLine:{
        show:false,
      },
      axisTick: {
        length: 82//竖线的长度
      },
      axisLabel: {
        interval: 0,
        // formatter: (value, index)=> {}
        rich: {
          table: {
            lineHeight: line_height,
            align: 'center'
          }
        }
      }
    },
    yAxis: {
      type: 'value',
      scale: true,
      nameTextStyle: {
        align: 'left',
        padding: [0, 0, -20, -30]
      },
      minInterval: 1,
      name: '',
      splitLine: {
        show: true,
        color: textColor
      },
    },
    series: [{
      name: '',
      stack: 'aa',
      type: 'bar',
      barWidth: '20px',
      label: {
        show: true,
        position: 'inside'
      },
      data: []
    }
    ],
    graphic: []
  };
  return option;
}

// 数据图表线柱  --Data
let dataChartOneData = {
  id: 'dataChartFirst',
  legend: ['计划数量', '实际产出', '达成率', '生产效率'],
  xAxis: ['12-01', '12-02', '12-03', '12-04', '12-05', '12-06', '12-07'],
  seriesData: [{name: '计划数量', type: 'bar', data: [150, 190, 203, 146, 177, 188, 164]},
    {name: '实际产出', type: 'bar', data: [200, 190, 220, 200, 210, 160, 180]},
    {name: '达成率', type: 'line', data: [80, 90, 60, 70, 80, 90, 60]},
    {name: '生产效率', type: 'line', data: [45, 88, 100, 50, 70, 80, 90]},
  ],
  config: {
    "yAxis1.name": "数量",
    "yAxis2.name": "百分比",
  }
}
let dataChartOne_data = dataFormat(dataChartOneData, 'dataChart')
let dataChartFirst = new BarEchart(GetOpiton(dataChartOne_data, dataChartLBOption()));
// dataChartFirst.showOption()

//数据图表堆积  --Data
let dataChartTwoData = {
  id: 'dataChartSecond',
  legend: ['其他', '停业转型', '立案侦查', '失联跑路'],
  xAxis: ['北京', '上海', '浙江', '深圳', '广东', '宁波'],
  seriesData: [{name: '其他', type: 'bar', data: [100, 125, 130, 133, 146, 160, 120]},
    {name: '停业转型', type: 'bar', data: [100, 100, 60, 120, 150, 90, 100]},
    {name: '立案侦查', type: 'bar', data: [60, 80, 90, 60, 70, 80, 90]},
    {name: '失联跑路', type: 'bar', data: [80, 65, 88, 100, 110, 70, 80]},
  ],
  config: {
    "yAxis.name": "数量",
  }
}

let dataChartTwo_data = dataFormat(dataChartTwoData,'dataChart')
let dataChartSecond = new BarEchart(GetOpiton(dataChartTwo_data,datachartBOption()));
// dataChartSecond.showOption()
