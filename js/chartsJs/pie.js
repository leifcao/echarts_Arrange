/**
 * 饼图类
 * @opt 图表的option
 * @fn  图表的点击方法
 **/
class PieEchart extends Echarts {
  constructor(opt, fn) {
    super(opt, fn);
    this.defaultPie = {}
    // 渲染图表
    this.setOption();
  }

  // 配置属性
  handleConfig(config) {
    console.log(this.option);
    console.log(config);
  }

  handleData() {

  }
}

// 饼图option模板 {普通饼图，环形饼图 ,玫瑰饼图}
let pieChartOption = () => {
  const option = {
    tooltip: {
      trigger: 'item',
      formatter: '{b} : {c} ({d}%)',
    },
    legend: {
      left: 'center',
      data: [],
    },
    series: [{
      name: '',
      type: 'pie',
      radius: '55%',
      center: ['50%', '50%'],
      data: [],
      label: {
        normal: {
          formatter: '{b} : {d}%'
        }
      },
      animationType: 'scale',
      animationEasing: 'elasticOut',
      animationDelay: function (idx) {
        return Math.random() * 2000;
      }
    }],
  };
  return option;
}

// 饼图
let pieChartOneData = {
  id:'pieChartFirst',
  legend: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
  seriesData: [{
    name: '访问来源', type: 'pie', data: [{value: 335, name: '直接访问',},
      {value: 310, name: '邮件营销'},
      {value: 135, name: '联盟广告'},
      {value: 800, name: '视频广告'},
      {value: 238, name: '搜索引擎'}]
  }]
}

// 环形饼图data
let pieChartTwoData = {
  id:'pieChartSecond',
  legend: ['华为', '中兴', '爱立信', '索尼', '联想', '小米'],
  seriesData: [{
    name: '环形饼图', type: 'pie',  data: [{value: 10, name: '华为',},
      {value: 15, name: '中兴'},
      {value: 25, name: '索尼'},
      {value: 10, name: '联想'},
      {value: 25, name: '小米'}]
  }]
}

// 玫瑰饼图data
let pieChartThreeData = {
  id:'pieChartThird',
  legend: ['北京', '广州', '上海', '南京', '深圳', '海外', '长沙'],
  seriesData: [{
    name: '城市', type: 'pie',  data: [{value: 10, name: '南京'},
      {value: 5, name: '海外'},
      {value: 15, name: '广州'},
      {value: 25, name: '上海'},
      {value: 20, name: '北京'},
      {value: 35, name: '深圳'},
      {value: 30, name: '长沙'},]
  }]
}

// 嵌套饼图数据  name为必须值
let pieChartFiveData = {
  id:'pieChartFifth',
  legend: ['直达', '营销广告', '搜索引擎'],
  seriesData: [{
    name: '', type: 'pie', data: [
      {value: 335, name: '直达',},
      {value: 679, name: '营销广告',},
      {value: 1548, name: '搜索引擎',},
    ],
  }, {
    name: '', type: 'pie', data: [
      {value: 335, name: '直达', type: '直达',},
      {value: 310, name: '营销广告', type: '视频广告',},
      {value: 234, name: '营销广告', type: '联盟广告',},
      {value: 135, name: '营销广告', type: '邮件营销',},
      {value: 1048, name: '搜索引擎', type: '百度',},
      {value: 251, name: '搜索引擎', type: '谷歌',},
      {value: 147, name: '搜索引擎', type: '必应',}
    ]
  }]
}

// 展示环形图固定数据 = 跑道
let pieChartSixData = {
  id:'pieChartSixth',
  legend: ["其他", "资源加工工业", "轻纺工业", "机械电子制造业"],
  seriesData: [{  // radius可去掉
    name: '机械电子制造业', type: 'pie', radius: ['75%', '85%'],
    data: [{value: 300, name: '机械电子制造业'},
      {value: 50, name: '',}]
  }, {
    name: '轻纺工业', type: 'pie', radius: ['60%', '70%'],
    data: [{value: 250, name: '轻纺工业'},
      {value: 50, name: '',}]
  }, {
    name: '资源加工工业', type: 'pie', radius: ['45%', '55%'],
    data: [{value: 160, name: '资源加工工业'},
      {value: 50, name: '',}]
  }, {
    name: '其他', type: 'pie', radius: ['30%', '40%'],
    data: [{value: 120, name: '其他'},
      {value: 50, name: '',}]
  },]
}

// 饼图
let pieChartFirst = new PieEchart(GetOpiton(pieChartOneData, pieChartOption()))
// 环形饼图
let pieTwoData = dataFormat(pieChartTwoData,'annular');
let pieChartSecond = new PieEchart(GetOpiton(pieTwoData, pieChartOption()));
// 玫瑰饼图
let pieThreeData = dataFormat(pieChartThreeData,'rose');
let pieChartThird = new PieEchart(GetOpiton(pieThreeData, pieChartOption()));
// 环形跑道图
let pieSixData = dataFormat(pieChartSixData,'runway');
let pieChartSixth = new PieEchart(GetOpiton(pieSixData, pieChartOption()))
// 嵌套饼图
let pieFiveData = dataFormat(pieChartFiveData, 'nestPie');
let nestPieOption = GetOpiton(pieFiveData, pieChartOption());
setSeriesColor(nestPieOption.series[1].data);
let pieChartFifth = new PieEchart(nestPieOption);

//轮播饼图
let pieFourData = dataFormat(pieChartTwoData,'annular');
pieFourData.id = 'pieChartFourth';
let pieChartFourOption = GetOpiton(pieFourData, pieChartOption());
let pieChartFourth = new PieEchart(pieChartFourOption);
let currentIndex = -1;
let pieChartFlag = setInterval(function () {
  var dataLen = pieChartFourOption.series[0].data.length;
  // 取消之前高亮的图形
  pieChartFourth.chart.dispatchAction({
    type: 'downplay',
    seriesIndex: 0,
    dataIndex: currentIndex
  });
  currentIndex = (currentIndex + 1) % dataLen;
  // 高亮当前图形
  pieChartFourth.chart.dispatchAction({
    type: 'highlight',
    seriesIndex: 0,
    dataIndex: currentIndex
  });
  // 显示 tooltip
  pieChartFourth.chart.dispatchAction({
    type: 'showTip',
    seriesIndex: 0,
    dataIndex: currentIndex
  });
}, 1000);




/**
 * 以下数据为测试数据
 * */

let test_option = pieChartOption();

configProperty(_config,test_option);
