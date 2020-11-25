/**
 * 地图迁徙
 * @opt 图表的option
 * @fn  图表的点击方法
 **/
class MapEcharts extends Echarts {
  constructor(opt, fn) {
    super(opt, fn);  //在this之前调用super，实际上就是调用父类的构造函数
    this.setOption(); // 渲染图表
  }
}

// 数据data添加城市坐标
var convertData = (data, geoCoordMap) => {
  var res = [];
  var targetList = [];
  for (var i = 0; i < data.length; i++) {
    var dataItem = data[i];
    // from为出发点，to为目的点，value为值
    var fromCoord = geoCoordMap[dataItem.from];
    var toCoord = geoCoordMap[dataItem.to];
    // 重组新数据，匹配坐标库
    if (fromCoord && toCoord) {
      res.push([{
        name: dataItem.from,
        coord: fromCoord,
        value: dataItem.value
      }, {
        name: dataItem.to,
        coord: toCoord,
        value: ''
      }
      ]);
      // 过滤生成目标地点数组
      if (!targetList.length) targetList.push(dataItem.to);
      targetList.some(item => {
        if (item !== dataItem.to)
          targetList.push(dataItem.to);
      })
    }
  }
  return {
    res: res,
    targetList: targetList
  };
};

/**
 * 构建迁徙图数据方法
 * @geoCoordMap 坐标
 * @data 数据
 * */
function setMigrationSeries(obj) {
  // 坐标库和城市数值
  const {geoCoordMap, data} = obj;
  // 线条数据
  let linesData = convertData(data, geoCoordMap).res;
  let targetData = convertData(data, geoCoordMap).targetList;
  let seriesData = [];
  seriesData.push({
      type: "lines",
      zlevel: 2,
      effect: {
        show: true,
        period: 4, //箭头指向速度，值越小速度越快
        trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
        symbol: 'arrow', //箭头图标
        symbolSize: 5, //图标大小
      },
      lineStyle: {
        normal: {
          color: '#ffb65c',
          width: 1, //尾迹线条宽度
          opacity: 1, //尾迹线条透明度
          curveness: 0.3 //尾迹线条曲直度
        }
      },
      data: linesData
    }, {
      type: "effectScatter",
      coordinateSystem: "geo",
      zlevel: 2,
      rippleEffect: {
        //涟漪特效
        period: 4, //动画时间，值越小速度越快
        brushType: "stroke", //波纹绘制方式 stroke, fill
        scale: 4 //波纹圆环最大限制，值越大波纹越大
      },
      label: {
        normal: {
          show: true,
          position: "right", //显示位置
          offset: [5, 0], //偏移设置
          formatter: "{b}", //圆环显示文字
        },
        emphasis: {
          show: true,
          color: "#FF6A6A"
        }
      },
      symbol: "circle",
      symbolSize: function (val) {
        return 10; //圆环大小
      },
      itemStyle: {
        normal: {
          show: true,
        },
        emphasis: {
          show: true,
          color: "#FF6A6A"
        }
      },
      data: data.map(function (dataItem) {
        return {
          name: dataItem.from,
          value: geoCoordMap[dataItem.from].concat([dataItem.value])
        };
      })
    },
    //被攻击点
    {
      type: "scatter",
      coordinateSystem: "geo",
      zlevel: 2,
      rippleEffect: {
        period: 4,
        brushType: "stroke",
        scale: 4
      },
      label: {
        normal: {
          show: true,
          color: "red",
          position: "right",
          formatter: "{b}",
        },
        emphasis: {
          show: true,
          color: "#FF6A6A"
        }
      },
      symbol: "pin",
      symbolSize: 30,
      itemStyle: {
        normal: {
          show: true,
          color: "red",
        },
        emphasis: {
          show: true,
          color: "#FF6A6A"
        }
      },
      data: targetData.map(o => {
        return {
          name: o,
          value: geoCoordMap[o].concat([0]),
          visualMap: false
        }
      })
    }
  );
  return seriesData;
}

// 迁徙图数据和坐标
var chinaGeoCoordMap = {
  '大庆': [126.9688, 45.868],
  '北京': [116.4551, 40.2539],
  "甘肃": [103.5901, 36.3043],
  "青海": [101.4038, 36.8207],
  "新疆": [87.9236, 43.5883],
  "西藏": [91.11, 29.97],
  "四川": [103.9526, 30.7617],
  "浙江": [119.5313, 29.8773],
  '黑龙江': [127.9688, 45.368],
  "湖南": [113.0823, 28.2568],
  "贵州": [106.6992, 26.7682],
  "云南": [102.9199, 25.4663],
  "广东": [113.12244, 23.009505],
  "广西": [108.479, 23.1152],
  "海南": [110.3893, 19.8516],
  '上海': [121.4648, 31.2891]
};

let chinaData = [{
  from: "黑龙江", value: 0, to: "北京"
}, {
  from: "云南", value: 1, to: "北京"
}, {
  from: "浙江", value: 0.5, to: "北京"
}, {
  from: "湖南", value: 0.6, to: "北京"
}, {
  from: "广东", value: 0.8, to: "北京"
}, {
  from: "海南", value: 1, to: "北京"
}, {
  from: "新疆", value: 1, to: "北京"
}]

// 迁徙图 && 气泡图
let mapOption = (obj) => {
  const {id, config, seriesData} = obj;
  let option = {
    id: id,
    backgroundColor: mapBackground,
    tooltip: {
      trigger: 'item',
      borderColor: '#FFFFCC',
      showDelay: 0,
      hideDelay: 0,
      enterable: true,
      transitionDuration: 0,
      extraCssText: 'z-index:100',
      formatter: function (params, ticket, callback) {
        //根据业务自己拓展要显示的内容
        var res = "";
        var name = params.name;
        // console.log(params)
        if (params.seriesType == "lines") {
          res = "<span style='color:#fff;'> 出发地：" + params.data.fromName + "</span>" +
            "<br/><span style='color:#fff;'> 目的地：" + params.data.toName + "</span><br/>数据:" + params.data.value;
        } else if (params.seriesType == "effectScatter") {
          res = "<span style='color:#fff;'> 出发地:" + name + "</span><br/>数据:" + params.data.value[2];
        } else {
          res = "<span style='color:#fff;'> " + name + "</span><br/>数据:" + params.data.value[2];
        }
        return res;
      }
    },
    visualMap: { //图例值控制
      min: 0,
      max: 1,
      calculable: true,
      show: true,
      color: ['#f44336', '#fc9700',],
      // color: colorList,
      textStyle: {
        color: '#fff'
      }
    },
    geo: {
      map: '',
      zoom: 1.2,
      roam: true, //是否允许缩放
      label: {
        emphasis: {
          show: false
        }
      },
      itemStyle: {
        normal: {
          color: mapTheme_item, //地图背景色
          borderColor: mapBorder, //省市边界线00fcff 516a89
          borderWidth: 1
        },
        emphasis: {
          color: mapEmphasis_area //悬浮背景
        }
      }
    },
    series: seriesData
  };
  // 配置属性
  config && (option = configProperty(config, option));
  return option;
}
// 迁徙图数据
let mapMigrateData = {
  id: 'mapMigrate',
  config: {"geo.map": 'china', 'visualMap.max': 1},
  seriesData: {
    geoCoordMap: chinaGeoCoordMap, // 坐标
    data: chinaData, // 数据
  },
}
// 数据格式化
let mapMigrate_data = dataFormat(mapMigrateData, 'migrate');
let mapMigrateEchart = new MapEcharts(mapOption(mapMigrate_data))



