/*柱状图模板Option
* @{柱状图, 多柱图 ,堆积柱图, 阶梯瀑布图}
* */
let histogramOption = () => {
  const option = {
    legend: {
      data: [],
    },
    grid: {
      left: '2%',
      right: '4%',
      bottom: '2%',
      top: '10%',
    },
    xAxis: {
      type: 'category',
      data: [],
      splitLine: {
        show: false,
      },
    },
    yAxis: {
      name: '', //单位：万元
      type: 'value',
      splitLine: {
        lineStyle: {
          opacity: 0.4
        }
      },
      axisTick: {
        show: false
      },
    },
    series: [{
      name: '',
      type: 'bar',
      barWidth: '15',
      label: {
        normal: {
          show: true,
          position: 'top',
        }
      },
      itemStyle: {
        normal: {
          color: '',
          barBorderRadius: 12,
        },
      },
      data: [],
      animationDelay: function (idx) {
        return idx * 600;
      }
    }]
  };
  return option;
}

// ----柱状图数据----------
let histogramOneData = {
  id: 'histogramFirst',
  xAxis: ['制造业', '建筑业', '农林牧渔', '房地产', '金融业'],
  seriesData: [{name: '2019', type: 'bar', data: [3000, 2600, 1300, 1300, 1250]}]
}

// ------多系列柱图数据------------
let histogramTwoData = {
  id: 'histogramSecond',
  legend: ['健康度', '可用度'],
  xAxis: ['22:18', '22:23', '22:25', '22:28', '22:30', '22:33', '22:35'],
  seriesData: [{name: '健康度', type: 'bar', data: [20, 25, 40, 55, 65, 70, 80]},
    {name: '可用度', type: 'bar', data: [18, 20, 35, 40, 55, 65, 72]}]
}

// ------堆积柱图数据------------
var histogramThreeData = {
  id: 'histogramThird',
  legend: ['智能环空设备', '智能饲喂器', '智能摄像头'],
  xAxis: ['一期', '二期', '三期', '四期'],
  seriesData: [
    {name: '智能环空设备', type: 'bar', data: [520, 502, 601, 534]},
    {name: '智能饲喂器', type: 'bar', data: [520, 602, 701, 434]},
    {name: '智能摄像头', type: 'bar', data: [601, 402, 501, 500]},
  ]
}

// 阶梯瀑布图
let hisogramFourData = {
  id: 'histogramFourth',
  legend: ['支出', '收入'],
  xAxis: ["11月1日", "11月2日", "11月3日", "11月4日", "11月5日", "11月6日", "11月7日", "11月8日"],
  seriesData: [
    {name: '辅助', type: 'bar', data: [0, 900, 1245, 1530, 1376, 1376, 1511, 1856]},
    {name: '收入', type: 'bar', data: [900, 345, 393, '', '', 500, 400, '',]},
    {name: '支出', type: 'bar', data: ['', '', '', 300, 400, '', '', 550,]},
  ]
}


//3d柱状图 - 阴影shadow
var histogramEightData = {
  id: 'histogramEighth',
  xAxis: ['数据结构', '高等数学', '线性代数', 'Java课程', '3dMax'],
  seriesData: [{name: '在线情况', type: 'bar', data: [400, 300, 200, 350, 250], symbol: "circle", max: 500}]
}

//3d柱状图 - 方形阴影
var histogramTenData = {
  id: 'histogramTenth',
  xAxis: ['立春', '春分', '立夏', '夏至'],
  seriesData: [{name: '在线情况', type: 'bar', data: [200, 250, 150, 120], symbol: "diamond", max: 300}]
}


// 柱状图
var histogramOne_data = dataFormat(histogramOneData,'columnar');
var histogramFirst = new BarEchart(GetOpiton(histogramOne_data, histogramOption()));
// histogramFirst.showOption()

// 多柱图
var histogramSecond = new BarEchart(GetOpiton(histogramTwoData, histogramOption()));
// 堆积柱图
var histogramThree_data = dataFormat(histogramThreeData, 'columnarStack')
var histogramThird = new BarEchart(GetOpiton(histogramThree_data, histogramOption()));
// 阶梯瀑布图
var hisogramFour_data = dataFormat(hisogramFourData, 'columnarLadder');
var histogramFourth = new BarEchart(GetOpiton(hisogramFour_data, histogramOption()));

//3d柱状图 - 阴影shadow
let histogramEight_data = dataFormat(histogramEightData, 'columnar3d_shadow')
let histogramEighth = new BarEchart(GetOpiton(histogramEight_data, histogramOption()));
// histogramEighth.showOption()

//3d柱状图 - 方形阴影
let histogramTenth_data = dataFormat(histogramTenData, 'columnar3d_shadow')
let histogramTenth = new BarEchart(GetOpiton(histogramTenth_data, histogramOption()));