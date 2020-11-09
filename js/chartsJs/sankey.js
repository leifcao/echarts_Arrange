//桑基图



let sanKeyLink = [
  {
    "source": "男",
    "target": "体育特长生",
    "value": 55
  },
  {
    "source": "男",
    "target": "艺术特长生",
    "value": 44
  },
  {
    "source": "女",
    "target": "体育特长生",
    "value": 45
  },
  {
    "source": "女",
    "target": "艺术特长生",
    "value": 56
  },
  {
    "source": "体育特长生",
    "target": "管弦乐类",
    "value": 28
  },
  {
    "source": "体育特长生",
    "target": "民乐类",
    "value": 27
  },
  {
    "source": "体育特长生",
    "target": "舞蹈类",
    "value": 23
  },
  {
    "source": "体育特长生",
    "target": "声乐类",
    "value": 22
  },
  {
    "source": "艺术特长生",
    "target": "田径",
    "value": 29
  },
  {
    "source": "艺术特长生",
    "target": "游泳",
    "value": 28
  },
  {
    "source": "艺术特长生",
    "target": "排球",
    "value": 22
  },
  {
    "source": "艺术特长生",
    "target": "击剑",
    "value": 21
  }
]

let sankeyOneData = {
  id: 'sankey',
  seriesData: [{
    name: '', type: 'sankey', data: [
      {"name": "男"}, {"name": "女",}, {"name": "体育特长生"}, {"name": "艺术特长生"},
      {"name": "管弦乐类"}, {"name": "民乐类"}, {"name": "舞蹈类"}, {"name": "声乐类"},
      {"name": "田径"}, {"name": "游泳"}, {"name": "排球"}, {"name": "击剑"},
    ], links: sanKeyLink
  }]
}


let sankeyOption = () => {
  const option = {
    tooltip: {
      trigger: 'item',
      formatter: "{b} :{c}人"
    },
    series: [{
      type: 'sankey',
      layout: 'none',
      data: [],
      links: [],
      label: {
        normal: {
          color: textColor,
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
    }]
  };
  return option;
}


let sankeyOne_data = dataFormat(sankeyOneData, 'sankey');
let sankeyEchart = new Echarts(GetOpiton(sankeyOne_data, sankeyOption()));
sankeyEchart.setOption();
