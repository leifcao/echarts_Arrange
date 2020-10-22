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


/**
 * 地图区块颜色设置
 * mapBackground  地图背景
 * mapTheme_item  地图区块色
 * mapText  地图文本颜色
 * mapBorder  地图边界
 * mapArea  区块颜色数组
 * mapEmphasis_label  地图鼠标悬浮文字颜色
 * mapEmphasis_area  地图鼠标悬浮区块颜色
 * */
let mapBackground = '#efefef';
let map_label = '#ffffff';
let mapBorder = '#ffffff';
let mapTheme_item = '#50b9ff';
let mapArea = ['#d7efff','#a7dcff','#7ccaff','#50b9ff','#24a7ff',];
let mapEmphasis_label = '#234EA5';
let mapEmphasis_area = '#E5F39B';

/**
 * 图表的默认配置设置
 * defalutOption 默认option
 * */

let defalutOption = {
    backgroundColor: '',  // 背景色
    tooltip:{},   // 提示框组件
    legend:{
        textStyle:{
            color:textColor,
            fontSize:12,
        },
        itemWidth:15,
        itemHeight:10,
        data:[],
    },
    series:[],
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
