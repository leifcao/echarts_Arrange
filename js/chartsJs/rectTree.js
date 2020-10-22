// 矩形树图



let RICH = {
  name: {
    color: '#fdfa3e',
    fontSize: 14,
    lineHeight: 16
  },
  basic: {
    color: '#fff',
    fontSize: 12,
    lineHeight: 12
  }
};

/**
 * 数据源
 * */
var info2 = {
  'children': [
    {
      'asset_num': 50000,
      'name': '互联网/计算机',
      'manage': '平均价格',
      'children': [
        {
          'name': '电子商务',
          'asset_num': 20,
          'manage': 'liang-01',
        }, {
          'name': '网站管理',
          'asset_num': 20,
          'manage': 'liang-01',
        }, {
          'name': '信息管理',
          'asset_num': 20,
          'manage': 'liang-02',
        }
      ],

    },
    {
      'asset_num': 45000,
      'name': '通信/电子',
      'manage': '平均价格',
      'children': [
        {
          'name': '通信技术',
          'asset_num': 60,
          'manage': 'liang-01',
        },
        {
          'name': '通信产品',
          'asset_num': 80,
          'manage': 'liang-01',
        },
        {
          'name': '电信运营商',
          'manage': 'liang-02',
          'asset_num': 100,
          'children': [
            {
              'name': '中国移动',
              'asset_num': 20,
              'manage': 'liang-01',
            },
            {
              'name': '中国电信',
              'asset_num': 20,
              'manage': 'liang-01',
            },
            {
              'name': '中国联通',
              'asset_num': 20,
              'manage': 'liang-01',
            }
          ],

        }
      ],

    },
    {
      'asset_num': 35000,
      'name': '房地产/建筑',
      'manage': '平均价格',
      'children': [
        {
          'name': '建筑设计',
          'asset_num': 20,
          'manage': 'liang-01',
        },
        {
          'name': '房地产销售',
          'asset_num': 20,
          'manage': 'liang-01',
        },
        {
          'name': '房地产顾问',
          'manage': 'liang-02',
          'asset_num': 20,
        }
      ],

    },
    {
      'asset_num': 30000,
      'name': '专业服务/教育',
      'manage': '平均价格',
      'children': [
        {
          'name': '学校教师',
          'asset_num': 20,
          'manage': 'liang-01',
        },
        {
          'name': '机构教师',
          'asset_num': 20,
          'manage': 'liang-01',
        },
        {
          'name': '技能教师',
          'manage': 'liang-02',
          'children': [
            {
              'name': '钢琴',
              'asset_num': 10,
              'manage': 'liang-01',
            },
            {
              'name': '舞蹈',
              'asset_num': 20,
              'manage': 'liang-01',
            }
          ],

        }
      ],

    },
    {
      'asset_num': 25000,
      'name': '制药/医疗',
      'manage': '平均价格',
      'children': [
        {
          'name': '中药材',
          'asset_num': 20,
          'manage': 'liang-01',
        },
        {
          'name': '医疗器械',
          'asset_num': 20,
          'manage': 'liang-01',
        },
        {
          'name': '化学原料药及制剂',
          'manage': 'liang-02',
          'asset_num': 20,
        }
      ],
    },
    {
      'asset_num': 35000,
      'name': '政府',
      'manage': '平均价格',
      'children': [
        {
          'name': '教育局',
          'asset_num': 20,
          'manage': 'liang-01',
        },
        {
          'name': '财政局',
          'asset_num': 20,
          'manage': 'liang-01',
        },
        {
          'name': '公安部',
          'manage': 'liang-02',
          'children': [
            {
              'name': '民警',
              'asset_num': 10,
              'manage': 'liang-01',
            },
            {
              'name': '网警',
              'asset_num': 20,
              'manage': 'liang-01',
            },
            {
              'name': '交警',
              'asset_num': 20,
              'manage': 'liang-01',
            }
          ],

        }
      ],

    },
    {
      'asset_num': 10000,
      'name': '其他',
      'manage': '平均价格',
      'children': [
        {
          'name': 'QC',
          'asset_num': 20,
          'manage': 'liang-01',
        },
        {
          'name': 'QE',
          'asset_num': 20,
          'manage': 'liang-01',
        },
        {
          'name': 'QA',
          'manage': 'liang-02',
          'children': [
            {
              'name': '三级-1',
              'asset_num': 10,
              'manage': 'liang-01',
            },
            {
              'name': '三级-2',
              'asset_num': 20,
              'manage': 'liang-01',
            }
          ],

        }
      ],

    },
  ]
};
var structs_datas = [];

function format_struct_data(children, structs_datas) {
  // 添加每个单位的颜色
  for (var prop in children) {
    var index = Math.floor(Math.random() * 20);
    var value = 1;
    if (children[prop].asset_num !== 0) {
      value = children[prop].asset_num;
    }
    var tmp = {
      name: children[prop].name,
      manage: children[prop].manage,
      children: [],
      asset_num: children[prop].asset_num,
      value: value
    }
    format_struct_data(children[prop].children, tmp.children);
    if (tmp.children.length === 0) {
      delete tmp.children;
    }
    structs_datas.push(tmp);
    // return structs_datas;
  }

}

format_struct_data(info2.children, structs_datas);
let rectTreeOption =  {
  title: {
    text: '',
    subtext: '',
    left: 'leafDepth'
  },
  grid: {
    left: '0%',
    top:'0%',
    right: '0%',
    bottom: '0%',
    containLabel: true
  },
  tooltip: {
    formatter: function(info) {
      var asset_num = info.data.asset_num;
      var name = info.name;
      return [
        '<h4>' + name + '</h4>',
        '<div>占比：' + asset_num + '</div>',
      ].join('\n');
    },
  },

  color:colorList,
  series: [{
    name: '行业汇总',
    type: 'treemap',
    visibleMin: 300,
    data: structs_datas,
    leafDepth: 1,
    label: {
      normal: {
        show: true,
        position: 'insideTopLeft',
        formatter: function(a) {
          return '{name|' + a.name + '}' + "\n\n" + "{basic|占比 : " + a.data.asset_num  + '人}';
        },
        textStyle: {
          fontSize: '13',
          fontWeight: 'bold'
        },
        rich: RICH,

      },
    },
    levels: [{
      itemStyle: {
        normal: {
          borderWidth: 0,
          gapWidth: 1,
          borderColor:mapBorder
        }
      }
    }, {
      itemStyle: {
        normal: {
          gapWidth: 1,
          borderColor:'#fff'
        }
      }
    }],
    breadcrumb: {
      show: true,
      // "height": 22,
      left: "5%",
      top: "0%",
      emptyItemWidth: 25,
      itemStyle: {
        normal: {
          color: "#fff",
          borderColor: "rgba(13,25,33,0)",
          borderWidth: 1,
          shadowColor: "rgba(150,150,150,0)",
          shadowBlur: 3,
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          textStyle: {
            color: "#000",
            fontWeight: 'bold'
          }
        },
        emphasis: {
          textStyle: {}
        }
      }
    },
  }]

}

var rectTree = document.getElementById('rectTree');
var rectTreeEchart = echarts.init(rectTree);

rectTreeEchart.setOption(rectTreeOption);
