// 地图下钻封装

/**
 * id  界面图表的dom Id
 * option  设置参数对象
 * */

echarts.extendsMap = function (id, option) {
  // 获取id，初始化
  var chart = this.init(document.getElementById(id));

  /**
   * mapObj 地图对象
   *   curGeoJson  地图Json
   *   levelColorMap  级别颜色
   *   defaultOpt  默认设置
   *   nameList  名字列表
   *   idx
   *   pos
   *   line
   *   style
   * */
  let mapObj = {
    curGeoJson: {},
    levelColorMap: {
      '1': 'rgba(241, 109, 115, .8)',
      '2': 'rgba(255, 235, 59, .7)',
      '3': 'rgba(147, 235, 248, 1)'
    },
    nameList: [option.mapName],
    idx: 0,
    pos: {
      leftPlus: 115,
      leftCur: 150,
      left: 198,
      top: 10
    },
    defaultOpt: {
      mapName: 'china', // 地图展示
      goDown: false, // 是否下钻
      bgColor: '#404a59', // 画布背景色
      activeArea: [], // 区域高亮,同echarts配置项
      data: [],
      // 下钻回调(点击的地图名、实例对象option、实例对象)
      callback: function (name, mapUnderOption, instance) {
      }
    },
    line: [[0, 0], [8, 11], [0, 22]],
    style: {
      font: '18px "Microsoft YaHei", sans-serif',
      textColor: textColor,
      lineColor: 'rgba(147, 235, 248, .8)'
    },
  };
  if (option) option = this.util.extend(mapObj.defaultOpt, option);


  /**
   * handleEvents  处理事件对象
   * */

  var handleEvents = {
    /**
     * 重置Option
     * instance 实例对象
     * opt
     * name 地图名
     **/
    resetOption: function (instance, opt, name) {
      // 创建按钮-地图
      var breadcrumb = this.createBreadcrumb(name);
      // 匹配地图
      var num = name.indexOf(name);
      // 按钮内容长度
      var len = opt.graphic.length;
      if (num < 0) {
        // 按钮内容增加
        opt.graphic.push(breadcrumb);
        opt.graphic[0].children[0].shape.x2 = 145;
        opt.graphic[0].children[1].shape.x2 = 145;
        if (opt.graphic.length > 2) {
          let cityData = [];
          var cityJson;
          for (var x = 0; x < option.length; x++) {
            if (name === option.data[x].city) {
              // 数据处理
              $([option.data[x]]).each(function (index, data) {
                cityJson = {
                  city: data.city,
                  name: data.name,
                  value: data.value,
                  crew: data.crew,
                  company: data.company,
                  position: data.position,
                  region: data.region
                };
                cityData.push(cityJson);
              });
            }
          }
          // 设置data数据
          opt.series[0].data = handleEvents.initSeriesData(cityData);
        }
        // 地图地区名添加
        nameList.push(name);
        idx++;
      } else {
        opt.graphic.splice(num + 2, len);
        if (opt.graphic.length <= 2) {
          opt.graphic[0].children[0].shape.x2 = 60;
          opt.graphic[0].children[1].shape.x2 = 60;
          opt.series[0].data = handleEvents.initSeriesData(option.data);
        }
        nameList.splice(num + 1, len);
        idx = num;
        mapObj.pos.leftCur -= mapObj.pos.leftPlus * (len - num - 1);
      }

      opt.geo.map = name;
      opt.geo.zoom = 0.4;
      instance.clear();
      instance.setOption(o);
      this.zoomAnimation();
      // 函数回调
      option.callback(name, mapUnderOption, instance);
    },

    /**
     * 创建地图按钮
     * name 地图地区名
     * */
    createBreadcrumb: function (name) {
      var breadcrumb = {
        type: 'group',
        id: name,
        left: mapObj.pos.leftCur + mapObj.pos.leftPlus,
        top: mapObj.pos.top + 3,
        children: [{
          type: 'polyline',
          left: -90,
          top: -5,
          shape: {
            points: mapObj.line
          },
          style: {
            stroke: '#fff',
            key: name
          },
          onclick: function () {
            var name = this.style.key;
            handleEvents.resetOption(chart, option, name);
          }
        }, {
          type: 'text',
          left: -68,
          top: 3,
          style: {
            text: name,
            textAlign: 'center',
            fill: mapObj.style.textColor,
            font: mapObj.style.font
          },
          onclick: function () {
            // 点击事件
            var name = this.style.text;
            handleEvents.resetOption(chart, option, name);
          }
        }]
      };
      mapObj.pos.left += mapObj.pos.leftPlus;
      return breadcrumb;
    },


    /**
     * 设置数据格式/初始化data
     *  data  传入的数据data
     * */
    initSeriesData: function (data) {
      return data.map((item, index) => {
        var geoCoord = geoCoordMap[item.name];
        if (geoCoord) {
          return {
            name: item.name,
            value: geoCoord.concat(item.value),
            crew: item.crew,
            company: item.company,
            position: item.position,
            region: item.region
          }
        }
      })
    },


    /**
     * 点击地图自动放大缩小适应界面
     * */

    zoomAnimation() {
      var count = null;
      var zoom = function (per) {
        if (!count) count = per;
        chart.setOption({
          geo: {zoom: count}
        });
        if (count < 1) window.requestAnimationFrame(() => zoom(0.3));
      };
      window.requestAnimationFrame(() => {
        zoom(0.3)
      });
    }
  };

  var mapUnderOption ={
    backgroundColor: option.bgColor,
    graphic: [{
      type: 'group',
      left: mapObj.pos.left,
      top: mapObj.pos.top - 4,
      children: [{
        type: 'line',
        left: 0,
        top: -20,
        shape: {
          x1: 0,
          y1: 0,
          x2: 60,
          y2: 0
        },
        style: {
          stroke: mapObj.style.lineColor,
        }
      }, {
        type: 'line',
        left: 0,
        top: 5,
        shape: {
          x1: 0,
          y1: 0,
          x2: 60,
          y2: 0
        },
        style: {
          stroke: mapObj.style.lineColor,
        }
      }]
    },
      {
        id: mapObj.nameList[idx],
        type: 'group',
        left: mapObj.pos.left + 2,
        top: mapObj.pos.top,
        children: [{
          type: 'polyline',
          left: 90,
          top: -12,
          shape: {
            points: mapObj.line
          },
          style: {
            stroke: 'transparent',
            key: mapObj.nameList[0]
          },
          onclick: function() {
            var name = this.style.key;
            handleEvents.resetOption(chart,mapUnderOption , name);
          }
        }, {
          type: 'text',
          left: 0,
          top: 'middle',
          style: {
            text: '中国',
            textAlign: 'center',
            fill: mapObj.style.textColor,
            font: mapObj.style.font
          },
          onclick: function() {
            handleEvents.resetOption(chart, mapUnderOption, '中国');
          }
        }]
      }],
    geo: {
      map: option.mapName,
      roam: true,
      zoom: 1.2,
      itemStyle: {
        normal: {
          color: mapTheme_item, //地图背景色
          borderColor: mapBorder, //省市边界线00fcff 516a89
          borderWidth: 1
        },
        emphasis: {
          areaColor:mapEmphasis_area,//地图背景色

        }
      },
      label: {
        normal: {
          show: true, //显示省份标签
          fontFamily:'sans-serif',
          textStyle: {
            color: map_label, //省份标签字体颜色
            fontSize: 10,
          }
        },
        emphasis: {
          //对应的鼠标悬浮效果
          show: true,
          textStyle: {
            color: mapEmphasis_label
          },

        }
      }
    },
    series: [{
      type: 'map',
      name:option.mapName,
      geoIndex: 0,
      data:  handleEvents.initSeriesData(option.data),
    }],
  };


  chart.setOption(mapUnderOption);

// 添加点击事件
  chart.on('click', function(params) {
    var _self = this;
    if (option.goDown && params.name !== mapObj.nameList[idx]) {
      if (cityMap[params.name]) {
        var url = cityMap[params.name];
        $.get(url, function(response) {
          //console.log(response);
          mabObj.curGeoJson = response;
          echarts.registerMap(params.name, response);
          handleEvents.resetOption(_self, mapUnderOption, params.name);
        });
      }
    }
  });
  return chart;
}


var mapUnder2Echart;
$.getJSON('data/100000.json', function(geoJson) {
  echarts.registerMap('中国', geoJson);
  mapUnder2Echart = echarts.extendsMap('mapUnder2', {
    bgColor: mapBackground, // 画布背景色
    mapName: '中国', // 地图名
    goDown: true, // 是否下钻
    // 下钻回调
    callback: function(name, option, instance) {
      //console.log(name, option, instance);
    },
  });
  mapUnder2Echart.resize();
})
