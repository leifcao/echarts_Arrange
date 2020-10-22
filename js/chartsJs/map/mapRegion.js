/**
 * 大区地图下钻
 * */
// 大区的data分类颜色设置
var allprovinceData = [{
  name: "黑龙江省",
  value: 7,
},
  {
    name: "吉林省",
    value: 7,
  },
  {
    name: "辽宁省",
    value: 7,
  },
  {
    name: "上海市",
    value: 1,
  },
  {
    name: "江苏省",
    value: 1,
  },
  {
    name: "浙江省",
    value: 9,
  },
  {
    name: "安徽省",
    value: 5,
  },
  {
    name: "福建省",
    value: 9,
  },
  {
    name: "江西省",
    value: 4,
  },
  {
    name: "山东省",
    value: 5,
  },
  {
    name: "台湾省",
    value: 11,
  },
  {
    name: "北京市",
    value: 6,
  },
  {
    name: "天津省",
    value: 6,
  },
  {
    name: "山西省",
    value: 8,
  },
  {
    name: "河北省",
    value: 6,
  },
  {
    name: "内蒙古自治区",
    value: 8,
  },
  {
    name: "河南省",
    value: 3,
  },
  {
    name: "湖北省",
    value: 4,
  },
  {
    name: "湖南省",
    value: 4,
  },
  {
    name: "广东省",
    value: 2,
  },
  {
    name: "广西壮族自治区",
    value: 2,
  },
  {
    name: "海南省",
    value: 2,
  },
  {
    name: "香港特别行政区",
    value: 2,
  },
  {
    name: "澳门特别行政区",
    value: 2,
  },
  {
    name: "重庆市",
    value: 10,
  },
  {
    name: "四川省",
    value: 10,
  },
  {
    name: "贵州省",
    value: 10,
  },
  {
    name: "云南省",
    value: 10,
  },
  {
    name: "西藏自治区",
    value: 10,
  },
  {
    name: "陕西省",
    value: 3,
  },
  {
    name: "甘肃省",
    value: 3,
  },
  {
    name: "青海省",
    value: 3,
  },
  {
    name: "宁夏回族自治区",
    value: 8,
  },
  {
    name: "新疆维吾尔自治区",
    value: 8,
  },

];
var mapRegion_visualMap ={
  min: 0,
  max: 11,
  left: 'left',
  top: 'bottom',
  text: ['高', '低'],
  calculable: true,
  seriesIndex: '1',
  show: false,
  inRange: {
    color: [
      "#ffc188",
      "#479fd2",
      "#fba853",
      "#48c7c0",
      "#fa8737",
      "#4bbdd6",
      "#ff6f5b",
      "#F4D5B1",
      "#ADE1E3",
    ]
  }
};



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
    data:allprovinceData,  // 大区区块颜色data
    visualMap:mapRegion_visualMap, // 大区图例
    // 下钻回调
    callback: function (name, option, instance) {
      //console.log(name, option, instance);
    },
  });

})
