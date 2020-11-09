/**
 * 雷达图
 * @opt 图表的option
 * @fn  图表的点击方法
 **/
class radarEcharts extends Echarts {
  constructor(opt, fn) {
    super(opt, fn);//在this之前调用super，实际上就是调用父类的构造函数
    this.setOption();
  }
}

// 雷达图
let radarOption = () => {
  //雷达配置
  var radar = {
    axisLine: '#D2E4F8',  //axis轴的颜色
    splitLine: '#D2E4F8',  // 分割线颜色
    splitArea: ['#FFFFFF', '#F5F9FF',],// 区域颜色
  }
  //雷达option
  const option = {
    tooltip: {},
    legend: {
      left: 'left',
      orient: 'vertical',
      top: 'top',
      icon: 'roundRect',
      data: [],
    },
    radar: {
      radius: '60%',
      center: ['50%', '50%'],
      startAngle: 90,
      triggerEvent: true,
      name: {textStyle: {color: textColor, fontSize: '12', borderRadius: 3, padding: [2, 5]}},
      nameGap: '2',
      indicator: [],
      splitArea: {
        areaStyle: {
          color: radar.splitArea.reverse(),
        }
      },
      axisLine: {lineStyle: {color: radar.axisLine}},
      splitLine: {
        lineStyle: {
          width: 1,
          color: radar.splitLine
        }
      }
    },
    series: [{
      name: '因素',
      type: 'radar',
      symbolSize: 5, //圈圈大小
      label: {show: false,},
      // areaStyle: { color: 'rgba(188,188,188, 0.4)' },
      // symbol: 'circle',
    }]
  };
  return option;
}

// 普通雷达图
let radarOneData = {
  id: 'radarFirst',
  radar: [
    {name: '资金周转', max: 6500},
    {name: '金融理财', max: 30000},
    {name: '投资', max: 38000},
    {name: '个人消费', max: 52000},
    {name: '固定资产', max: 25000},
    {name: '生产经营', max: 25000}
  ],
  seriesData: [{name: '因素', type: 'radar', data: [[4300, 28000, 35000, 50000, 19000, 21000]]}]
}
let radarOne_data = dataFormat(radarOneData, 'radar');
let radarFirst = new radarEcharts(GetOpiton(radarOne_data, radarOption()));

// 双重雷达图
let radarTwoData = {
  id: 'radarSecond',
  legend: ["2019评分", "2020评分"],
  radar: [
    {name: '服务态度', max: 6500},
    {name: '办事时间', max: 16000},
    {name: '跑动次数', max: 30000},
    {name: '缴费方式', max: 38000},
  ],
  seriesData: [{name: '2019评分', type: 'radar', data: [[4600, 13000, 25000, 23500, 25000]]},
    {name: '2020评分', type: 'radar', data: [[5300, 15000, 12800, 13500, 15000]]},]
}
let radarTwo_data = dataFormat(radarTwoData, 'radar');
let radarSecond = new radarEcharts(GetOpiton(radarTwo_data, radarOption()));

// 圆图雷达图
let radarThreeData = {
  id: 'radarThird',
  legend: ["2019年", "2020年"],
  radar: [
    {name: "三无、五保", max: 88},
    {name: "低保", max: 88},
    {name: "残疾", max: 88},
    {name: "失独", max: 88},
    {name: "高龄", max: 88},
    {name: "突出贡献", max: 88}
  ],
  seriesData: [{name: '2019年', type: 'radar', data: [[80, 50, 55, 80, 50, 80]]},
    {name: '2020年', type: 'radar', data: [[60, 60, 65, 60, 70, 40]]}],
  config: {
    'radar.shape': 'circle',//圆雷达图配置
  }
}
let radarThree_data = dataFormat(radarThreeData, 'radar');
let radarThird = new radarEcharts(GetOpiton(radarThree_data, radarOption()));
