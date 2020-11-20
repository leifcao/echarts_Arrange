//疫情入汉图
// 迁徙图数据和坐标
var geoCoordMap2 = {
  武汉: [114.298572, 30.584355],
  美国: [-118.24311, 34.052713],
  俄罗斯: [89.116876, 67.757906],
  埃及: [31.815593, 31.418032],
  西班牙: [2.175129, 41.385064],
  澳大利亚: [150.993137, -33.675509],
  墨西哥: [-99.094092, 19.365711, 23123],
  加拿大: [-123.023921, 49.311753],
  日本: [139.4428, 35.3929],
};
var SHData = [
  [{
    name: "武汉",
    value: 6616,
  }, {
    name: "武汉",
    value: 6616,
  }],
  [{
    name: "美国",
    value: 1253,
  }, {
    name: "武汉",
    value: 6616,
  }],
  [{
    name: "埃及",
    value: 1369,
  }, {
    name: "武汉",
    value: 6616,
  }],
  [{
    name: "俄罗斯",
    value: 2000,
  }, {
    name: "武汉",
    value: 6616,
  }],
  [{
    name: "西班牙",
    value: 1800,
  }, {
    name: "武汉",
    value: 6616,
  }],
  [{
    name: "澳大利亚",
    value: 1600,
  }, {
    name: "武汉",
    value: 6616,
  }],
  [{
    name: "日本",
    value: 1985,
  }, {
    name: "武汉",
    value: 6616,
  }]
];

// 世界迁徙图数据
let ImmigrateData = {
  id: 'mapImmigrate',
  config: {"geo.map": 'world', 'visualMap.max': 2000},
  seriesData: {
    geoCoordMap: geoCoordMap2, // 坐标
    data: SHData, // 数据
  },
}
// 数据格式化
let Immigrate_data = dataFormat(ImmigrateData, 'migrate');
let mapImmigrateEchart = new MapEcharts(mapOption(Immigrate_data))
