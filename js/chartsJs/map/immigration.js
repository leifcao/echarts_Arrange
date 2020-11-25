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

let worldData = [{
  from: "美国", value: 1253, to: "武汉"
},{
  from: "埃及", value: 1369, to: "武汉"
},{
  from: "俄罗斯", value: 2000, to: "武汉"
},{
  from: "西班牙", value: 1800, to: "武汉"
},{
  from: "日本", value: 1985, to: "武汉"
},{
  from: "澳大利亚", value: 1600, to: "武汉"
},]


// 世界迁徙图数据
let ImmigrateData = {
  id: 'mapImmigrate',
  config: {"geo.map": 'world', 'visualMap.max': 2000},
  seriesData: {
    geoCoordMap: geoCoordMap2, // 坐标
    data: worldData, // 数据
  },
}
// 数据格式化
let Immigrate_data = dataFormat(ImmigrateData, 'migrate');
let mapImmigrateEchart = new MapEcharts(mapOption(Immigrate_data))
