// 地图下钻封装

/**
 * id  界面图表的dom Id
 * option  设置参数对象
 * */

echarts.extendsMap = function (id, option) {
  // 获取id，初始化
  var chart = this.init(document.getElementById(id));

  /**
   * @mapObj 地图对象
   *   @curGeoJson  地图Json
   *   @defaultOpt  默认设置
   *   @nameList  名字列表
   *   @cityCode  点击时候存储的城市行政区code
   *   @root_fileName 根路径名称
   *   @idx
   *   @pos  按钮线条位置及文字调整
   *   @line
   *   @style
   * */
  let mapObj = {
    curGeoJson: option.geoJson,
    nameList: [option.mapName],
    cityCode: [100000],
    root_fileName: [''],
    idx: 0,
    pos: {
      leftPlus: 75,  // 左位置增量
      leftCur: 0,  // 左位置现在量
      left: 10,   // 距离屏幕左
      top: 10,   //  距离屏幕顶部
      line2_top: -30,  // 第二条线条距离顶部
      shape_x2: 65,  // 线条长度
      arrows_left: -90, // 箭头距离左侧
      text_left: -68,  // 文字距离左侧
      text_top: -10,  //  文字距离顶部
    },
    defaultOpt: {
      mapName: '中国', // 地图展示
      goDown: false, // 是否下钻
      bgColor: mapBackground, // 画布背景色
      geoJson: '',  // 默认全国数据json
      region: false,
      activeArea: [], // 区域高亮,同echarts配置项
      data: [],
      visualMap: '', // 图例设置
      // 下钻回调(点击的地图名、实例对象option、实例对象)
      callback: function (name, mapOption, instance) {
      }
    },
    line: [[0, 0], [10, 10], [0, 20]],
    style: {
      font: '16px "Microsoft YaHei", sans-serif',
      textColor: map_label,
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
     * @instance 实例对象
     * @opt  option
     * @name 地图名
     **/
    resetOption: function (instance, opt, name) {
      // 创建按钮-地图
      var breadcrumb = this.createBreadcrumb(name);
      // 匹配地图 num 为索引
      var num = mapObj.nameList.indexOf(name);
      // 按钮内容长度
      var len = opt.graphic.length;
      if (num < 0) {
        // 按钮内容增加
        opt.graphic.push(breadcrumb);
        opt.graphic[0].children[0].shape.x2 = mapObj.pos.shape_x2 * (mapObj.idx + 2);
        opt.graphic[0].children[1].shape.x2 = mapObj.pos.shape_x2 * (mapObj.idx + 2);
        if (opt.graphic.length > 2) {
          let cityData = [];
          for (var x = 0; x < option.data.length; x++) {
            if (name === option.data[x].city) {
              console.log('进入处理数据')
              // 数据处理
              $([option.data[x]]).each(function (index, data) {
                cityData.push({
                  city: data.city,
                  name: data.name,
                  value: data.value,
                });
              });
            }
          }
          // 设置data数据  判断是否为大区的数据
          opt.series[0].data = option.region ? [] : handleEvents.handleGeoData(mapObj.curGeoJson);
        }
        // 地图地区名添加
        mapObj.nameList.push(name);
        mapObj.idx++;
      } else {
        //点击按钮返回
        opt.graphic.splice(num + 2, len);

        if (opt.graphic.length) {
          // 按钮线的递增
          opt.graphic[0].children[0].shape.x2 = mapObj.pos.shape_x2 * (num + 1);
          opt.graphic[0].children[1].shape.x2 = mapObj.pos.shape_x2 * (num + 1);
          // opt.series[0].data = handleEvents.handleGeoData(mapObj.curGeoJson);
        }
        /**
         * 数组更新
         * */
        mapObj.nameList.splice(num + 1, len);
        mapObj.root_fileName.splice(num + 1, len);
        mapObj.cityCode.splice(num + 1, len);
        //索引
        mapObj.idx = num;
        mapObj.pos.leftCur -= mapObj.pos.leftPlus * (len - num - 1);
      }

      opt.geo.map = name;
      // opt.geo.zoom = 0.4;
      // instance.clear();
      instance.setOption(opt, true);
      // this.zoomAnimation();
      // 函数回调
      option.callback(name, opt, instance);
    },

    /**
     * 创建地图按钮
     * @name 地图地区名
     * */
    createBreadcrumb: function (name) {
      let pos = mapObj.pos;
      var breadcrumb = {
        type: 'group',
        id: name,
        left: pos.leftCur + pos.leftPlus,
        top: pos.top + 3,
        children: [{
          type: 'polyline',
          left: pos.arrows_left,
          top: -10,  //> 符号位置
          shape: {
            points: mapObj.line
          },
          style: {
            stroke: '#fff',
            key: name
          },
          onclick: function () {
            var name = this.style.key;
            handleEvents.resetOption(chart, mapOption, name);
          }
        }, {
          type: 'text',
          left: pos.text_left,
          top: pos.text_top,
          style: {
            text: name,
            textAlign: 'center',
            fill: mapObj.style.textColor,
            font: mapObj.style.font
          },
          name: name,
          data: handleEvents.handleGeoData(mapObj.curGeoJson),
          onclick: function () {
            // 点击事件
            var name = this.style.text;
            mapOption.series[0].data = this.data;
            handleEvents.resetOption(chart, mapOption, name);
          }
        }]
      };
      // mapObj.pos.left += mapObj.pos.leftPlus;
      mapObj.pos.leftCur += mapObj.pos.leftPlus;
      return breadcrumb;
    },

    /**
     * 设置数据格式/初始化data
     *  @data  传入的数据data
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
     * 处理geo的data数据
     *
     * */
    handleGeoData: function (Json) {
      let mapData = Json.features.map(item => {
        return {
          name: item.properties.name,
          value: item.properties.center.concat(Math.random() * 1000),
          level: item.properties.level,
          cityCode: item.properties.adcode
        }
      });
      return mapData;
    },

    /**
     * 获取地图json数据
     * */
    getGeoJson: function (params, self) {
      let cityCode = params.data.cityCode;
      // 根据相对应路径区获取json资源
      let url = `data/${mapObj.root_fileName.join('')}${cityCode}.json`;
      // 判断是否为大区获取
      if (option.region) {
        url = `data/100000.json`;
      }
      $.ajax({
        type: 'get',
        async: false,
        url: url,
        success: (response) => {
          // 地图数据赋值
          if (!option.region) {
            // 无大区划分时正常赋值
            mapObj.curGeoJson = response;
          } else {
            // 有大区划分 处理所属地区数据进行显示  过滤
            let list = response.features.filter((item, index) => {
              return params.List.includes(item.properties.name);
            });
            mapObj.curGeoJson.features = list;
            params.name = params.List[0]; // 大区
          }
          // 地图注册
          echarts.registerMap(params.name, mapObj.curGeoJson);
          handleEvents.resetOption(self, mapOption, params.name);
        },
        error: () => {
          alert('小编正在努力开发中');
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
    },

    /**
     * 大区数据分类
     **/
    arrangeRegion: function (data) {
      let regionObj = {};
      data.forEach((item, index) => {
        // 大区分类遍历归类
        regionObj[item.region] ? regionObj[item.region].push(item.name) : regionObj[item.region] = [item.name];
      })
      return regionObj;
    },

    /**
     * 大区json过滤
     * */
    filterRegion: function (params) {
      // 获取动态分类大区
      let regionObj = this.arrangeRegion(option.data);
      Object.keys(regionObj).some(item => {
        if (regionObj[item].includes(params.name)) {
          // 深拷贝
          let list = JSON.parse(JSON.stringify(regionObj[item]));
          // 数组首部增加大区
          list.unshift(item);
          params.List = list;
          // 跳出循环
          return true;
        }
      })
      return params;
    },

  };

  var mapOption = {
    backgroundColor: option.bgColor,
    // 提示框
    tooltip: {
      trigger: "item",
      formatter: p => {
        let val = p.value;
        if (window.isNaN(val)) {
          val = 0;
        }
        let txtCon =
          p.name + "<br>" + "<hr>" + "数值 : " + val.toFixed(2);
        return txtCon;
      }
    },
    //按钮菜单
    graphic: [{
      type: 'group',
      left: mapObj.pos.left,
      top: mapObj.pos.top - 2,
      children: [{
        type: 'line',
        left: 0,
        top: 0,
        shape: {
          x1: 0,
          y1: 0,
          x2: mapObj.pos.shape_x2,
          y2: 0
        },
        style: {
          stroke: mapObj.style.lineColor,
        }
      }, {
        type: 'line',
        left: 0,
        top: mapObj.pos.line2_top,
        shape: {
          x1: 0,
          y1: 0,
          x2: mapObj.pos.shape_x2,
          y2: 0
        },
        style: {
          stroke: mapObj.style.lineColor,
        }
      }]
    },
      {
        id: mapObj.nameList[mapObj.idx],
        type: 'group',
        left: mapObj.pos.left,
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
          onclick: function () {
            var name = this.style.key;
            handleEvents.resetOption(chart, mapOption, name);
          }
        }, {
          type: 'text',
          left: 110,
          top: mapObj.pos.text_top,
          style: {
            text: '中国',
            textAlign: 'center',
            fill: mapObj.style.textColor,
            font: mapObj.style.font
          },
          data: handleEvents.handleGeoData(option.geoJson),
          onclick: function () {
            mapOption.series[0].data = option.region ? [] : this.data;
            handleEvents.resetOption(chart, mapOption, '中国');
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
          areaColor: mapEmphasis_area,//地图背景色
        }
      },
      label: {
        normal: {
          show: true, //显示省份标签
          fontFamily: 'sans-serif',
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
    // 地图图例
    visualMap: option.visualMap,
    series: [{
      type: 'map',
      name: option.mapName,
      geoIndex: 0,
      data: handleEvents.handleGeoData(option.geoJson),
    }],
  };
  // 地图配置信息;
  option.config && (mapOption = configProperty(option.config, mapOption));

  // console.log(mapOption,option.config)
  /**
   * 划分大区的option处理
   * */
  if (option.region) {
    // 获取动态的大区分类
    let regionObj = handleEvents.arrangeRegion(option.data);
    // 大区提示文字
    mapOption.tooltip = {
      trigger: "item",
      //显示大区名称
      formatter: p => {
        p = handleEvents.filterRegion(p);
        return p.List[0];
      }
    };
    /**
     *根据大区进行匹配划分图例
     **/
    let splitList = []
    Object.keys(regionObj).forEach(item => {
      let max = 0, min;
      option.data.forEach((o, i) => {
        // 区域匹配，获取最大最小值
        if (o.region === item) {
          max = Math.max(max, o.value);
          min = min ? Math.min(min, o.value) : max;
        }
      })
      splitList.push({
        start: min,
        end: max,
        label: item,
      })
    })
    // console.log(splitList, '数组')
    mapOption.dataRange = {
      bottom: "3%",
      right: '2%',
      align: 'left',
      itemWidth: 15,
      itemHeight: 10,
      textStyle: {
        color: textColor,
        fontSize: 12,
      },
      splitList: splitList,
      inRange: {
        color: regionArea
      },
    };
    // 增加大区高亮区块数据
    mapOption.series.unshift({
      type: 'effectScatter',
      coordinateSystem: 'geo',
      hoverAnimation: true,
      itemStyle: {
        normal: {
          color: '#FABC61',
          shadowBlur: 10,
          shadowColor: '#333'
        }
      },
      data: []
    });
    // 地图数据赋值
    mapOption.series[1].data = option.data;

    //  echarts 设置option
    chart.setOption(mapOption);

    /**
     * 大区联动事件鼠标滑过，滑出
     * */
    chart.on("mouseover", function (params) {
        var city = params.name;
        Object.keys(regionObj).forEach((item, index) => {
          // 数组中是否存在对应的城市
          if (regionObj[item].indexOf(city) !== -1) {
            // 该大区的所有身份高亮
            regionObj[item].forEach(obj => {
              chart.dispatchAction({type: "highlight", name: obj});
            })
          }
        })
      }
    );
    chart.on("mouseout", function (params) {
      var city = params.name;
      Object.keys(regionObj).forEach((item, index) => {
        // 数组中是否存在对应的城市
        if (regionObj[item].indexOf(city) !== -1) {
          // 该大区的所有身份高亮
          regionObj[item].forEach(obj => {
            chart.dispatchAction({type: "downplay", name: obj});
          })
        }
      })
    });
  } else {
    chart.setOption(mapOption);
  }

  handleEvents.arrangeRegion(option.data)


// 添加点击事件
  chart.on('click', function (params) {
    var _self = this;
    let name = params.name;
    //大区过滤
    if (option.region) {
      handleEvents.filterRegion(params);
    }
    // 下钻
    if (option.goDown && name !== mapObj.nameList[mapObj.idx]) {
      if (name) {
        let code = params.data.cityCode
        let level = params.data.level
        // 浅拷贝，同变
        let cityCode = mapObj.cityCode;
        //  处理请求路径
        if (code != cityCode[cityCode.length - 1]) {
          if (level === 'city' || level === 'district') {
            mapObj.root_fileName.push(`${level}/`);
          } else {
            mapObj.root_fileName.push(proviceName(name));
          }
          cityCode.push(code);
          handleEvents.getGeoJson(params, _self);
        }

      }
    }
  });
  return chart;
}

// 图例
var mapUnder_visualMap = {
  type: 'piecewise',
  bottom: "3%",
  right: '2%',
  align: 'left',
  itemWidth: 15,
  itemHeight: 10,
  textStyle: {
    color: textColor,
    fontSize: 12,
  },
  pieces: [{
    value: 0,
    label: '未发生',
  }, {
    min: 0,
    max: 250,
    label: '0-250',
  }, {
    min: 250,
    max: 500,
    label: '250-500',
  }, {
    min: 500,
    max: 750,
    label: '500-750',
  }, {
    min: 750,
    max: 1000,
    label: '750-1000',
  }],
  inRange: {
    color: mapArea
  },
  outOfRange: {
    color: ['#eeeeee']
  }
};


var mapUnderEchart;
$.getJSON('data/100000.json', function (geoJson) {
  echarts.registerMap('中国', geoJson);
  mapUnderEchart = echarts.extendsMap('mapUnder2', {
    bgColor: mapBackground, // 画布背景色
    mapName: '中国', // 地图名
    goDown: true, // 是否下钻
    // 下钻回调
    geoJson: geoJson,
    // data:allprovinceData1,
    visualMap: mapUnder_visualMap,
    callback: function (name, option, instance) {
      //console.log(name, option, instance);
    },
  });
})

