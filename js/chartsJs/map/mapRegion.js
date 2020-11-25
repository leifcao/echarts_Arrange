/**
 * 大区地图下钻
 * */
// 大区的data分类颜色设置
var allprovinceData = [{
  name: "黑龙江省",
  value: 4,
  region: '东北大区'
},
  {
    name: "吉林省",
    value: 4,
    region: '东北大区'
  },
  {
    name: "辽宁省",
    value: 4,
    region: '东北大区'
  },
  {
    name: "北京市",
    value: 4,
    region: '东北大区'
  },
  {
    name: "天津省",
    value: 4,
    region: '东北大区'
  },
  {
    name: "河北省",
    value: 4,
    region: '东北大区'
  },
  {
    name: "内蒙古自治区",
    value: 4,
    region: '东北大区'
  },
  {
    name: "上海市",
    value: 2,
    region: '中部大区'
  },
  {
    name: "江苏省",
    value: 2,
    region: '中部大区'
  },
  {
    name: "安徽省",
    value: 2,
    region: '中部大区'
  },
  {
    name: "山东省",
    value: 2,
    region: '中部大区'
  },
  {
    name: "河南省",
    value: 2,
    region: '中部大区'
  },
  {
    name: "湖北省",
    value: 2,
    region: '中部大区'
  },
  {
    name: "浙江省",
    value: 5,
    region: '东南大区'
  },
  {
    name: "福建省",
    value: 5,
    region: '东南大区'
  },
  {
    name: "湖南省",
    value: 5,
    region: '东南大区'
  },
  {
    name: "江西省",
    value: 5,
    region: '东南大区'
  },
  {
    name: "台湾省",
    value: 5,
    region: '东南大区'
  },
  {
    name: "重庆市",
    value: 5,
    region: '东南大区'
  },
  {
    name: "广东省",
    value: 3,
    region: '西南大区'
  },
  {
    name: "广西壮族自治区",
    value: 3,
    region: '西南大区'
  },
  {
    name: "海南省",
    value: 3,
    region: '西南大区'
  },
  {
    name: "香港特别行政区",
    value: 3,
    region: '西南大区'
  },
  {
    name: "澳门特别行政区",
    value: 3,
    region: '西南大区'
  },

  {
    name: "四川省",
    value: 3,
    region: '西南大区'
  },
  {
    name: "贵州省",
    value: 3,
    region: '西南大区'
  },
  {
    name: "云南省",
    value: 3,
    region: '西南大区'
  },
  {
    name: "西藏自治区",
    value: 3,
    region: '西南大区'
  },
  {
    name: "山西省",
    value: 9,
    region: '西北大区'
  },
  {
    name: "陕西省",
    value: 9,
    region: '西北大区'
  },
  {
    name: "甘肃省",
    value: 9,
    region: '西北大区'
  },
  {
    name: "青海省",
    value: 11,
    region: '西北大区'
  },
  {
    name: "宁夏回族自治区",
    value: 9,
    region: '西北大区'
  },
  {
    name: "新疆维吾尔自治区",
    value: 9,
    region: '西北大区'
  },

];

var mapRegionEchart;
// 封装函数在mapUnder.js 文件中
$.getJSON('data/100000.json', function (geoJson) {
  echarts.registerMap('中国', geoJson);
  mapRegionEchart = echarts.extendsMap('mapRegion', {
    bgColor: mapBackground, // 画布背景色
    mapName: '中国', // 地图名
    goDown: true, // 是否下钻
    geoJson: geoJson,  // 地图数据
    region: true,   // 是否设置各大区
    // config: {'backgroundColor': 'red'},
    data: allprovinceData,  // 大区区块颜色data
    visualMap: {}, // 大区图例
    // 下钻回调
    callback: function (name, option, instance) {
      //console.log(name, option, instance);
    },
  });
})


