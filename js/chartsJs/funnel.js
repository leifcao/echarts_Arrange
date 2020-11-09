/**
 * 漏斗图
 * @opt 图表的option
 * @fn  图表的点击方法
 **/
class FunnelEchart extends Echarts {
  constructor(opt, fn) {
    super(opt, fn);//在this之前调用super，实际上就是调用父类的构造函数
    this.setOption(); // 渲染图表
  }
}

let funnelOption = () => {
  const option = {
    legend: {
      data: []
    },
    series: [{
      name: '漏斗图',
      type: 'funnel',
      x: 'center',
      y: 25,
      //x2: 80,
      y2: 10,
      width: '60%',
      // height: {totalHeight} - y - y2,
      min: 0,
      max: 100,
      minSize: '0%',
      maxSize: '100%',
      sort: 'descending', // 'ascending', 'descending'
      gap: 0,
      data: [].sort(function (a, b) {
        return b.value - a.value
      }),
      roseType: true,
      label: {
        normal: {
          formatter: function (params) {
            return params.value + '%';
          },
          position: 'center'
        }
      },
      itemStyle: {
        normal: {
          // borderWidth: 0,
          // shadowBlur: 30,
          // shadowOffsetX: 0,
          // shadowOffsetY: 10,
          // shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }

    }

    ]
  };
  return option;
}


// 漏斗图
let funnelOneData = {
  id: 'funnelFirst',
  legend: ['展现', '点击', '访问', '咨询', '订单'],
  seriesData: [{name: '漏斗图', type: 'funnel', data: [{value: 20, name: '访问'},
      {value: 40, name: '咨询'},
      {value: 60, name: '订单'},
      {value: 80, name: '点击'},
      {value: 100, name: '展现'}]}],
}
let funnelFirst = new FunnelEchart(GetOpiton(funnelOneData, funnelOption()));



// ----------漏斗图2------
var funneTwo = document.getElementById('funneSecond')
// var funneSecond = echarts.init(funneTwo)

funnelTwoOption = {
  title: {
    text: '',
    subtext: ''
  },
  tooltip: {
    trigger: 'item',
    formatter: "{a} <br/>{b} : {c}%"
  },
  color: colorList,
  legend: {
    itemHeight: 8,
    itemWidth: 14,
    // color: '#f8f8f8',
    textStyle: {
      color: textColor,
    },
    data: ['展现', '点击', '访问', '咨询', '订单']
  },
  series: [{
    name: '预期',
    type: 'funnel',
    left: '10%',
    width: '70%',
    top: '16%',
    bottom: '15%',
    y: 0, // 这里的1都可以变，但是所有的数据都一样大，来保证高度都一样   更改高度
    label: {
      formatter: '{b}预期'
    },
    labelLine: {
      show: false
    },
    itemStyle: {
      opacity: 0.7
    },
    emphasis: {
      label: {
        position: 'inside',
        formatter: '{b}预期: {c}%'
      }
    },
    data: [
      {value: 60, name: '访问'},
      {value: 40, name: '咨询'},
      {value: 20, name: '订单'},
      {value: 80, name: '点击'},
      {value: 100, name: '展现'}
    ]
  },
    {
      name: '实际',
      type: 'funnel',
      left: '10%',
      top: '16%',
      bottom: '15%',
      width: '70%',
      y: 0, // 这里的1都可以变，但是所有的数据都一样大，来保证高度都一样
      maxSize: '80%',
      label: {
        position: 'inside',
        formatter: '{c}%',
        color: '#fff'
      },

      itemStyle: {
        normal: {
          borderWidth: 0,
          shadowBlur: 30,
          shadowOffsetX: 0,
          shadowOffsetY: 10,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      },

      emphasis: {
        label: {
          position: 'inside',
          formatter: '{b}实际: {c}%'
        }
      },
      data: [
        {value: 30, name: '访问'},
        {value: 10, name: '咨询'},
        {value: 5, name: '订单'},
        {value: 50, name: '点击'},
        {value: 80, name: '展现'}
      ]
    }
  ]
};

// funneSecond.setOption(funnelTwoOption);
