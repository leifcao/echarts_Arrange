 // 自适应
 window.onresize = function() {
     resize(Echarts_List);
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


     //树图
     horizontalTreeEchart.resize();
     verticalTreeEchart.resize();

 }
