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
   *   defaultOpt  默认设置
   *   nameList  名字列表
   *   cityCode  点击时候存储的城市行政区code
   *   root_fileName 根路径名称
   *   idx
   *   pos  按钮线条位置及文字调整
   *   line
   *   style
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
      text_top: -4,  //  文字距离顶部
    },
    defaultOpt: {
      mapName: '中国', // 地图展示
      goDown: false, // 是否下钻
      bgColor: mapBackground, // 画布背景色
      geoJson: '',
      region: false,
      activeArea: [], // 区域高亮,同echarts配置项
      data: [],
      // 下钻回调(点击的地图名、实例对象option、实例对象)
      callback: function (name, mapUnderOption, instance) {
      }
    },
    line: [[0, 0], [10, 10], [0, 20]],
    style: {
      font: '16px "Microsoft YaHei", sans-serif',
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
      var breadcrumb = option.region ? this.setRegion(name) : this.createBreadcrumb(name);
      // var breadcrumb = this.createBreadcrumb(name);
      // 匹配地图
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
          for (var x = 0; x < option.length; x++) {
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
          opt.graphic[0].children[0].shape.x2 = mapObj.pos.shape_x2 * (mapObj.idx);
          opt.graphic[0].children[1].shape.x2 = mapObj.pos.shape_x2 * (mapObj.idx);
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
     * name 地图地区名
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
            handleEvents.resetOption(chart, mapUnderOption, name);
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
            mapUnderOption.series[0].data = this.data;
            handleEvents.resetOption(chart, mapUnderOption, name);
          }
        }]
      };
      // mapObj.pos.left += mapObj.pos.leftPlus;
      mapObj.pos.leftCur += mapObj.pos.leftPlus;
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
     * 处理geo的data数据
     *
     * */
    handleGeoData: function (Json) {
      let mapData = Json.features.map(item => {
        return ({
          name: item.properties.name,
          value: item.properties.center.concat(Math.random() * 1000),
          level: item.properties.level,
          cityCode: item.properties.adcode
        })
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
            // 有大区划分 处理所属地区数据进行显示
            let list = response.features.filter((item, index) => {
              return params.List.includes(item.properties.name)
            });
            mapObj.curGeoJson.features = list;
          }
          // 地图注册
          echarts.registerMap(params.name, mapObj.curGeoJson);
          handleEvents.resetOption(self, mapUnderOption, params.name);
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
     * 各大区设置
     * */
    setRegion: function (n) {
      let breadcrumb;
      if (n == ("江苏省") || n == ("上海市")) {
        breadcrumb = this.createBreadcrumb("江苏大区");
      } else if (n == ("广东省") || n == ("广西壮族自治区") || n == ("海南")) {
        breadcrumb = this.createBreadcrumb("华南大区");
      } else if (n == ("河南省") || n == ("陕西省") || n == ("甘肃省") || n == ("青海省")) {
        breadcrumb = this.createBreadcrumb("中西大区");
      } else if (n == ("湖北省") || n == ("江西省") || n == ("湖南省")) {
        breadcrumb = this.createBreadcrumb("华中大区");
      } else if (n == ("山东省") || n == ("安徽省")) {
        breadcrumb = this.createBreadcrumb("华东大区");
      } else if (n == ("北京市") || n == ("河北省") || n == ("天津市")) {
        breadcrumb = this.createBreadcrumb("华北大区");
      } else if (n == ("黑龙江省") || n == ("吉林省") || n == ("辽宁省")) {
        breadcrumb = this.createBreadcrumb("东北大区");
      } else if (n == ("内蒙古自治区") || n == ("山西省") || n == ("新疆维吾尔自治区") || n == ("宁夏回族自治区")) {
        breadcrumb = this.createBreadcrumb("北方大区");
      } else if (n == ("浙江省") || n == ("福建省")) {
        breadcrumb = this.createBreadcrumb("东南大区");
      } else if (n == ("四川省") || n == ("西藏自治区") || n == ("重庆市") || n == ("云南省") || n == ("贵州省")) {
        breadcrumb = this.createBreadcrumb("西南大区");
      }
      /*if (breadcrumb != null) {
        breadcrumb.left = 265;
      }*/
      return breadcrumb;

    },

    /**
     * 大区json过滤
     * */
    filterRegion: function (params) {
      if (params.name == "江苏省" || params.name == "上海市") {
        params.List = ['江苏省', '上海市'];
      } else if (params.name == "广东省" || params.name == "广西壮族自治区" || params.name == "海南省") {
        params.List = ['广东省', '广西壮族自治区', '海南省'];
      } else if (params.name == "河南省" || params.name == "陕西省" || params.name == "甘肃省" || params.name == "青海省") {
        params.List = ['河南省', '陕西省', '甘肃省', '青海省'];
      } else if (params.name == "湖北省" || params.name == "江西省" || params.name == ("湖南省")) {
        params.List = ['湖北省', '江西省', '湖南省'];
      } else if (params.name == "山东省" || params.name == "安徽省") {
        params.List = ['山东省', '安徽省'];
      } else if (params.name == "北京市" || params.name == "河北省" || params.name == "天津市") {
        params.List = ['北京市', '河北省', '天津市'];
      } else if (params.name == "黑龙江省" || params.name == "吉林省" || params.name == "辽宁省") {
        params.List = ['黑龙江省', '吉林省', '辽宁省'];
      } else if (params.name == "内蒙古自治区" || params.name == "山西省" || params.name == "新疆维吾尔自治区" || params.name == "宁夏回族自治区") {
        params.List = ['内蒙古自治区', '山西省', '新疆维吾尔自治区', '宁夏回族自治区'];
      } else if (params.name == "浙江省" || params.name == "福建省") {
        params.List = ['浙江省', '河北省', '福建省'];
      } else if (params.name == "四川省" || params.name == "西藏自治区" || params.name == "重庆市" || params.name == "云南省" || params.name == "贵州省") {
        params.List = ['四川省', '西藏自治区', '重庆市', '云南省', '贵州省'];
      }

      return params;
    }
  };

  var mapUnderOption = {
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
            handleEvents.resetOption(chart, mapUnderOption, name);
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

            mapUnderOption.series[0].data = option.region ? [] : this.data;
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
    visualMap: {
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
    },
    series: [{
      type: 'map',
      name: option.mapName,
      geoIndex: 0,
      data: handleEvents.handleGeoData(option.geoJson),
    }],
  };

  /**
   * 划分大区的option处理
   * */
  if (option.region) {
    mapUnderOption.visualMap = {
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
          "#ffffff",
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
    mapUnderOption.series.unshift({
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

    mapUnderOption.series[1].data = option.data;

    chart.setOption(mapUnderOption);

    /**
     * 大区联动事件
     * */
    chart.on("mouseover", function (params) {
      var city = params.name;
      if (city == "黑龙江省" || city == "吉林省" || city == "辽宁省") {
        chart.dispatchAction({
          type: "highlight",
          name: "黑龙江省"
        });
        chart.dispatchAction({
          type: "highlight",
          name: "吉林省"
        });
        chart.dispatchAction({
          type: "highlight",
          name: "辽宁省"
        });
      }
      if (city == "上海市" || city == "江苏省") {
        chart.dispatchAction({
          type: "highlight",
          name: "上海市"
        });
        chart.dispatchAction({
          type: "highlight",
          name: "江苏省"
        });
      }
      if (city == "北京市" || city == "河北省" || city == "天津市") {
        chart.dispatchAction({
          type: "highlight",
          name: "北京市"
        });
        chart.dispatchAction({
          type: "highlight",
          name: "河北省"
        });
        chart.dispatchAction({
          type: "highlight",
          name: "天津市"
        });
      }
      if (city == "河南省" || city == "陕西省" || city == "甘肃省" || city == "青海省") {
        chart.dispatchAction({
          type: "highlight",
          name: "河南省"
        });
        chart.dispatchAction({
          type: "highlight",
          name: "陕西省"
        });
        chart.dispatchAction({
          type: "highlight",
          name: "甘肃省"
        });
        chart.dispatchAction({
          type: "highlight",
          name: "青海省"
        });
      }
      if (city == "广东省" || city == "广西壮族自治区" || city == "海南省" || city == "香港特别行政区" || city == "澳门特别行政区") {
        chart.dispatchAction({
          type: "highlight",
          name: "广东省"
        });
        chart.dispatchAction({
          type: "highlight",
          name: "广西壮族自治区"
        });
        chart.dispatchAction({
          type: "highlight",
          name: "海南省"
        });
        chart.dispatchAction({
          type: "highlight",
          name: "香港特别行政区"
        });
        chart.dispatchAction({
          type: "highlight",
          name: "澳门特别行政区"
        });
      }
      if (city == "重庆市" || city == "四川省" || city == "贵州省" || city == "云南省" || city == "西藏自治区") {
        chart.dispatchAction({
          type: "highlight",
          name: "重庆市"
        });
        chart.dispatchAction({
          type: "highlight",
          name: "四川省"
        });
        chart.dispatchAction({
          type: "highlight",
          name: "贵州省"
        });
        chart.dispatchAction({
          type: "highlight",
          name: "云南省"
        });
        chart.dispatchAction({
          type: "highlight",
          name: "西藏自治区"
        });
      }
      if (city == "湖南省" || city == "湖北省" || city == "江西省") {
        chart.dispatchAction({
          type: "highlight",
          name: "湖南省"
        });
        chart.dispatchAction({
          type: "highlight",
          name: "湖北省"
        });
        chart.dispatchAction({
          type: "highlight",
          name: "江西省"
        });
      }
      if (city == "山东省" || city == "安徽省") {
        chart.dispatchAction({
          type: "highlight",
          name: "山东省"
        });
        chart.dispatchAction({
          type: "highlight",
          name: "安徽省"
        });
      }
      if (city == "浙江省" || city == "福建省") {
        chart.dispatchAction({
          type: "highlight",
          name: "浙江省"
        });
        chart.dispatchAction({
          type: "highlight",
          name: "福建省"
        });
      }
      if (city == "内蒙古自治区" || city == "山西省" || city == "新疆维吾尔自治区" || city == "宁夏回族自治区") {
        chart.dispatchAction({
          type: "highlight",
          name: "内蒙古自治区"
        });
        chart.dispatchAction({
          type: "highlight",
          name: "山西省"
        });
        chart.dispatchAction({
          type: "highlight",
          name: "新疆维吾尔自治区"
        });
        chart.dispatchAction({
          type: "highlight",
          name: "宁夏回族自治区"
        });
      }
    });
    chart.on("mouseout", function (params) {
      var city = params.name;
      if (city == "黑龙江省" || city == "吉林省" || city == "辽宁省") {
        chart.dispatchAction({
          type: "downplay",
          name: "黑龙江省"
        });
        chart.dispatchAction({
          type: "downplay",
          name: "吉林省"
        });
        chart.dispatchAction({
          type: "downplay",
          name: "辽宁省"
        });
      }
      if (city == "上海市" || city == "江苏省") {
        chart.dispatchAction({
          type: "downplay",
          name: "上海市"
        });
        chart.dispatchAction({
          type: "downplay",
          name: "江苏省"
        });
      }
      if (city == "北京市" || city == "河北省" || city == "天津市") {
        chart.dispatchAction({
          type: "downplay",
          name: "北京市"
        });
        chart.dispatchAction({
          type: "downplay",
          name: "河北省"
        });
        chart.dispatchAction({
          type: "downplay",
          name: "天津市"
        });
      }
      if (city == "河南省" || city == "陕西省" || city == "甘肃省" || city == "青海省") {
        chart.dispatchAction({
          type: "downplay",
          name: "河南省"
        });
        chart.dispatchAction({
          type: "downplay",
          name: "陕西省"
        });
        chart.dispatchAction({
          type: "downplay",
          name: "甘肃省"
        });
        chart.dispatchAction({
          type: "downplay",
          name: "青海省"
        });
      }
      if (city == "广东省" || city == "广西壮族自治区" || city == "海南省" || city == "香港特别行政区" || city == "澳门特别行政区") {
        chart.dispatchAction({
          type: "downplay",
          name: "广东省"
        });
        chart.dispatchAction({
          type: "downplay",
          name: "广西壮族自治区"
        });
        chart.dispatchAction({
          type: "downplay",
          name: "海南省"
        });
        chart.dispatchAction({
          type: "downplay",
          name: "香港特别行政区"
        });
        chart.dispatchAction({
          type: "downplay",
          name: "澳门特别行政区"
        });
      }
      if (city == "重庆市" || city == "四川省" || city == "贵州省" || city == "云南省" || city == "西藏自治区") {
        chart.dispatchAction({
          type: "downplay",
          name: "重庆市"
        });
        chart.dispatchAction({
          type: "downplay",
          name: "四川省"
        });
        chart.dispatchAction({
          type: "downplay",
          name: "贵州省"
        });
        chart.dispatchAction({
          type: "downplay",
          name: "云南省"
        });
        chart.dispatchAction({
          type: "downplay",
          name: "西藏自治区"
        });
      }
      if (city == "湖南省" || city == "湖北省" || city == "江西省") {
        chart.dispatchAction({
          type: "downplay",
          name: "湖南省"
        });
        chart.dispatchAction({
          type: "downplay",
          name: "湖北省"
        });
        chart.dispatchAction({
          type: "downplay",
          name: "江西省"
        });
      }
      if (city == "山东省" || city == "安徽省") {
        chart.dispatchAction({
          type: "downplay",
          name: "山东省"
        });
        chart.dispatchAction({
          type: "downplay",
          name: "安徽省"
        });
      }
      if (city == "浙江省" || city == "福建省") {
        chart.dispatchAction({
          type: "downplay",
          name: "浙江省"
        });
        chart.dispatchAction({
          type: "downplay",
          name: "福建省"
        });
      }
      if (city == "内蒙古自治区" || city == "山西省" || city == "新疆维吾尔自治区" || city == "宁夏回族自治区") {
        chart.dispatchAction({
          type: "downplay",
          name: "内蒙古自治区"
        });
        chart.dispatchAction({
          type: "downplay",
          name: "山西省"
        });
        chart.dispatchAction({
          type: "downplay",
          name: "新疆维吾尔自治区"
        });
        chart.dispatchAction({
          type: "downplay",
          name: "宁夏回族自治区"
        });
      }
    });
  } else {
    chart.setOption(mapUnderOption);
  }


// 添加点击事件
  chart.on('click', function (params) {
    var _self = this;
    let name = params.name
    if (option.region) {
      handleEvents.filterRegion(params);
    }
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


var mapUnder2Echart;

$.getJSON('data/100000.json', function (geoJson) {
  echarts.registerMap('中国', geoJson);
  mapUnder2Echart = echarts.extendsMap('mapUnder2', {
    bgColor: mapBackground, // 画布背景色
    mapName: '中国', // 地图名
    goDown: true, // 是否下钻
    // 下钻回调
    geoJson: geoJson,
    callback: function (name, option, instance) {
      //console.log(name, option, instance);
    },
  });

})

