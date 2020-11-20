// 气泡图
var geoCoordMap = {
  '台湾': [121.5135, 25.0308],
  '黑龙江': [127.9688, 45.368],
  '内蒙古': [110.3467, 41.4899],
  "吉林": [125.8154, 44.2584],
  '北京市': [116.4551, 40.2539],
  "辽宁": [123.1238, 42.1216],
  "天津": [117.4219, 39.4189],
  "山西": [112.3352, 37.9413],
  "陕西": [109.1162, 34.2004],
  "宁夏": [106.3586, 38.1775],
  "青海": [101.4038, 36.8207],
  "新疆": [87.9236, 43.5883],
  "西藏": [91.11, 29.97],
  "山东": [117.1582, 36.8701],
  "湖北": [114.3896, 30.6628],
  "福建": [119.4543, 25.9222],
  "湖南": [113.0823, 28.2568],
  "云南": [102.9199, 25.4663],
  "广东": [113.12244, 23.009505],
  "广西": [108.479, 23.1152],
  "海南": [110.3893, 19.8516],
  '上海': [121.4648, 31.2891],
};
var mapBubbleData = [
  {name: "北京", value: 199},
  {name: "天津", value: 42},
  {name: "山西", value: 81},
  {name: "内蒙古", value: 47},
  {name: "辽宁", value: 67},
  {name: "吉林", value: 82},
  {name: "黑龙江", value: 123},
  {name: "上海", value: 24},
  {name: "福建", value: 116},
  {name: "山东", value: 119},
  {name: "湖北", value: 116},
  {name: "湖南", value: 114},
  {name: "云南", value: 83},
  {name: "西藏", value: 9},
  {name: "陕西", value: 80},
  {name: "青海", value: 10},
  {name: "宁夏", value: 18},
  {name: "新疆", value: 180},
  {name: "广东", value: 123},
  {name: "广西", value: 59},
  {name: "海南", value: 14},
];
var max = 480, min = 9; // todo

// 数据整合-气泡，轮播
var convert_Data = (data, geoCoordMap) => {
  var res = [];
  for (var i = 0; i < data.length; i++) {
    var geoCoord = geoCoordMap[data[i].name];
    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value)
      });
    }
  }
  return res;
};

function setBubbleSeries(obj) {
  // 坐标库和城市数值
  const {geoCoordMap, data} = obj;
  // 气泡数据
  let bubbleData = convert_Data(data, geoCoordMap);
  let seriesData = [];
  seriesData.push({
      name: 'light',  // 定位点
      type: 'scatter',
      symbolSize: 5, //点大小
      label: {
        normal: {
          formatter: '{b}',
          position: 'right',
          show: true,
          textStyle: {
            color: map_label
          },
        },
      },
      itemStyle: {
        normal: {
          color: ''
        }
      },
      coordinateSystem: 'geo',
      data: bubbleData,
    },
    {
      name: 'Top 5',　 // 气泡
      type: 'scatter',
      coordinateSystem: 'geo',
      symbol: 'pin', // 气泡
      symbolSize: [30, 30],
      label: {
        normal: {
          show: true,
          textStyle: {
            color: map_label,
            fontSize: 9,
          },
          formatter(value) {
            return value.data.value[2]
          }
        }
      },
      itemStyle: {
        normal: {
          color: '', //标志颜色  有visualMap的时候颜色无效，会根据数值定
        }
      },
      data: bubbleData,
      showEffectOn: 'render',
      rippleEffect: {
        brushType: 'stroke'
      },
      hoverAnimation: true,
      zlevel: 1
    });
  return seriesData;
}

let mapBubbleDatas = {
  id: 'mapBubble',
  config: {"geo.map": 'china', 'visualMap.max': 200},
  seriesData: {
    geoCoordMap: geoCoordMap, // 坐标
    data: mapBubbleData, // 数据
  }
}

// 数据格式化
let mapBubble_data = dataFormat(mapBubbleDatas, 'mapBubble');
let mapBubbleEchart = new MapEcharts(mapOption(mapBubble_data));

