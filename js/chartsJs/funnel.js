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

