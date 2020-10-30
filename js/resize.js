 // 自适应
 window.onresize = function() {
     resize(Echarts_List);

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
     dashboardFourth.resize();
     dashboardFifth.resize();

     // 气泡图
     bubblesFirst.resize();
     bubbleSecond.resize();
     // 迁徙图
     mapMigrateEchart.resize();
     // 世界迁徙图
     mapImmigrateEchart.resize();
     // 气泡地图
     mapBubbleEchart.resize();
     // 轮播地图
     mapCarouselEchart.resize();
     //大区下钻地图s
     mapRegionEchart.resize();
     // 中国下钻地图
     mapUnderEchart.resize();

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

     //关系图
     relationFirst.resize();

     //树图
     horizontalTreeEchart.resize();
     verticalTreeEchart.resize();

 }
