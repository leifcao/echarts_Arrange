// 全局颜色修改
// 文本颜色
const textColor = '#6f6f6f';
// 图形颜色设置
const colorList = ['#5a6cec', '#168efe', '#2cd1c0', '#ffa06c', '#fedb65', '#8882f7', '#73DDFF'];
// const colorList = ["#9E87FF", '#73DDFF', '#fe9a8b', '#F56948', '#ffa06c', '#168efe', '#5a6cec']

// 动态设置series的颜色
function setSeriesColor(list) {
    // 颜色设置
    list.forEach((item, index) => {
        item.itemStyle.normal.color = colorList[index] ? colorList[index] : '#fefefe';
    });
}


//动态设置渐变色
function setLinearGradient(list, key) {
    // 颜色设置
    list.forEach((item, index) => {
        // item.lineStyle.color = colorList[index] ? colorList[index] : '#fefefe';
        item[key].color = colorList[index] ? new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: colorList[index]
            },
            {
                offset: 1,
                color: colorList[index + 1] ? colorList[index + 1] : '#fefefe',
            }
        ]) : '#fefefe';
    })
}


//echarts legend改变
// myChart.on('legendselectchanged', function(params) {});