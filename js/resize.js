 // 图表自适应
 window.onresize = function() {
     resize(Echarts_List);
     //大区下钻地图
     mapRegionEchart.resize();
     // 中国下钻地图
     mapUnderEchart.resize();
 }