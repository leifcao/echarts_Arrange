 // 自适应
 window.onresize = function() {
     // 饼图
     pieChirtFirst.resize();
     pieChirtSecond.resize();
     pieChirtThird.resize();
     pieChirtFourth.resize();
     pieChirtFifth.resize();
     pieChirtSixth.resize();

     // 柱状图
     histogramFirst.resize();
     histogramSecond.resize();
     histogramThird.resize();
     // 条形图
     barChartFirst.resize();
     barChartSecond.resize();
     barChartThird.resize();
     barChartFourth.resize();
     // 雷达图
     radarFirst.resize();
     radarSecond.resize();
     //  radarThird.resize();
     // 漏斗图
     funnelFirst.resize();
     //  funneSecond.resize();
     // 仪表盘
     dashboardFirst.resize();
     dashboardSecond.resize();
     dashboardThird.resize();

     // 气泡图
     bubblesFirst.resize();
     bubbleSecond.resize();
     // 折线图
     lineChart.resize();
     areaLineChart.resize();
     doubleLinesChart.resize();
     lineBarChart.resize();
     // 迁徙图
     mapMigrateEchart.resize();
     mapImmigrateEchart.resize();
     mapBubbleEchart.resize();
     mapUnderEcharts.resize();

     //K线图
     k_lineFirst.resize();
     k_lineSecond.resize();
     //词云图
     wordCloud_chart.resize();

     //矩形树图
     rectTreeEchart.resize();

     //桑基图
     sankeyEchart.resize();

     //线柱混搭图表
     echartPart.resize();
     //数据图表
     datacharts.resize();
 }
