// 关系树图-垂直
let horizontalTreeOption = (data, id) => {
  echarts.util.each(data.children, function (datum, index) {
    index % 2 === 0 && (datum.collapsed = true);
  });
  const option = {
    id: '',
    tooltip: {
      trigger: 'item',
      triggerOn: 'mousemove'
    },
    series: [
      {
        type: 'tree',
        data: [],
        top: '1%',
        left: '7%',
        bottom: '1%',
        right: '20%',
        symbolSize: 7,
        label: {
          position: 'left',
          verticalAlign: 'middle',
          align: 'right',
          fontSize: 9,
          color: textColor,
        },
        itemStyle: {
          borderColor: colorList[0]
        },

        leaves: {
          label: {
            position: 'right',
            verticalAlign: 'middle',
            align: 'left'
          },
          itemStyle: {
            borderColor: colorList[0]
          },
        },
        expandAndCollapse: true,
        animationDuration: 550,
        animationDurationUpdate: 750
      }
    ]
  };
  return option;
}

let horizontalTreeEchart;
$.get('js/treeJson/HorizontalTree.json', (data) => {
  let datas = {
    id:'horizontalTree',
    seriesData:[{data:[data]}],
  }
  // horizontalTreeEchart = new Echarts(horizontalTreeOption(data, 'horizontalTree'));
  horizontalTreeEchart = new Echarts(GetOpiton(datas,horizontalTreeOption(data)));

  horizontalTreeEchart.setOption();
});

// 关系树图-水平
let verticalTreeOption = () => {
  const option = {
    id:'',
    tooltip: {
      trigger: 'item',
      triggerOn: 'mousemove'
    },
    series: [
      {
        type: 'tree',
        data: [],
        left: '2%',
        right: '2%',
        top: '15%',
        bottom: '25%',

        symbol: 'emptyCircle',

        orient: 'vertical',

        expandAndCollapse: true,

        label: {
          position: 'top',
          rotate: 0,
          verticalAlign: 'middle',
          align: 'center',
          fontSize: 9,
          color: textColor,
        },
        itemStyle: {
          borderColor: colorList[0]
        },

        leaves: {
          label: {
            position: 'bottom',
            rotate: -90,
            verticalAlign: 'middle',
            align: 'left'
          },
          itemStyle: {
            borderColor: colorList[0]
          }
        },

        animationDurationUpdate: 750
      }
    ]
  };
  return option;
}
let verticalTreeEchart;
$.get('js/treeJson/HorizontalTree.json', (data) => {
  let datas = {
    id:'verticalTree',
    seriesData:[{data:[data]}],
  }
  // verticalTreeEchart = new Echarts(verticalTreeOption(data, 'verticalTree'));
  verticalTreeEchart = new Echarts(GetOpiton(datas,verticalTreeOption()));
  verticalTreeEchart.setOption();
  verticalTreeEchart.showOption()
});


/*
verticalTreeEchart.showLoading();
  verticalTreeEchart.hideLoading();*/



