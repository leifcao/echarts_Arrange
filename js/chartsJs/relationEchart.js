/**
 * 关系图
 * @opt 图表的option
 * @fn  图表的点击方法
 **/
class relationEchart extends Echarts {
  constructor(opt, fn) {
    super(opt, fn);
    this.setOption();
  }
}


let relationOneLink = [{
  source: 0,
  target: 1,
  category: 0,
  value: '朋友'
}, {
  source: 0,
  target: 2,
  value: '战友'
}, {
  source: 0,
  target: 3,
  value: '房东'
}, {
  source: 0,
  target: 4,
  value: '朋友'
}, {
  source: 1,
  target: 2,
  value: '表亲'
}, {
  source: 0,
  target: 5,
  value: '朋友'
}, {
  source: 4,
  target: 5,
  value: '姑姑'
}, {
  source: 2,
  target: 8,
  value: '叔叔'
}, {
  source: 0,
  target: 12,
  value: '朋友'
}, {
  source: 6,
  target: 11,
  value: '爱人'
}, {
  source: 6,
  target: 3,
  value: '朋友'
}, {
  source: 7,
  target: 5,
  value: '朋友'
}, {
  source: 9,
  target: 10,
  value: '朋友'
}, {
  source: 3,
  target: 10,
  value: '朋友'
}, {
  source: 2,
  target: 11,
  value: '同学'
}];
// 关系图数据
let relationOneData = {
  id: 'relationFirst',
  seriesData: [{
    type: 'graph', name: '徐贱云', data: [{name: '徐贱云', draggable: true,}, {
      name: '冯可梁',
      category: 1,
      draggable: true,
    }, {
      name: '邓志荣',
      category: 1,
      draggable: true,
    }, {
      name: '李荣庆',
      category: 1,
      draggable: true,
    }, {
      name: '郑志勇',
      category: 1,
      draggable: true,
    }, {
      name: '赵英杰',
      category: 1,
      draggable: true,
    }, {
      name: '王承军',
      category: 1,
      draggable: true,
    }, {
      name: '陈卫东',
      category: 1,
      draggable: true,
    }, {
      name: '邹劲松',
      category: 1,
      draggable: true,
    }, {
      name: '陈现忠',
      category: 1,
      draggable: true,
    }, {
      name: '陶泳',
      category: 1,
      draggable: true,
    }, {
      name: '王德福',
      category: 1,
      draggable: true,
    }], links: relationOneLink,categories:[{name: '朋友'},{name: '亲戚'},{name: '战友'}]
  }]
}

//关系图Option 模板
let relationOneOption = () => {
  const option = {
    color: colorList,
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    label: {
      normal: {
        show: true,
        textStyle: {
          fontSize: 12
        },
      }
    },
    series: [
      {
        name: '',
        type: 'graph',
        layout: 'force',
        symbolSize: 35,
        focusNodeAdjacency: true,
        roam: true,
        categories: [],
        label: {
          normal: {
            show: true,
            textStyle: {
              fontSize: 10
            },
          }
        },
        force: {
          repulsion: 400
        },
        edgeSymbolSize: [4, 50],
        edgeLabel: {
          normal: {
            show: true,
            textStyle: {
              fontSize: 10
            },
            formatter: "{c}"
          }
        },
        data: [],
        links: [],
        lineStyle: {
          normal: {
            opacity: 0.9,
            width: 1,
            curveness: 0
          }
        }
      }
    ]
  };
  return option;
}

//关系图1
let relationOne_data = dataFormat(relationOneData,'relation')
let relationFirst = new relationEchart(GetOpiton(relationOne_data, relationOneOption()));
// relationFirst.showOption();