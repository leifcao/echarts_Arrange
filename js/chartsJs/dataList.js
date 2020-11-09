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
dataList['pie'] = (data) => {
  return data;
}

// 环形饼图data模板
dataList['annular'] = (data) => {
  const {legend, seriesData} = data;
  let series = [];
  seriesData.forEach((item, index) => {
    item.radius = ['40%', '55%'];
  })
  return data
}

// 玫瑰饼图data模板
dataList['rose'] = (data) => {
  const {legend, seriesData} = data;
  let series = [];
  seriesData.forEach((item, index) => {
    item.radius = ['20%', '65%'];
    item.roseType = 'area';
  })
  return data;
}

// 嵌套饼图data模板
dataList['nestPie'] = (data) => {
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

// 跑道图
dataList['runway'] = (data) => {
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

// 条形图
dataList['bar'] = (data) => {
  return data;
}

//条形堆积图
dataList['barStack'] = (data) => {
  const {legend, yAxis, seriesData} = data;
  seriesData.forEach((item, index) => {
    // 字体文本位置
    item.label = {normal: {position: 'insideRight'}}
    item.stack = '总量';
  })
  return data;

}

// 正负条形图
dataList['barPlusMinus'] = (data) => {
  const {legend, yAxis, seriesData} = data;
  seriesData.forEach((item, index) => {
    item.stack = '总量';
    item.label = {normal: {position: 'inside'}}
  })
  return data;
}

// 条形图1
dataList['bar1'] = (data) => {
  const {legend, yAxis, seriesData, config} = data;
  seriesData.forEach((item, index) => {
    // 柱子颜色
    item.itemStyle = {
      normal: {
        color: (data) => {
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

//胶囊条形图
dataList['capsule'] = (data) => {
  return data;
}

// 温度条形图
dataList['temperature'] = (data) => {
  return data;
}

//柱状图
dataList['columnar'] = (data) => {
  return data;
}

//柱状堆积图
dataList['columnarStack'] = (data) => {
  const {seriesData} = data;
  seriesData.forEach(item => {
    // 字体文本位置
    item.label = {normal: {position: 'inside'}};
    item.stack = '总量';
  })
  return data;
}

// 3d柱状图通用属性
dataList['columnar3d_common'] = (data) => {
  const {seriesData} = data;
  let _seriesData = [];
  seriesData.forEach((item, index) => {
    let labelTop = {"normal": {"show": false}};
    let symbolSize = [20, 10];
    // 构建3d柱状图数据 --- 共有属性
    _seriesData.push(
      {
        name: item.name,
        type: "pictorialBar",
        data: item.data,
        symbol: item.symbol,
        symbolSize: symbolSize,
        symbolOffset: [0, -5],
        symbolPosition: "end",
        label: labelTop,
        tooltip: {show: false}
      },
      {
        name: item.name,
        type: "pictorialBar",
        data: item.data,
        symbol: item.symbol,
        symbolSize: symbolSize,
        symbolOffset: [0, 5],
        label: labelTop,
        tooltip: {show: false}
      },
    )
  })

  data.seriesData = seriesData.concat(_seriesData);
  // console.log(data.seriesData)
  return data;
}

// 3d柱状图
dataList['columnar3d'] = (data) => {
  // 调用公用的3d属性
  data = dataList['columnar3d_common'](data);
  const {seriesData} = data;
  let itemStyle = {"normal": {"opacity": 0.7, "barBorderRadius": 0,}};
  // 构建3d柱状图数据
  data.seriesData.push(
    {"name": seriesData[0].name, "type": "bar", "barWidth": "20", "data": seriesData[0].data, "itemStyle": itemStyle}
  );
  // 移除初始传入数据
  data.seriesData.shift();
  return data;
}

//3d柱状图 - 波纹ripple
dataList['columnar3d_ripple'] = (data) => {
  // 调用公用的3d属性
  data = dataList['columnar3d_common'](data);
  const {seriesData} = data;
  // 圆形大小
  let symbolSize = [20, 10];
  let itemStyle = {"normal": {"opacity": 0.7, "barBorderRadius": 0,}};

  // 构建3d柱状图数据
  data.seriesData.push(
    {
      name: seriesData[0].name,
      type: "bar",
      barWidth: "20",
      data: seriesData[0].data,
      itemStyle: itemStyle,
      markLine: {
        silent: true,
        symbol: "none",
        data: [{
          name: "目标值",
          yAxis: seriesData[0].target,
          lineStyle: {
            color: "#ffc832"
          },
          label: {
            position: "end",
            distance: -60,
            formatter: "{b}：{c}"
          }
        }]
      }
    },
    {
      type: 'effectScatter',
      silent: true,
      tooltip: {show: false},
      zlevel: 3,
      symbol: seriesData[0].symbol,
      symbolSize: symbolSize,
      showEffectOn: 'render',
      rippleEffect: {
        brushType: 'stroke',
        color: '#3cefff',
        scale: 3
      },
      itemStyle: {
        color: '#3cefff'
      },
      hoverAnimation: true,
      data: seriesData[0].data.map(item => 0), // 根据数据匹配相应个数波纹
    },
  )
  // 移除初始传入数据
  data.seriesData.shift();
  return data;
}

//3d柱状图 - 阴影shadow
dataList['columnar3d_shadow'] = (data) => {
  // 调用公用的3d属性
  data = dataList['columnar3d_common'](data);
  const {seriesData} = data;
  // 圆形大小
  let symbolSize = [20, 10];
  // 数据的item颜色
  let itemStyle_data = {normal: {opacity: 0.7, barBorderRadius: 0,}};
  // 阴影柱子的item颜色
  let itemStyle_shadow = {normal: {opacity: 0.7, barBorderRadius: 0, color: colorList[1]}};
  let label = {normal: {show: false}};

  // 构建3d柱状图数据
  data.seriesData.push(
    {
      data: seriesData[0].data.map(item => seriesData[0].max), //设置最大值的柱形阴影
      type: "bar",
      // barMaxWidth: "auto",
      barWidth: 20,
      barGap: "-100%",
      itemStyle: itemStyle_shadow,
      zlevel: -1,
      label: label,
      tooltip:{show:false}
    },
    {
      data: seriesData[0].data.map(item => seriesData[0].max), //设置最大值的柱形圆形阴影
      type: "pictorialBar",
      symbolPosition: "end",
      symbol: seriesData[0].symbol,
      symbolOffset: [0, -5],
      itemStyle: itemStyle_shadow,
      symbolSize: symbolSize,
      label: label,
      zlevel: -1,
      tooltip:{show:false}
    },
    {
      name: seriesData[0].name,
      type: "bar",
      barWidth: "20",
      data: seriesData[0].data,
      itemStyle: itemStyle_data,
    },)
  // 移除初始传入数据
  data.seriesData.shift();
  return data;
}

// 折线图
dataList['line'] = (data) => {
  return data;
}

//区域折线图
dataList['areaLine'] = (data) => {
  const {seriesData} = data;
  seriesData.forEach(item => {
    // 区域颜色配置
    item.areaStyle = {};
  })
  return data;
}

// 双Y折线图
dataList['doubleLine'] = (data) => {
  const {seriesData} = data;
  seriesData.forEach((item, index) => {
    // 对应两个y轴
    item.yAxisIndex = 10 % 2 === index ? 0 : 1;
  })
  return data;
}

//线柱混搭
dataList['lineBar'] = (data) => {
  return data;
}

//水环图
dataList['liquid'] = (data) => {
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

//仪表盘2
dataList['dashboard2'] = (data) => {
  //config为配置属性
  const {seriesData, config} = data;
  // 设置仪表盘文字的显示
  let defalut = {
    "title.text": seriesData[0].data[0].value + '%',
    "title.subtext": seriesData[0].data[0].name,
  }
  data.config = config ? $.extend(defalut, config) : defalut;
  return data;
}

//雷达图
dataList['radar'] = (data) => {
  //radar为雷达图的范围，config为配置属性
  const {seriesData, radar, config} = data;
  seriesData.forEach((item, index) => {
    item.itemStyle = {color: colorList[index], borderColor: textColor, borderWidth: 1};
    item.lineStyle = {color: colorList[index], width: 3};
  });
  let defalut = {
    "radar.indicator": radar,
  }
  data.config = config ? $.extend(defalut, config) : defalut;
  return data;
}

//数据图表
dataList['dataChart'] = (data) => {
  const {legend, seriesData, config} = data;
  // 数据图表 title显示内容
  let title_str = '';
  legend.forEach(item => title_str += `\n${item}`);

  // 计算graphic 线条数组
  let len = legend.length;
  let lineList = getTableLine(len + 1);

  // 默认属性配置
  let defalut = {
    // x轴的文本显示方法
    "xAxis.axisLabel.formatter": (value, index) => {
      let datas = seriesData;
      let str = '{table|' + value + '}';
      // 数据遍历，添加相应的数值,x轴文本数据填充
      datas.forEach((item, i) => {
        str += '\n{table|' + item.data[index] + '}'
      })
      return str;
    },
    "grid.bottom": lineList[0].bottom + 25,
    "title.text": title_str, // title设置
    "graphic": lineList,  // 配置graphic 线条数组
    "xAxis.axisTick.length": 21 * (len + 1),  //计算tick长度
  }
  data.config = config ? $.extend(defalut, config) : defalut;
  return data;
}

//桑基图
dataList['sankey'] = (data) => {
  const {seriesData} = data;
  seriesData[0].data.forEach((item, i) => {
    item.itemStyle = {color: color = i <= 4 ? colorList[i] : colorList[i % 5]};
  })

  return data;
}

//关系图
dataList['relation'] = (data) => {
  const {seriesData} = data;
  // 数组长度
  // let len = seriesData[0].categories;
  let len = colorList.length;
  seriesData[0].categories.forEach((item, index) => {
    let color = index < len ? colorList[index] : colorList[index % 2];
    item.itemStyle = {normal: {color: color}};
  })
  return data;
}
