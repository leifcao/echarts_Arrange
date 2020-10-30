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
  let num = 55, len = seriesData.length,t =Math.floor(num / len);
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
    item.itemStyle = {normal: {label: {show: true, position: 'inside'}}};
    item.data[1].itemStyle = {normal: {color: 'rgba(0,0,0,0)'}};
  })
  return data;
}



