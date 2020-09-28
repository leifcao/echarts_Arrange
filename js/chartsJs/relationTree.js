var horizontalTree = document.getElementById('horizontalTree');
var horizontalTreeEchart = echarts.init(horizontalTree);


horizontalTreeEchart.showLoading();
$.get('js/treeJson/HorizontalTree.json', function (data) {
  horizontalTreeEchart.hideLoading();

  echarts.util.each(data.children, function (datum, index) {
    index % 2 === 0 && (datum.collapsed = true);
  });

  horizontalTreeEchart.setOption(horizontalTreeOption = {
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
          fontSize: 9
        },

        leaves: {
          label: {
            position: 'right',
            verticalAlign: 'middle',
            align: 'left'
          }
        },
        expandAndCollapse: true,
        animationDuration: 550,
        animationDurationUpdate: 750
      }
    ]
  });
});



var verticalTree = document.getElementById('verticalTree');
var verticalTreeEchart = echarts.init(verticalTree);


verticalTreeEchart.showLoading();
$.get('js/treeJson/VerticalTree.json', function (data) {
  verticalTreeEchart.hideLoading();

  verticalTreeEchart.setOption(option = {
    tooltip: {
      trigger: 'item',
      triggerOn: 'mousemove'
    },
    series:[
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
          fontSize: 9
        },

        leaves: {
          label: {
            position: 'bottom',
            rotate: -90,
            verticalAlign: 'middle',
            align: 'left'
          }
        },

        animationDurationUpdate: 750
      }
    ]
  });
});


