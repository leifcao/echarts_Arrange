// 全局颜色修改
// 文本颜色
const textColor = '#6f6f6f';
// 图形颜色设置
const colorList = ['#5a6cec', '#168efe', '#2cd1c0', '#ffa06c', '#fedb65', '#8882f7', '#73DDFF'];
// const colorList = ["#9E87FF", '#73DDFF', '#fe9a8b', '#F56948', '#ffa06c', '#168efe', '#5a6cec']

// 动态设置series的颜色
function setSeriesColor(list) {
  // 颜色设置
  list.forEach((item, index) => {
    if (!item.itemStyle) item.itemStyle = {};
    if (!item.itemStyle.normal) item.itemStyle.normal = {};
    item.itemStyle.normal.color = colorList[index] ? colorList[index] : '#fefefe';
  });
}


/**
 * 地图区块颜色设置
 * @mapBackground  地图背景
 * @mapTheme_item  地图区块色
 * @mapText  地图文本颜色
 * @mapBorder  地图边界
 * @mapArea  区块颜色数组
 * @mapEmphasis_label  地图鼠标悬浮文字颜色
 * @mapEmphasis_area  地图鼠标悬浮区块颜色
 * @regionArea 大区颜色区块
 * */
let mapBackground = '#013954';
let map_label = '#ffffff';
let mapBorder = '#ffffff';
let mapTheme_item = '#50b9ff';
let mapArea = ['#d7efff', '#a7dcff', '#7ccaff', '#50b9ff', '#24a7ff',];
let regionArea = ['#eba75f', '#479fd2', '#69c1ac', '#ff6f5b', '#5bb6cb'];
let mapEmphasis_label = '#234EA5';
let mapEmphasis_area = '#E5F39B';


/**
 * 3d柱状图颜色块
 * @color3d  [0]阴影部分  [1]主体圆形末尾部分  [2]主体柱子部分  [3]主体圆形开始部分
 **/

// let color3d = ['#168efe',]
let color3d = [new echarts.graphic.LinearGradient(0, 0, 0, 1,
  [{
    offset: 0,
    color: "rgba(54,127,223,1)"
  },
    {
      offset: 1,
      color: "rgba(94,162,254,1)"
    }
  ],
  false
), new echarts.graphic.LinearGradient(0, 0, 0, 1,
  [{
    offset: 0,
    color: "rgba(89,211,255,1)"
  },
    {
      offset: 1,
      color: "rgba(23,237,194,1)"
    }
  ],
  false
), {
  "x": 0,
  "y": 0,
  "x2": 0,
  "y2": 1,
  "type": "linear",
  "global": false,
  "colorStops": [{//第一节下面
    "offset": 0,
    "color": "#2e9fdc"
  }, {
    "offset": 1,
    "color": "#26ebba"
  }]
}, '#26ebba']


//动态设置渐变色
function setLinearGradient(list, key) {
  // 颜色设置
  list.forEach((item, index) => {
    // item.lineStyle.color = colorList[index] ? colorList[index] : '#fefefe';
    item[key].color = colorList[index] ? new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
      offset: 0,
      color: colorList[index]
    },
      {
        offset: 1,
        color: colorList[index + 1] ? colorList[index + 1] : '#fefefe',
      }
    ]) : '#fefefe';
  })
}


//echarts legend改变
// myChart.on('legendselectchanged', function(params) {});


/**
 * 自定义Echarts父类
 * @opt 图表的option
 * @fn  图表的点击方法
 **/
//  所有图表数组
let Echarts_List = [];

class Echarts {
  constructor(opt, fn) {
    this.default = {
      backgroundColor: '',
      id: '',
      tooltip: {},   // 提示框组件
      legend: {
        textStyle: {
          color: textColor,
          fontSize: 12,
          fontStyle: 'normal',
          fontFamily: '微软雅黑',
        },
        itemWidth: 15,
        itemHeight: 10,
        data: [],
      },
      color: colorList,
      series: [],
    }
    // 递归拷贝option
    this.option = $.extend(true, this.default, opt);
    this.chart = this.init(opt.id);
    // 绑定点击事件
    if (fn) this.click(fn);
    // 图表存储
    this.pushChart();
  }

  /**
   * 获取dom,窗口自适应
   **/
  init(id) {
    let chart = echarts.init(document.getElementById(id));
    return chart;
  }

  /**
   * 赋值option
   **/
  setOption() {
    this.chart.setOption(this.option, true);
  }

  /**
   * chart图表存储，自适应窗口
   * */
  pushChart() {
    Echarts_List.push(this.chart);
  }

  /**
   * 重置数据
   * @data 传入的data数据格式
   * */
  resetData(data) {
    this.option = GetOpiton(data, this.option);
    this.setOption();
    console.log('success')
  }

  /**
   * 点击事件绑定
   **/
  click(fn) {
    this.chart.on('click', function (params) {
      // console.log(params,'--0--');
      fn(params);
    });
  }

  showOption() {
    const {id, color} = this.option;
    console.log(this.option)
  }
}

/**
 * 窗口自适应
 * */
function resize(arr) {
  arr.forEach((item, index) => {
    item.resize();
  })
}

/**
 * 统一获取option，封装好的数据格式传入
 * @data  封装好的data
 * @option 对应的图表option
 **/
function GetOpiton(data, option) {
  const {id, legend, xAxis, yAxis, seriesData, config} = data;
  //个性化属性配置
  if (config)
    option = configProperty(config, option);
  // 唯一标识符id
  if (id) option.id = id;
  // 图例
  if (legend) option.legend.data = legend;
  // x轴
  if (xAxis) {
    if (option.xAxis instanceof Array) {
      option.xAxis[0].data = xAxis[0];
      option.xAxis[1].data = xAxis[1];
    } else {
      option.xAxis.data = xAxis;
    }
  }
  // y轴
  if (yAxis) {
    if (option.yAxis instanceof Array) {
      option.yAxis[0].data = yAxis[0];
      option.yAxis[1].data = yAxis[1];
    } else {
      option.yAxis.data = yAxis;
    }
  }

  // series
  if (seriesData.length) {
    let series = [];
    seriesData.forEach((item, index) => {
      // 获取类型相等的值进行操作  过滤数组，取值模板
      let obj = option.series.filter(i => i.type === item.type);
      if (!obj.length) obj = option.series;
      // 获取名称相等的特殊例子模板
      let filterObj = obj.filter(n => n.name === item.name)
      if (filterObj.length) obj = filterObj;
      // 深拷贝对象，避免修改原对象
      let deepObj = JSON.parse(JSON.stringify(obj[0]));
      // 递归拷贝，解决formatter:function通过深拷贝后会消失
      deepObj = $.extend(true, deepObj, obj[0]);
      series.push(deepObj);
    })
    // 递归拷贝其余特殊值
    option.series = $.extend(true, series, seriesData);
  }
  // console.log(option,'filter')

  return option;
}


/**
 * config个性化设置
 *
 * */
var _config = {
  "background": 'red',
  "legend.left": 'left',
  "series.label.normal.show": true,
}

/**
 * configProperty个性化设置方法
 * @config 个性化属性对象
 * @option 要修改的option模板
 * */
function configProperty(config, option) {
  for (var key in config) {
    let value = config[key];
    let property = key.split('.');
    let obj = {};
    // 递归生成一个对象
    obj = recursive(obj, property, value);
    // 将series和多y轴的，封装成数组对象
    obj = transition(obj);
    // 递归拷贝赋值
    option = $.extend(true, option, obj);
  }
  // console.log(option)
  return option;
}


/**
 * 递归赋值属性
 **/
function recursive(obj, property, value) {
  if (property.length) {
    //  key键值
    let key = property[0];
    //最后值为数值
    if (property.length === 1) obj[key] = value;
    else obj[key] = {};
    property.shift();
    recursive(obj[key], property, value);
  }
  return obj;
}


/**
 * 将对象变为数组yAxis,series
 **/
function transition(obj) {
  let {yAxis1, yAxis2} = obj;
  if (yAxis1) {
    obj.yAxis = [yAxis1];
    delete obj.yAxis1;
  }
  if (yAxis2) {
    obj.yAxis = [{}, yAxis2];
    delete obj.yAxis2;
  }

  //series的数组的配置  区obj里面的键值
  Object.keys(obj).forEach(item => {
    if (item.indexOf('series') !== -1) {
      var numString = item.slice(6);
      if (numString) {  //截取不为空时
        let seriesList = [];
        for (var i = 0; i < numString.length; i++) {
          seriesList.push({});
        }
        seriesList.push(obj[item]);   // [{},obj[item]]
        obj.series = seriesList;
        delete obj[item];
      } else {
        obj.series = [obj.series]; //默认一个series时，成立数组
      }
    }
  })

  // if (series) obj.series = [obj.series];
  return obj;
}
