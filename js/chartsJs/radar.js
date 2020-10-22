// -----------雷达图---------

//雷达配置
var radar = {
  axisLine: '#D2E4F8',  //axis轴的颜色
  splitLine: '#D2E4F8',  // 分割线颜色
  splitArea: ['#FFFFFF', '#F5F9FF',],// 区域颜色
}


/**
 * 雷达函数
 * radarData 雷达各参数定值
 * seriesData series数据
 * opt 新增参数
 * */

function initRadarOption(opt) {
  let radarOption = {
    backgroundColor: "",
    tooltip: {},
    legend: {
      left: 'left',
      orient: 'vertical',
      top: 'top',
      textStyle: {
        color: textColor,
        fontSize: 12,
      },
      itemHeight: 10,
      itemWidth: 15,
      data: [],
      icon: 'roundRect',
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
    series: []
  };

// 将 opt 递归合并到 radarOption
  if (opt) $.extend(true, radarOption, opt)

  return radarOption;
}

//雷达图
var radarOne = document.getElementById('radarFirst');
var radarFirst = echarts.init(radarOne);

/**
 * radarFirst_radarData  雷达默认参数
 * radarFirst_seriesData  雷达数据
 * */
var radarFirst_radarData = [
  {name: '资金周转', max: 6500},
  {name: '金融理财', max: 30000},
  {name: '投资', max: 38000},
  {name: '个人消费', max: 52000},
  {name: '固定资产', max: 25000},
  {name: '生产经营', max: 25000}
];
let radarFirst_seriesData = [{
  name: '因素',
  type: 'radar',
  // areaStyle: { color: 'rgba(188,188,188, 0.4)' },
  // symbol: 'circle',
  symbolSize: 5, //圈圈大小
  itemStyle: {color: colorList[0], borderColor: textColor, borderWidth: 1,},
  lineStyle: {color: colorList[0], width: 3},
  label: {show: false,},
  data: [[4300, 28000, 35000, 50000, 19000, 21000]]
}];


let radarOneOption = initRadarOption({
  radar: {
    indicator: radarFirst_radarData
  },
  series: radarFirst_seriesData,
});
radarFirst.setOption(radarOneOption);


// ----------------双重雷达图 -------------


/**
 * radarSecond_radarData  雷达默认参数
 * radarSecond_seriesData  雷达数据
 * */
var radarSecond_radarData = [
  {name: '服务态度', max: 6500},
  {name: '办事时间', max: 16000},
  {name: '跑动次数', max: 30000},
  {name: '缴费方式', max: 38000},
];
let radarSecond_seriesData = [{
  name: '2019评分',
  type: 'radar',
  // areaStyle: { color: 'rgba(188,188,188, 0.4)' },
  // symbol: 'circle',
  symbolSize: 5, //圈圈大小
  itemStyle: {color: colorList[0], borderColor: textColor, borderWidth: 1,},
  lineStyle: {color: colorList[0], width: 3},
  label: {show: false,},
  data: [
    [4600, 13000, 25000, 23500, 25000]
  ]
},
  {
    name: '2020评分',
    type: 'radar',
    // areaStyle: { color: 'rgba(188,188,188, 0.4)' },
    // symbol: 'circle',
    symbolSize: 5, //圈圈大小
    itemStyle: {color: colorList[1], borderColor: textColor, borderWidth: 1,},
    lineStyle: {color: colorList[1], width: 3},
    data: [
      [5300, 15000, 12800, 13500, 15000]
    ]
  }
];


var radarTwo = document.getElementById('radarSecond');
var radarSecond = echarts.init(radarTwo);

let radarTwoOption = initRadarOption({
  legend: {
    data: ['2019评分', '2020评分'],
  },
  radar: {
    indicator: radarSecond_radarData
  },
  series: radarSecond_seriesData,
})
radarSecond.setOption(radarTwoOption);


// -------------圆图雷达图----------------
/**
 * radarThird_radarData  雷达默认参数
 * radarThird_seriesData  雷达数据
 * */
var radarThird_radarData = [
  {name: "三无、五保", max: 88},
  {name: "低保", max: 88},
  {name: "残疾", max: 88},
  {name: "失独", max: 88},
  {name: "高龄", max: 88},
  {name: "突出贡献", max: 88}
]
let radarThird_seriesData = [{
  name: "2016年",
  type: "radar",
  // symbol: "circle",
  symbolSize: 5,
  itemStyle:{
    color:colorList[0],
  },
  lineStyle: {
    normal: {
      color: colorList[0],
      width: 3
    }
  },
  data: [
    [80, 50, 55, 80, 50, 80]
  ]
}, {
  name: "2017年",
  type: "radar",
  // symbol: "circle",
  symbolSize: 5,
  itemStyle: {
    normal: {
      color:colorList[1],
    }
  },
  lineStyle: {
    normal: {
      color: colorList[1],
      width: 3,
    }
  },
  data: [
    [60, 60, 65, 60, 70, 40]
  ]
}]

var radarThree = document.getElementById('radarThird')
var radarThird = echarts.init(radarThree)

let radarThreeOption = initRadarOption({
  legend: {
    data: ["2016年", "2017年"]
  },
  radar: {
    shape: 'circle',  //圆的雷达
    indicator: radarThird_radarData
  },
  series: radarThird_seriesData,

})

radarThird.setOption(radarThreeOption)
