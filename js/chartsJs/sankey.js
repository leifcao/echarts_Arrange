var sankey = document.getElementById('sankey');
var sankeyEchart = echarts.init(sankey);



let data_name = ['男', '女', '体育特长生', '艺术特长生', '管弦乐类', '民乐类', '舞蹈类', '声乐类', '田径', '游泳', '排球', '击剑'];
let linkssource = ['男', '男', '女', '女', '体育特长生', '体育特长生', '体育特长生', '体育特长生', '艺术特长生', '艺术特长生', '艺术特长生', '艺术特长生']
let linkstarget = ['体育特长生', '艺术特长生', '体育特长生', '艺术特长生', '管弦乐类', '民乐类', '舞蹈类', '声乐类', '田径', '游泳', '排球', '击剑']
let linkvalue = [55, 44, 45, 56, 28, 27, 23, 22, 29, 28, 22, 21]


let sankeyColor = [];
for (var i = 0; i < data_name.length; i++) {
  if (i <= 4) {
    sankeyColor[i] = colorList[i]
  } else {
    sankeyColor[i] = colorList[i % 5]
  }
}

var sankeyData = [];
for (var i = 0; i < data_name.length; i++) {
  sankeyData.push({
    name: data_name[i],
    itemStyle: {
      color: sankeyColor[i]
    }
  })
}
var links = [];
for (var i = 0; i < linkssource.length; i++) {
  links.push({
    source: linkssource[i],
    target: linkstarget[i],
    value: linkvalue[i],
  })
}
let sankeyOption = {
  tooltip: {
    trigger: 'item',
    formatter: "{b} :{c}人"

  },
  series: {
    type: 'sankey',
    layout: 'none',
    data: sankeyData,
    links: links,
    label: {
      normal: {
        color: "#656565",
        fontSize: 14,
      }
    },
    itemStyle: {
      borderWidth: 0,
    },
    lineStyle: {
      color: 'source',
      opacity: 0.25
    }

  }
};

sankeyEchart.setOption(sankeyOption);
