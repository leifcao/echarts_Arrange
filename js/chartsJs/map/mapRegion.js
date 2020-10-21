var mapRegionEchart;

// 封装函数在mapUnder.js 文件中
$.getJSON('data/100000.json', function (geoJson) {
  echarts.registerMap('中国', geoJson);
  mapRegionEchart = echarts.extendsMap('mapRegion', {
    bgColor: mapBackground, // 画布背景色
    mapName: '中国', // 地图名
    goDown: true, // 是否下钻
    // 下钻回调
    geoJson: geoJson,
    callback: function (name, option, instance) {
      //console.log(name, option, instance);
    },
  });

})
