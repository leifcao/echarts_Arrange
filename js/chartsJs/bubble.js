/**
 * 传统气泡图
 * @opt 图表的option
 * @fn  图表的点击方法
 **/
class BubblesEchart extends Echarts {
  constructor(opt, fn) {
    super(opt, fn);
    // 渲染图表
    this.setOption();
  }
}

//气泡图
let bubblesOption = () => {
  const option = {
    grid: {
      left: '13%',
      top: '12%',
      bottom: '11%',
      right: '10%',
    },
    legend: {
      data: [],
      type: "scroll",
      itemGap: 25,
    },
    tooltip: {
      extraCssText: 'padding-right:8px;padding-left:8px;line-height:30px;background:rgba(255,255,255,1);box-shadow:1px 5px 20px 0px rgba(1,11,19,0.2);border-radius:6px;',
      textStyle: {
        fontSize: '13',
        color: textColor,
      },
      formatter: function (obj) {
        var value = obj.value;
        let str = '<div style="padding-bottom: 0px;margin-bottom: 0px">' + obj.seriesName + '</div>';
        for (var i in obj.data) {
          let data = obj.data
          if (i === 'value') continue;
          data[i] = isNaN(data[i]) ? data[i] : Number(data[i]).toFixed(2);
          str += i + '：' + data[i] + '<br/>';
        }
        return str;
      }
    },
    xAxis: {
      name: '',
      nameTextStyle: {
        color: textColor,
        fontSize: 13,
        padding: [0, 0, 30, -60]
      },
      axisLabel: {
        show: true,
        formatter: function (value) {
          let num = value
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
        show: false,
      }
    },
    yAxis: {
      nameTextStyle: {
        color: textColor,
        fontSize: 13,
        padding: [0, 0, -10, 20]
      },
      axisLabel: {
        interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
        // rotate: 40,
        show: true,
        textStyle: {
          color: textColor,
          fontFamily: 'Microsoft YaHei'
        },
        formatter: function (value) {
          let num = value
          if (num && num != 'undefined' && num != 'null') {
            let numS = num;
            numS = numS.toString();
            numS = numS.replace(/,/gi, '');
            return numS;
          } else {
            return num;
          }
        },
      },
      axisTick: {
        show: true
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: textColor,
        }
      },
      splitLine: {
        show: false
      }
    },
    series: [{
      name: '',
      symbolSize: function (data) {
        return data[0] / data[1] / 5;
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
        formatter: function (param) {
          return param.data[2];
        },
      },
      data: [],
      type: 'scatter',
    }]
  };

  return option;
}

//气泡图1
let bubbleOnedatas1 = [
  {'name': 'SCI', value: [4500, 60.3], '发表论文总数': 4500, '人均发表篇次': 60.3, '总被引用次数': 4500 / 60.3},
  {'name': 'SSCI', value: [4500, 40], '发表论文总数': 4500, '人均发表篇次': 40, '总被引用次数': 4500 / 40},
  {'name': 'EI', value: [11000, 25], '发表论文总数': 11000, '人均发表篇次': 25, '总被引用次数': 11000 / 25},
  {'name': 'ISTP', value: [14000, 40], '发表论文总数': 14000, '人均发表篇次': 65, '总被引用次数': 14000 / 65},
  {'name': 'AHCI', value: [15000, 40], '发表论文总数': 15000, '人均发表篇次': 40, '总被引用次数': 15000 / 40},
  {'name': 'ISSHP', value: [20000, 66], '发表论文总数': 20000, '人均发表篇次': 66, '总被引用次数': 20000 / 66},
  {'name': '其他', value: [20121, 75], '发表论文总数': 20121, '人均发表篇次': 75, '总被引用次数': 20121 / 75},
]
let bubbleOnedatas2 = [
  {'name': 'SCI', value: [5000, 65.3], '发表论文总数': 5000, '人均发表篇次': 65.3, '总被引用次数': 5000 / 65.3},
  {'name': 'SSCI', value: [6000, 40], '发表论文总数': 6000, '人均发表篇次': 40, '总被引用次数': 6000 / 40},
  {'name': 'EI', value: [12000, 82], '发表论文总数': 12000, '人均发表篇次': 82, '总被引用次数': 12000 / 82},
  {'name': 'ISTP', value: [16000, 45], '发表论文总数': 16000, '人均发表篇次': 45, '总被引用次数': 16000 / 45},
  {'name': 'AHCI', value: [15000, 30], '发表论文总数': 15000, '人均发表篇次': 30, '总被引用次数': 15000 / 30},
  {'name': 'ISSHP', value: [18000, 66], '发表论文总数': 18000, '人均发表篇次': 72, '总被引用次数': 18000 / 72},
  {'name': '其他', value: [27121, 75], '发表论文总数': 27121, '人均发表篇次': 80, '总被引用次数': 27121 / 80},
]
//气泡图1
let bubblesOneData = {
  id: 'bubblesFirst',
  legend: ['2010', '2020'],
  seriesData: [{name: '2010', type: 'scatter', data: bubbleOnedatas1},
    {name: '2020', type: 'scatter', data: bubbleOnedatas2}],
  config: {
    'xAxis.name': '发表论文总数',
    'yAxis.name': '人均发表篇次',
  }
}
var bubblesFirst = new BubblesEchart(GetOpiton(bubblesOneData, bubblesOption()));


//气泡图2
/*
let bubbleTwodatas = [
  {'name': '菜菜', value: [174600, 1670], '订单数': 1670, '消费金额': 60.3, avt: 174600 / 1670},
  {'name': 'SSCI', value: [97477, 436], '订单数': 97477, '消费金额': 436, avt: 97477 / 436},
  {'name': 'Jiayin', value: [55796, 544], '订单数': 55796, '消费金额': 544, avt: 55796 / 544},
  {'name': '明坤', value: [210364, 979], '订单数': 210364, '消费金额': 979, avt: 210364 / 979},
  {'name': '首席', value: [7305, 185], '订单数': 7305, '消费金额': 185, avt: 7305 / 185},
  {'name': '小楠子', value: [210284, 2224], '订单数': 2224, '消费金额': 2224, avt: 210284 / 2224},
  {'name': '康康', value: [41789, 257], '订单数': 41789, '消费金额': 257, avt: 41789 / 257},
  {'name': '书记', value: [36961, 452], '订单数': 36961, '消费金额': 452, avt: 36961 / 452},
]
let bubblesTwoData = {
  id: 'bubbleSecond',
  seriesData: [{name: '2020', type: 'scatter', data: bubbleTwodatas}],
  config: {
    'xAxis.name': '订单数',
    'yAxis.name': '消费金额',
  }
}
var bubblesFirst = new bubblesEcharts(GetOpiton(bubblesTwoData, bubblesOption()));
*/



