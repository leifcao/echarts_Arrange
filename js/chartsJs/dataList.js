/**
 * 数据格式化，获取后台数据封装
 * */
function dataFormat(data, type) {
  if (type) {
    let newData = dataList[type](data);
    // console.log(newData)
    return newData
  }
}

/**
 * Echart图表data格式化
 * */
var dataList = new Object();

// 饼图data模板
dataList['饼图'] = function pieDefault_data(data) {
  return data;
}

// 环形饼图data模板
dataList['环形图'] = function pieDefault_data(data) {
  const {legend, seriesData} = data;
  let series = [];
  seriesData.forEach((item, index) => {
    item.radius = ['40%', '55%'];
  })
  return data
}
// 玫瑰饼图data模板
dataList['玫瑰图'] = function pieDefault_data(data) {
  const {legend, seriesData} = data;
  let series = [];
  seriesData.forEach((item, index) => {
    item.radius = ['20%', '65%'];
    item.roseType = 'area';
  })
  return data;
}

// 嵌套饼图data模板
dataList['嵌套饼图'] = function pieNest_data(data) {
  /**
   * seriesData的长度确定段数
   * @num 默认外圈数值
   * @len 数组长度
   * @t 段数
   * */
  const {legend, seriesData} = data;
  let num = 55, len = seriesData.length, t = Math.floor(num / len);
  seriesData.forEach((item, index) => {
    let obj = {normal: {position: 'inner'}}
    item.label = index === 0 ? {normal: {position: 'inner'}} : {normal: {show: true}};
    // 计算外圆的半径 默认内圆半径30
    item.radius = index === 0 ? [0, '30%'] : [`${num - t + 10}%`, `${num}%`]
    if (index !== 0) num = num - t + 5;
  })
  return data
}

dataList['跑道图'] = function annular_data(data) {
  /**
   * seriesData的长度确定段数
   * @num 默认外圈数值
   * @len 数组长度
   * @t 段数
   * */
  const {legend, seriesData} = data;
  let num = 90, len = seriesData.length, t = Math.floor(num / len);
  seriesData.forEach((item, index) => {
    let radius = [`${num - t}%`, `${num}%`];
    num = num - t - 5;
    // 环半径
    item.radius = item.radius ? item.radius : radius;
    // 字体文本位置
    item.itemStyle = {normal: {label: {show: true, position: 'inside'}}};
    // 剩余部分颜色透明
    item.data[1].itemStyle = {normal: {color: 'rgba(0,0,0,0)'}};
  })
  return data;
}

dataList['条形图'] = function barChart(data) {
  return data;
}
dataList['条形堆积图'] = function barChart(data) {
  const {legend, yAxis, seriesData} = data;
  seriesData.forEach((item, index) => {
    // 字体文本位置
    item.label = {normal: {position: 'insideRight'}}
    item.stack = '总量';
  })
  return data;

}

dataList['正负条形图'] = function barChart(data) {
  const {legend, yAxis, seriesData} = data;
  seriesData.forEach((item, index) => {
    item.stack = '总量';
    item.label = {normal: {position: 'inside'}}
  })
  return data;
}

dataList['条形图1'] = function barChart(data) {
  const {legend, yAxis, seriesData, config} = data;
  seriesData.forEach((item, index) => {
    // 柱子颜色
    item.itemStyle = {
      normal: {
        color: function (data) {
          return colorList[data.dataIndex];
        }
      }
    }
  });
  // 设置条形图1的配置
  let defalut = {
    "xAxis.axisLabel.show": false,
    "xAxis.axisTick.show": false,
    "yAxis.axisTick.show": false,
  }
  data.config = config ? $.extend(defalut, config) : defalut;
  return data;
}

dataList['条形图2'] = function barChart(data) {
  return data;
}
dataList['条形图3'] = function barChart(data) {
  return data;
}

dataList['柱状图'] = function barChart(data) {
  return data;
}

dataList['堆积柱图'] = function barChart(data) {
  const {seriesData} = data;
  seriesData.forEach(item => {
    // 字体文本位置
    item.label = {normal: {position: 'inside'}};
    item.stack = '总量';
  })
  return data;
}

dataList['折线图'] = function barChart(data) {
  return data;
}

dataList['区域折线图'] = function barChart(data) {
  const {seriesData} = data;
  seriesData.forEach(item => {
    // 区域颜色配置
    item.areaStyle = {};
  })
  return data;
}

dataList['双折线图'] = function barChart(data) {
  const {seriesData} = data;
  seriesData.forEach((item, index) => {
    // 对应两个y轴
    item.yAxisIndex = 10 % 2 === index ? 0 : 1;
  })
  return data;
}


dataList['线柱混搭'] = function barChart(data) {
  return data;
}

dataList['水环图'] = function barChart(data) {
  const {seriesData} = data;
  seriesData.forEach((item, index) => {
    // 水环图data属性单独设置
    if (index === 1)
      item.data[0].itemStyle = {normal: {color: '#10B9FF'}}
    if (index === 2) {
      item.data[0].itemStyle = {normal: {color: '#10B9FF'}}
      item.data[1].itemStyle = {normal: {color: 'transparent'}}
    }
  })
  // console.log(data)
  return data;
}

// 仪表盘
dataList['仪表盘2'] = function barChart(data) {
  const {seriesData,config} = data;
  // 设置仪表盘文字的显示
  let defalut = {
    "title.text":seriesData[0].data[0].value+'%',
    "title.subtext":seriesData[0].data[0].name,
  }
  data.config = config ? $.extend(defalut, config) : defalut;
  return data;
}



