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
    nameList: [opt.mapName],
    idx: 0,
    pos: {
      leftPlus: 115,
      leftCur: 150,
      left: 198,
      top: 50
    },
    defaultOpt: {
      mapName: 'china', // 地图展示
      goDown: false, // 是否下钻
      bgColor: '#404a59', // 画布背景色
      activeArea: [], // 区域高亮,同echarts配置项
      data: [],
      // 下钻回调(点击的地图名、实例对象option、实例对象)
      callback: function (name, option, instance) {
      }
    },
    line: [[0, 0], [8, 11], [0, 22]],
    style: {
      font: '18px "Microsoft YaHei", sans-serif',
      textColor: '#eee',
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
      option.callback(name, opt, instance);
    },

    /**
     * 创建地图按钮
     * name 地图地区名
     * */
    createBreadcrumb: function (name) {
      //地图拼音
      var cityToPinyin = {};
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
            points: line
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
          top: 'middle',
          style: {
            text: name,
            textAlign: 'center',
            fill: style.textColor,
            font: style.font
          },
          onclick: function () {
            var name = this.style.text;
            handleEvents.resetOption(chart, option, name);
          }
        }, {
          type: 'text',
          left: -68,
          top: 10,
          style: {

            name: name,
            text: cityToPinyin[name] ? cityToPinyin[name].toUpperCase() : '',
            textAlign: 'center',
            fill: style.textColor,
            font: '12px "Microsoft YaHei", sans-serif',
          },
          onclick: function () {
            // console.log(this.style);
            var name = this.style.name;
            handleEvents.resetOption(chart, option, name);
          }
        }]
      };
    }
  }


}
