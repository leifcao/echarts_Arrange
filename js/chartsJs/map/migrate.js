var mapMigrate = document.getElementById('mapMigrate')
var mapMigrateEchart = echarts.init(mapMigrate)

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
var chinaDatas = [
    [{
        name: '黑龙江',
        value: 0
    }],
    [{
        name: '北京',
        value: 0.83
    }],
    [{
        name: '云南',
        value: 0
    }],
    [{
        name: '四川',
        value: 1
    }],
    [{
        name: '浙江',
        value: 0
    }],
    [{
        name: '湖南',
        value: 0
    }],
    [{
        name: '广东',
        value: 1
    }],
    [{
        name: '海南',
        value: 0
    }],
    [{
        name: '新疆',
        value: 0
    }],
    [{
        name: '上海',
        value: 0
    }]
];

var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = chinaGeoCoordMap[dataItem[0].name];
        var toCoord = [116.4551, 40.2539];//目的点
        if (fromCoord && toCoord) {
            res.push([{
                coord: fromCoord,
                value: dataItem[0].value
            }, {
                coord: toCoord,
            }]);
        }
    }
    return res;
};
var mapMigrateSeries = [];
[
    ['北京', chinaDatas]
].forEach(function(item, i) {
    // console.log(item)
    mapMigrateSeries.push({
          type: 'lines',
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
                  width: 1, //尾迹线条宽度
                  opacity: 1, //尾迹线条透明度
                  curveness: .3 //尾迹线条曲直度
              }
          },
          data: convertData(item[1])
      }, {
          type: 'effectScatter',
          coordinateSystem: 'geo',
          zlevel: 2,
          rippleEffect: { //涟漪特效
              period: 4, //动画时间，值越小速度越快
              brushType: 'stroke', //波纹绘制方式 stroke, fill
              scale: 4 //波纹圆环最大限制，值越大波纹越大
          },
          label: {
              normal: {
                  show: true,
                  position: 'right', //显示位置
                  offset: [5, 0], //偏移设置
                  formatter: function(params) { //圆环显示文字
                      return params.data.name;
                  },
                  fontSize: 13
              },
              emphasis: {
                  show: true
              }
          },
          symbol: 'circle',
          symbolSize: function(val) {
              return 5 + val[2] * 5; //圆环大小
          },
          itemStyle: {
              normal: {
                  show: false,
                  color: '#f00'
              }
          },
          data: item[1].map(function(dataItem) {
              return {
                  name: dataItem[0].name,
                  value: chinaGeoCoordMap[dataItem[0].name].concat([dataItem[0].value])
              };
          }),
      },
      //被攻击点
      {
          type: 'scatter',
          coordinateSystem: 'geo',
          zlevel: 2,
          rippleEffect: {
              period: 4,
              brushType: 'stroke',
              scale: 4
          },
          label: {
              normal: {
                  show: true,
                  position: 'right',
                  //offset:[5, 0],
                  color: '#0f0',
                  formatter: '{b}',
                  textStyle: {
                      color: "#0f0"
                  }
              },
              emphasis: {
                  show: true,
                  color: "#f60"
              }
          },
          symbol: 'pin',
          symbolSize: 30,
          data: [{
              name: item[0],
              value: chinaGeoCoordMap[item[0]].concat([10]),
          }],
      }
    );
});

let mapMigrateOption = {
    tooltip: {
        trigger: 'item',
        // backgroundColor: 'rgba(166, 200, 76, 0.82)',
        borderColor: '#FFFFCC',
        showDelay: 0,
        hideDelay: 0,
        enterable: true,
        transitionDuration: 0,
        extraCssText: 'z-index:100',
        formatter: function(params, ticket, callback) {
            //根据业务自己拓展要显示的内容
            var res = "";
            var name = params.name;
            var value = params.value[params.seriesIndex + 1];
            res = "<span style='color:#fff;'>" + name + "</span><br/>数据：" + value;
            return res;
        }
    },
    backgroundColor: "#e8e8e8",
    visualMap: { //图例值控制
        min: 0,
        max: 1,
        calculable: true,
        show: true,
        color: ['#f44336', '#ffb65c',],
        // color: colorList,
        textStyle: {
            color: '#fff'
        }
    },
    geo: {
        map: 'china',
        zoom: 1.2,
        label: {
            emphasis: {
                show: false
            }
        },
        roam: true, //是否允许缩放
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
    series: mapMigrateSeries
};

mapMigrateEchart.setOption(mapMigrateOption);