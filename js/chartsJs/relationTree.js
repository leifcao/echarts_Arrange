// 关系树图-垂直
let horizontalTreeOption = (data, id) => {
  echarts.util.each(data.children, function (datum, index) {
    index % 2 === 0 && (datum.collapsed = true);
  });
  const option = {
    id: id,
    tooltip: {
      trigger: 'item',
      triggerOn: 'mousemove'
    },
    series: [
      {
        type: 'tree',
        data: [data],
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
  horizontalTreeEchart = new Echarts(horizontalTreeOption(data, 'horizontalTree'));
  horizontalTreeEchart.setOption();
});

// 关系树图-水平
let hverticalTreeOption = (data, id) => {
  const option = {
    id:id,
    tooltip: {
      trigger: 'item',
      triggerOn: 'mousemove'
    },
    series: [
      {
        type: 'tree',
        data: [data],
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
$.get('js/treeJson/HorizontalTree.json', (data) => {
  verticalTreeEchart = new Echarts(hverticalTreeOption(data, 'verticalTree'));
  verticalTreeEchart.setOption();
});



/*
verticalTreeEchart.showLoading();
  verticalTreeEchart.hideLoading();*/



