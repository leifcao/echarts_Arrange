//盒须图
let boxMust = [
  [850, 740, 900, 1070, 930, 850, 950, 980, 980, 880, 1000, 980, 930, 650, 760, 810, 1000, 1000, 960, 960],
  [960, 940, 960, 940, 880, 800, 850, 880, 900, 840, 830, 790, 810, 880, 880, 830, 800, 790, 760, 800],
  [880, 880, 880, 860, 720, 720, 620, 860, 970, 950, 880, 910, 850, 870, 840, 840, 850, 840, 840, 840],
  [890, 810, 810, 820, 800, 770, 760, 740, 750, 760, 910, 920, 890, 860, 880, 720, 840, 850, 850, 780],
  [890, 840, 780, 810, 760, 810, 790, 810, 820, 850, 870, 870, 810, 740, 810, 940, 950, 800, 810, 870]
];

var boxMustdata = echarts.dataTool.prepareBoxplotData(boxMust, {
  layout: 'vertical'
});


let boxMustFirstOption = {
    tooltip: {
      trigger: 'item',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '13%',
      top:'10%',
      right: '10%',
      bottom: '10%'
    },
  color:colorList,

  yAxis: {
      type: 'category',
      data: boxMustdata.axisData,
      boundaryGap: true,
      nameGap: 30,
      splitArea: {
        show: false
      },
      axisLabel: {
        formatter: 'expr {value}'
      },
      splitLine: {
        show: false
      }
    },
    xAxis: {
      type: 'value',
      name: 'km/s minus 299,000',
      splitArea: {
        show: false,
      }
    },
    series: [
      {
        name: 'boxplot',
        type: 'boxplot',
        data: boxMustdata.boxData,
        tooltip: {
          formatter: function (param) {
            return [
              'Experiment ' + param.name + ': ',
              'upper: ' + param.data[5],
              'Q3: ' + param.data[4],
              'median: ' + param.data[3],
              'Q1: ' + param.data[2],
              'lower: ' + param.data[1]
            ].join('<br/>')
          }
        }
      },
      {
        name: 'outlier',
        type: 'scatter',
        data: boxMustdata.outliers
      }
    ]
  };



var boxMustOne = document.getElementById('boxMustFirst');
var boxMustFirst = echarts.init(boxMustOne);
boxMustFirst.setOption(boxMustFirstOption);

//盒须图2
var boxMustdata2 = echarts.dataTool.prepareBoxplotData(boxMust);
let boxMustSecondOption  = {
  tooltip: {
    trigger: 'item',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid: {
    left: '13%',
    top:'12%',
    right: '10%',
    bottom: '10%'
  },
  xAxis: {
    type: 'category',
    data: boxMustdata2.axisData,
    boundaryGap: true,
    nameGap: 30,
    splitArea: {
      show: false
    },
    axisLabel: {
      formatter: 'expr {value}'
    },
    splitLine: {
      show: false
    }
  },
  color:colorList,
  yAxis: {
    type: 'value',
    name: 'km/s minus 299,000',
    nameTextStyle:{
      align:'left',
    },
    splitArea: {
      show: false
    }
  },
  series: [
    {
      name: 'boxplot',
      type: 'boxplot',
      data: boxMustdata2.boxData,
      tooltip: {
        formatter: function (param) {
          return [
            'Experiment ' + param.name + ': ',
            'upper: ' + param.data[5],
            'Q3: ' + param.data[4],
            'median: ' + param.data[3],
            'Q1: ' + param.data[2],
            'lower: ' + param.data[1]
          ].join('<br/>');
        }
      }
    },
    {
      name: 'outlier',
      type: 'scatter',
      data: boxMustdata2.outliers
    }
  ]
};

//
var boxMustTwo = document.getElementById('boxMustSecond');
var boxMustSecond = echarts.init(boxMustTwo);
boxMustSecond.setOption(boxMustSecondOption);
